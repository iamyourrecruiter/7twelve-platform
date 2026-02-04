// Application Constants

export const APP_NAME = '7 Twelve';
export const APP_TAGLINE = 'Simplifying careers, hiring, and growth for everyone';

// Colors
export const COLORS = {
  PRIMARY_BLUE: '#161a5a',
  PRIMARY_RED: '#8b0000',
  DARK_BLUE: '#0d0f3a',
  DARK_RED: '#6d0000'
};

// Countries with phone codes
export const COUNTRIES = [
  { name: "India", code: "+91" },
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" },
  { name: "Canada", code: "+1" },
  { name: "Australia", code: "+61" },
  { name: "Germany", code: "+49" },
  { name: "France", code: "+33" },
  { name: "Japan", code: "+81" },
  { name: "China", code: "+86" },
  { name: "Singapore", code: "+65" }
];

// Form Options
export const QUALIFICATIONS = [
  "Graduate",
  "Postgraduate",
  "Diploma",
  "PhD"
];

export const STREAMS = [
  "IT/Software",
  "Marketing",
  "Finance",
  "Design",
  "Engineering",
  "Healthcare",
  "Sales",
  "Operations",
  "HR"
];

export const COMPANY_TYPES = [
  "Startup",
  "SME",
  "Enterprise",
  "Agency"
];

export const COMPANY_SIZES = [
  "1-10",
  "11-50",
  "51-200",
  "200+"
];

export const JOB_TYPES = [
  "Full-time",
  "Part-time",
  "Internship",
  "Remote",
  "Contract"
];

export const EXPERIENCE_LEVELS = [
  "Fresher",
  "Mid-Level (2-5 years)",
  "Senior (5+ years)"
];

export const HIRING_TIMELINES = [
  "Immediate",
  "1-3 Months",
  "Flexible"
];

// Services
export const SERVICES_LIST = [
  'Recruitment/Hiring',
  'Job Advertising',
  'Employer Branding',
  'Talent Pool Access',
  'End-to-End Hiring Support'
];

// Admin
export const DEFAULT_ADMIN_PASSWORD = 'admin123';

// File Upload
export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
export const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
export const ACCEPTED_RESUME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

// API
export const API_ENDPOINTS = {
  CANDIDATES: '/candidates',
  COMPANIES: '/companies',
  BLOGS: '/blogs',
  CONTACT: '/contact',
  ADMIN: '/admin'
};

// Status
export const STATUS_TYPES = {
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected',
  PUBLISHED: 'published',
  DRAFT: 'draft'
};

export default {
  APP_NAME,
  APP_TAGLINE,
  COLORS,
  COUNTRIES,
  QUALIFICATIONS,
  STREAMS,
  COMPANY_TYPES,
  COMPANY_SIZES,
  SERVICES_LIST,
  DEFAULT_ADMIN_PASSWORD
};