from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, Form
from sqlalchemy.orm import Session
from typing import List, Optional
from app.schemas.home_schemas import (
    Job, JobCreate, JobUpdate, JobListResponse,
    Testimonial, TestimonialCreate, TestimonialUpdate,
    AdCard, AdCardCreate, AdCardUpdate, AdCardClickResponse,
    Partner, PartnerCreate, PartnerUpdate,
    SiteSetting, SiteSettingUpdate, MessageResponse
)
from app.services import home_service
from app.database import get_db
import shutil
import os
from datetime import datetime

router = APIRouter(prefix="/api", tags=["home"])

# ==================== PUBLIC ENDPOINTS ====================

# Jobs
@router.get("/jobs", response_model=JobListResponse)
def get_jobs(
    skip: int = 0,
    limit: int = 10,
    location: Optional[str] = None,
    job_type: Optional[str] = None,
    is_featured: Optional[bool] = None,
    db: Session = Depends(get_db)
):
    """Get all active jobs with optional filters"""
    jobs, total = home_service.get_jobs(
        db, skip=skip, limit=limit,
        location=location, job_type=job_type, is_featured=is_featured
    )
    return {
        "jobs": jobs,
        "total": total,
        "page": skip // limit + 1,
        "page_size": limit
    }

@router.get("/jobs/featured", response_model=List[Job])
def get_featured_jobs(limit: int = 3, db: Session = Depends(get_db)):
    """Get featured jobs for homepage"""
    return home_service.get_featured_jobs(db, limit=limit)

@router.get("/jobs/{job_id}", response_model=Job)
def get_job(job_id: int, db: Session = Depends(get_db)):
    """Get specific job details"""
    job = home_service.get_job_by_id(db, job_id)
    if not job:
        raise HTTPException(status_code=404, detail="Job not found")
    return job

@router.get("/jobs/{job_id}/download-jd")
def download_job_jd(job_id: int, db: Session = Depends(get_db)):
    """Download job description PDF"""
    job = home_service.get_job_by_id(db, job_id)
    if not job or not job.jd_file_path:
        raise HTTPException(status_code=404, detail="JD file not found")
    
    # Return file path for download
    return {
        "url": job.jd_file_url,
        "filename": f"{job.title.replace(' ', '_')}_JD.pdf"
    }

# Testimonials
@router.get("/testimonials", response_model=List[Testimonial])
def get_testimonials(db: Session = Depends(get_db)):
    """Get all active testimonials"""
    return home_service.get_active_testimonials(db)

# Ad Cards
@router.get("/ad-cards", response_model=List[AdCard])
def get_ad_cards(db: Session = Depends(get_db)):
    """Get all active ad cards"""
    return home_service.get_active_ad_cards(db)

@router.post("/ad-cards/{ad_id}/click", response_model=AdCardClickResponse)
def track_ad_click(ad_id: int, db: Session = Depends(get_db)):
    """Track ad card click"""
    click_count = home_service.increment_ad_click(db, ad_id)
    return {
        "message": "Click tracked successfully",
        "click_count": click_count
    }

# Partners
@router.get("/partners", response_model=List[Partner])
def get_partners(db: Session = Depends(get_db)):
    """Get all active partners"""
    return home_service.get_active_partners(db)

# Site Settings
@router.get("/settings/{setting_key}", response_model=SiteSetting)
def get_setting(setting_key: str, db: Session = Depends(get_db)):
    """Get specific site setting"""
    setting = home_service.get_setting(db, setting_key)
    if not setting:
        raise HTTPException(status_code=404, detail="Setting not found")
    return setting

@router.get("/settings/topmate-url")
def get_topmate_url(db: Session = Depends(get_db)):
    """Get Topmate URL for Speak to Mentor button"""
    setting = home_service.get_setting(db, "topmate_url")
    if not setting:
        return {"url": "https://topmate.io/default"}
    return {"url": setting.setting_value}


# ==================== ADMIN ENDPOINTS ====================

# Jobs Management
@router.post("/admin/jobs", response_model=Job)
def admin_create_job(
    job: JobCreate,
    jd_file: Optional[UploadFile] = File(None),
    db: Session = Depends(get_db),
    # Add authentication dependency here
):
    """Admin: Create new job posting"""
    
    # Handle JD file upload if provided
    jd_file_path = None
    if jd_file:
        upload_dir = "uploads/jds"
        os.makedirs(upload_dir, exist_ok=True)
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"{timestamp}_{jd_file.filename}"
        file_path = os.path.join(upload_dir, filename)
        
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(jd_file.file, buffer)
        
        jd_file_path = file_path
    
    return home_service.create_job(db, job, jd_file_path)

@router.put("/admin/jobs/{job_id}", response_model=Job)
def admin_update_job(
    job_id: int,
    job: JobUpdate,
    jd_file: Optional[UploadFile] = File(None),
    db: Session = Depends(get_db)
):
    """Admin: Update job posting"""
    
    jd_file_path = None
    if jd_file:
        upload_dir = "uploads/jds"
        os.makedirs(upload_dir, exist_ok=True)
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"{timestamp}_{jd_file.filename}"
        file_path = os.path.join(upload_dir, filename)
        
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(jd_file.file, buffer)
        
        jd_file_path = file_path
    
    updated_job = home_service.update_job(db, job_id, job, jd_file_path)
    if not updated_job:
        raise HTTPException(status_code=404, detail="Job not found")
    return updated_job

