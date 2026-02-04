# Backend Integration Guide - FastAPI + PostgreSQL

## Overview

This guide provides the complete backend structure for integrating with the 7 Twelve recruitment platform frontend.

## Tech Stack (As Specified)

- **Backend**: Python + FastAPI
- **Database**: PostgreSQL
- **API**: REST APIs
- **Frontend**: React.js (already built)

## Database Schema

### 1. Candidates Table

```sql
CREATE TABLE candidates (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(20) NOT NULL,
    phone_code VARCHAR(10) NOT NULL,
    age INTEGER NOT NULL,
    gender VARCHAR(20),
    
    -- Location
    country VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL,
    willing_to_relocate BOOLEAN DEFAULT FALSE,
    
    -- Professional Info
    qualification VARCHAR(100) NOT NULL,
    stream VARCHAR(100) NOT NULL,
    years_of_experience INTEGER NOT NULL,
    current_role VARCHAR(255),
    
    -- Skills (stored as JSON array)
    skills JSONB,
    
    -- Resume
    resume_filename VARCHAR(255),
    resume_url TEXT,
    
    -- Additional Info
    preferred_job_type VARCHAR(50),
    expected_salary_min DECIMAL(10, 2),
    expected_salary_max DECIMAL(10, 2),
    notice_period VARCHAR(50),
    profile_summary TEXT,
    
    -- Metadata
    status VARCHAR(20) DEFAULT 'pending', -- pending, reviewed, shortlisted, rejected
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 2. Companies Table

```sql
CREATE TABLE companies (
    id SERIAL PRIMARY KEY,
    company_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(20) NOT NULL,
    phone_code VARCHAR(10) NOT NULL,
    website VARCHAR(255) NOT NULL,
    
    -- Location
    country VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL,
    
    -- Profile
    company_type VARCHAR(50) NOT NULL, -- Startup, SME, Enterprise, Agency
    company_size VARCHAR(20) NOT NULL, -- 1-10, 11-50, 51-200, 200+
    
    -- Services (stored as JSON array)
    services_interested JSONB NOT NULL,
    
    -- Recruitment Fields (conditional)
    roles_hiring_for TEXT,
    number_of_positions INTEGER,
    experience_level VARCHAR(50),
    hiring_timeline VARCHAR(50),
    
    -- Branding Fields (conditional)
    branding_objective TEXT,
    preferred_platforms TEXT,
    campaign_duration VARCHAR(50),
    
    -- Budget
    budget_range VARCHAR(100),
    decision_timeline VARCHAR(100),
    
    -- Contact Person
    contact_person_name VARCHAR(255) NOT NULL,
    contact_person_designation VARCHAR(255) NOT NULL,
    preferred_contact_method VARCHAR(20),
    
    -- Additional
    additional_message TEXT,
    
    -- Metadata
    status VARCHAR(20) DEFAULT 'pending', -- pending, approved, rejected
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    approved_at TIMESTAMP,
    approved_by INTEGER REFERENCES admin_users(id)
);
```

### 3. Advertisements Table

```sql
CREATE TABLE advertisements (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    image_filename VARCHAR(255),
    image_url TEXT NOT NULL,
    link_url TEXT,
    position INTEGER NOT NULL, -- 1-7 for slider position
    is_active BOOLEAN DEFAULT TRUE,
    click_count INTEGER DEFAULT 0,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by INTEGER REFERENCES admin_users(id)
);
```

### 4. Blogs Table

```sql
CREATE TABLE blogs (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    short_description VARCHAR(200) NOT NULL,
    content TEXT,
    cover_image_filename VARCHAR(255),
    cover_image_url TEXT,
    
    -- Author Info
    author_name VARCHAR(255) NOT NULL,
    author_email VARCHAR(255) NOT NULL,
    
    -- Source
    source VARCHAR(50) NOT NULL, -- Internal Blog, Medium, Instagram, LinkedIn
    external_link TEXT,
    
    -- Status
    is_featured BOOLEAN DEFAULT FALSE,
    status VARCHAR(20) DEFAULT 'pending', -- pending, draft, published, rejected
    
    -- Metadata
    views_count INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    published_at TIMESTAMP,
    reviewed_by INTEGER REFERENCES admin_users(id)
);
```

### 5. Admin Users Table

```sql
CREATE TABLE admin_users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255),
    role VARCHAR(50) DEFAULT 'admin', -- admin, super_admin
    is_active BOOLEAN DEFAULT TRUE,
    last_login TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 6. Contact Messages Table

```sql
CREATE TABLE contact_messages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'new', -- new, read, replied
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    replied_at TIMESTAMP
);
```

