from fastapi import APIRouter, Depends, HTTPException, Form
from sqlalchemy.orm import Session
from typing import List, Optional
from app.database import get_db
from app.schemas import company_schemas
from app.services import company_service
import json

router = APIRouter(prefix="/api/companies", tags=["companies"])

# ==================== PUBLIC ENDPOINTS ====================

@router.post("/", response_model=company_schemas.CompanyResponse)
def submit_company_details(
    company_name: str = Form(...),
    email: str = Form(...),
    phone: str = Form(...),
    phone_code: str = Form(...),
    website: str = Form(...),
    country: str = Form(...),
    state: str = Form(...),
    city: str = Form(...),
    company_type: str = Form(...),
    company_size: str = Form(...),
    services: str = Form(...),  # JSON string
    roles: str = Form(None),
    positions: int = Form(None),
    experience_level: str = Form(None),
    timeline: str = Form(None),
    branding_objective: str = Form(None),
    platforms: str = Form(None),
    budget: str = Form(None),
    contact_person: str = Form(...),
    designation: str = Form(...),
    message: str = Form(None),
    db: Session = Depends(get_db)
):
    """Submit company registration details"""
    
    # Parse services JSON
    services_list = json.loads(services) if services else []
    
    company_data = company_schemas.CompanyCreate(
        company_name=company_name,
        email=email,
        phone=phone,
        phone_code=phone_code,
        website=website,
        country=country,
        state=state,
        city=city,
        company_type=company_type,
        company_size=company_size,
        services=services_list,
        roles=roles,
        positions=positions,
        experience_level=experience_level,
        timeline=timeline,
        branding_objective=branding_objective,
        platforms=platforms,
        budget=budget,
        contact_person=contact_person,
        designation=designation,
        message=message
    )
    
    return company_service.create_company(db, company_data)

@router.get("/{company_id}", response_model=company_schemas.Company)
def get_company(company_id: int, db: Session = Depends(get_db)):
    """Get company details by ID"""
    company = company_service.get_company_by_id(db, company_id)
    if not company:
        raise HTTPException(status_code=404, detail="Company not found")
    return company


# ==================== ADMIN ENDPOINTS ====================

@router.get("/", response_model=List[company_schemas.Company])
def admin_get_all_companies(
    skip: int = 0,
    limit: int = 50,
    status: Optional[str] = None,
    db: Session = Depends(get_db)
):
    """Admin: Get all companies with filters"""
    return company_service.get_all_companies(db, skip=skip, limit=limit, status=status)

@router.put("/{company_id}/status", response_model=company_schemas.Company)
def admin_update_company_status(
    company_id: int,
    status: str = Form(...),
    notes: str = Form(None),
    db: Session = Depends(get_db)
):
    """Admin: Update company status (pending, approved, rejected, contacted)"""
    updated = company_service.update_company_status(db, company_id, status, notes)
    if not updated:
        raise HTTPException(status_code=404, detail="Company not found")
    return updated

@router.put("/{company_id}/approve", response_model=company_schemas.Company)
def admin_approve_company(company_id: int, db: Session = Depends(get_db)):
    """Admin: Approve company registration"""
    approved = company_service.approve_company(db, company_id)
    if not approved:
        raise HTTPException(status_code=404, detail="Company not found")
    return approved

@router.delete("/{company_id}")
def admin_delete_company(company_id: int, db: Session = Depends(get_db)):
    """Admin: Delete company"""
    success = company_service.delete_company(db, company_id)
    if not success:
        raise HTTPException(status_code=404, detail="Company not found")
    return {"message": "Company deleted successfully"}