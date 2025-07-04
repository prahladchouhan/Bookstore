import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-900 text-amber-50 min-h-screen flex items-center justify-center px-6 py-16">
      <div className="max-w-4xl mx-auto text-center animate-fade-in-down">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Welcome to <span className="text-amber-400">Bookstore</span> 📚
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-300 mb-10">
          Discover your next favorite book. Read. Learn. Grow.
        </p>

        {/* Buttons */}
        <div className="flex justify-center flex-wrap gap-4">
          <Link
            to="/books"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Browse Books
          </Link>
          <Link
            to="/login"
            className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
