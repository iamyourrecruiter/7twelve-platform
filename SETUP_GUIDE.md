# 🚀 Quick Setup Guide - 7 Twelve Recruitment Platform

## What You've Got

A complete React-based recruitment platform with:
- ✅ All 9 pages fully implemented
- ✅ Rotating hero text (2-3 sec intervals)
- ✅ 7 advertisement sliders with pause functionality
- ✅ Animated partner section (grayscale → color)
- ✅ Blog submission and display system
- ✅ Admin panel (password: admin123)
- ✅ Custom fonts: Alike (headings) + Raleway (body)
- ✅ Brand colors: #161a5a (primary), #8b0000 (secondary)
- ✅ Country code dropdowns with phone inputs
- ✅ Fully responsive design

## 📦 Installation Steps

### Step 1: Extract the Files
Extract the entire `7twelve-recruitment` folder to your desired location.

### Step 2: Install Dependencies
Open terminal in the project folder and run:
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

The site will open at: http://localhost:3000

## 🎨 Customization Checklist

### Immediate Changes Needed

1. **Add Logo Image**
   - Replace the placeholder "7T" logo in Header component
   - Add your actual logo file to project
   - Update the logo section in `App.jsx`

2. **Add Founder Information**
   - In AboutPage component, replace:
     - Founder photo
     - Name
     - Designation
     - Bio

3. **Update Contact Information**
   - In Footer component, update:
     - Email address
     - Phone number
     - Social media links

4. **Replace Advertisement Placeholders**
   - Login to admin panel (password: admin123)
   - Upload actual advertisement images
   - Currently showing colorful gradient placeholders

5. **Add Partner Logos**
   - Replace dummy partner placeholders with actual logos
   - Ensure logos are in PNG format with transparent backgrounds
   - Place in a new `/src/assets/partners/` folder

## 🔧 Key Files to Modify

### App.jsx
Main application file containing all components. Key sections:

**Line 123-133**: Hero rotating text
**Line 139-149**: Advertisement slider data
**Line 151-157**: Partner logos data
**Line 1152-1168**: Founder section
**Line 645-660**: Footer information

### Color Customization
If you need to change colors beyond #161a5a and #8b0000:
1. Update `tailwind.config.js`
2. Search and replace color codes in `App.jsx`

## 📱 Pages Overview

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Landing page with hero, sliders, partners |
| About | `/about` | Company story, vision, mission, founder |
| For Candidates | `/for-candidates` | Candidate registration form |
| For Companies | `/for-companies` | Company registration form |
| Services | `/services` | Service listing |
| Blog | `/blog` | Blog flashcards display |
| Submit Blog | `/submit-blog` | Blog submission form |
| Admin | `/admin` | Admin dashboard |
| Contact | `/contact` | Contact form |

## 🔐 Admin Panel

**Access**: Navigate to `/admin`
**Password**: admin123 (⚠️ Change this!)

**Features**:
- View candidate applications
- Review company submissions
- Manage advertisements
- Approve/edit blogs

## 🌐 Backend Integration (Next Steps)

The frontend is ready. To make it functional:

### Required API Endpoints

```python
# FastAPI endpoints needed:

POST /api/candidates          # Submit candidate profile
POST /api/companies          # Submit company details  
POST /api/blogs              # Submit blog
GET  /api/blogs              # Get all blogs
POST /api/admin/login        # Admin authentication
GET  /api/admin/candidates   # Get all candidates
GET  /api/admin/companies    # Get all companies
POST /api/admin/ads          # Upload advertisement
PUT  /api/admin/blogs/:id    # Update blog status
```

### Database Schema (PostgreSQL)

**Candidates Table**:
- id, full_name, email, phone, age, gender
- country, state, city, relocate
- qualification, stream, experience, current_role
- skills (JSON), resume_url
- job_type, salary, notice_period, summary
- created_at

**Companies Table**:
- id, company_name, email, phone, website
- country, state, city
- company_type, company_size
- services (JSON array)
- roles, positions, experience_level, timeline
- branding_objective, platforms, campaign_duration
- contact_person, designation, preferred_contact
- message, status (pending/approved)
- created_at

**Advertisements Table**:
- id, title, image_url, link_url, active
- created_at, updated_at

**Blogs Table**:
- id, title, description, content, cover_image_url
- author_name, author_email
- source (Internal/Medium/LinkedIn/Instagram)
- external_link, featured, status (draft/published)
- created_at, updated_at

## 📋 Pre-Launch Checklist

- [ ] Replace logo placeholder with actual logo
- [ ] Add founder photo and information
- [ ] Update footer contact details
- [ ] Add social media links
- [ ] Upload advertisement images via admin panel
- [ ] Add partner company logos
- [ ] Change admin password
- [ ] Test all forms
- [ ] Test on mobile devices
- [ ] Set up backend API
- [ ] Connect forms to backend
- [ ] Set up PostgreSQL database
- [ ] Deploy backend and frontend

## 🎯 Features Implemented

### Home Page ✅
- Rotating hero text (Job Search, Advertising, Recruitment)
- Two CTA buttons (Candidates, Companies)
- 7 advertisement sliders with pause button
- Trust metrics section
- How It Works (separate for candidates/companies)
- Services preview cards
- Partners moving carousel (grayscale hover effect)

### Forms ✅
- Candidate: Full profile with resume upload
- Company: Comprehensive company details with conditional fields
- Blog Submission: Author info + content
- Country code dropdowns on all phone inputs

### Admin Panel ✅
- Password protected
- Tabs for candidates, companies, ads, blogs
- Placeholder for add/edit/delete operations

### Styling ✅
- Custom colors (#161a5a, #8b0000)
- Alike font for headings
- Raleway for body text
- Smooth animations and transitions
- Fully responsive

## 💡 Tips

1. **Logo Placement**: The logo appears in:
   - Header (top left)
   - Footer
   - Update both locations

2. **Advertisement Images**: 
   - Recommended size: 1200x600px
   - Format: JPG or PNG
   - Compress for web performance

3. **Partner Logos**:
   - Recommended size: 200x100px
   - Format: PNG with transparency
   - Will be converted to grayscale via CSS

4. **Blog Images**:
   - Cover images: 800x400px recommended
   - Thumbnail: 400x200px

## 🆘 Troubleshooting

**Issue**: npm install fails
**Solution**: Delete `node_modules` and `package-lock.json`, then run `npm install` again

**Issue**: Rotating text not working
**Solution**: Check browser console for JavaScript errors

**Issue**: Images not loading
**Solution**: Ensure images are in correct format and path

**Issue**: Admin login not working
**Solution**: Password is case-sensitive: "admin123"

## 📞 Need Help?

For questions or issues:
- Check the README.md file
- Review component code in App.jsx
- Ensure all dependencies are installed

---

**Built with ❤️ for 7 Twelve**

Last Updated: January 2026
