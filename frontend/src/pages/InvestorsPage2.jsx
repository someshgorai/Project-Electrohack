
import React, { useState } from "react";

// Dummy data for pitches
const pitches = [
  {
    id: 1,
    title: "Eco-Friendly Water Bottles",
    description: "A sustainable alternative to single-use plastic bottles.",
    likes: 120,
    fundingProgress: 80, // Percentage funded
    date: "2024-11-20",
    type: "video",
  },
  {
    id: 2,
    title: "AI-Powered Health Tracker",
    description: "A wearable device for real-time health monitoring.",
    likes: 250,
    fundingProgress: 60,
    date: "2024-11-21",
    type: "text",
  },
  {
    id: 3,
    title: "Renewable Energy Generators",
    description: "Affordable wind and solar power solutions for rural areas.",
    likes: 300,
    fundingProgress: 95,
    date: "2024-11-22",
    type: "video",
  },
  {
    id: 4,
    title: "Remote Work Collaboration Hub",
    description: "A sustainable alternative to single-use plastic bottles.",
    likes: 120,
    fundingProgress: 80, // Percentage funded
    date: "2024-11-20",
    type: "video",
  },
  {
    id: 5,
    title: "On-Demand Home Services Platform",
    description: "A wearable device for real-time health monitoring.",
    likes: 250,
    fundingProgress: 60,
    date: "2024-11-21",
    type: "text",
  },
  {
    id: 6,
    title: "Smart Recycling System",
    description: "Affordable wind and solar power solutions for rural areas.",
    likes: 300,
    fundingProgress: 95,
    date: "2024-11-22",
    type: "video",
  },
];

const InvestorPage = () => {
  const [sortCriterion, setSortCriterion] = useState("popularity");
  
    
  // Sorting logic
  const sortedPitches = [...pitches].sort((a, b) => {
    if (sortCriterion === "popularity") return b.likes - a.likes;
    if (sortCriterion === "funding") return b.fundingProgress - a.fundingProgress;
    if (sortCriterion === "recent") return new Date(b.date) - new Date(a.date);
    return 0;
  });

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <header className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg">
        <h1 className="text-xl font-bold text-gray-800">Investor Dashboard</h1>
        <button  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Logout
        </button>
      </header>

      {/* Sorting Options */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-4">Sort Pitches By:</h2>
        <div className="flex space-x-4">
          <button
            onClick={() => setSortCriterion("popularity")}
            className={`px-4 py-2 rounded-lg ${
              sortCriterion === "popularity"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            } hover:bg-blue-600`}
          >
            Popularity
          </button>
          <button
            onClick={() => setSortCriterion("funding")}
            className={`px-4 py-2 rounded-lg ${
              sortCriterion === "funding"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            } hover:bg-blue-600`}
          >
            Funding Progress
          </button>
          <button
            onClick={() => setSortCriterion("recent")}
            className={`px-4 py-2 rounded-lg ${
              sortCriterion === "recent"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            } hover:bg-blue-600`}
          >
            Recent Submissions
          </button>
        </div>
      </div>

      {/* Pitches List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {sortedPitches.map((pitch) => (
          <div
            key={pitch.id}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col"
          >
            <h3 className="text-lg font-semibold">{pitch.title}</h3>
            <p className="text-gray-600 mt-2">{pitch.description}</p>
            <div className="mt-4">
              <span className="text-sm text-gray-500">
                {pitch.type === "video" ? "Video Pitch" : "Text Pitch"}
              </span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-gray-700">❤️ {pitch.likes} Likes</span>
              <span className="text-gray-700">
                {pitch.fundingProgress}% Funded
              </span>
            </div>
            <div className="mt-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 mr-2">
                Fund
              </button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
      
     
    </div>
  );
};

export default InvestorPage;
