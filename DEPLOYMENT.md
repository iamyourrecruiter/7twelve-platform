# Deployment Guide

## Prerequisites

- Python 3.11+
- Node.js 18+
- Git

## Environment Setup

### Backend

1. Clone and navigate to BE:
```bash
git clone https://github.com/iamyourrecruiter/7Twelve_.git
cd 7Twelve_/BE
```

2. Create virtual environment and install dependencies:
```bash
python -m venv .venv
source .venv/bin/activate  # On Windows: .\.venv\Scripts\Activate.ps1
pip install --upgrade pip setuptools wheel
pip install -r requirements.txt
```

3. Set up environment variables (optional but recommended):
```bash
export HUGGINGFACE_API_KEY="hf_your_token_here"  # Get from https://huggingface.co/
export DATABASE_URL="sqlite:///./dev.db"  # Or PostgreSQL connection string
```

4. Run backend:
```bash
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

Backend API: `http://localhost:8000/api`

---

### Frontend

1. Navigate to FE:
```bash
cd ../FE
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (optional, for custom API URL):
```
VITE_API_BASE_URL=http://localhost:8000/api
```

4. Development server:
```bash
npm run dev
```

5. Production build:
```bash
npm run build
# Serve dist folder: npx http-server dist -p 3000
```

Frontend dev: `http://localhost:5173`
Frontend prod: `http://localhost:3000`

---

## Cloud Deployment

### Heroku (Backend + Frontend)

1. Install Heroku CLI and authenticate:
```bash
heroku login
heroku create 7twelve-api
```

2. Set environment variables:
```bash
heroku config:set HUGGINGFACE_API_KEY=hf_...
```

3. Deploy:
```bash
git subtree push --prefix BE heroku main
```

4. For frontend, use Vercel/Netlify:

**Vercel:**
```bash
npm install -g vercel
cd FE
vercel --prod
```

**Netlify:**
```bash
npm install -g netlify-cli
cd FE
netlify deploy --prod --dir=dist
```

### Docker (Optional)

Backend Dockerfile:
```dockerfile
FROM python:3.11
WORKDIR /app
COPY BE/requirements.txt .
RUN pip install -r requirements.txt
COPY BE/app ./app
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

Build and run:
```bash
docker build -t 7twelve-api .
docker run -p 8000:8000 -e HUGGINGFACE_API_KEY=hf_... 7twelve-api
```

---

## New AI Features

### Resume Builder
- **Endpoint:** `POST /api/ai/resume/build` (text form)
- **Endpoint:** `POST /api/ai/resume/build-file` (file upload)
- **Frontend:** `/ai/resume-builder`

### Resume Analyzer
- **Endpoint:** `POST /api/ai/resume/analyze` (text form)
- **Endpoint:** `POST /api/ai/resume/analyze-file` (file upload)
- **Frontend:** `/ai/resume-analyzer`

### Salary Calculator
- **Endpoint:** `POST /api/ai/salary/calc`
- **Frontend:** `/ai/salary`

### Job Listings
- **Endpoint:** `GET /api/ai/jobs?search=...&industry=...`
- **Data Source:** Remotive API (free)
- **Frontend:** `/ai/jobs`

---

## Troubleshooting

**HuggingFace Rate Limits:**
- Free tier has limited requests. Add your token for better limits.
- Consider caching responses on server.

**CORS Issues:**
- Update `CORS allow_origins` in `BE/app/main.py` for your domain.

**File Upload Errors:**
- Ensure `uploads/` directory exists in BE.
- Check file permissions on server.

---

## Support

For issues, refer to:
- `README_AI.md` (AI features setup)
- `FEATURE_CHECKLIST.md` (current features)
- GitHub Issues: https://github.com/iamyourrecruiter/7Twelve_
