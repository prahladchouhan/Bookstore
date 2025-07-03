import React from 'react';

const BookCard = () => {
  return (
    <div className="bg-gray-700 text-amber-50 rounded-2xl shadow-xl overflow-hidden p-6 m-4 md:flex md:gap-6 hover:shadow-2xl transition-shadow duration-300">
      {/* Book Image */}
      <div className="md:w-1/3 w-full mb-4 md:mb-0">
        <img
          src="https://via.placeholder.com/150x220?text=Book+Cover"
          alt="Book Cover"
          className="w-full h-auto rounded-xl object-cover"
        />
      </div>

      {/* Book Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">The Great Adventure</h2>
          <p className="text-sm text-gray-300 mb-1">
            <span className="font-semibold">Author:</span> John Doe
          </p>
          <p className="text-sm text-gray-300 mb-4 leading-relaxed">
            Description: An epic journey across mountains and rivers, exploring the human spirit and courage through a compelling narrative.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-4 flex-wrap">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-lg transition duration-200">
            Read More
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-5 rounded-lg transition duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