## FastAPI Project Structure

```
backend/
├── app/
│   ├── __init__.py
│   ├── main.py                 # FastAPI app initialization
│   ├── config.py               # Configuration settings
│   ├── database.py             # Database connection
│   │
│   ├── models/                 # SQLAlchemy models
│   │   ├── __init__.py
│   │   ├── candidate.py
│   │   ├── company.py
│   │   ├── advertisement.py
│   │   ├── blog.py
│   │   ├── admin.py
│   │   └── contact.py
│   │
│   ├── schemas/                # Pydantic schemas
│   │   ├── __init__.py
│   │   ├── candidate.py
│   │   ├── company.py
│   │   ├── advertisement.py
│   │   ├── blog.py
│   │   ├── admin.py
│   │   └── contact.py
│   │
│   ├── api/                    # API routes
│   │   ├── __init__.py
│   │   ├── candidates.py
│   │   ├── companies.py
│   │   ├── blogs.py
│   │   ├── contact.py
│   │   └── admin.py
│   │
│   ├── services/               # Business logic
│   │   ├── __init__.py
│   │   ├── candidate_service.py
│   │   ├── company_service.py
│   │   ├── blog_service.py
│   │   ├── file_service.py
│   │   └── email_service.py
│   │
│   └── utils/                  # Utility functions
│       ├── __init__.py
│       ├── auth.py             # JWT authentication
│       ├── security.py         # Password hashing
│       └── validators.py
│
├── uploads/                    # File uploads
│   ├── resumes/
│   ├── advertisements/
│   └── blog_covers/
│
├── requirements.txt
├── .env                        # Environment variables
└── README.md
```

## API Endpoints

### Public Endpoints (No Auth Required)

#### Candidates
```python
POST   /api/candidates              # Submit candidate profile
GET    /api/candidates/{id}         # Get candidate by ID (for confirmation)
```

#### Companies
```python
POST   /api/companies               # Submit company details
GET    /api/companies/{id}          # Get company by ID (for confirmation)
```

#### Blogs
```python
GET    /api/blogs                   # Get all published blogs
GET    /api/blogs/featured          # Get featured blogs
GET    /api/blogs/{id}              # Get blog by ID
POST   /api/blogs/submit            # User submit blog
POST   /api/blogs/{id}/view         # Increment view count
```

#### Contact
```python
POST   /api/contact                 # Submit contact message
```

#### Advertisements
```python
GET    /api/advertisements          # Get active advertisements
POST   /api/advertisements/{id}/click # Track ad clicks
```

### Admin Endpoints (Auth Required)

#### Authentication
```python
POST   /api/admin/login             # Admin login
POST   /api/admin/logout            # Admin logout
GET    /api/admin/me                # Get current admin info
```

#### Candidates Management
```python
GET    /api/admin/candidates        # Get all candidates (with filters)
GET    /api/admin/candidates/{id}   # Get candidate details
PUT    /api/admin/candidates/{id}/status # Update candidate status
DELETE /api/admin/candidates/{id}   # Delete candidate
GET    /api/admin/candidates/{id}/resume # Download resume
```

#### Companies Management
```python
GET    /api/admin/companies         # Get all companies (with filters)
GET    /api/admin/companies/{id}    # Get company details
PUT    /api/admin/companies/{id}/approve # Approve company
PUT    /api/admin/companies/{id}/reject  # Reject company
DELETE /api/admin/companies/{id}    # Delete company
```

#### Advertisements Management
```python
GET    /api/admin/advertisements    # Get all ads
POST   /api/admin/advertisements    # Create new ad
PUT    /api/admin/advertisements/{id} # Update ad
DELETE /api/admin/advertisements/{id} # Delete ad
POST   /api/admin/advertisements/reorder # Reorder ad positions
```

#### Blogs Management
```python
GET    /api/admin/blogs             # Get all blogs (including pending)
GET    /api/admin/blogs/{id}        # Get blog details
PUT    /api/admin/blogs/{id}        # Update blog
DELETE /api/admin/blogs/{id}        # Delete blog
PUT    /api/admin/blogs/{id}/publish # Publish blog
PUT    /api/admin/blogs/{id}/feature # Toggle featured status
POST   /api/admin/blogs             # Create internal blog
```

#### Contact Messages
```python
GET    /api/admin/contact           # Get all contact messages
PUT    /api/admin/contact/{id}/read # Mark as read
DELETE /api/admin/contact/{id}      # Delete message
```

#### Analytics
```python
GET    /api/admin/stats             # Get dashboard statistics
GET    /api/admin/analytics/candidates # Candidate analytics
GET    /api/admin/analytics/companies  # Company analytics
GET    /api/admin/analytics/ads        # Advertisement analytics
```

