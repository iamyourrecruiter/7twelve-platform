from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class Blog(Base):
    __tablename__ = "blogs"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(500), nullable=False)
    description = Column(Text, nullable=False)
    content = Column(Text, nullable=False)
    
    # Author
    author_name = Column(String(255), nullable=False)
    author_email = Column(String(255))
    
    # Media
    cover_image_url = Column(String(500))
    cover_image_emoji = Column(String(10))  # Emoji fallback
    
    # Source & Link
    source = Column(String(100), nullable=False)  # Internal Blog, Medium, LinkedIn, etc.
    external_link = Column(String(500))  # Link to external blog if applicable
    
    # Status & Features
    status = Column(String(50), default='draft')  # draft, published, archived
    is_featured = Column(Boolean, default=False)
    
    # Dates
    published_date = Column(DateTime)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)