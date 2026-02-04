import React, { useState } from 'react';
import CandidateForm from '../components/forms/CandidateForm';
const ResumeIcon = ({ size = 40 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path
      fill="#ECEFF1"
      d="M18.25 24H5.75A2.752 2.752 0 0 1 3 21.25V2.75A2.752 2.752 0 0 1 5.75 0h12.5A2.752 2.752 0 0 1 21 2.75v18.5A2.752 2.752 0 0 1 18.25 24z"
    />
    <path
      fill="#90A4AE"
      d="M17 14H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zM17 19H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zM10.25 9h-1.5C7.785 9 7 8.215 7 7.25v-2.5C7 3.785 7.785 3 8.75 3h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h1.5a.75.75 0 0 1 0 1.5zM14.277 8.451l-1.25-4.5a.75.75 0 1 1 1.445-.401L15 5.448l.527-1.898a.75.75 0 1 1 1.445.401l-1.25 4.5c-.201.73-1.243.73-1.445 0z"
    />
  </svg>
);

const ProfileConsultationIcon = ({ size = 40 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path
      fill="#FFDBA6"
      d="M12 .75c-4.013 0-6.755 2.983-6.755 6.641 0 .218.01.442.029.67.017.212.042.428.075.647a1.972 1.972 0 0 0-.599 1.402c0 1.01.748 1.742 1.63 2.003.203.44.43.87.683 1.28 1.1 1.786 2.78 3.359 4.937 3.359 2.158 0 3.837-1.573 4.937-3.359.252-.41.48-.84.682-1.28.883-.261 1.631-.992 1.631-2.002 0-.56-.24-1.045-.599-1.403.033-.22.058-.435.075-.647.02-.228.029-.452.029-.67C18.755 3.733 16.013.75 12 .75Z"
    />
    <path
      fill="#486472"
      fillRule="evenodd"
      d="M18.709 8.25h-5.157a3.75 3.75 0 0 1-2.342-.822l-.902-.721a3.75 3.75 0 0 1-3.34 2.043h-1.66a8.189 8.189 0 0 1-.029-.67C5.245 3.733 7.987.75 12 .75s6.755 2.983 6.755 6.641c0 .286-.017.572-.046.859Z"
    />
    <path
      fill="#FAFAFA"
      fillRule="evenodd"
      d="m17.882 12.02-.966-.644a.702.702 0 0 0-.052-.031l-2.557-1.421a4.75 4.75 0 0 0-4.614 0l-2.557 1.42a.712.712 0 0 0-.052.032l-.966.644c.086.036.174.067.263.093.202.44.43.87.682 1.28 1.1 1.786 2.78 3.359 4.937 3.359 2.158 0 3.837-1.573 4.937-3.359.252-.41.48-.84.682-1.28.09-.026.177-.057.263-.093Z"
    />
    <path
      fill="#ECEFF1"
      d="M6 17.25a5.181 5.181 0 0 0-4.81 3.257l-.338.843a1.75 1.75 0 0 0 1.625 2.4h19.046a1.75 1.75 0 0 0 1.625-2.4l-.338-.843A5.18 5.18 0 0 0 18 17.25H6Z"
    />
    <path
      fill="#90A7B2"
      d="M7.133 14.25a1.75 1.75 0 0 0-1.737 1.967l.86 6.876A.75.75 0 0 0 7 23.75h10a.75.75 0 0 0 .744-.657l.86-6.876a1.75 1.75 0 0 0-1.737-1.967H7.133Z"
    />
    <path
      fill="#FAFAFA"
      fillRule="evenodd"
      d="M10.25 19a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Z"
    />
  </svg>
);
const JobSearchConsultationIcon = ({ size = 40 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path fill="#2196F3" fillRule="evenodd" d="M6.385 17.25a5.75 5.75 0 0 0-5.339 3.614l-.194.486a1.75 1.75 0 0 0 1.625 2.4h19.046a1.75 1.75 0 0 0 1.625-2.4l-.194-.486a5.75 5.75 0 0 0-5.34-3.614H6.386Z" />
    <path fill="#E5E6E8" fillRule="evenodd" d="M9 17.25a.75.75 0 0 0-.643 1.136l3 5a.75.75 0 0 0 1.286 0l3-5A.75.75 0 0 0 15 17.25H9Z" />
    <path fill="#59B4FD" fillRule="evenodd" d="M9.643 17.614a.75.75 0 0 0-1.173-.144l-2.5 2.5a.75.75 0 0 0 .144 1.173l5.5 2.5a.75.75 0 0 0 1.03-1.029l-3-5Z" />
    <path fill="#59B4FD" fillRule="evenodd" d="M14.357 17.614a.75.75 0 0 1 1.173-.144l2.5 2.5a.75.75 0 0 1-.144 1.173l-5.5 2.5a.75.75 0 0 1-1.03-1.029l3-5Z" />
    <path fill="#FFDBA6" fillRule="evenodd" d="M12 .75c-4.013 0-6.755 2.983-6.755 6.641 0 .42.036.862.104 1.317a1.972 1.972 0 0 0-.599 1.402c0 1.01.748 1.742 1.63 2.003.523 1.135 1.222 2.22 2.083 3.055.954.926 2.15 1.584 3.537 1.584s2.583-.658 3.537-1.584c.861-.835 1.56-1.92 2.082-3.055.883-.261 1.631-.992 1.631-2.002 0-.56-.24-1.045-.599-1.403.068-.455.104-.898.104-1.317C18.755 3.733 16.013.75 12 .75Z" />
    <path fill="#486472" fillRule="evenodd" d="M18.692 8.75h-5.086a3.75 3.75 0 0 1-3.12-1.67l-.283-.424A3.75 3.75 0 0 1 6.838 8.75h-1.53a8.97 8.97 0 0 1-.104-1.317C5.245 3.733 7.987.75 12 .75s6.755 2.983 6.755 6.641c0 .42-.036.862-.104 1.317l.041.042Z" />
    <path fill="#59B4FD" fillRule="evenodd" d="M12.75 17.25h-1.5V19a.75.75 0 0 0 1.5 0v-1.75Z" />
  </svg>
);

const PersonalityDevelopmentIcon = ({ size = 40 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path
      fill="#64B5F6"
      d="M13 1.25a8.25 8.25 0 0 0-8.244 8.577l-1.7 3.825a1.25 1.25 0 0 0 .84 1.72l1.354.339V18c0 .967.784 1.75 1.75 1.75h2.042l.159 1.745a1.25 1.25 0 0 0 1.531 1.103l7.508-1.766a1.25 1.25 0 0 0 .957-1.355l-.451-4.057A8.25 8.25 0 0 0 13 1.25Z"
    />
    <path
      fill="#FAFAFA"
      fillRule="evenodd"
      d="M13.469 6.414a.75.75 0 0 0-.937 0l-2.5 2a.75.75 0 1 0 .937 1.172L13 7.96l2.032 1.626a.75.75 0 1 0 .936-1.172l-2.5-2Z"
    />
    <path
      fill="#FAFAFA"
      fillRule="evenodd"
      d="M13 6.25a.75.75 0 0 0-.75.75v6a.75.75 0 0 0 1.5 0V7a.75.75 0 0 0-.75-.75Z"
    />
  </svg>
);

const InterviewConsultationIcon = ({ size = 40 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path
      fill="#90A4AE"
      d="M8.87 4.82C6.98 6.16 4.21 6.09 3.55 6.03h-.02C3.8 8.26 5.7 10 8 10c2.31 0 4.22-1.75 4.47-4-1.44.262-2.554-.032-3.6-1.18z"
    />
    <path
      fill="#455A64"
      d="M12.47 6c-1.44.262-2.554-.032-3.6-1.18-1.636 1.16-3.554 1.21-5.34 1.21C2.759-.522 13.306-.68 12.47 6z"
    />
    <path
      fill="#90A4AE"
      d="M11.706 12H3.75A3.754 3.754 0 0 0 0 15.75v3.5c0 .414.336.75.75.75h9.156a7.945 7.945 0 0 1 1.8-8z"
    />
    <path
      fill="#4CAF50"
      d="M17.5 24c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5z"
    />
    <path
      fill="#FFF"
      d="m15.793 20.207-2-2a.999.999 0 1 1 1.414-1.414l1.244 1.244 2.796-3.196a1.001 1.001 0 0 1 1.505 1.317l-3.5 4a.999.999 0 0 1-1.459.049z"
    />
  </svg>
);

const ForCandidatesPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (formData) => {
    console.log('Candidate form submitted:', formData);
    setIsSubmitted(true);
    // TODO: Send to API
  };

  const services = [
    {
      icon: ResumeIcon,
      title: "Resume Writing",
      description: "Get a resume that highlights your strengths & attracts recruiters."
    },
    {
      icon: ProfileConsultationIcon,
      title: "LinkedIn Profiling & Optimization",
      description: "Boost your visibility & job opportunities with a strong LinkedIn profile."
    },
    {
      icon: JobSearchConsultationIcon,
      title: "1:1 Job Search Consultation",
      description: "Personalized guidance to land jobs faster."
    },
    {
      icon: PersonalityDevelopmentIcon,
      title: "Personality Development Consultation",
      description: "Improve communication & confidence."
    },
    {
      icon: InterviewConsultationIcon,
      title: "Interview Consultation",
      description: "Ace your interviews with expert coaching & feedback."
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
          <h2 className="text-3xl font-alike font-bold text-[#161a5a] mb-4">Profile Submitted Successfully!</h2>
          <p className="text-gray-600 font-raleway mb-8">
            Thank you for registering with 7 Twelve. Our team will review your profile and connect you with suitable opportunities.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-8 py-3 bg-[#161a5a] text-white font-raleway font-semibold rounded-lg hover:bg-[#0d0f3a] transition-all"
          >
            Submit Another Profile
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-alike font-bold text-[#161a5a] text-center mb-6">
            Join Our Talent Network
          </h1>
          <p className="text-xl text-gray-600 font-raleway text-center mb-12">
            Submit your profile and get connected with exciting opportunities
          </p>
            {/* Service Cards */}
            <div className="flex gap-6 mb-12">
            {services.map((service, index) => (
                <div
                key={index}
                className="bg-white p-5 rounded-xl
            shadow-md
            transition-all duration-300 ease-out
            hover:shadow-[0_12px_25px_rgba(139,0,0,0.35)]
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


          <div className="max-w-4xl mx-auto"></div>
          <CandidateForm onSubmit={handleSubmit} />
        </div>
      </section>
    </div>
  );
};

export default ForCandidatesPage;