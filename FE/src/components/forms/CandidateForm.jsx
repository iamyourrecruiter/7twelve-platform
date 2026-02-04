import React, { useState } from 'react';
import PhoneInput from './PhoneInput';

const CandidateForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    phoneCode: '+91',
    age: '',
    gender: '',
    country: 'India',
    state: '',
    city: '',
    relocate: '',
    qualification: '',
    stream: '',
    experience: '',
    currentRole: '',
    skills: [],
    resume: null,
    jobType: '',
    salary: '',
    noticePeriod: '',
    summary: ''
  });

  const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
                    "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
                    "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
                    "Denmark", "Djibouti", "Dominica", "Dominican Republic",
                    "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
                    "Fiji", "Finland", "France",
                    "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
                    "Haiti", "Honduras", "Hungary",
                    "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
                    "Jamaica", "Japan", "Jordan",
                    "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
                    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
                    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
                    "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
                    "Oman",
                    "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
                    "Qatar",
                    "Romania", "Russia", "Rwanda",
                    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
                    "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
                    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
                    "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
                    "Yemen",
                    "Zambia", "Zimbabwe"];
  const qualifications = ["Graduate", "Postgraduate", "Diploma", "PhD"];
  const streams = ["IT/Software", "Marketing", "Finance", "Design", "Engineering", "Healthcare", "Sales"];
  const skillsByStream = {
    "IT/Software": ["Java", "Python", "JavaScript", "React", "Node.js", "SQL", "MongoDB"],
    "Marketing": ["Digital Marketing", "SEO/SEM", "Content Marketing", "Social Media"],
    "Finance": ["Accounting", "Financial Analysis", "Taxation", "Auditing"],
    "Design": ["UI/UX Design", "Figma", "Adobe XD", "Graphic Design"],
    "Engineering": ["AutoCAD", "Project Management", "Quality Control"],
    "Healthcare": ["Patient Care", "Medical Coding", "Clinical Research"],
    "Sales": ["B2B Sales", "Client Relations", "CRM", "Lead Generation"]
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSkillToggle = (skill) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-10 rounded-2xl shadow-lg space-y-8">
      {/* Personal Details */}
      <div>
        <h2 className="text-2xl font-alike font-bold text-[#161a5a] mb-6">Personal Details</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-raleway font-medium mb-2">Full Name *</label>
            <input 
              type="text" 
              name="fullName"
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] focus:border-transparent font-raleway" 
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-raleway font-medium mb-2">Email *</label>
            <input 
              type="email" 
              name="email"
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] focus:border-transparent font-raleway"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-raleway font-medium mb-2">Phone Number *</label>
            <PhoneInput
              phoneCode={formData.phoneCode}
              phone={formData.phone}
              onCodeChange={(code) => setFormData(prev => ({ ...prev, phoneCode: code }))}
              onPhoneChange={(phone) => setFormData(prev => ({ ...prev, phone }))}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-raleway font-medium mb-2">Age *</label>
            <input 
              type="number" 
              name="age"
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] focus:border-transparent font-raleway"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-raleway font-medium mb-2">Gender</label>
            <select 
              name="gender"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>
      </div>

      {/* Location Details */}
      <div>
        <h2 className="text-2xl font-alike font-bold text-[#161a5a] mb-6">Location</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label className="block text-gray-700 font-raleway font-medium mb-2">Country *</label>
            <select 
              name="country"
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
              value={formData.country}
              onChange={handleChange}
            >
              {countries.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-raleway font-medium mb-2">State *</label>
            <input 
              type="text" 
              name="state"
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
              value={formData.state}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-raleway font-medium mb-2">City *</label>
            <input 
              type="text" 
              name="city"
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* Professional Information */}
      <div>
        <h2 className="text-2xl font-alike font-bold text-[#161a5a] mb-6">Professional Information</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-raleway font-medium mb-2">Highest Qualification *</label>
            <select 
              name="qualification"
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
              value={formData.qualification}
              onChange={handleChange}
            >
              <option value="">Select</option>
              {qualifications.map(q => <option key={q}>{q}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-raleway font-medium mb-2">Stream/Field *</label>
            <select 
              name="stream"
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
              value={formData.stream}
              onChange={handleChange}
            >
              <option value="">Select</option>
              {streams.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-raleway font-medium mb-2">Years of Experience *</label>
            <input 
              type="number" 
              name="experience"
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
              value={formData.experience}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-raleway font-medium mb-2">Current Role</label>
            <input 
              type="text" 
              name="currentRole"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
              value={formData.currentRole}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* Skills */}
      {formData.stream && (
        <div>
          <h2 className="text-2xl font-alike font-bold text-[#161a5a] mb-6">Skills</h2>
          <div className="grid md:grid-cols-3 gap-3">
            {skillsByStream[formData.stream]?.map(skill => (
              <label key={skill} className="flex items-center space-x-2 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={formData.skills.includes(skill)}
                  onChange={() => handleSkillToggle(skill)}
                  className="w-5 h-5 text-[#161a5a] focus:ring-[#161a5a]"
                />
                <span className="font-raleway text-sm">{skill}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Resume Upload */}
      <div>
        <label className="block text-gray-700 font-raleway font-medium mb-2">Upload Resume (PDF, DOC, DOCX) *</label>
        <input 
          type="file" 
          accept=".pdf,.doc,.docx" 
          required 
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
          onChange={handleFileChange}
        />
      </div>

      {/* Additional Information */}
      <div>
        <h2 className="text-2xl font-alike font-bold text-[#161a5a] mb-6">Additional Information</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-raleway font-medium mb-2">Preferred Job Type</label>
            <select 
              name="jobType"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
              value={formData.jobType}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Internship</option>
              <option>Remote</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-raleway font-medium mb-2">Notice Period</label>
            <input 
              type="text" 
              name="noticePeriod"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
              value={formData.noticePeriod}
              onChange={handleChange}
              placeholder="e.g., Immediate, 30 days, 60 days"
            />
          </div>
           <div>
            <label className="block text-gray-700 font-raleway font-medium mb-2">Current Salary</label>
            <input 
              type="text" 
              name="currentSalary"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
              value={formData.currentSalary}
              onChange={handleChange}
              placeholder="e.g., 4LPA"
            />
          </div>
           <div>
            <label className="block text-gray-700 font-raleway font-medium mb-2">Expected Salary</label>
            <input 
              type="text" 
              name="expectedSalary"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
              value={formData.expectedSalary}
              onChange={handleChange}
              placeholder="e.g., 5LPA"
            />
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-gray-700 font-raleway font-medium mb-2">Profile Summary</label>
          <textarea 
            name="summary"
            rows="4" 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
            value={formData.summary}
            onChange={handleChange}
            placeholder="Brief description about yourself and your career goals..."
          />
        </div>
      </div>

      <button type="submit" className="w-full py-4 bg-[#161a5a] text-white font-raleway font-semibold rounded-lg hover:bg-[#0d0f3a] transition-all text-lg shadow-lg">
        Submit Profile
      </button>
    </form>
  );
};

export default CandidateForm;