import React from "react";
import ResourceCard from "../pages/ReourceCard";
import {useNavigate } from 'react-router-dom';


const resources = [
  {
    id: 1,
    title: "Startup Funding",
    description: "Find the top platforms for funding your startup idea.",
    link: "https://www.crunchbase.com/",
    icon: "fa-money-bill-wave",
  },
  {
    id: 2,
    title: "Free Business Plan Template",
    description: "Download a free business plan template to get started.",
    link: "https://www.score.org/resource/business-plan-template",
    icon: "fa-file-alt",
  },
  {
    id: 3,
    title: "Entrepreneur Podcasts",
    description: "Listen to inspiring stories and actionable tips.",
    link: "https://www.entrepreneur.com/list/the-top-entrepreneurship-podcasts-of-2023/436679",
    icon: "fa-podcast",
  },
  {
    id: 4,
    title: "Marketing Tools",
    description: "Explore tools to enhance your marketing efforts.",
    link: "https://buffer.com/",
    icon: "fa-chart-line",
  },
  {
    id: 5,
    title: "Networking Events",
    description: "Join events to connect with like-minded individuals.",
    link: "https://www.meetup.com/",
    icon: "fa-users",
  },
];

const ResourcesPage = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-gray-100 min-h-screen p-6">
        <button onClick={()=>{
          navigate("/blogs")
        }} className="bg-gray-600 text-white rounded-md p-2 ">BACK⬅️</button>
      <h1 className="text-3xl font-bold text-center mb-6">Essential Resources for Entrepreneurs</h1>
      <p className="text-gray-700 text-center mb-8 max-w-2xl mx-auto">
        Explore tools, funding options, educational content, and more to help you succeed in your entrepreneurial journey.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <ResourceCard
            key={resource.id}
            title={resource.title}
            description={resource.description}
            link={resource.link}
            icon={resource.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;
