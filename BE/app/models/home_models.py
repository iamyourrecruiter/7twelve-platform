from sqlalchemy import Column, Integer, String, Text, Boolean, DECIMAL, DateTime, JSON
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class Job(Base):
    __tablename__ = "jobs"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    company = Column(String(255), nullable=False)
    location = Column(String(100), nullable=False)
    job_type = Column(String(50), nullable=False)  # Full-time, Part-time, etc.
    experience = Column(String(50), nullable=False)
    salary_min = Column(DECIMAL(10, 2))
    salary_max = Column(DECIMAL(10, 2))
    salary_display = Column(String(100))  # e.g., "₹15-25 LPA"
    description = Column(Text)
    requirements = Column(Text)
    responsibilities = Column(Text)
    jd_file_path = Column(String(500))  # Path to JD PDF
    jd_file_url = Column(String(500))   # URL to download JD
    is_featured = Column(Boolean, default=False)
    is_active = Column(Boolean, default=True)
    tags = Column(JSON)  # Array of tags/skills
    posted_date = Column(DateTime, default=datetime.utcnow)
    expires_date = Column(DateTime)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)


class Testimonial(Base):
    __tablename__ = "testimonials"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    role = Column(String(255), nullable=False)
    company = Column(String(255), nullable=False)
    image_url = Column(String(500))  # Profile image URL
    image_emoji = Column(String(10))  # Emoji fallback
    testimonial_text = Column(Text, nullable=False)
    rating = Column(Integer, default=5)  # 1-5 stars
    position = Column(Integer, default=0)  # Display order
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)


class AdCard(Base):
    __tablename__ = "ad_cards"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    description = Column(Text)
    image_url = Column(String(500))
    image_filename = Column(String(255))
    background_gradient = Column(String(100))  # Tailwind gradient classes
    link_type = Column(String(20), nullable=False)  # 'whatsapp' or 'website'
    link_url = Column(String(500), nullable=False)
    position = Column(Integer, default=0)  # Display order (1-5)
    is_active = Column(Boolean, default=True)
    click_count = Column(Integer, default=0)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)


class HeroAd(Base):
    __tablename__ = "hero_ads"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    description = Column(Text)
    image_url = Column(String(500))
    image_filename = Column(String(255))
    background_gradient = Column(String(100))  # Tailwind gradient classes
    link_url = Column(String(500), nullable=False)
    position = Column(Integer, nullable=False)  # 1-4 for the 4 cards
    is_active = Column(Boolean, default=True)
    click_count = Column(Integer, default=0)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)


class Partner(Base):
    __tablename__ = "partners"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    logo_url = Column(String(500))
    logo_filename = Column(String(255))
    website_url = Column(String(500))
    position = Column(Integer, default=0)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)


class SiteSettings(Base):
    __tablename__ = "site_settings"
    
    id = Column(Integer, primary_key=True, index=True)
    setting_key = Column(String(100), unique=True, nullable=False)
    setting_value = Column(Text)
    setting_type = Column(String(50))  # 'text', 'url', 'json', 'number'
    description = Column(Text)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Example settings:
    # topmate_url - URL for "Speak to Mentor" button
    # contact_email - Contact email address
    # featured_jobs_count - Number of featured jobs to display