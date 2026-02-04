import React, { useState } from 'react';
import PhoneInput from './PhoneInput';

const CompanyForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phone: '',
    phoneCode: '+91',
    website: '',
    country: 'India',
    state: '',
    city: '',
    companyType: '',
    companySize: '',
    services: [],
    roles: '',
    positions: '',
    experienceLevel: '',
    timeline: '',
    brandingObjective: '',
    platforms: '',
    campaignDuration: '',
    budget: '',
    decisionTimeline: '',
    contactPerson: '',
    designation: '',
    preferredContact: '',
    message: ''
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
  const servicesList = [
    'Recruitment/Hiring',
    'Job Advertising',
    'Employer Branding',
    'Payroll Services',
    'Exhibition and Job Fair Content'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleService = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const showRecruitmentFields = formData.services.some(s => 
    s.includes('Recruitment') || s.includes('Hiring')
  );

  const showBrandingFields = formData.services.some(s => 
    s.includes('Branding')
  );

  return (
    <form onSubmit={handleSubmit} className="bg-white p-10 rounded-2xl shadow-lg space-y-8">
      {/* Company Information */}
      <div>
        <h2 className="text-2xl font-alike font-bold text-[#8b0000] mb-6">Company Information</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-raleway font-medium mb-2">Company Name *</label>
            <input 
              type="text" 
              name="companyName"
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b0000] font-raleway"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-raleway font-medium mb-2">Official Email *</label>
            <input 
              type="email" 
              name="email"
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b0000] font-raleway"
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
              codeClassName="w-1"  
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-raleway font-medium mb-2">Company Website *</label>
            <input 
              type="url" 
              name="website"
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b0000] font-raleway"
              value={formData.website}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* Location */}
      <div>
        <h2 className="text-2xl font-alike font-bold text-[#8b0000] mb-6">Location</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label className="block text-gray-700 font-raleway font-medium mb-2">Country *</label>
            <select 
              name="country"
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b0000] font-raleway"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b0000] font-raleway"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b0000] font-raleway"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* Company Profile */}
      <div>
        <h2 className="text-2xl font-alike font-bold text-[#8b0000] mb-6">Company Profile</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-raleway font-medium mb-2">Company Type *</label>
            <select 
              name="companyType"
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b0000] font-raleway"
              value={formData.companyType}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option>Startup</option>
              <option>SME</option>
              <option>Enterprise</option>
              <option>Agency</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-raleway font-medium mb-2">Company Size *</label>
            <select 
              name="companySize"
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b0000] font-raleway"
              value={formData.companySize}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option>1-10</option>
              <option>11-50</option>
              <option>51-200</option>
              <option>200+</option>
            </select>
          </div>
        </div>
      </div>

      {/* Services */}
      <div>
        <h2 className="text-2xl font-alike font-bold text-[#8b0000] mb-6">Services Interested In *</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {servicesList.map(service => (
            <label key={service} className="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
              <input 
                type="checkbox" 
                checked={formData.services.includes(service)} 
                onChange={() => toggleService(service)}
                className="w-5 h-5 text-[#8b0000] focus:ring-[#8b0000]" 
              />
              <span className="font-raleway">{service}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Conditional Recruitment Fields */}
      {showRecruitmentFields && (
        <div>
          <h2 className="text-2xl font-alike font-bold text-[#8b0000] mb-6">Recruitment Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-raleway font-medium mb-2">Roles Hiring For</label>
              <input 
                type="text" 
                name="roles"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b0000] font-raleway"
                value={formData.roles}
                onChange={handleChange}
                placeholder="e.g., Software Engineer, Marketing Manager"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-raleway font-medium mb-2">Number of Positions</label>
              <input 
                type="number" 
                name="positions"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b0000] font-raleway"
                value={formData.positions}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-raleway font-medium mb-2">Experience Level Required</label>
              <select 
                name="experienceLevel"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b0000] font-raleway"
                value={formData.experienceLevel}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>Fresher</option>
                <option>Mid-Level (2-5 years)</option>
                <option>Senior (5+ years)</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-raleway font-medium mb-2">Hiring Timeline</label>
              <select 
                name="timeline"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b0000] font-raleway"
                value={formData.timeline}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>Immediate</option>
                <option>1-3 Months</option>
                <option>Flexible</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Conditional Branding Fields */}
      {showBrandingFields && (
        <div>
          <h2 className="text-2xl font-alike font-bold text-[#8b0000] mb-6">Branding Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-raleway font-medium mb-2">Branding Objective</label>
              <input 
                type="text" 
                name="brandingObjective"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b0000] font-raleway"
                value={formData.brandingObjective}
                onChange={handleChange}
                placeholder="e.g., Increase brand visibility"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-raleway font-medium mb-2">Preferred Platforms</label>
              <input 
                type="text" 
                name="platforms"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b0000] font-raleway"
                value={formData.platforms}
                onChange={handleChange}
                placeholder="e.g., Social Media, Job Portals"
              />
            </div>
          </div>
        </div>
      )}

      {/* Contact Person */}
      <div>
        <h2 className="text-2xl font-alike font-bold text-[#8b0000] mb-6">Contact Person</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-raleway font-medium mb-2">Name *</label>
            <input 
              type="text" 
              name="contactPerson"
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b0000] font-raleway"
              value={formData.contactPerson}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-raleway font-medium mb-2">Designation *</label>
            <input 
              type="text" 
              name="designation"
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b0000] font-raleway"
              value={formData.designation}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-gray-700 font-raleway font-medium mb-2">Additional Requirements</label>
        <textarea 
          name="message"
          rows="4" 
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b0000] font-raleway"
          value={formData.message}
          onChange={handleChange}
          placeholder="Any specific requirements or questions..."
        />
      </div>

      <button type="submit" className="w-full py-4 bg-[#8b0000] text-white font-raleway font-semibold rounded-lg hover:bg-[#6d0000] transition-all text-lg shadow-lg">
        Submit Company Details
      </button>
    </form>
  );
};

export default CompanyForm;