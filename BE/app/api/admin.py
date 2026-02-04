from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db

router = APIRouter()

@router.get("/health")
def admin_health(db: Session = Depends(get_db)):
    return {"message": "Admin API working"}
