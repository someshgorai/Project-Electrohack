import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
 
// Dummy data for investors
const investors = [
  {
    id: 1,
    name: "John Doe",
    industry: "Technology",
    investmentCapacity: 500000,
    fundedProjects: 10,
  },
  {
    id: 2,
    name: "Jane Smith",
    industry: "Healthcare",
    investmentCapacity: 750000,
    fundedProjects: 5,
  },
  {
    id: 3,
    name: "Alice Johnson",
    industry: "Renewable Energy",
    investmentCapacity: 300000,
    fundedProjects: 15,
  },
  {
    id: 4,
    name: "Kaushal kumar",
    industry: "Technology",
    investmentCapacity: 500000,
    fundedProjects: 10,
  },
  {
    id: 5,
    name: "Sheikh Waalia ",
    industry: "Healthcare",
    investmentCapacity: 750000,
    fundedProjects: 5,
  },
  {
    id: 6,
    name:"kal mil",
    industry: "Renewable Energy",
    investmentCapacity: 300000,
    fundedProjects: 15,
  },
];

const EntrepreneurPage = () => {
  const [sortCriterion, setSortCriterion] = useState("investment");
  const navigate = useNavigate();

  // Sorting logic
  const sortedInvestors = [...investors].sort((a, b) => {
    if (sortCriterion === "investment") return b.investmentCapacity - a.investmentCapacity;
    if (sortCriterion === "activity") return b.fundedProjects - a.fundedProjects;
    if (sortCriterion === "industry") return a.industry.localeCompare(b.industry);
    return 0;
  });

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <header className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg">
        <h1 className="text-xl font-bold text-gray-800">Entrepreneur Dashboard</h1>
        <div>
          <div className='space-x-3 hidden md:flex'>
            <Link to="/resources" className='bg-blue-transparent text-black border-2 border-green-600  font-semibold hover:bg-green-600 px-4 py-2 rounded-md'>RESOURCES</Link>
            <Link to="/mentors" className='bg-green-600 text-black border-2 border-gray-500 rounded-md px-2 pt-2  hover:bg-green-600 font-semibold'>MENTORS</Link>
          </div>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Logout
        </button>
      </header>

      {/* Sorting Options */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-4">Sort Investors By:</h2>
        <div className="flex space-x-4">
          <button
            onClick={() =>{ setSortCriterion("investment");
                   
            }}
            className={`px-4 py-2 rounded-lg ${
              sortCriterion === "investment"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            } hover:bg-blue-600`}
          >
            Investment Capacity
          </button>
          <button
            onClick={() => setSortCriterion("activity")}
            className={`px-4 py-2 rounded-lg ${
              sortCriterion === "activity"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            } hover:bg-blue-600`}
          >
            Activity
          </button>
          <button
            onClick={() => setSortCriterion("industry")}
            className={`px-4 py-2 rounded-lg ${
              sortCriterion === "industry"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            } hover:bg-blue-600`}
          >
            Industry Match
          </button>
        </div>
      </div>

      {/* Investors List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {sortedInvestors.map((investor) => (
          <div
            key={investor.id}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col"
          >
            <h3 className="text-lg font-semibold">{investor.name}</h3>
            <p className="text-gray-600 mt-2">
              Industry: <span className="font-medium">{investor.industry}</span>
            </p>
            <p className="text-gray-600">
              Investment Capacity:{" "}
              <span className="font-medium">${investor.investmentCapacity.toLocaleString()}</span>
            </p>
            <p className="text-gray-600">
              Funded Projects:{" "}
              <span className="font-medium">{investor.fundedProjects}</span>
            </p>
            <div className="mt-4">
              <button onClick={()=>{
                 navigate("/dashboard");
              }} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 mr-2">
                Send Pitch
              </button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
     
      
     
    </div>
  );
};

export default EntrepreneurPage;
