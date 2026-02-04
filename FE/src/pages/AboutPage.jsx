import React from 'react';
const TargetIcon = ({ size = 40 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path
      fill="#110638"
      d="M10 24C4.486 24 0 19.514 0 14S4.486 4 10 4s10 4.486 10 10-4.486 10-10 10zm0-19c-4.962 0-9 4.038-9 9s4.038 9 9 9 9-4.038 9-9-4.038-9-9-9z"
    />
    <path
      fill="#110638"
      d="M10 20.5c-3.584 0-6.5-2.916-6.5-6.5S6.416 7.5 10 7.5s6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5zm0-12c-3.033 0-5.5 2.467-5.5 5.5s2.467 5.5 5.5 5.5 5.5-2.467 5.5-5.5-2.467-5.5-5.5-5.5z"
    />
    <path
      fill="#FF7A55"
      d="M10 17c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z"
    />
    <path
      fill="#110638"
      d="M10 14.5a.5.5 0 0 1-.354-.853l7.5-7.5a.5.5 0 0 1 .707.707l-7.5 7.5A.498.498 0 0 1 10 14.5z"
    />
    <path
      fill="#110638"
      d="M20 7h-2.5a.5.5 0 0 1-.5-.5V4c0-.133.053-.26.146-.354l3.5-3.5A.5.5 0 0 1 21.5.5v2h2a.5.5 0 0 1 .354.854l-3.5 3.5A.504.504 0 0 1 20 7z"
    />
  </svg>
);
const AdvertisingIcon = ({ size = 40 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path
      fill="#eceff1"
      d="M18.3 4.525v13.95a.664.664 0 0 1-.297.558.646.646 0 0 1-.378.117.827.827 0 0 1-.252-.045L8.31 15.478l-1.422-.567-.648-.261-.117-.045a.687.687 0 0 1-.423-.63v-4.95c0-.279.171-.522.423-.63l.117-.045 11.133-4.455c.207-.081.441-.054.63.072s.297.333.297.558z"
    />
    <path
      fill="#607d8b"
      d="M7.769 20.446a.559.559 0 0 1-.139.423.545.545 0 0 1-.408.182H5.035a.541.541 0 0 1-.539-.467L3.594 14h1.822l.525.211 1.152.459z"
    />
    <path
      fill="#2196f3"
      d="M2.854 8.665a1.825 1.825 0 0 0-1.822 1.823v2.227c0 .956.745 1.62 1.822 1.62h2.713v-5.67z"
    />
    <path
      d="M18.25 20a.747.747 0 0 1-.278-.054l-12.5-5A.75.75 0 0 1 5 14.25v-5.5a.75.75 0 0 1 .472-.696l12.5-5A.75.75 0 0 1 19 3.75v15.5a.75.75 0 0 1-.75.75z"
    />
  </svg>
);

const TeamIcon = ({ size = 40 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <circle cx="4" cy="10" r="2" fill="#4caf50" />
    <path
      fill="#4caf50"
      d="M5.25 13h-2.5A2.752 2.752 0 0 0 0 15.75v.5c0 .414.336.75.75.75h6.5a.75.75 0 0 0 .75-.75v-.5A2.752 2.752 0 0 0 5.25 13z"
    />
    <circle cx="20" cy="10" r="2" fill="#4caf50" />
    <path
      fill="#4caf50"
      d="M21.25 13h-2.5A2.752 2.752 0 0 0 16 15.75v.5c0 .414.336.75.75.75h6.5a.75.75 0 0 0 .75-.75v-.5A2.752 2.752 0 0 0 21.25 13z"
    />
    <circle cx="12" cy="9.5" r="3" fill="#2196f3" />
    <path
      fill="#2196f3"
      d="M14.75 14h-5.5a2.752 2.752 0 0 0-2.75 2.75v1.5c0 .414.336.75.75.75h9.5a.75.75 0 0 0 .75-.75v-1.5A2.752 2.752 0 0 0 14.75 14z"
    />
  </svg>
);

const PayrollBuildingIcon = ({ size = 40 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path
      fill="#4CAF50"
      d="M12 9a.75.75 0 0 1-.75-.75V7.5a.75.75 0 0 1 1.5 0v.75A.75.75 0 0 1 12 9zM12 3.25a.75.75 0 0 1-.75-.75v-.75a.75.75 0 0 1 1.5 0v.75a.75.75 0 0 1-.75.75z"
    />
    <path
      fill="#4CAF50"
      d="M12.125 8H10.75a.75.75 0 0 1 0-1.5h1.375a.375.375 0 0 0 0-.75h-.25C10.841 5.75 10 4.909 10 3.875S10.841 2 11.875 2h1.375a.75.75 0 0 1 0 1.5h-1.375a.375.375 0 0 0 0 .75h.25c1.034 0 1.875.841 1.875 1.875S13.159 8 12.125 8z"
    />
    <path
      fill="#CFD8DC"
      d="M23.25 24h-7a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75zM7.75 24h-7a.75.75 0 0 1-.75-.75v-5.5A.75.75 0 0 1 .75 17h7a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-.75.75z"
    />
    <path
      fill="#ECEFF1"
      d="M16.25 24h-8.5a.75.75 0 0 1-.75-.75v-11.5a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-.75.75z"
    />
    <path
      fill="#607D8B"
      d="M12 20a.75.75 0 0 1-.75-.75v-2.941a.75.75 0 0 1 .5-1.309H12a.75.75 0 0 1 .75.75v3.5A.75.75 0 0 1 12 20z"
    />
  </svg>
);

const MoneyIcon = ({ size = 40 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path
      fill="#4db6ac"
      d="M21.25 4H2.75A2.752 2.752 0 0 0 0 6.75v10.5A2.752 2.752 0 0 0 2.75 20h18.5A2.752 2.752 0 0 0 24 17.25V6.75A2.752 2.752 0 0 0 21.25 4z"
    />
    <path
      fill="#fafafa"
      d="M12.38 15.5h-2.13a.75.75 0 0 1 0-1.5h2.13a.62.62 0 0 0 .62-.62.623.623 0 0 0-.62-.63h-.76a2.125 2.125 0 0 1 0-4.25h2.13a.75.75 0 0 1 0 1.5h-2.13a.62.62 0 0 0-.62.62c0 .352.278.63.62.63h.76a2.125 2.125 0 0 1 0 4.25z"
    />
    <path
      fill="#fafafa"
      d="M12 10a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 1.5 0v1.5A.75.75 0 0 1 12 10zM12 17a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 1.5 0v1.5A.75.75 0 0 1 12 17z"
    />
    <path
      fill="#009688"
      d="M6.25 8.5h-2.5a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 0 1.5zM20.25 17h-2.5a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 0 1.5z"
    />
  </svg>
);



const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="pt-28 pb-6 px-6">
        <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-raleway font-bold text-[#161a5a] text-center mb-4 animate-fade-in">
        We Simplify Careers, Hiring, and Growth —{" "}
        <span className="text-[#8b0000]">For Everyone</span>
        </h2>

          <p className="text-lg text-gray-600 font-raleway text-center leading-relaxed mb-6">
            In a world where job searching is overwhelming and hiring is time-consuming, we decided to change the way talent and companies connect. Our platform is built to remove complexity, save time, and create opportunities.
          </p>
        </div>
      </section>

      {/* Motto */}
      <section className="py-1 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-raleway font-bold text-[#161a5a] mb-4">Our Motto</h2>
          <div className="text-3xl font-raleway font-bold text-[#8b0000] mb-1">"Make It Simple."</div>
          <p className="text-base text-gray-600 font-raleway">
            Whether it's job search, recruitment, or advertising.
          </p>
          <p className="text-base text-gray-600 font-raleway">
            Our focus is simple experiences, smarter processes, and better outcomes.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-2 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-raleway font-bold text-[#161a5a] mb-4">Our Vision</h2>
            <p className="text-gray-600 font-raleway leading-relaxed">
              To become the most trusted and simple career and recruitment platform, empowering individuals and organizations to grow together.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-raleway font-bold text-[#8b0000] mb-4">Our Mission</h2>
            <p className="text-gray-600 font-raleway leading-relaxed">
              Our mission is to bridge the gap between talent and opportunity by creating a platform that is fast, transparent, and focused on real results — not complexity.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-10 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-raleway font-bold text-[#161a5a] text-center mb-8">Why <span className="text-[#8b0000]">Trust</span> Us</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "We focus on clarity over clutter",
              "We value people before processes",
              "We believe hiring and job search should be human, not frustrating",
              "We design solutions that actually work in the real world"
            ].map((point, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white p-5 rounded-xl shadow-md">
                <div className="w-7 h-7 bg-[#8b0000] text-white rounded-full flex items-center justify-center flex-shrink-0 font-raleway text-sm">✓</div>
                <p className="text-gray-700 font-raleway font-medium text-sm">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
        <section className="pt-2 py-16 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-3xl font-raleway font-bold text-[#161a5a] text-center mb-10">
        What <span className="text-[#8b0000]">We</span> Do
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {[
            { title: "End-to-End Recruitment", desc: "Helping companies hire the right talent faster through smart and structured hiring solutions." },
            { title: "Job Advertising", desc: "Promote job opportunities and reach the right audience with targeted visibility." },
            { title: "Candidate Opportunities", desc: "Providing candidates with access to relevant roles and simplified application processes." },
            { title: "Employer Branding", desc: "Helping companies showcase their culture and values to attract quality talent." },
            { title: "Payroll Solutions", desc: "Streamlined payroll management with compliance and accuracy." }
        ].map((service, index) => (
            <div
            key={index}
            className="flex flex-col h-full min-h-[220px]
                        bg-gradient-to-br from-gray-50 to-white
                        p-5 rounded-xl
                        shadow-[0_4px_12px_rgba(0,0,0,0.08)]
                        transition-all duration-300 ease-out
                        hover:translate-y-1
                        hover:shadow-[0_12px_25px_rgba(139,0,0,0.25)]"
            >
            <div className="mb-3 flex items-center w-10 h-10">
            {index === 0 && <TargetIcon size={40} />}
            {index === 1 && <AdvertisingIcon size={40} />}
            {index === 2 && <TeamIcon size={40} />}
            {index === 3 && <PayrollBuildingIcon size={40} />}
            {index === 4 && <MoneyIcon size={40} />}
            </div>



            <h3 className="text-lg font-raleway font-bold text-[#161a5a] mb-2">
                {service.title}
            </h3>

            <p className="text-gray-600 font-raleway text-xs mt-auto">
                {service.desc}
            </p>
            </div>
        ))}
        </div>

    </div>
    </section>

      {/* Founder */}
      <section className="pt-2 py-12 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-raleway font-bold text-[#161a5a] mb-8 text-center">
            Meet the <span className="text-[#8b0000]">Founder</span>
            </h2>


            <div className="bg-white p-8 rounded-2xl shadow-lg">
            {/* Avatar */}
        <div className="w-[176px] h-[176px] mx-auto mb-6 rounded-full overflow-hidden shadow-xl ring-4 ring-[#8b0000]/20">
        <img
            src="/founder.jpg"
            alt="Founder – Jaya Dasan Emanuvel"
            className="w-full h-full object-cover object-[50%_28%]"
        />
        </div>

            {/* Name & designation – CENTER */}
            <h3 className="text-2xl font-raleway font-bold text-[#161a5a] mb-1 text-center">
                Jaya Dasan Emanuvel
            </h3>

            <p className="text-[#8b0000] font-raleway font-medium mb-6 text-lg text-center">
                <strong>Founder & Recruiter</strong>
            </p>

            {/* Description – LEFT */}
            <div className="text-gray-600 font-raleway leading-relaxed space-y-3 text-md text-left">
                <p>
                <strong>Emmanuel</strong> is a passionate career strategist and the founder of <strong>7 Twelve</strong>.
                </p>

                <p>
                With over <strong>10 years of experience</strong>, he brings a sharp understanding of recruitment trends and a clear mission to help individuals find meaningful work.
                </p>

                <p>
                He has guided <strong>hundreds of job seekers</strong> from freshers to experienced professionals toward faster and smarter career decisions.
                </p>

                <p>
                His hands-on approach combines practical strategies with personalized support, including
                <em> resume building, LinkedIn optimization, and job search planning</em>.
                </p>

                <p>
                At <strong>7 Twelve</strong>, Emmanuel also partners with businesses to streamline hiring,
                strengthen employer branding, and attract the right talent.
                </p>
            </div>

            {/* Quote – CENTER */}

            <blockquote className="mt-6 flex justify-center">
            <div className="flex items-center gap-4 max-w-3xl">
                {/* Left line */}
                <div className="w-2 h-16 bg-[#8b0000] rounded-full"></div>

                {/* Quote text */}
                <p className="italic text-[#8b0000] text-lg text-center font-raleway">
                <strong>
                    "Every individual has unique potential. Our job is to help them discover it and connect them
                    with opportunities where they can truly shine."
                </strong>
                </p>
            </div>
            </blockquote>
           </div>
        </div>
        </section>
    </div>
  );
};

export default AboutPage;