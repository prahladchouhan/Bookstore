import React from 'react';

const BookCard = () => {
  return (
    <div className="bg-gray-800 text-amber-50 rounded-2xl shadow-xl overflow-hidden p-6 m-4 md:flex md:gap-8 hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
      
      {/* Book Image - Bigger and Modern */}
      <div className="md:w-1/2 w-full mb-4 md:mb-0">
        <img
          src="https://images.unsplash.com/photo-1716892001554-71153626ea22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMGNvdmVyJTIwcGFnZSUyMHRoZSUyMGFydCUyMG9mJTIwbm90JTIwb3ZlcnRoaW5nfGVufDB8fDB8fHww"
          alt="Book Cover"
          className="w-full h-72 object-cover rounded-xl"
        />
      </div>

      {/* Book Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-2">The Great Adventure</h2>
          <p className="text-md text-gray-300 mb-1">
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
