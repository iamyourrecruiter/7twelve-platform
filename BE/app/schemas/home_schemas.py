from pydantic import BaseModel, HttpUrl
from typing import Optional, List
from datetime import datetime

# Job Schemas
class JobBase(BaseModel):
    title: str
    company: str
    location: str
    job_type: str
    experience: str
    salary_display: Optional[str] = None
    description: Optional[str] = None
    requirements: Optional[str] = None
    responsibilities: Optional[str] = None
    is_featured: bool = False
    tags: Optional[List[str]] = []

class JobCreate(JobBase):
    pass

class JobUpdate(BaseModel):
    title: Optional[str] = None
    company: Optional[str] = None
    location: Optional[str] = None
    job_type: Optional[str] = None
    experience: Optional[str] = None
    salary_display: Optional[str] = None
    description: Optional[str] = None
    is_featured: Optional[bool] = None
    is_active: Optional[bool] = None
    tags: Optional[List[str]] = None

class Job(JobBase):
    id: int
    jd_file_url: Optional[str] = None
    is_active: bool
    posted_date: datetime
    created_at: datetime
    
    class Config:
        from_attributes = True


# Testimonial Schemas
class TestimonialBase(BaseModel):
    name: str
    role: str
    company: str
    testimonial_text: str
    rating: int = 5
    image_emoji: Optional[str] = None
    position: int = 0

class TestimonialCreate(TestimonialBase):
    pass

class TestimonialUpdate(BaseModel):
    name: Optional[str] = None
    role: Optional[str] = None
    company: Optional[str] = None
    testimonial_text: Optional[str] = None
    rating: Optional[int] = None
    position: Optional[int] = None
    is_active: Optional[bool] = None

class Testimonial(TestimonialBase):
    id: int
    image_url: Optional[str] = None
    is_active: bool
    created_at: datetime
    
    class Config:
        from_attributes = True


# Ad Card Schemas (bottom 5 cards)
class AdCardBase(BaseModel):
    title: str
    description: Optional[str] = None
    background_gradient: str
    link_type: str  # 'whatsapp' or 'website'
    link_url: str
    position: int

class AdCardCreate(AdCardBase):
    pass

class AdCardUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    link_type: Optional[str] = None
    link_url: Optional[str] = None
    position: Optional[int] = None
    is_active: Optional[bool] = None

class AdCard(AdCardBase):
    id: int
    image_url: Optional[str] = None
    is_active: bool
    click_count: int
    created_at: datetime
    
    class Config:
        from_attributes = True


# Hero Ad Schemas (4 rectangle cards)
class HeroAdBase(BaseModel):
    title: str
    description: Optional[str] = None
    background_gradient: str
    link_url: str
    position: int  # 1-4

class HeroAdCreate(HeroAdBase):
    pass

class HeroAdUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    link_url: Optional[str] = None
    position: Optional[int] = None
    is_active: Optional[bool] = None

class HeroAd(HeroAdBase):
    id: int
    image_url: Optional[str] = None
    is_active: bool
    click_count: int
    created_at: datetime
    
    class Config:
        from_attributes = True


# Partner Schemas
class PartnerBase(BaseModel):
    name: str
    website_url: Optional[str] = None
    position: int = 0

class PartnerCreate(PartnerBase):
    pass

class PartnerUpdate(BaseModel):
    name: Optional[str] = None
    website_url: Optional[str] = None
    position: Optional[int] = None
    is_active: Optional[bool] = None

class Partner(PartnerBase):
    id: int
    logo_url: Optional[str] = None
    is_active: bool
    created_at: datetime
    
    class Config:
        from_attributes = True


# Site Settings Schemas
class SiteSettingBase(BaseModel):
    setting_key: str
    setting_value: str
    setting_type: str = 'text'
    description: Optional[str] = None

class SiteSettingCreate(SiteSettingBase):
    pass

class SiteSettingUpdate(BaseModel):
    setting_value: str

class SiteSetting(SiteSettingBase):
    id: int
    updated_at: datetime
    
    class Config:
        from_attributes = True


# Response Schemas
class JobListResponse(BaseModel):
    jobs: List[Job]
    total: int
    page: int
    page_size: int

class MessageResponse(BaseModel):
    message: str
    
class AdCardClickResponse(BaseModel):
    message: str
    click_count: int

class HeroAdClickResponse(BaseModel):
    message: str
    click_count: int