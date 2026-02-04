import React from 'react';

const CompanyTable = () => {
  // TODO: Fetch from API
  const companies = [];

  return (
    <div>
      <h2 className="text-3xl font-alike font-bold text-[#8b0000] mb-6">Company Submissions</h2>
      <p className="text-gray-600 font-raleway mb-6">Review and approve company registrations</p>
      
      {companies.length === 0 ? (
        <div className="border border-gray-200 rounded-lg p-12 text-center">
          <div className="text-6xl mb-4">🏢</div>
          <p className="text-gray-500 font-raleway text-lg">No company submissions yet</p>
          <p className="text-gray-400 font-raleway text-sm mt-2">
            Companies will appear here once they submit their details
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-raleway font-semibold">Company</th>
                <th className="px-4 py-3 text-left font-raleway font-semibold">Email</th>
                <th className="px-4 py-3 text-left font-raleway font-semibold">Type</th>
                <th className="px-4 py-3 text-left font-raleway font-semibold">Services</th>
                <th className="px-4 py-3 text-left font-raleway font-semibold">Status</th>
                <th className="px-4 py-3 text-left font-raleway font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-raleway">{company.name}</td>
                  <td className="px-4 py-3 font-raleway">{company.email}</td>
                  <td className="px-4 py-3 font-raleway">{company.type}</td>
                  <td className="px-4 py-3 font-raleway">{company.services.join(', ')}</td>
                  <td className="px-4 py-3">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-raleway">
                      Pending
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-[#8b0000] hover:underline font-raleway mr-3">View</button>
                    <button className="text-green-600 hover:underline font-raleway mr-3">Approve</button>
                    <button className="text-red-600 hover:underline font-raleway">Reject</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CompanyTable;