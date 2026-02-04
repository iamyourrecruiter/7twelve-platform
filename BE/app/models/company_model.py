from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime, JSON
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class Company(Base):
    __tablename__ = "companies"
    
    id = Column(Integer, primary_key=True, index=True)
    company_name = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False, unique=True, index=True)
    phone = Column(String(20), nullable=False)
    phone_code = Column(String(10), nullable=False)
    website = Column(String(500), nullable=False)
    
    # Location
    country = Column(String(100), nullable=False)
    state = Column(String(100), nullable=False)
    city = Column(String(100), nullable=False)
    
    # Company Profile
    company_type = Column(String(50), nullable=False)  # Startup, SME, Enterprise, Agency
    company_size = Column(String(50), nullable=False)  # 1-10, 11-50, etc.
    services = Column(JSON)  # Array of services interested in
    
    # Recruitment Details (conditional)
    roles = Column(String(500))
    positions = Column(Integer)
    experience_level = Column(String(100))
    timeline = Column(String(100))
    
    # Branding Details (conditional)
    branding_objective = Column(String(500))
    platforms = Column(String(500))
    budget = Column(String(100))
    
    # Contact Person
    contact_person = Column(String(255), nullable=False)
    designation = Column(String(255), nullable=False)
    
    # Additional
    message = Column(Text)
    
    # Status & Tracking
    status = Column(String(50), default='pending')  # pending, approved, rejected, contacted
    admin_notes = Column(Text)
    
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)