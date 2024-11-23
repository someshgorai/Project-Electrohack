import React, { useState } from "react";
import MentorCard from "../pages/MentorCard";
import {useNavigate } from 'react-router-dom';
const mentors = [
  {
    id: 1,
    name: "John Doya",
    expertise: "Startup Growth",
    image: "https://tse4.mm.bing.net/th?id=OIP.3dCaxs7dL2vi1FTLTOuevQHaHa&pid=Api&P=0&h=180",
  },
  {
    id: 2,
    name: "Jane warner",
    expertise: "Marketing Strategies",
    image: "https://tse1.mm.bing.net/th?id=OIP.fWX79DDardtfj89p_ExesAHaHa&pid=Api&P=0&h=180",
  },
  {
    id: 3,
    name: "jullia maran",
    expertise: "Marketing Strategies",
    image: "https://exposures.ca/wp-content/uploads/2020/01/Canadian-Passport-photo-1-768x1075.jpg",
  },
  {
    id: 4,
    name: "john Smith",
    expertise: "Marketing Strategies",
    image: "https://tse1.mm.bing.net/th?id=OIP.NyJLJux_o1v2MzDwudfgZgAAAA&pid=Api&P=0&h=180",
  },
  {
    id: 5,
    name: "Arjun smith",
    expertise: "Marketing Strategies",
    image: "https://tse4.mm.bing.net/th?id=OIP.tJjO9x47Jaj47sI3JbJWIwHaE8&pid=Api&P=0&h=180",
  },
  {
    id: 6,
    name: "kumar reddy",
    expertise: "Marketing Strategies",
    image: "https://tse2.mm.bing.net/th?id=OIP.Kk15lDaSl_MBQjZPL8IA-gAAAA&pid=Api&P=0&h=180",
  },
  // Add more mentors as needed
];

const MentorsPage = () => {
  const [selectedMentor, setSelectedMentor] = useState(null);
  const navigate = useNavigate();

  const handleMessage = (mentor) => {
    setSelectedMentor(mentor);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
        <button onClick={()=>{
          navigate("/blogs")
        }} className="bg-gray-600 text-white rounded-md p-2 ">BACK⬅️</button>
      <h1 className="text-2xl font-bold text-center mb-6">Meet Our Mentors</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mentors.map((mentor) => (
          <MentorCard
            key={mentor.id}
            name={mentor.name}
            expertise={mentor.expertise}
            image={mentor.image}
            onMessage={() => handleMessage(mentor)}
          />
        ))}
      </div>

      {selectedMentor && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-80">
            <h2 className="text-xl font-bold">{selectedMentor.name}</h2>
            <p className="text-sm text-gray-600">{selectedMentor.expertise}</p>
            <textarea
              className="w-full border border-gray-300 rounded p-2 mt-4"
              placeholder="Type your message..."
            ></textarea>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setSelectedMentor(null)}
                className="mr-2 px-4 py-2 bg-gray-500 text-white rounded"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MentorsPage;
