from sqlalchemy.orm import Session
from sqlalchemy import and_, or_
from app.models.home_models import Job, Testimonial, AdCard, Partner, SiteSettings
from app.schemas.home_schemas import (
    JobCreate, JobUpdate,
    TestimonialCreate, TestimonialUpdate,
    AdCardCreate, AdCardUpdate,
    PartnerCreate, PartnerUpdate
)
from typing import List, Tuple, Optional

# ==================== JOB SERVICES ====================

def get_jobs(
    db: Session,
    skip: int = 0,
    limit: int = 10,
    location: Optional[str] = None,
    job_type: Optional[str] = None,
    is_featured: Optional[bool] = None
) -> Tuple[List[Job], int]:
    """Get jobs with filters and pagination"""
    query = db.query(Job).filter(Job.is_active == True)
    
    if location:
        query = query.filter(Job.location == location)
    if job_type:
        query = query.filter(Job.job_type == job_type)
    if is_featured is not None:
        query = query.filter(Job.is_featured == is_featured)
    
    total = query.count()
    jobs = query.order_by(Job.posted_date.desc()).offset(skip).limit(limit).all()
    
    return jobs, total

def get_featured_jobs(db: Session, limit: int = 3) -> List[Job]:
    """Get featured jobs for homepage"""
    return db.query(Job).filter(
        and_(Job.is_active == True, Job.is_featured == True)
    ).order_by(Job.posted_date.desc()).limit(limit).all()

def get_job_by_id(db: Session, job_id: int) -> Optional[Job]:
    """Get job by ID"""
    return db.query(Job).filter(Job.id == job_id).first()

def create_job(db: Session, job: JobCreate, jd_file_path: Optional[str] = None) -> Job:
    """Create new job posting"""
    jd_file_url = None
    if jd_file_path:
        jd_file_url = f"/api/uploads/jds/{jd_file_path.split('/')[-1]}"
    
    db_job = Job(
        **job.dict(),
        jd_file_path=jd_file_path,
        jd_file_url=jd_file_url
    )
    db.add(db_job)
    db.commit()
    db.refresh(db_job)
    return db_job

def update_job(
    db: Session,
    job_id: int,
    job: JobUpdate,
    jd_file_path: Optional[str] = None
) -> Optional[Job]:
    """Update job posting"""
    db_job = get_job_by_id(db, job_id)
    if not db_job:
        return None
    
    update_data = job.dict(exclude_unset=True)
    
    if jd_file_path:
        update_data['jd_file_path'] = jd_file_path
        update_data['jd_file_url'] = f"/api/uploads/jds/{jd_file_path.split('/')[-1]}"
    
    for field, value in update_data.items():
        setattr(db_job, field, value)
    
    db.commit()
    db.refresh(db_job)
    return db_job

def delete_job(db: Session, job_id: int) -> bool:
    """Soft delete job (set is_active to False)"""
    db_job = get_job_by_id(db, job_id)
    if not db_job:
        return False
    
    db_job.is_active = False
    db.commit()
    return True


# ==================== TESTIMONIAL SERVICES ====================

def get_active_testimonials(db: Session) -> List[Testimonial]:
    """Get all active testimonials ordered by position"""
    return db.query(Testimonial).filter(
        Testimonial.is_active == True
    ).order_by(Testimonial.position).all()

def get_testimonial_by_id(db: Session, testimonial_id: int) -> Optional[Testimonial]:
    """Get testimonial by ID"""
    return db.query(Testimonial).filter(Testimonial.id == testimonial_id).first()

def create_testimonial(
    db: Session,
    testimonial: TestimonialCreate,
    image_url: Optional[str] = None
) -> Testimonial:
    """Create new testimonial"""
    db_testimonial = Testimonial(
        **testimonial.dict(),
        image_url=image_url
    )
    db.add(db_testimonial)
    db.commit()
    db.refresh(db_testimonial)
    return db_testimonial

def update_testimonial(
    db: Session,
    testimonial_id: int,
    testimonial: TestimonialUpdate
) -> Optional[Testimonial]:
    """Update testimonial"""
    db_testimonial = get_testimonial_by_id(db, testimonial_id)
    if not db_testimonial:
        return None
    
    update_data = testimonial.dict(exclude_unset=True)
    for field, value in update_data.items():
        setattr(db_testimonial, field, value)
    
    db.commit()
    db.refresh(db_testimonial)
    return db_testimonial

def delete_testimonial(db: Session, testimonial_id: int) -> bool:
    """Delete testimonial"""
    db_testimonial = get_testimonial_by_id(db, testimonial_id)
    if not db_testimonial:
        return False
    
    db.delete(db_testimonial)
    db.commit()
    return True


