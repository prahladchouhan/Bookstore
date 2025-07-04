import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-900 text-amber-50 min-h-screen px-6 py-16">
      <div className="max-w-4xl mx-auto text-center animate-fade-in-down">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Bookstore 📚</h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
          Welcome to <span className="text-amber-400 font-semibold">Bookstore</span> – your digital gateway to discovering, reading, and loving books. Whether you're a casual reader or a literary enthusiast, our collection is curated to inspire and inform.
        </p>
        <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
          Built with modern web technologies like <span className="text-blue-400">React</span> and <span className="text-purple-400">Redux</span>, this bookstore is crafted to offer a smooth, elegant experience with powerful search, responsive design, and easy navigation. Our mission is to bring knowledge and joy to your screen.
        </p>
        <p className="text-sm text-gray-500">
          Crafted by passionate developers. Designed for passionate readers.
        </p>
      </div>
    </div>
  );
};

export default About;
