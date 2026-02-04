# 7 Twelve Recruitment Platform

A comprehensive recruitment platform connecting candidates and companies with simplicity and efficiency.

## 🎯 Features

### Frontend Features
- ✅ Rotating hero text (2-3 seconds interval)
- ✅ 7 advertisement sliders with auto-rotation (3 seconds) and pause button
- ✅ Animated partner logos (grayscale → color on hover)
- ✅ Custom brand colors (#161a5a for primary, #8b0000 for secondary)
- ✅ Alike font for headings, Raleway for body text
- ✅ Responsive design with Tailwind CSS
- ✅ Sticky header navigation
- ✅ Blog section with flashcard design
- ✅ Country code dropdown with phone number input
- ✅ Admin panel for managing candidates, companies, ads, and blogs

### Pages Included
1. **Home Page** - Hero section, sliders, services preview, partners
2. **About Us** - Motto, vision, mission, founder section
3. **For Candidates** - Candidate registration form
4. **For Companies** - Company registration form with conditional fields
5. **Services** - Service listing with detailed descriptions
6. **Blog** - Blog flashcards with external/internal linking
7. **Blog Submission** - Form for users to submit blogs
8. **Admin Panel** - Dashboard for managing all submissions
9. **Contact** - Contact form

## 🎨 Design Specifications

### Colors
- Primary Blue: `#161a5a` (Company buttons, Contact Us, Apply Now, Hire Talent)
- Primary Red: `#8b0000` (Secondary buttons)
- Hover effects: Darker shades on hover

### Typography
- **Headings**: Alike (serif)
- **Body/Other**: Raleway (sans-serif)

### Location
- Footer location: India
- Country dropdown: Multiple countries with phone codes
- Phone input: Country code dropdown + number field

## 📦 Tech Stack

### Frontend
- React.js 18
- React Router DOM 6
- Tailwind CSS 3
- Vite

### Planned Backend
- Python
- FastAPI
- REST APIs
- PostgreSQL

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
7twelve-recruitment/
├── App.jsx                 # Main application component
├── src/
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles with Tailwind
├── index.html             # HTML template
├── package.json           # Dependencies
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind configuration
└── postcss.config.js      # PostCSS configuration
```

## 🎭 Component Overview

### Header
- Sticky navigation
- Logo with company name
- Navigation links
- Contact Us button

### Footer
- Company information
- Quick links
- Location: India
- Social media placeholders

### Home Page Features
1. **Rotating Hero Text** - 3 messages rotating every 2-3 seconds
2. **Advertisement Sliders** - 7 slots with pause button
3. **Trust Metrics** - Statistics cards
4. **How It Works** - Separate flows for candidates and companies
5. **Services Preview** - 4 service cards
6. **Partners Section** - Animated carousel with grayscale hover effect

### Forms
- **Candidate Form**: Personal details, location, professional info, skills, resume upload
- **Company Form**: Company info, location, services selection, conditional fields
- **Blog Submission**: Author info, blog content, cover image upload

### Admin Panel
- Password protected (default: admin123)
- Tabs for: Candidates, Companies, Advertisements, Blogs
- Add/Edit/Delete functionality placeholders

## 🔧 Customization

### Adding New Advertisements
In the admin panel, navigate to the Advertisements tab and click "Add New Advertisement". Upload images to replace dummy gradient backgrounds.

### Adding Partner Logos
Replace the dummy partner placeholders in the HomePage component with actual logo images. Ensure images support grayscale CSS filters.

### Updating Founder Information
In the AboutPage component, replace the placeholder founder data with actual information and photo.

## 📱 Responsive Design

The platform is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔐 Admin Access

Default admin credentials:
- Password: `admin123`

**Important**: Change this password in production!

## 🎯 Next Steps

### Backend Integration
1. Set up FastAPI backend
2. Create PostgreSQL database
3. Implement REST API endpoints
4. Connect forms to backend
5. Add file upload handling
6. Implement authentication

### Recommended API Endpoints
- `POST /api/candidates` - Submit candidate profile
- `POST /api/companies` - Submit company details
- `POST /api/blogs` - Submit blog
- `GET /api/admin/candidates` - Get all candidates
- `GET /api/admin/companies` - Get all companies
- `POST /api/admin/ads` - Add advertisement
- `PUT /api/admin/blogs/:id` - Update blog status

## 📄 License

All rights reserved - 7 Twelve © 2026

## 🤝 Support

For support, email: info@7twelve.com

---

**Note**: This is a frontend-only implementation. Backend integration with FastAPI and PostgreSQL is required for full functionality.
