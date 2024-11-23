const MentorCard = ({ name, expertise, image, onMessage }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4">
        <img src={image} alt={`${name}'s avatar`} className="w-16 h-16 rounded-full mx-auto" />
        <h3 className="text-lg font-semibold text-center mt-2">{name}</h3>
        <p className="text-sm text-gray-500 text-center">{expertise}</p>
        <button
          onClick={onMessage}
          className="bg-blue-500 text-white text-sm mt-4 px-4 py-2 rounded hover:bg-blue-600 w-full"
        >
          Message
        </button>
      </div>
    );
  };
  
  export default MentorCard;
  