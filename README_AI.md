# Local AI Features Setup

This project includes lightweight AI-powered features using Hugging Face Inference API (free tier). Follow these steps to run locally.

## Backend

1. Create and activate your Python venv, install requirements:

```powershell
cd BE
py -3.11 -m venv .venv
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip setuptools wheel
python -m pip install -r requirements.txt
```

2. (Optional but recommended) Create a Hugging Face API token and set it as an environment variable:

- Sign up at https://huggingface.co/ and create an access token (Settings → Access Tokens).
- Set the variable in PowerShell:

```powershell
$env:HUGGINGFACE_API_KEY = "hf_...your_token..."
```

3. Run backend:

```powershell
cd BE
.\.venv\Scripts\Activate.ps1
uvicorn app.main:app --reload --host 127.0.0.1 --port 8001
```

Endpoints:
- `POST /api/ai/resume/build` (JSON)
- `POST /api/ai/resume/build-file` (multipart file)
- `POST /api/ai/resume/analyze` (JSON)
- `POST /api/ai/resume/analyze-file` (multipart file)
- `POST /api/ai/salary/calc` (JSON)
- `GET  /api/ai/jobs` (Remotive integration)


## Frontend

1. Install dependencies and start dev server:

```bash
cd FE
npm install
npm run dev
```

2. Routes added:
- `/ai/resume-builder`
- `/ai/resume-analyzer`
- `/ai/salary`
- `/ai/jobs`

## Notes
- Hugging Face free tier has rate limits; for heavier usage consider a paid plan or caching.
- PDF/DOCX uploads are parsed locally using `pdfminer.six` and `python-docx`.
- For production, secure your HF key and consider server-side rate limiting and caching.
