from fastapi import APIRouter, Depends, HTTPException, Form
from sqlalchemy.orm import Session
from app.database import get_db
from app.schemas import admin_schemas
from app.services import admin_service

router = APIRouter(prefix="/api/admin", tags=["admin"])

# ==================== ADMIN AUTH ====================

@router.post("/login", response_model=admin_schemas.AdminLoginResponse)
def admin_login(
    password: str = Form(...),
    db: Session = Depends(get_db)
):
    """Admin login with password"""
    
    # TODO: In production, use proper authentication with hashed passwords and JWT
    # For now, simple password check
    default_password = "admin123"  # Should be in env variable
    
    if password != default_password:
        raise HTTPException(status_code=401, detail="Incorrect password")
    
    # Generate token (simplified - use JWT in production)
    token = admin_service.generate_admin_token(password)
    
    return {
        "message": "Login successful",
        "token": token,
        "user": {
            "username": "admin",
            "role": "admin"
        }
    }

@router.post("/logout")
def admin_logout():
    """Admin logout"""
    return {"message": "Logged out successfully"}

@router.get("/verify")
def verify_admin_token(token: str):
    """Verify admin token"""
    is_valid = admin_service.verify_admin_token(token)
    if not is_valid:
        raise HTTPException(status_code=401, detail="Invalid or expired token")
    return {"message": "Token is valid"}


# ==================== ADMIN DASHBOARD STATS ====================

@router.get("/stats", response_model=admin_schemas.DashboardStats)
def get_dashboard_stats(db: Session = Depends(get_db)):
    """Get dashboard statistics"""
    return admin_service.get_dashboard_stats(db)

@router.get("/recent-activity")
def get_recent_activity(limit: int = 10, db: Session = Depends(get_db)):
    """Get recent activity log"""
    return admin_service.get_recent_activity(db, limit=limit)