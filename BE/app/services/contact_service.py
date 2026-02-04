from sqlalchemy.orm import Session
from app.models.contact_model import Contact
from app.schemas.contact_schemas import ContactCreate

def create_contact(db: Session, contact: ContactCreate):
    db_contact = Contact(**contact.dict())
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)
    return {"message": "Message sent successfully", "contact_id": db_contact.id}

def get_contact_by_id(db: Session, contact_id: int):
    return db.query(Contact).filter(Contact.id == contact_id).first()

def get_all_contacts(db: Session, skip: int = 0, limit: int = 50, status: str = None):
    query = db.query(Contact)
    if status:
        query = query.filter(Contact.status == status)
    return query.order_by(Contact.created_at.desc()).offset(skip).limit(limit).all()

def update_contact_status(db: Session, contact_id: int, status: str, notes: str = None):
    contact = get_contact_by_id(db, contact_id)
    if not contact:
        return None
    contact.status = status
    if notes:
        contact.admin_notes = notes
    db.commit()
    db.refresh(contact)
    return contact

def delete_contact(db: Session, contact_id: int):
    contact = get_contact_by_id(db, contact_id)
    if not contact:
        return False
    db.delete(contact)
    db.commit()
    return True