# ==================== AD CARD SERVICES ====================

def get_active_ad_cards(db: Session) -> List[AdCard]:
    """Get all active ad cards ordered by position"""
    return db.query(AdCard).filter(
        AdCard.is_active == True
    ).order_by(AdCard.position).limit(5).all()

def get_ad_card_by_id(db: Session, ad_id: int) -> Optional[AdCard]:
    """Get ad card by ID"""
    return db.query(AdCard).filter(AdCard.id == ad_id).first()

def create_ad_card(
    db: Session,
    ad_card: AdCardCreate,
    image_url: Optional[str] = None
) -> AdCard:
    """Create new ad card"""
    db_ad_card = AdCard(
        **ad_card.dict(),
        image_url=image_url
    )
    db.add(db_ad_card)
    db.commit()
    db.refresh(db_ad_card)
    return db_ad_card

def update_ad_card(
    db: Session,
    ad_id: int,
    ad_card: AdCardUpdate,
    image_url: Optional[str] = None
) -> Optional[AdCard]:
    """Update ad card"""
    db_ad_card = get_ad_card_by_id(db, ad_id)
    if not db_ad_card:
        return None
    
    update_data = ad_card.dict(exclude_unset=True)
    
    if image_url:
        update_data['image_url'] = image_url
    
    for field, value in update_data.items():
        setattr(db_ad_card, field, value)
    
    db.commit()
    db.refresh(db_ad_card)
    return db_ad_card

def delete_ad_card(db: Session, ad_id: int) -> bool:
    """Delete ad card"""
    db_ad_card = get_ad_card_by_id(db, ad_id)
    if not db_ad_card:
        return False
    
    db.delete(db_ad_card)
    db.commit()
    return True

def increment_ad_click(db: Session, ad_id: int) -> int:
    """Increment ad card click count"""
    db_ad_card = get_ad_card_by_id(db, ad_id)
    if not db_ad_card:
        return 0
    
    db_ad_card.click_count += 1
    db.commit()
    db.refresh(db_ad_card)
    return db_ad_card.click_count


# ==================== PARTNER SERVICES ====================

def get_active_partners(db: Session) -> List[Partner]:
    """Get all active partners ordered by position"""
    return db.query(Partner).filter(
        Partner.is_active == True
    ).order_by(Partner.position).all()

def get_partner_by_id(db: Session, partner_id: int) -> Optional[Partner]:
    """Get partner by ID"""
    return db.query(Partner).filter(Partner.id == partner_id).first()

def create_partner(
    db: Session,
    partner: PartnerCreate,
    logo_url: Optional[str] = None
) -> Partner:
    """Create new partner"""
    db_partner = Partner(
        **partner.dict(),
        logo_url=logo_url
    )
    db.add(db_partner)
    db.commit()
    db.refresh(db_partner)
    return db_partner

def update_partner(
    db: Session,
    partner_id: int,
    partner: PartnerUpdate,
    logo_url: Optional[str] = None
) -> Optional[Partner]:
    """Update partner"""
    db_partner = get_partner_by_id(db, partner_id)
    if not db_partner:
        return None
    
    update_data = partner.dict(exclude_unset=True)
    
    if logo_url:
        update_data['logo_url'] = logo_url
    
    for field, value in update_data.items():
        setattr(db_partner, field, value)
    
    db.commit()
    db.refresh(db_partner)
    return db_partner

def delete_partner(db: Session, partner_id: int) -> bool:
    """Delete partner"""
    db_partner = get_partner_by_id(db, partner_id)
    if not db_partner:
        return False
    
    db.delete(db_partner)
    db.commit()
    return True


# ==================== SITE SETTINGS SERVICES ====================

def get_setting(db: Session, setting_key: str) -> Optional[SiteSettings]:
    """Get site setting by key"""
    return db.query(SiteSettings).filter(
        SiteSettings.setting_key == setting_key
    ).first()

def update_setting(db: Session, setting_key: str, setting_value: str) -> Optional[SiteSettings]:
    """Update site setting"""
    db_setting = get_setting(db, setting_key)
    if not db_setting:
        return None
    
    db_setting.setting_value = setting_value
    db.commit()
    db.refresh(db_setting)
    return db_setting

def create_setting(
    db: Session,
    setting_key: str,
    setting_value: str,
    setting_type: str = 'text',
    description: Optional[str] = None
) -> SiteSettings:
    """Create new site setting"""
    db_setting = SiteSettings(
        setting_key=setting_key,
        setting_value=setting_value,
        setting_type=setting_type,
        description=description
    )
    db.add(db_setting)
    db.commit()
    db.refresh(db_setting)
    return db_setting