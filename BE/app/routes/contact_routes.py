from fastapi import APIRouter, Depends, HTTPException, Form
from sqlalchemy.orm import Session
from typing import List
from app.database import get_db
from app.schemas import contact_schemas
from app.services import contact_service

router = APIRouter(prefix="/api/contact", tags=["contact"])

# ==================== PUBLIC ENDPOINTS ====================

@router.post("/", response_model=contact_schemas.ContactResponse)
def submit_contact_message(
    name: str = Form(...),
    email: str = Form(...),
    subject: str = Form(...),
    message: str = Form(...),
    db: Session = Depends(get_db)
):
    """Submit contact form message"""
    
    contact_data = contact_schemas.ContactCreate(
        name=name,
        email=email,
        subject=subject,
        message=message
    )
    
    return contact_service.create_contact(db, contact_data)


# ==================== ADMIN ENDPOINTS ====================

@router.get("/", response_model=List[contact_schemas.Contact])
def admin_get_all_contacts(
    skip: int = 0,
    limit: int = 50,
    status: str = None,
    db: Session = Depends(get_db)
):
    """Admin: Get all contact messages"""
    return contact_service.get_all_contacts(db, skip=skip, limit=limit, status=status)

@router.get("/{contact_id}", response_model=contact_schemas.Contact)
def admin_get_contact(contact_id: int, db: Session = Depends(get_db)):
    """Admin: Get specific contact message"""
    contact = contact_service.get_contact_by_id(db, contact_id)
    if not contact:
        raise HTTPException(status_code=404, detail="Contact message not found")
    return contact

@router.put("/{contact_id}/status", response_model=contact_schemas.Contact)
def admin_update_contact_status(
    contact_id: int,
    status: str = Form(...),
    notes: str = Form(None),
    db: Session = Depends(get_db)
):
    """Admin: Update contact message status (new, read, replied, closed)"""
    updated = contact_service.update_contact_status(db, contact_id, status, notes)
    if not updated:
        raise HTTPException(status_code=404, detail="Contact message not found")
    return updated

@router.delete("/{contact_id}")
def admin_delete_contact(contact_id: int, db: Session = Depends(get_db)):
    """Admin: Delete contact message"""
    success = contact_service.delete_contact(db, contact_id)
    if not success:
        raise HTTPException(status_code=404, detail="Contact message not found")
    return {"message": "Contact message deleted successfully"}