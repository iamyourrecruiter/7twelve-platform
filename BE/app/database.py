from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from app.config import settings
from sqlalchemy.orm import declarative_base
from sqlalchemy.exc import ArgumentError

# Use PostgreSQL when DB settings are provided, otherwise fall back to SQLite for local/dev.
if getattr(settings, 'DB_USER', None) and getattr(settings, 'DB_PASSWORD', None) and getattr(settings, 'DB_NAME', None):
    SQLALCHEMY_DATABASE_URL = f"postgresql://{settings.DB_USER}:{settings.DB_PASSWORD}@{settings.DB_HOST}:{settings.DB_PORT}/{settings.DB_NAME}"
    try:
        # Attempt to use PostgreSQL driver; if it's not installed, fall back to sqlite
        import psycopg2  # type: ignore
        engine = create_engine(SQLALCHEMY_DATABASE_URL)
    except Exception:
        # psycopg2 not available or other import issue — use sqlite fallback for local dev
        SQLALCHEMY_DATABASE_URL = "sqlite:///./dev.db"
        engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
else:
    # sqlite fallback for local development (no external DB required)
    SQLALCHEMY_DATABASE_URL = "sqlite:///./dev.db"
    engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()