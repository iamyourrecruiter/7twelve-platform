import React from 'react';

const CandidateTable = () => {
  // TODO: Fetch from API
  const candidates = [];

  return (
    <div>
      <h2 className="text-3xl font-alike font-bold text-[#161a5a] mb-6">Candidate Applications</h2>
      <p className="text-gray-600 font-raleway mb-6">View and manage all candidate submissions</p>
      
      {candidates.length === 0 ? (
        <div className="border border-gray-200 rounded-lg p-12 text-center">
          <div className="text-6xl mb-4">📋</div>
          <p className="text-gray-500 font-raleway text-lg">No candidate applications yet</p>
          <p className="text-gray-400 font-raleway text-sm mt-2">
            Candidates will appear here once they submit their profiles
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-raleway font-semibold">Name</th>
                <th className="px-4 py-3 text-left font-raleway font-semibold">Email</th>
                <th className="px-4 py-3 text-left font-raleway font-semibold">Experience</th>
                <th className="px-4 py-3 text-left font-raleway font-semibold">Stream</th>
                <th className="px-4 py-3 text-left font-raleway font-semibold">Status</th>
                <th className="px-4 py-3 text-left font-raleway font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((candidate, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-raleway">{candidate.name}</td>
                  <td className="px-4 py-3 font-raleway">{candidate.email}</td>
                  <td className="px-4 py-3 font-raleway">{candidate.experience} years</td>
                  <td className="px-4 py-3 font-raleway">{candidate.stream}</td>
                  <td className="px-4 py-3">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-raleway">
                      Pending
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-[#161a5a] hover:underline font-raleway mr-3">View</button>
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

export default CandidateTable;