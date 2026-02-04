from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime

class CandidateBase(BaseModel):
    full_name: str
    email: EmailStr
    phone: str
    phone_code: str
    age: int
    gender: Optional[str] = None
    country: str
    state: str
    city: str
    qualification: str
    stream: str
    experience: str
    current_role: Optional[str] = None
    skills: Optional[List[str]] = []
    job_type: Optional[str] = None
    salary_expectation: Optional[str] = None
    notice_period: Optional[str] = None
    summary: Optional[str] = None

class CandidateCreate(CandidateBase):
    pass

class Candidate(CandidateBase):
    id: int
    resume_url: Optional[str] = None
    status: str
    admin_notes: Optional[str] = None
    created_at: datetime
    
    class Config:
        from_attributes = True

class CandidateResponse(BaseModel):
    message: str
    candidate_id: int