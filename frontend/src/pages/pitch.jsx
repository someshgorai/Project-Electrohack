import React from "react";
import Footer from "../components/Footer2";
import Navbar from "../components/Navbar";
import {useNavigate } from 'react-router-dom';
const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
    <div className="bg-gray-100 w-full min-h-screen p-6">
     
      {/* Header */}
      <header className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg">
        <h1 className="text-xl font-bold text-gray-800">Entrepreneur Dashboard</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Logout
        </button>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {/* Upload Video Section */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Upload Your Pitch</h2>
          <input
            type="file"
            accept="video/*"
            className="block w-full p-2 border border-gray-300 rounded-md mb-4"
          />
          <textarea
            placeholder="Add a brief description for your pitch..."
            className="block w-full p-2 border border-gray-300 rounded-md mb-4"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            Submit Pitch
          </button>
        </section>

        {/* Text Ideas Section */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Submit Text Idea</h2>
          <textarea
            placeholder="Write your idea here..."
            className="block w-full p-2 border border-gray-300 rounded-md mb-4"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Submit Idea
          </button>
        </section>

        {/* Investor Activity Section */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Interested Investors</h2>
          <ul className="space-y-3">
            <li className="flex items-center justify-between">
              <span>Investor 1</span>
              <button  onClick={()=>{
                navigate("/creators")
              }} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                Connect
              </button>
            </li>
            <li className="flex items-center justify-between">
              <span>Investor 2</span>
              <button onClick={()=>{
                navigate("/creators")
              }}  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                Connect
              </button>
            </li>
            <li className="flex items-center justify-between">
              <span>Investor 3</span>
              <button onClick={()=>{
                navigate("/creators")
              }} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                Connect
              </button>
            </li>
          </ul>
        </section>
      </div>

    
    </div>
      {/* Footer */}
      <Footer />
    </>
    
  );
};

export default Dashboard;
