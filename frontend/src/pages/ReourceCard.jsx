const ResourceCard = ({ title, description, link, icon }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
        <div className="flex items-center space-x-4">
          <div className="bg-blue-500 text-white p-3 rounded-full">
            <i className={`fas ${icon} text-xl`}></i>
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 mt-4 block text-sm font-semibold hover:underline"
        >
          Learn More →
        </a>
      </div>
    );
  };
  
  export default ResourceCard;
  