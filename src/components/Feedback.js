import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Feedback = () => {
  const feedbacks = [
    {
      id: 1,
      name: 'Saleem',
      profilePhoto: 'images/pic1.jpg',
      message: 'Great service! Highly recommended.',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Shivu',
      profilePhoto: 'images/pic2.jpg',
      message: 'Good experience overall.',
      rating: 4,
    },
    {
      id: 3,
      name: 'Akhil',
      profilePhoto: 'images/pic1.jpg',
      message: 'Satisfactory.',
      rating: 3,
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} className="text-yellow-500" />
        ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={index} className="text-yellow-500" />
        ))}
      </>
    );
  };

  return (
    <div className="bg-gray-800 text-white p-4 md:p-6 rounded-lg shadow-md">
      <h2 className="text-lg md:text-xl font-medium mb-4">Customer Feedback</h2>
      <ul>
        {feedbacks.map(feedback => (
          <li key={feedback.id} className="mb-4">
            <div className="flex items-center mb-2">
              <img
                src={feedback.profilePhoto}
                alt={feedback.name}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full mr-3"
              />
              <div>
                <h3 className="font-semibold">{feedback.name}</h3>
                <div className="flex">{renderStars(feedback.rating)}</div>
              </div>
            </div>
            <p className="text-white">{feedback.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feedback;

