import React from 'react';

const Card = ({ icon, title, value }) => {
  return (
    <div className="bg-gray-800 text-white p-4 shadow rounded-lg flex items-center">
      <div className="text-blue-500 text-3xl mr-4">
        {icon}
      </div>
      <div>
        <h2 className="text-sm mt-1">{title}</h2>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default Card;
