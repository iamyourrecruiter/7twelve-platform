from pydantic import BaseModel, EmailStr, HttpUrl
from typing import Optional, List
from datetime import datetime

class CompanyBase(BaseModel):
    company_name: str
    email: EmailStr
    phone: str
    phone_code: str
    website: str
    country: str
    state: str
    city: str
    company_type: str
    company_size: str
    services: List[str]
    roles: Optional[str] = None
    positions: Optional[int] = None
    experience_level: Optional[str] = None
    timeline: Optional[str] = None
    branding_objective: Optional[str] = None
    platforms: Optional[str] = None
    budget: Optional[str] = None
    contact_person: str
    designation: str
    message: Optional[str] = None

class CompanyCreate(CompanyBase):
    pass

class Company(CompanyBase):
    id: int
    status: str
    admin_notes: Optional[str] = None
    created_at: datetime
    
    class Config:
        from_attributes = True

class CompanyResponse(BaseModel):
    message: str
    company_id: int