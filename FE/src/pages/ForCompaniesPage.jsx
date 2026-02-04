import React, { useState } from 'react';
import CompanyForm from '../components/forms/CompanyForm';

const GlobalNetworkIcon = ({ size = 40 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path fill="#ECEFF1" d="M12 24c4.84 0 9.01-2.87 10.91-7h-5.46c-.95 4.13-3.03 7-5.45 7z" />
    <path fill="#B0BEC5" d="M1.09 17c1.9 4.13 6.07 7 10.91 7-2.42 0-4.5-2.87-5.45-7H1.09z" />
    <path fill="#ECEFF1" d="M12 0c2.42 0 4.5 2.87 5.45 7h5.46C21.01 2.87 16.84 0 12 0z" />
    <path fill="#B0BEC5" d="M1.09 7h5.46C7.5 2.87 9.58 0 12 0 7.16 0 2.99 2.87 1.09 7z" />
    <path fill="#CFD8DC" d="M6.55 17c.95 4.13 3.03 7 5.45 7s4.5-2.87 5.45-7H6.55zM6.55 7h10.9C16.5 2.87 14.42 0 12 0 9.58 0 7.5 2.87 6.55 7z" />
    <path fill="#90A4AE" d="M0 12c0 1.78.39 3.48 1.09 5h5.46C6.19 15.48 6 13.79 6 12s.19-3.48.55-5H1.09C.39 8.52 0 10.22 0 12z" />
    <path fill="#B0BEC5" d="M6 12c0 1.79.19 3.48.55 5h10.9c.36-1.52.55-3.21.55-5s-.19-3.48-.55-5H6.55C6.19 8.52 6 10.21 6 12z" />
    <path fill="#CFD8DC" d="M18 12c0 1.79-.19 3.48-.55 5h5.46c.7-1.52 1.09-3.22 1.09-5s-.39-3.48-1.09-5h-5.46c.36 1.52.55 3.21.55 5z" />
    <path fill="#00BCD4" d="M20 19c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zM23.25 24h-6.5a.75.75 0 0 1-.75-.75v-.5A2.752 2.752 0 0 1 18.75 20h2.5A2.752 2.752 0 0 1 24 22.75v.5a.75.75 0 0 1-.75.75z" />
  </svg>
);

const PaymentWalletIcon = ({ size = 40 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path
      fill="#4CAF50"
      d="M24 4.25A2.252 2.252 0 0 0 21.75 2H6.25A2.252 2.252 0 0 0 4 4.25v9a2.252 2.252 0 0 0 2.25 2.25h15.5A2.252 2.252 0 0 0 24 13.25v-9z"
    />
    <path
      fill="#388E3C"
      d="M6.25 17a3.754 3.754 0 0 1-3.75-3.75V9.864a.488.488 0 0 0-.959-.128C.864 12.238.077 15.155.077 15.155a2.252 2.252 0 0 0 1.591 2.755l14.973 4.012c.193.053.388.078.581.078.993 0 1.905-.664 2.174-1.667l.629-2.345a.785.785 0 0 0-.758-.988H6.25z"
    />
    <circle cx="14" cy="8.75" r="2.5" fill="#FAFAFA" />
    <path
      fill="#388E3C"
      d="M9.25 6.5h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5zM20.25 12.5h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5z"
    />
  </svg>
);

const PartnershipIcon = ({ size = 40 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path
      fill="#ffb74d"
      d="m20.75 12.594-1.61 1.671c-.51.446-1.22.586-1.862.367l-1.787-.612-4.811-5.489 5.164-1.812 5.094 1.719-.188 4.156z"
    />
    <path
      fill="#ffcc80"
      d="m15.83 11.75-.01-.01-5.37-5.37c-.76-.75-1.89-.99-2.88-.58L2.96 7.7a.74.74 0 0 0-.46.69v6.02c0 .41.34.75.75.75h.5c1.08 0 2.11.4 2.9 1.12l2.2 1.99c.4.39.92.58 1.44.58.54 0 1.08-.2 1.49-.61.19-.19.33-.41.43-.65.06-.13.1-.26.13-.39.56.03 1.13-.18 1.56-.6.24-.24.41-.53.5-.85v-.01c.05-.14.08-.27.1-.42.48-.04.94-.26 1.33-.65.79-.8.79-2.12 0-2.92z"
    />
    <path
      fill="#607d8b"
      d="M3.25 16H.75a.75.75 0 0 1-.75-.75v-8.5A.75.75 0 0 1 .75 6h2.5a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-.75.75z"
    />
    <path
      fill="#ffb74d"
      d="M11.013 10.72a2.023 2.023 0 0 1-1.998-2.35 2.03 2.03 0 0 1 1.093-1.487l3.305-1.655a2.65 2.65 0 0 1 2.202-.077l2.289.936.038.016 3.093 1.265a.75.75 0 0 1-.567 1.389L17.67 7.613l-5.745 2.89c-.29.146-.602.217-.912.217zM12.34 17.2c-.03.13-.07.26-.13.39l-3.57-3.5a.408.408 0 0 1-.19-.35c0-.11.04-.22.13-.3l3.76 3.76zM14.5 15.32c-.02.15-.05.28-.1.42l-3.53-3.47a.397.397 0 0 1-.19-.35c0-.1.04-.21.12-.29l3.7 3.69z"
    />
    <path
      fill="#607d8b"
      d="M23.25 16h-2.5a.75.75 0 0 1-.75-.75v-8.5a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-.75.75z"
    />
  </svg>
);

const GrowthAnalyticsIcon = ({ size = 40 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path
      fill="#2196F3"
      d="M4.784 19.199a1 1 0 0 1 .018-1.415l2.447-2.389a.999.999 0 0 1 1.119-.191l2.167 1.004 3.595-3.752a.999.999 0 1 1 1.443 1.384l-4.089 4.268a1 1 0 0 1-1.143.215l-2.189-1.015-1.954 1.907a.999.999 0 0 1-1.414-.016z"
    />
    <path
      fill="#2196F3"
      d="m14.293 16.207-2.5-2.5c-.63-.63-.18-1.707.707-1.707H15a1 1 0 0 1 1 1v2.5c0 .892-1.082 1.332-1.707.707z"
    />
    <path
      fill="#607D8B"
      d="M2 24a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v19a1 1 0 0 1-1 1z"
    />
    <path
      fill="#607D8B"
      d="M20 23H1a1 1 0 1 1 0-2h19a1 1 0 1 1 0 2z"
    />
    <path
      fill="#CFD8DC"
      d="M20.5 9H14c-1.654 0-3-1.346-3-3a3.005 3.005 0 0 1 2.424-2.945A4.268 4.268 0 0 1 17.5 0c1.499 0 2.885.797 3.643 2.063A3.493 3.493 0 0 1 24 5.5C24 7.43 22.43 9 20.5 9z"
    />
  </svg>
);

const LearningGuidanceIcon = ({ size = 40 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path
      fill="#ECEFF1"
      d="M12 21a.49.49 0 0 1-.215-.049c-2.484-1.184-5.647-1.268-9.955-.268-.445.103-.904 0-1.262-.285A1.49 1.49 0 0 1 0 19.223V3.113c0-.564.323-1.09.822-1.342C5.603-.631 9.17-.617 12 1.825c2.831-2.442 6.398-2.454 11.178-.054.499.251.822.778.822 1.342v16.11c0 .461-.207.89-.568 1.176a1.483 1.483 0 0 1-1.262.285c-4.307-1.001-7.471-.917-9.955.268A.503.503 0 0 1 12 21z"
    />
    <path
      fill="#90A4AE"
      d="M13 1.08v19.54c-.27.1-.53.21-.78.33-.07.03-.15.05-.22.05s-.15-.02-.22-.05c-.25-.12-.51-.23-.78-.33V1.08c.34.21.68.46 1 .74.32-.28.66-.53 1-.74z"
    />
    <path
      fill="#4CAF50"
      d="M20.86 11.153a.501.501 0 0 0-.857.402c.244 2.201-.775 2.835-1.955 3.569-.96.597-2.048 1.274-2.048 2.875 0 1.204.544 2.273 1.387 3.007a8.22 8.22 0 0 1-2.001 1.587.75.75 0 0 0 .728 1.312 9.59 9.59 0 0 0 2.605-2.132C19.5 20.791 20 19.52 20 18c0 0 .649 2.479.267 3.972 2.066-.147 3.706-1.859 3.699-3.884.022-.128.515-3.169-3.106-6.935z"
    />
  </svg>
);


const ForCompaniesPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (formData) => {
    console.log('Company form submitted:', formData);
    setIsSubmitted(true);
    // TODO: Send to API
  };

  const services = [
  {
    icon: GlobalNetworkIcon,
    title: "Hiring Talents",
    description:
      "Find skilled candidates for your roles, from freshers to experienced professionals, faster."
  },
  {
    icon: PaymentWalletIcon,
    title: "Payroll Management",
    description:
      "Simplify your payroll with compliant, secure, and accurate solutions."
  },
  {
    icon: PartnershipIcon,
    title: "Employer Branding",
    description:
      "Attract top talent by building a strong online presence and reputation."
  },
  {
    icon: GrowthAnalyticsIcon,
    title: "Project-Based Consultants",
    description:
      "Access professionals for short-term, flexible projects, from a day to a month."
  },
  {
    icon: LearningGuidanceIcon,
    title: "Exhibition & Job Fair Content + Designs",
    description:
      "Get creative, compelling designs and content for your job fairs."
  }
];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-6">
        <div className="max-w-2xl mx-auto text-center bg-white p-12 rounded-2xl shadow-lg">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-alike font-bold text-[#8b0000] mb-4">Company Details Submitted!</h2>
          <p className="text-gray-600 font-raleway mb-8">
            Thank you for your interest in partnering with 7 Twelve. Our team will review your submission and get back to you shortly.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-8 py-3 bg-[#8b0000] text-white font-raleway font-semibold rounded-lg hover:bg-[#6d0000] transition-all"
          >
            Submit Another Company
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-alike font-bold text-[#8b0000] text-center mb-6">
            Partner With Us
          </h1>
          <p className="text-xl text-gray-600 font-raleway text-center mb-12">
            Let's work together to build your team and brand
          </p>
             {/* Service Cards */}
            <div className="flex gap-6 mb-12">
            {services.map((service, index) => (
                <div
                key={index}
                className="bg-white p-5 rounded-xl
                            shadow-md
                            transition-all duration-300 ease-out
                            hover:shadow-[0_12px_25px_rgba(22,26,90,0.55)]
                            hover:-translate-y-1
                            text-center w-64"

                >
                <div className="w-12 h-12 
                rounded-full flex items-center justify-center mx-auto mb-3">
                <service.icon size={40} />
                </div>

                <h3 className="font-raleway font-bold text-sm text-[#161a5a] mb-2">
                    {service.title}
                </h3>
                <p className="text-xs text-gray-600 font-raleway leading-relaxed">
                    {service.description}
                </p>
                </div>
            ))}
            </div>
          <CompanyForm onSubmit={handleSubmit} />
        </div>
      </section>
    </div>
  );
};

export default ForCompaniesPage;