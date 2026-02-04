from sqlalchemy.orm import Session
from app.models.blog_model import Blog
from app.schemas.blog_schemas import BlogCreate
from datetime import datetime

def create_blog(db: Session, blog: BlogCreate, image_url: str = None):
    db_blog = Blog(
        **blog.dict(),
        cover_image_url=image_url,
        status='draft'
    )
    db.add(db_blog)
    db.commit()
    db.refresh(db_blog)
    return {"message": "Blog submitted for review", "blog_id": db_blog.id}

def get_blog_by_id(db: Session, blog_id: int):
    return db.query(Blog).filter(Blog.id == blog_id).first()

def get_published_blogs(db: Session, skip: int = 0, limit: int = 20, source: str = None, featured: bool = None):
    query = db.query(Blog).filter(Blog.status == 'published')
    if source:
        query = query.filter(Blog.source == source)
    if featured is not None:
        query = query.filter(Blog.is_featured == featured)
    return query.order_by(Blog.published_date.desc()).offset(skip).limit(limit).all()

def get_featured_blogs(db: Session, limit: int = 6):
    return db.query(Blog).filter(
        Blog.status == 'published',
        Blog.is_featured == True
    ).order_by(Blog.published_date.desc()).limit(limit).all()

def get_all_blogs(db: Session, skip: int = 0, limit: int = 50, status: str = None):
    query = db.query(Blog)
    if status:
        query = query.filter(Blog.status == status)
    return query.order_by(Blog.created_at.desc()).offset(skip).limit(limit).all()

def publish_blog(db: Session, blog_id: int):
    blog = get_blog_by_id(db, blog_id)
    if not blog:
        return None
    blog.status = 'published'
    blog.published_date = datetime.utcnow()
    db.commit()
    db.refresh(blog)
    return blog

def update_blog_featured(db: Session, blog_id: int, is_featured: bool):
    blog = get_blog_by_id(db, blog_id)
    if not blog:
        return None
    blog.is_featured = is_featured
    db.commit()
    db.refresh(blog)
    return blog

def update_blog(db: Session, blog_id: int, blog_data, image_url: str = None):
    blog = get_blog_by_id(db, blog_id)
    if not blog:
        return None
    
    update_data = blog_data.dict(exclude_unset=True)
    if image_url:
        update_data['cover_image_url'] = image_url
    
    for field, value in update_data.items():
        setattr(blog, field, value)
    
    db.commit()
    db.refresh(blog)
    return blog

def delete_blog(db: Session, blog_id: int):
    blog = get_blog_by_id(db, blog_id)
    if not blog:
        return False
    db.delete(blog)
    db.commit()
    return True