## Sample FastAPI Code

### main.py
```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from app.api import candidates, companies, blogs, contact, admin
from app.database import engine
from app.models import Base

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="7 Twelve Recruitment API",
    description="API for 7 Twelve recruitment platform",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount static files for uploads
app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

# Include routers
app.include_router(candidates.router, prefix="/api/candidates", tags=["Candidates"])
app.include_router(companies.router, prefix="/api/companies", tags=["Companies"])
app.include_router(blogs.router, prefix="/api/blogs", tags=["Blogs"])
app.include_router(contact.router, prefix="/api/contact", tags=["Contact"])
app.include_router(admin.router, prefix="/api/admin", tags=["Admin"])

@app.get("/")
def root():
    return {"message": "7 Twelve Recruitment API - v1.0.0"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}
```

### database.py
```python
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from app.config import settings

SQLALCHEMY_DATABASE_URL = f"postgresql://{settings.DB_USER}:{settings.DB_PASSWORD}@{settings.DB_HOST}:{settings.DB_PORT}/{settings.DB_NAME}"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
```

### config.py
```python
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    # Database
    DB_USER: str
    DB_PASSWORD: str
    DB_HOST: str = "localhost"
    DB_PORT: int = 5432
    DB_NAME: str
    
    # JWT
    SECRET_KEY: str
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    
    # File Upload
    UPLOAD_DIR: str = "uploads"
    MAX_FILE_SIZE: int = 10485760  # 10MB
    
    # Email (for notifications)
    SMTP_HOST: str
    SMTP_PORT: int
    SMTP_USER: str
    SMTP_PASSWORD: str
    
    class Config:
        env_file = ".env"

settings = Settings()
```

### requirements.txt
```txt
fastapi==0.109.0
uvicorn[standard]==0.27.0
sqlalchemy==2.0.25
psycopg2-binary==2.9.9
pydantic==2.5.3
pydantic-settings==2.1.0
python-multipart==0.0.6
python-jose[cryptography]==3.3.0
passlib[bcrypt]==1.7.4
python-dotenv==1.0.0
aiofiles==23.2.1
pillow==10.2.0
```

## Frontend Integration

Update the React app to use the API:

### Create API service file

```javascript
// src/services/api.js
const API_BASE_URL = 'http://localhost:8000/api';

export const submitCandidate = async (formData) => {
  const data = new FormData();
  Object.keys(formData).forEach(key => {
    if (key === 'resume' && formData[key]) {
      data.append('resume', formData[key]);
    } else if (key === 'skills') {
      data.append('skills', JSON.stringify(formData[key]));
    } else {
      data.append(key, formData[key]);
    }
  });

  const response = await fetch(`${API_BASE_URL}/candidates`, {
    method: 'POST',
    body: data
  });
  
  return response.json();
};

export const submitCompany = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/companies`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  
  return response.json();
};

export const getBlogs = async () => {
  const response = await fetch(`${API_BASE_URL}/blogs`);
  return response.json();
};

export const submitBlog = async (formData) => {
  const data = new FormData();
  Object.keys(formData).forEach(key => {
    if (key === 'coverImage' && formData[key]) {
      data.append('cover_image', formData[key]);
    } else {
      data.append(key, formData[key]);
    }
  });

  const response = await fetch(`${API_BASE_URL}/blogs/submit`, {
    method: 'POST',
    body: data
  });
  
  return response.json();
};

export const adminLogin = async (password) => {
  const response = await fetch(`${API_BASE_URL}/admin/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password })
  });
  
  return response.json();
};
```

## Deployment

### Backend Deployment (Railway/Render/Heroku)

1. **Set up PostgreSQL database**
2. **Configure environment variables**
3. **Deploy FastAPI app**
4. **Set up file storage (S3/Cloudinary)**

### Frontend Deployment (Vercel/Netlify)

1. **Build React app**: `npm run build`
2. **Deploy to hosting**
3. **Update API_BASE_URL to production URL**

## Environment Variables (.env)

```env
# Database
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=7twelve_recruitment

# JWT
SECRET_KEY=your-secret-key-here-change-this
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# Admin
DEFAULT_ADMIN_PASSWORD=admin123
```

## Testing the API

```bash
# Install dependencies
pip install -r requirements.txt

# Run database migrations (if using Alembic)
alembic upgrade head

# Start the server
uvicorn app.main:app --reload

# API will be available at: http://localhost:8000
# API docs at: http://localhost:8000/docs
```

---

This backend structure will seamlessly integrate with your React frontend and provide a complete, production-ready recruitment platform.
