from pydantic import BaseModel
from typing import Optional

class AdminLoginRequest(BaseModel):
    password: str

class AdminUser(BaseModel):
    username: str
    role: str

class AdminLoginResponse(BaseModel):
    message: str
    token: str
    user: AdminUser

class DashboardStats(BaseModel):
    total_candidates: int
    total_companies: int
    total_jobs: int
    total_blogs: int
    pending_candidates: int
    pending_companies: int
    active_jobs: int
    published_blogs: int
    total_testimonials: int
    total_partners: int