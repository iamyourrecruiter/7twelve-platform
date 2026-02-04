from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime, JSON
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class Candidate(Base):
    __tablename__ = "candidates"
    
    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False, unique=True, index=True)
    phone = Column(String(20), nullable=False)
    phone_code = Column(String(10), nullable=False)
    age = Column(Integer, nullable=False)
    gender = Column(String(20))
    
    # Location
    country = Column(String(100), nullable=False)
    state = Column(String(100), nullable=False)
    city = Column(String(100), nullable=False)
    
    # Professional Details
    qualification = Column(String(100), nullable=False)
    stream = Column(String(100), nullable=False)
    experience = Column(String(50), nullable=False)
    current_role = Column(String(255))
    skills = Column(JSON)  # Array of skills
    
    # Resume
    resume_path = Column(String(500))
    resume_url = Column(String(500))
    
    # Job Preferences
    job_type = Column(String(50))
    salary_expectation = Column(String(100))
    notice_period = Column(String(50))
    summary = Column(Text)
    
    # Status & Tracking
    status = Column(String(50), default='pending')  # pending, approved, rejected, contacted
    admin_notes = Column(Text)
    
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)