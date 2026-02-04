from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, Form
from sqlalchemy.orm import Session
from typing import List, Optional
from app.database import get_db
from app.schemas import blog_schemas
from app.services import blog_service
import shutil
import os
from datetime import datetime

router = APIRouter(prefix="/api/blogs", tags=["blogs"])

# ==================== PUBLIC ENDPOINTS ====================

@router.get("/", response_model=List[blog_schemas.Blog])
def get_all_blogs(
    skip: int = 0,
    limit: int = 20,
    source: Optional[str] = None,
    featured: Optional[bool] = None,
    db: Session = Depends(get_db)
):
    """Get all published blogs with optional filters"""
    return blog_service.get_published_blogs(
        db, skip=skip, limit=limit, source=source, featured=featured
    )

@router.get("/featured", response_model=List[blog_schemas.Blog])
def get_featured_blogs(limit: int = 6, db: Session = Depends(get_db)):
    """Get featured blogs for homepage"""
    return blog_service.get_featured_blogs(db, limit=limit)

@router.get("/{blog_id}", response_model=blog_schemas.Blog)
def get_blog(blog_id: int, db: Session = Depends(get_db)):
    """Get specific blog details"""
    blog = blog_service.get_blog_by_id(db, blog_id)
    if not blog or blog.status != 'published':
        raise HTTPException(status_code=404, detail="Blog not found")
    return blog

@router.post("/submit", response_model=blog_schemas.BlogResponse)
async def submit_blog(
    author_name: str = Form(...),
    author_email: str = Form(...),
    blog_title: str = Form(...),
    description: str = Form(...),
    content: str = Form(...),
    cover_image: UploadFile = File(None),
    db: Session = Depends(get_db)
):
    """Submit blog for review"""
    
    # Handle cover image upload
    image_url = None
    if cover_image:
        upload_dir = "uploads/blog_covers"
        os.makedirs(upload_dir, exist_ok=True)
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"{timestamp}_{cover_image.filename}"
        file_path = os.path.join(upload_dir, filename)
        
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(cover_image.file, buffer)
        
        image_url = f"/uploads/blog_covers/{filename}"
    
    blog_data = blog_schemas.BlogCreate(
        author_name=author_name,
        author_email=author_email,
        title=blog_title,
        description=description,
        content=content,
        source="Internal Blog"
    )
    
    return blog_service.create_blog(db, blog_data, image_url)


# ==================== ADMIN ENDPOINTS ====================

@router.get("/admin/all", response_model=List[blog_schemas.Blog])
def admin_get_all_blogs(
    skip: int = 0,
    limit: int = 50,
    status: Optional[str] = None,
    db: Session = Depends(get_db)
):
    """Admin: Get all blogs including unpublished"""
    return blog_service.get_all_blogs(db, skip=skip, limit=limit, status=status)

@router.post("/admin/create", response_model=blog_schemas.Blog)
async def admin_create_blog(
    author_name: str = Form(...),
    title: str = Form(...),
    description: str = Form(...),
    content: str = Form(...),
    source: str = Form("Internal Blog"),
    external_link: str = Form(None),
    is_featured: bool = Form(False),
    cover_image: UploadFile = File(None),
    db: Session = Depends(get_db)
):
    """Admin: Create and publish blog directly"""
    
    # Handle cover image upload
    image_url = None
    if cover_image:
        upload_dir = "uploads/blog_covers"
        os.makedirs(upload_dir, exist_ok=True)
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"{timestamp}_{cover_image.filename}"
        file_path = os.path.join(upload_dir, filename)
        
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(cover_image.file, buffer)
        
        image_url = f"/uploads/blog_covers/{filename}"
    
    blog_data = blog_schemas.BlogAdminCreate(
        author_name=author_name,
        title=title,
        description=description,
        content=content,
        source=source,
        external_link=external_link,
        is_featured=is_featured
    )
    
    blog = blog_service.create_blog(db, blog_data, image_url)
    # Auto-publish admin-created blogs
    blog_service.publish_blog(db, blog.id)
    return blog

@router.put("/{blog_id}/publish", response_model=blog_schemas.Blog)
def admin_publish_blog(blog_id: int, db: Session = Depends(get_db)):
    """Admin: Publish a blog"""
    published = blog_service.publish_blog(db, blog_id)
    if not published:
        raise HTTPException(status_code=404, detail="Blog not found")
    return published

@router.put("/{blog_id}/feature", response_model=blog_schemas.Blog)
def admin_feature_blog(
    blog_id: int,
    is_featured: bool = Form(...),
    db: Session = Depends(get_db)
):
    """Admin: Mark blog as featured/unfeatured"""
    updated = blog_service.update_blog_featured(db, blog_id, is_featured)
    if not updated:
        raise HTTPException(status_code=404, detail="Blog not found")
    return updated

@router.put("/{blog_id}", response_model=blog_schemas.Blog)
async def admin_update_blog(
    blog_id: int,
    title: str = Form(None),
    description: str = Form(None),
    content: str = Form(None),
    source: str = Form(None),
    external_link: str = Form(None),
    is_featured: bool = Form(None),
    status: str = Form(None),
    cover_image: UploadFile = File(None),
    db: Session = Depends(get_db)
):
    """Admin: Update blog details"""
    
    image_url = None
    if cover_image:
        upload_dir = "uploads/blog_covers"
        os.makedirs(upload_dir, exist_ok=True)
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"{timestamp}_{cover_image.filename}"
        file_path = os.path.join(upload_dir, filename)
        
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(cover_image.file, buffer)
        
        image_url = f"/uploads/blog_covers/{filename}"
    
    blog_data = blog_schemas.BlogUpdate(
        title=title,
        description=description,
        content=content,
        source=source,
        external_link=external_link,
        is_featured=is_featured,
        status=status
    )
    
    updated = blog_service.update_blog(db, blog_id, blog_data, image_url)
    if not updated:
        raise HTTPException(status_code=404, detail="Blog not found")
    return updated

@router.delete("/{blog_id}")
def admin_delete_blog(blog_id: int, db: Session = Depends(get_db)):
    """Admin: Delete blog"""
    success = blog_service.delete_blog(db, blog_id)
    if not success:
        raise HTTPException(status_code=404, detail="Blog not found")
    return {"message": "Blog deleted successfully"}