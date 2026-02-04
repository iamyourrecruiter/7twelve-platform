from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from app.api import candidates, companies, blogs, contact, admin
from app.database import engine
from app.database import Base
from app.routes import (
    home_routes,
    candidate_routes,
    company_routes,
    blog_routes,
    contact_routes,
    admin_routes
)
from app.api import market

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
    allow_origins=["http://localhost:7000"],  # React dev server
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
app.include_router(home_routes.router)
app.include_router(candidate_routes.router)
app.include_router(company_routes.router)
app.include_router(blog_routes.router)
app.include_router(contact_routes.router)
app.include_router(admin_routes.router)
app.include_router(market.router, prefix="/api/market", tags=["Market"])



@app.get("/")
def root():
    return {"message": "7 Twelve Recruitment API - v1.0.0"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}