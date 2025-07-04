import React from 'react';
import BookCard from '../components/BookCard';

const Books = () => {
  return (
    <div className="bg-gray-900 text-amber-50 min-h-screen px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Available Books</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <BookCard />
        <BookCard />
        <BookCard />  
    
      </div>
    </div>
  );
};

export default Books;
