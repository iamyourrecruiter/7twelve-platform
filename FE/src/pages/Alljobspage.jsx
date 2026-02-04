import React, { useState } from 'react';

const AllJobsPage = () => {
  // TODO: Fetch from API
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Tech Corp",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "5+ years",
      salary: "₹15-25 LPA",
      description:
    "We are looking for a skilled Frontend Developer to build responsive web applications using React and modern UI frameworks.",
      postedDate: "2 days ago",
      jdUrl: "/jds/job1.pdf"
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Innovation Labs",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹12-20 LPA",
      description:
    "We are looking for a skilled Frontend Developer to build responsive web applications using React and modern UI frameworks.",
      postedDate: "3 days ago",
      jdUrl: "/jds/job2.pdf"
    },
    {
      id: 3,
      title: "Marketing Manager",
      company: "Growth Ventures",
      location: "Delhi, India",
      type: "Full-time",
      experience: "4+ years",
      salary: "₹10-18 LPA",
      description:
    "We are looking for a skilled Frontend Developer to build responsive web applications using React and modern UI frameworks.",
      postedDate: "5 days ago",
      jdUrl: "/jds/job3.pdf"
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "Analytics Pro",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹12-18 LPA",
      description:
    "We are looking for a skilled Frontend Developer to build responsive web applications using React and modern UI frameworks.",
      postedDate: "1 week ago",
      jdUrl: "/jds/job4.pdf"
    },
    {
      id: 5,
      title: "UI/UX Designer",
      company: "Design Studio",
      location: "Pune, India",
      type: "Full-time",
      experience: "3+ years",
      salary: "₹8-15 LPA",
      description:
    "We are looking for a skilled Frontend Developer to build responsive web applications using React and modern UI frameworks.",
      postedDate: "1 week ago",
      jdUrl: "/jds/job5.pdf"
    },
    {
      id: 6,
      title: "DevOps Engineer",
      company: "Cloud Systems",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "4-6 years",
      salary: "₹18-28 LPA",
      description:
    "We are looking for a skilled Frontend Developer to build responsive web applications using React and modern UI frameworks.",
      postedDate: "2 weeks ago",
      jdUrl: "/jds/job6.pdf"
    },
    {
      id: 7,
      title: "Business Analyst",
      company: "Finance Corp",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹10-16 LPA",
      description:
    "We are looking for a skilled Frontend Developer to build responsive web applications using React and modern UI frameworks.",
      postedDate: "2 weeks ago",
      jdUrl: "/jds/job7.pdf"
    },
    {
      id: 8,
      title: "Full Stack Developer",
      company: "Startup XYZ",
      location: "Remote",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹15-22 LPA",
      description:
    "We are looking for a skilled Frontend Developer to build responsive web applications using React and modern UI frameworks.",
      postedDate: "3 weeks ago",
      jdUrl: "/jds/job8.pdf"
    }
  ]);

  const [filters, setFilters] = useState({
    location: 'all',
    type: 'all',
    experience: 'all'
  });

  const handleDownloadJD = (jdUrl, jobTitle) => {
    const link = document.createElement('a');
    link.href = jdUrl;
    link.download = `${jobTitle.replace(/\s+/g, '_')}_JD.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredJobs = jobs.filter(job => {
    if (filters.location !== 'all' && job.location !== filters.location) return false;
    if (filters.type !== 'all' && job.type !== filters.type) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-alike font-bold text-[#161a5a] text-center mb-4">All Job Openings</h1>
          <p className="text-lg text-gray-600 font-raleway text-center mb-12">
            Explore all available opportunities and find your perfect match
          </p>

          {/* Filters */}
          <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
            <h3 className="text-lg font-raleway font-semibold text-[#161a5a] mb-4">Filter Jobs</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-raleway font-medium text-gray-700 mb-2">Location</label>
                <select 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
                  value={filters.location}
                  onChange={(e) => setFilters({...filters, location: e.target.value})}
                >
                  <option value="all">All Locations</option>
                  <option value="Mumbai, India">Mumbai</option>
                  <option value="Bangalore, India">Bangalore</option>
                  <option value="Delhi, India">Delhi</option>
                  <option value="Hyderabad, India">Hyderabad</option>
                  <option value="Pune, India">Pune</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-raleway font-medium text-gray-700 mb-2">Job Type</label>
                <select 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
                  value={filters.type}
                  onChange={(e) => setFilters({...filters, type: e.target.value})}
                >
                  <option value="all">All Types</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
              <div className="flex items-end">
                <button 
                  onClick={() => setFilters({ location: 'all', type: 'all', experience: 'all' })}
                  className="w-full px-4 py-2 bg-gray-200 text-gray-700 font-raleway rounded-lg hover:bg-gray-300 transition-all"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>

          {/* Job Results */}
          <div className="mb-4">
            <p className="text-gray-600 font-raleway">
              Showing <span className="font-semibold text-[#161a5a]">{filteredJobs.length}</span> jobs
            </p>
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all">
                <div className="flex justify-between items-start gap-6">
            
            {/* LEFT: Job Details */}
            <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                <div>
                    <h3 className="text-2xl font-raleway font-bold text-[#161a5a] mb-1">
                    {job.title}
                    </h3>
                    <p className="text-gray-600 font-raleway text-lg mb-1">
                    {job.company}
                    </p>
                    <p className="text-gray-500 font-raleway text-sm mt-2 line-clamp-3">
                    {job.description}
                    </p>
                </div>
                <span className="text-sm text-gray-500 font-raleway">
                    {job.postedDate}
                </span>
                </div>

                <div className="flex flex-wrap gap-3 mt-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-raleway">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-4 h-3"
                            fill="currentColor"
                        >
                            <path d="M12 24a.502.502 0 0 1-.331-.125C11.315 23.562 3 16.144 3 9c0-4.963 4.038-9 9-9s9 4.037 9 9c0 7.144-8.315 14.562-8.669 14.875A.502.502 0 0 1 12 24zm0-23C7.589 1 4 4.589 4 9c0 5.918 6.451 12.358 8 13.819 1.549-1.461 8-7.901 8-13.819 0-4.411-3.589-8-8-8z" />
                            <path d="M12 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm0-9C9.794 5 8 6.794 8 9s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z" />
                        </svg>

                        {job.location}
                        </span>

                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-raleway">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-4 h-3"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path d="M12 14a.74.74 0 0 1-.237-.039l-11.25-3.75a.749.749 0 1 1 .475-1.422L12 12.459l11.013-3.671a.751.751 0 0 1 .475 1.423l-11.25 3.75A.751.751 0 0 1 12 14z" />
                            <path d="M21.25 22H2.75A2.752 2.752 0 0 1 0 19.25V7.75A2.752 2.752 0 0 1 2.75 5h18.5A2.752 2.752 0 0 1 24 7.75v11.5A2.752 2.752 0 0 1 21.25 22zM2.75 6.5c-.689 0-1.25.561-1.25 1.25v11.5c0 .689.561 1.25 1.25 1.25h18.5c.689 0 1.25-.561 1.25-1.25V7.75c0-.689-.561-1.25-1.25-1.25H2.75z" />
                            <path d="M15.25 6.5a.75.75 0 0 1-.75-.75v-2a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v2a.75.75 0 0 1-1.5 0v-2C8 2.785 8.785 2 9.75 2h4.5c.965 0 1.75.785 1.75 1.75v2a.75.75 0 0 1-.75.75z" />
                        </svg>

                        {job.type}
                        </span>

                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-raleway">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-4 h-3"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path d="M12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zm0-11c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                            <path d="M14 14.5a.503.503 0 0 1-.3-.1l-2-1.5a.5.5 0 0 1-.2-.4v-3a.5.5 0 0 1 1 0v2.75l1.8 1.35a.5.5 0 0 1-.3.9z" />
                            <path d="M.77 15a.5.5 0 0 1-.488-.391A11.914 11.914 0 0 1 0 12C0 5.383 5.383 0 12 0c3.754 0 7.22 1.711 9.507 4.696a.5.5 0 1 1-.793.608A10.906 10.906 0 0 0 12 1C5.935 1 1 5.935 1 12c0 .826.087 1.63.258 2.391A.5.5 0 0 1 .77 15zM12 24c-3.754 0-7.22-1.711-9.507-4.696a.5.5 0 1 1 .793-.608A10.906 10.906 0 0 0 12 23c6.065 0 11-4.935 11-11 0-.839-.09-1.641-.267-2.384a.5.5 0 1 1 .973-.231c.195.818.294 1.698.294 2.615 0 6.617-5.383 12-12 12z" />
                            <path d="M2.55 24a.5.5 0 0 1-.5-.495l-.05-5A.499.499 0 0 1 2.5 18h5a.5.5 0 0 1 0 1H3.005l.045 4.495a.5.5 0 0 1-.495.505H2.55zM21.5 6h-5a.5.5 0 0 1 0-1H21V.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-.5.5z" />
                        </svg>

                        {job.experience}
                        </span>

                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-raleway">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-4 h-3"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path d="M12.5 24h-7C1.701 24 0 20.735 0 17.5c0-4.643 2.451-9.45 5.827-11.432A.5.5 0 0 1 6.08 6h5.84a.5.5 0 0 1 .253.068 9.68 9.68 0 0 1 2.249 1.854.5.5 0 1 1-.742.672A8.733 8.733 0 0 0 11.782 7H6.218C3.188 8.854 1 13.243 1 17.5 1 20.037 2.179 23 5.5 23h7c3.321 0 4.5-2.963 4.5-5.5 0-1.397-.248-2.888-.718-4.308a.5.5 0 0 1 .949-.315c.503 1.521.769 3.12.769 4.623 0 3.235-1.701 6.5-5.5 6.5z" />
                            <path d="M12.5 7h-7C4.673 7 4 6.327 4 5.5S4.673 4 5.5 4h7c.827 0 1.5.673 1.5 1.5S13.327 7 12.5 7z" />
                            <path d="M11.5 5a.501.501 0 0 1-.313-.891l2.774-2.219a.487.487 0 0 0 .16-.557.487.487 0 0 0-.472-.333H4.351a.487.487 0 0 0-.472.334.486.486 0 0 0 .16.557L6.813 4.11a.501.501 0 0 1-.625.781L3.414 2.672a1.484 1.484 0 0 1-.479-1.669A1.484 1.484 0 0 1 4.351 0h9.299c.646 0 1.202.394 1.416 1.003.214.61.026 1.265-.479 1.669l-2.774 2.219A.505.505 0 0 1 11.5 5z" />
                            <path d="M9.5 18.5H7a.5.5 0 0 1 0-1h2.5a1.001 1.001 0 0 0 0-2h-1c-1.103 0-2-.897-2-2s.897-2 2-2H11a.5.5 0 0 1 0 1H8.5a1.001 1.001 0 0 0 0 2h1c1.103 0 2 .897 2 2s-.897 2-2 2z" />
                            <path d="M9 20a.5.5 0 0 1-.5-.5V18a.5.5 0 0 1 1 0v1.5a.5.5 0 0 1-.5.5zM9 12.5a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 1 0V12a.5.5 0 0 1-.5.5z" />
                            <path d="M14.5 12a.5.5 0 0 1-.354-.853l2.5-2.5a.504.504 0 0 1 .577-.094l1.678.839 3.245-3.245a.5.5 0 0 1 .707.707l-3.5 3.5a.506.506 0 0 1-.577.094l-1.678-.839-2.245 2.245A.498.498 0 0 1 14.5 12z" />
                            <path d="M22.5 10a.5.5 0 0 1-.5-.5V7h-2.5a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5z" />
                        </svg>

                        {job.salary}
                        </span>
                </div>
            </div>

            {/* RIGHT: Action Buttons */}
            <div className="flex flex-col gap-4">
                <button
                onClick={() => handleDownloadJD(job.jdUrl, job.title)}
                className="px-6 py-3 bg-[#161a5a] text-white font-raleway font-semibold rounded-lg hover:bg-[#0d0f3a] transition-all shadow-lg whitespace-nowrap"
                >
                View JD
                </button>

                <button
                onClick={() => handleApplyNow(job.id)}
                className="px-6 py-3 bg-[#8b0000] text-white font-raleway font-semibold rounded-lg hover:bg-[#6d0000] transition-all text-md whitespace-nowrap"
                >
                Apply Now
                </button>
            </div>

            </div>     
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 font-raleway text-lg">No jobs found matching your filters.</p>
              <button 
                onClick={() => setFilters({ location: 'all', type: 'all', experience: 'all' })}
                className="mt-4 px-6 py-2 bg-[#161a5a] text-white font-raleway rounded-lg hover:bg-[#0d0f3a] transition-all"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AllJobsPage;