from sqlalchemy.orm import Session
from sqlalchemy import func
from app.models.candidate_model import Candidate
from app.models.company_model import Company
from app.models.home_models import Job, Testimonial, Partner
from app.models.blog_model import Blog
import hashlib
from datetime import datetime, timedelta

def generate_admin_token(password: str):
    # Simple token generation - use JWT in production
    timestamp = datetime.utcnow().isoformat()
    token_string = f"{password}{timestamp}"
    return hashlib.sha256(token_string.encode()).hexdigest()

def verify_admin_token(token: str):
    # Simple verification - use JWT in production
    return len(token) == 64  # SHA256 hash length

def get_dashboard_stats(db: Session):
    return {
        "total_candidates": db.query(func.count(Candidate.id)).scalar(),
        "total_companies": db.query(func.count(Company.id)).scalar(),
        "total_jobs": db.query(func.count(Job.id)).scalar(),
        "total_blogs": db.query(func.count(Blog.id)).scalar(),
        "pending_candidates": db.query(func.count(Candidate.id)).filter(
            Candidate.status == 'pending'
        ).scalar(),
        "pending_companies": db.query(func.count(Company.id)).filter(
            Company.status == 'pending'
        ).scalar(),
        "active_jobs": db.query(func.count(Job.id)).filter(
            Job.is_active == True
        ).scalar(),
        "published_blogs": db.query(func.count(Blog.id)).filter(
            Blog.status == 'published'
        ).scalar(),
        "total_testimonials": db.query(func.count(Testimonial.id)).scalar(),
        "total_partners": db.query(func.count(Partner.id)).scalar()
    }

def get_recent_activity(db: Session, limit: int = 10):
    activities = []
    
    # Recent candidates
    recent_candidates = db.query(Candidate).order_by(
        Candidate.created_at.desc()
    ).limit(limit).all()
    
    for c in recent_candidates:
        activities.append({
            "type": "candidate",
            "action": "registered",
            "name": c.full_name,
            "timestamp": c.created_at
        })
    
    # Recent companies
    recent_companies = db.query(Company).order_by(
        Company.created_at.desc()
    ).limit(limit).all()
    
    for c in recent_companies:
        activities.append({
            "type": "company",
            "action": "registered",
            "name": c.company_name,
            "timestamp": c.created_at
        })
    
    # Sort by timestamp and limit
    activities.sort(key=lambda x: x['timestamp'], reverse=True)
    return activities[:limit]