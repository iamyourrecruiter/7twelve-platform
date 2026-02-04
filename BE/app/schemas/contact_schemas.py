from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class ContactBase(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

class ContactCreate(ContactBase):
    pass

class Contact(ContactBase):
    id: int
    status: str
    admin_notes: Optional[str] = None
    created_at: datetime
    
    class Config:
        from_attributes = True

class ContactResponse(BaseModel):
    message: str
    contact_id: int