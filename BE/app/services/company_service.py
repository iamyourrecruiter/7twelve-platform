from sqlalchemy.orm import Session
from app.models.company_model import Company
from app.schemas.company_schemas import CompanyCreate

def create_company(db: Session, company: CompanyCreate):
    db_company = Company(**company.dict())
    db.add(db_company)
    db.commit()
    db.refresh(db_company)
    return {"message": "Company details submitted successfully", "company_id": db_company.id}

def get_company_by_id(db: Session, company_id: int):
    return db.query(Company).filter(Company.id == company_id).first()

def get_all_companies(db: Session, skip: int = 0, limit: int = 50, status: str = None):
    query = db.query(Company)
    if status:
        query = query.filter(Company.status == status)
    return query.offset(skip).limit(limit).all()

def update_company_status(db: Session, company_id: int, status: str, notes: str = None):
    company = get_company_by_id(db, company_id)
    if not company:
        return None
    company.status = status
    if notes:
        company.admin_notes = notes
    db.commit()
    db.refresh(company)
    return company

def approve_company(db: Session, company_id: int):
    return update_company_status(db, company_id, 'approved')

def delete_company(db: Session, company_id: int):
    company = get_company_by_id(db, company_id)
    if not company:
        return False
    db.delete(company)
    db.commit()
    return True