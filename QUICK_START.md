# 7Twelve Recruitment Platform - Complete Deployment & Run Guide

## Quick Start

### 1. Backend (FastAPI + Python)

```powershell
cd BE
py -3.11 -m venv .venv
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip setuptools wheel
python -m pip install -r requirements.txt

# Optional: Set HF API key for better AI inference limits
$env:HUGGINGFACE_API_KEY = "hf_your_token"

uvicorn app.main:app --reload --host 127.0.0.1 --port 8001
```

**API Docs:** http://127.0.0.1:8001/docs

### 2. Frontend (React + Vite)

```bash
cd FE
npm install
npm run dev
```

**Dev Server:** http://127.0.0.1:5173

### 3. Production Build & Serve

```bash
cd FE
npm run build
npx http-server dist -p 3000
```

**Prod:** http://127.0.0.1:3000

---

## Git & GitHub Push (Done ✓)

All changes have been committed and pushed to:
- **GitHub:** https://github.com/iamyourrecruiter/7Twelve_

**Latest commit:** "Add AI features: resume builder/analyzer, salary calculator, job listings with file uploads and premium UI"

---

## New AI Features (All Implemented)

### 1. Resume Builder (`/ai/resume-builder`)
- Build professional resume from text or upload existing resume
- Uses Hugging Face T5 for AI-powered formatting
- Supports PDF/DOCX uploads

### 2. Resume Analyzer (`/ai/resume-analyzer`)
- Analyze resume strengths, weaknesses, ATS keywords
- Target role matching
- File upload support (PDF/DOCX)

### 3. Salary Calculator (`/ai/salary`)
- Estimate salary based on job title and experience
- Heuristic-based calculation

### 4. Job Listings (`/ai/jobs`)
- Free job listings from Remotive API
- Industry and keyword search
- 100% free, no authentication needed

---

## File Changes Summary

### Backend (`BE/`)
- `app/api/ai.py` - NEW AI endpoints (resume, salary, jobs)
- `app/main.py` - Registered AI router + expanded CORS
- `requirements.txt` - Added pdfminer.six, python-docx

### Frontend (`FE/`)
- `src/services/api.js` - Exposed `aiAPI` methods
- `src/pages/AIResumeBuilder.jsx` - NEW
- `src/pages/AIResumeAnalyzer.jsx` - NEW
- `src/pages/AISalaryCalculator.jsx` - NEW
- `src/pages/AIJobListings.jsx` - NEW
- `src/styles/premium.css` - NEW (premium UI)
- `src/App.jsx` - Added new routes

### Documentation
- `README_AI.md` - Setup guide for AI features
- `DEPLOYMENT.md` - Complete deployment instructions

---

## Cloud Deployment Options

### Option 1: Heroku (Backend)
```bash
heroku login
heroku create 7twelve-api
git subtree push --prefix BE heroku main
```

### Option 2: Vercel (Frontend)
```bash
npm install -g vercel
cd FE
vercel --prod
```

### Option 3: Netlify (Frontend)
```bash
npm install -g netlify-cli
cd FE
netlify deploy --prod --dir=dist
```

### Option 4: Docker (Full Stack)
```bash
docker build -t 7twelve .
docker run -p 8000:8000 -p 3000:3000 7twelve
```

---

## Environment Variables

### Backend (.env or system)
```
HUGGINGFACE_API_KEY=hf_your_token  # Optional but recommended
DATABASE_URL=sqlite:///./dev.db     # Or PostgreSQL
PYTHONUNBUFFERED=1
```

### Frontend (.env.local)
```
VITE_API_BASE_URL=http://your-api-domain/api
```

---

## Verification Checklist

- [x] Python dependencies installed (pdfminer.six, python-docx)
- [x] Frontend rebuilt with premium styles
- [x] AI endpoints implemented and wired
- [x] File upload support added (PDF/DOCX)
- [x] Git configured and pushed to GitHub
- [x] Deployment guide created
- [x] All new features tested locally

---

## Next Steps (If Needed)

1. **Set HuggingFace API Key:** For better rate limits on AI features
2. **Configure Database:** Switch from SQLite to PostgreSQL for production
3. **Add SSL/TLS:** For HTTPS in production
4. **Setup CI/CD:** GitHub Actions for auto-deploy on push
5. **Add monitoring:** Sentry, DataDog, or similar

---

## Support & Resources

- **GitHub:** https://github.com/iamyourrecruiter/7Twelve_
- **HuggingFace:** https://huggingface.co/
- **Remotive API Docs:** https://remotive.com/api/remote-jobs
- **FastAPI Docs:** https://fastapi.tiangolo.com/
- **React Docs:** https://react.dev/

---

**Status:** ✅ All features implemented, built, committed, and ready to deploy!
