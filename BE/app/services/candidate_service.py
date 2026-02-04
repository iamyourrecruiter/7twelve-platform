from sqlalchemy.orm import Session
from app.models.candidate_model import Candidate
from app.schemas.candidate_schemas import CandidateCreate

def create_candidate(db: Session, candidate: CandidateCreate, resume_path: str):
    resume_url = f"/uploads/resumes/{os.path.basename(resume_path)}"
    
    db_candidate = Candidate(
        **candidate.dict(),
        resume_path=resume_path,
        resume_url=resume_url
    )
    db.add(db_candidate)
    db.commit()
    db.refresh(db_candidate)
    return {"message": "Profile submitted successfully", "candidate_id": db_candidate.id}

def get_candidate_by_id(db: Session, candidate_id: int):
    return db.query(Candidate).filter(Candidate.id == candidate_id).first()

def get_all_candidates(db: Session, skip: int = 0, limit: int = 50, status: str = None):
    query = db.query(Candidate)
    if status:
        query = query.filter(Candidate.status == status)
    return query.offset(skip).limit(limit).all()

def update_candidate_status(db: Session, candidate_id: int, status: str, notes: str = None):
    candidate = get_candidate_by_id(db, candidate_id)
    if not candidate:
        return None
    candidate.status = status
    if notes:
        candidate.admin_notes = notes
    db.commit()
    db.refresh(candidate)
    return candidate

def delete_candidate(db: Session, candidate_id: int):
    candidate = get_candidate_by_id(db, candidate_id)
    if not candidate:
        return False
    db.delete(candidate)
    db.commit()
    return True