from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class BlogBase(BaseModel):
    title: str
    description: str
    content: str
    author_name: str
    source: str

class BlogCreate(BlogBase):
    author_email: Optional[EmailStr] = None

class BlogAdminCreate(BlogBase):
    external_link: Optional[str] = None
    is_featured: bool = False

class BlogUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    content: Optional[str] = None
    source: Optional[str] = None
    external_link: Optional[str] = None
    is_featured: Optional[bool] = None
    status: Optional[str] = None

class Blog(BlogBase):
    id: int
    author_email: Optional[str] = None
    cover_image_url: Optional[str] = None
    cover_image_emoji: Optional[str] = None
    external_link: Optional[str] = None
    status: str
    is_featured: bool
    published_date: Optional[datetime] = None
    created_at: datetime
    
    class Config:
        from_attributes = True

class BlogResponse(BaseModel):
    message: str
    blog_id: int