@router.delete("/admin/jobs/{job_id}", response_model=MessageResponse)
def admin_delete_job(job_id: int, db: Session = Depends(get_db)):
    """Admin: Delete job posting"""
    success = home_service.delete_job(db, job_id)
    if not success:
        raise HTTPException(status_code=404, detail="Job not found")
    return {"message": "Job deleted successfully"}

# Testimonials Management
@router.post("/admin/testimonials", response_model=Testimonial)
def admin_create_testimonial(
    testimonial: TestimonialCreate,
    image: Optional[UploadFile] = File(None),
    db: Session = Depends(get_db)
):
    """Admin: Create new testimonial"""
    
    image_url = None
    if image:
        upload_dir = "uploads/testimonials"
        os.makedirs(upload_dir, exist_ok=True)
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"{timestamp}_{image.filename}"
        file_path = os.path.join(upload_dir, filename)
        
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(image.file, buffer)
        
        image_url = f"/uploads/testimonials/{filename}"
    
    return home_service.create_testimonial(db, testimonial, image_url)

@router.put("/admin/testimonials/{testimonial_id}", response_model=Testimonial)
def admin_update_testimonial(
    testimonial_id: int,
    testimonial: TestimonialUpdate,
    db: Session = Depends(get_db)
):
    """Admin: Update testimonial"""
    updated = home_service.update_testimonial(db, testimonial_id, testimonial)
    if not updated:
        raise HTTPException(status_code=404, detail="Testimonial not found")
    return updated

@router.delete("/admin/testimonials/{testimonial_id}", response_model=MessageResponse)
def admin_delete_testimonial(testimonial_id: int, db: Session = Depends(get_db)):
    """Admin: Delete testimonial"""
    success = home_service.delete_testimonial(db, testimonial_id)
    if not success:
        raise HTTPException(status_code=404, detail="Testimonial not found")
    return {"message": "Testimonial deleted successfully"}

# Ad Cards Management
@router.post("/admin/ad-cards", response_model=AdCard)
def admin_create_ad_card(
    title: str = Form(...),
    description: str = Form(None),
    background_gradient: str = Form(...),
    link_type: str = Form(...),
    link_url: str = Form(...),
    position: int = Form(...),
    image: Optional[UploadFile] = File(None),
    db: Session = Depends(get_db)
):
    """Admin: Create new ad card"""
    
    image_url = None
    if image:
        upload_dir = "uploads/ad_cards"
        os.makedirs(upload_dir, exist_ok=True)
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"{timestamp}_{image.filename}"
        file_path = os.path.join(upload_dir, filename)
        
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(image.file, buffer)
        
        image_url = f"/uploads/ad_cards/{filename}"
    
    ad_card_data = AdCardCreate(
        title=title,
        description=description,
        background_gradient=background_gradient,
        link_type=link_type,
        link_url=link_url,
        position=position
    )
    
    return home_service.create_ad_card(db, ad_card_data, image_url)

@router.put("/admin/ad-cards/{ad_id}", response_model=AdCard)
def admin_update_ad_card(
    ad_id: int,
    title: Optional[str] = Form(None),
    description: Optional[str] = Form(None),
    link_type: Optional[str] = Form(None),
    link_url: Optional[str] = Form(None),
    position: Optional[int] = Form(None),
    is_active: Optional[bool] = Form(None),
    image: Optional[UploadFile] = File(None),
    db: Session = Depends(get_db)
):
    """Admin: Update ad card"""
    
    image_url = None
    if image:
        upload_dir = "uploads/ad_cards"
        os.makedirs(upload_dir, exist_ok=True)
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"{timestamp}_{image.filename}"
        file_path = os.path.join(upload_dir, filename)
        
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(image.file, buffer)
        
        image_url = f"/uploads/ad_cards/{filename}"
    
    ad_card_data = AdCardUpdate(
        title=title,
        description=description,
        link_type=link_type,
        link_url=link_url,
        position=position,
        is_active=is_active
    )
    
    updated = home_service.update_ad_card(db, ad_id, ad_card_data, image_url)
    if not updated:
        raise HTTPException(status_code=404, detail="Ad card not found")
    return updated

@router.delete("/admin/ad-cards/{ad_id}", response_model=MessageResponse)
def admin_delete_ad_card(ad_id: int, db: Session = Depends(get_db)):
    """Admin: Delete ad card"""
    success = home_service.delete_ad_card(db, ad_id)
    if not success:
        raise HTTPException(status_code=404, detail="Ad card not found")
    return {"message": "Ad card deleted successfully"}

# Site Settings Management
@router.put("/admin/settings/{setting_key}", response_model=SiteSetting)
def admin_update_setting(
    setting_key: str,
    setting: SiteSettingUpdate,
    db: Session = Depends(get_db)
):
    """Admin: Update site setting"""
    updated = home_service.update_setting(db, setting_key, setting.setting_value)
    if not updated:
        raise HTTPException(status_code=404, detail="Setting not found")
    return updated