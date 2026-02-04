from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, Form
from sqlalchemy.orm import Session
from typing import List, Optional
from app.database import get_db
from app.schemas import candidate_schemas
from app.services import candidate_service
import shutil
import os
from datetime import datetime

router = APIRouter(prefix="/api/candidates", tags=["candidates"])

# ==================== PUBLIC ENDPOINTS ====================

@router.post("/", response_model=candidate_schemas.CandidateResponse)
async def submit_candidate_profile(
    full_name: str = Form(...),
    email: str = Form(...),
    phone: str = Form(...),
    phone_code: str = Form(...),
    age: int = Form(...),
    gender: str = Form(None),
    country: str = Form(...),
    state: str = Form(...),
    city: str = Form(...),
    qualification: str = Form(...),
    stream: str = Form(...),
    experience: str = Form(...),
    current_role: str = Form(None),
    skills: str = Form(...),  # JSON string
    job_type: str = Form(None),
    salary: str = Form(None),
    notice_period: str = Form(None),
    summary: str = Form(None),
    resume: UploadFile = File(...),
    db: Session = Depends(get_db)
):
    """Submit candidate profile with resume"""
    
    # Handle resume upload
    upload_dir = "uploads/resumes"
    os.makedirs(upload_dir, exist_ok=True)
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = f"{timestamp}_{resume.filename}"
    file_path = os.path.join(upload_dir, filename)
    
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(resume.file, buffer)
    
    # Parse skills JSON
    import json
    skills_list = json.loads(skills) if skills else []
    
    # Create candidate data
    candidate_data = candidate_schemas.CandidateCreate(
        full_name=full_name,
        email=email,
        phone=phone,
        phone_code=phone_code,
        age=age,
        gender=gender,
        country=country,
        state=state,
        city=city,
        qualification=qualification,
        stream=stream,
        experience=experience,
        current_role=current_role,
        skills=skills_list,
        job_type=job_type,
        salary_expectation=salary,
        notice_period=notice_period,
        summary=summary
    )
    
    return candidate_service.create_candidate(db, candidate_data, file_path)

@router.get("/{candidate_id}", response_model=candidate_schemas.Candidate)
def get_candidate(candidate_id: int, db: Session = Depends(get_db)):
    """Get candidate details by ID"""
    candidate = candidate_service.get_candidate_by_id(db, candidate_id)
    if not candidate:
        raise HTTPException(status_code=404, detail="Candidate not found")
    return candidate


# ==================== ADMIN ENDPOINTS ====================

@router.get("/", response_model=List[candidate_schemas.Candidate])
def admin_get_all_candidates(
    skip: int = 0,
    limit: int = 50,
    status: Optional[str] = None,
    db: Session = Depends(get_db)
):
    """Admin: Get all candidates with filters"""
    return candidate_service.get_all_candidates(db, skip=skip, limit=limit, status=status)

@router.put("/{candidate_id}/status", response_model=candidate_schemas.Candidate)
def admin_update_candidate_status(
    candidate_id: int,
    status: str = Form(...),
    notes: str = Form(None),
    db: Session = Depends(get_db)
):
    """Admin: Update candidate status (pending, approved, rejected, contacted)"""
    updated = candidate_service.update_candidate_status(db, candidate_id, status, notes)
    if not updated:
        raise HTTPException(status_code=404, detail="Candidate not found")
    return updated

@router.delete("/{candidate_id}")
def admin_delete_candidate(candidate_id: int, db: Session = Depends(get_db)):
    """Admin: Delete candidate"""
    success = candidate_service.delete_candidate(db, candidate_id)
    if not success:
        raise HTTPException(status_code=404, detail="Candidate not found")
    return {"message": "Candidate deleted successfully"}

@router.get("/{candidate_id}/resume")
def admin_download_resume(candidate_id: int, db: Session = Depends(get_db)):
    """Admin: Download candidate resume"""
    candidate = candidate_service.get_candidate_by_id(db, candidate_id)
    if not candidate or not candidate.resume_path:
        raise HTTPException(status_code=404, detail="Resume not found")
    
    return {
        "url": f"/uploads/resumes/{os.path.basename(candidate.resume_path)}",
        "filename": f"{candidate.full_name}_Resume.pdf"
    }