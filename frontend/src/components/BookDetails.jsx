import React from 'react';

const BookDetails = () => {
  const book = {
    title: 'The Great Adventure',
    author: 'John Doe',
    price: 19.99,
    description:
      'An epic journey across mountains and rivers, exploring the human spirit and courage through a compelling narrative that touches the soul.',
    image:
      'https://images.unsplash.com/photo-1716892001554-71153626ea22?w=600&auto=format&fit=crop&q=60',
  };

  return (
    <div className="bg-gray-900 text-amber-50 min-h-screen px-6 py-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        {/* Book Image */}
        <div className="w-full md:w-1/2">
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Book Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">{book.title}</h1>
            <p className="text-lg text-gray-400 mb-2">
              <span className="text-amber-300 font-medium">Author:</span> {book.author}
            </p>
            <p className="text-green-400 text-xl font-semibold mb-4">${book.price}</p>
            <p className="text-md text-gray-300 leading-relaxed mb-6">
              {book.description}
            </p>
          </div>

          <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition duration-300 w-full md:w-auto">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
