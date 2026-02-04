from fastapi import APIRouter, HTTPException, UploadFile, File
from pydantic import BaseModel
import os
import httpx
import tempfile
from pdfminer.high_level import extract_text as extract_pdf_text
import docx

router = APIRouter()

HUGGINGFACE_API = os.environ.get("HUGGINGFACE_API_KEY")
HF_BASE = "https://api-inference.huggingface.co/models"


def call_hf_model(model: str, payload: dict):
    url = f"{HF_BASE}/{model}"
    headers = {"Content-Type": "application/json"}
    if HUGGINGFACE_API:
        headers["Authorization"] = f"Bearer {HUGGINGFACE_API}"

    resp = httpx.post(url, headers=headers, json=payload, timeout=30.0)
    if resp.status_code == 200:
        return resp.json()
    else:
        raise HTTPException(status_code=502, detail={"hf_status": resp.status_code, "detail": resp.text})


def extract_text_from_file(upload: UploadFile) -> str:
    # Handle pdf and docx; fall back to reading text
    suffix = os.path.splitext(upload.filename or '')[1].lower()
    with tempfile.NamedTemporaryFile(delete=False, suffix=suffix) as tmp:
        tmp.write(upload.file.read())
        tmp_path = tmp.name

    try:
        if suffix == '.pdf':
            text = extract_pdf_text(tmp_path)
        elif suffix in ['.docx', '.doc']:
            doc = docx.Document(tmp_path)
            text = '\n'.join(p.text for p in doc.paragraphs)
        else:
            with open(tmp_path, 'r', encoding='utf-8', errors='ignore') as f:
                text = f.read()
    finally:
        try:
            os.unlink(tmp_path)
        except Exception:
            pass
    return text


class ResumeBuildRequest(BaseModel):
    name: str
    title: str
    experience: str | None = None
    skills: list[str] | None = None
    education: str | None = None
    summary: str | None = None


@router.post("/resume/build")
def build_resume(payload: ResumeBuildRequest):
    prompt = (
        "Create a professional resume in plain text using the information below. "
        "Include a concise summary, experience bullets, skills section, and education.\n\n"
    )
    prompt += f"Name: {payload.name}\nTitle: {payload.title}\n"
    if payload.summary:
        prompt += f"Summary: {payload.summary}\n"
    if payload.experience:
        prompt += f"Experience: {payload.experience}\n"
    if payload.skills:
        prompt += f"Skills: {', '.join(payload.skills)}\n"
    if payload.education:
        prompt += f"Education: {payload.education}\n"

    model = "google/flan-t5-small"
    data = {"inputs": prompt, "parameters": {"max_new_tokens": 400}}
    result = call_hf_model(model, data)
    text = ""
    if isinstance(result, list):
        text = result[0].get("generated_text") or result[0].get("summary_text") or str(result)
    else:
        text = str(result)

    return {"resume": text}


@router.post("/resume/build-file")
def build_resume_file(file: UploadFile = File(...), name: str | None = None, title: str | None = None):
    text = extract_text_from_file(file)
    # use extracted text as experience; build using provided name/title
    req = ResumeBuildRequest(
        name=name or 'Candidate',
        title=title or 'Professional',
        experience=text,
        skills=[],
        education=''
    )
    return build_resume(req)


class ResumeAnalyzeRequest(BaseModel):
    text: str
    target_role: str | None = None


@router.post("/resume/analyze")
def analyze_resume(payload: ResumeAnalyzeRequest):
    prompt = "Analyze the following resume and return strengths, weaknesses, suggested improvements, and suggested ATS keywords. Resume:\n"
    prompt += payload.text
    if payload.target_role:
        prompt += f"\nTarget role: {payload.target_role}"

    model = "google/flan-t5-small"
    data = {"inputs": prompt, "parameters": {"max_new_tokens": 300}}
    result = call_hf_model(model, data)
    text = ""
    if isinstance(result, list):
        text = result[0].get("generated_text") or str(result)
    else:
        text = str(result)

    return {"analysis": text}


@router.post("/resume/analyze-file")
def analyze_resume_file(file: UploadFile = File(...), target_role: str | None = None):
    text = extract_text_from_file(file)
    return analyze_resume(ResumeAnalyzeRequest(text=text, target_role=target_role))


class SalaryRequest(BaseModel):
    title: str
    location: str | None = None
    years_experience: float | None = 0


@router.post("/salary/calc")
def salary_calc(payload: SalaryRequest):
    base_map = {
        "software engineer": 90000,
        "data scientist": 95000,
        "product manager": 100000,
        "designer": 70000,
        "devops": 95000,
    }
    key = payload.title.lower()
    base = None
    for k in base_map:
        if k in key:
            base = base_map[k]
            break
    if base is None:
        base = 60000

    years = payload.years_experience or 0
    estimated = int(base * (1 + 0.05 * min(years, 20)))
    return {"estimated_salary_usd": estimated, "note": "Approximate estimate — for better results connect to live salary datasets."}


@router.get("/jobs")
def jobs_list(industry: str | None = None, search: str | None = None, limit: int = 20):
    url = "https://remotive.com/api/remote-jobs"
    params = {}
    if search:
        params["search"] = search
    try:
        resp = httpx.get(url, params=params, timeout=15.0)
        data = resp.json()
        jobs = data.get("jobs", [])
        if industry:
            jobs = [j for j in jobs if industry.lower() in (j.get("category", "")).lower()]
        return {"jobs": jobs[:limit]}
    except Exception as e:
        raise HTTPException(status_code=502, detail=str(e))
