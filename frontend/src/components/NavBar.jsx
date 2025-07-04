import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 text-amber-50 px-6 py-4 shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">📚 BOOKSTORE</h1>

        {/* Hamburger Icon (text-based) */} 
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4">
          <NavLink to="/" className="hover:text-amber-300 transition">Home</NavLink>
          <NavLink to="/books" className="hover:text-amber-300 transition">Books</NavLink>
          <NavLink to="/about" className="hover:text-amber-300 transition">About</NavLink>
          <NavLink to="/cart" className="hover:text-amber-300 transition">Cart</NavLink>
          <NavLink to="/register" className="hover:text-amber-300 transition">Register</NavLink>
          <NavLink to="/login" className="hover:text-amber-300 transition">Login</NavLink>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-2">
          <NavLink to="/" onClick={toggleMenu} className="hover:text-amber-300 transition">Home</NavLink>
          <NavLink to="/books" onClick={toggleMenu} className="hover:text-amber-300 transition">Books</NavLink>
          <NavLink to="/about" onClick={toggleMenu} className="hover:text-amber-300 transition">About</NavLink>
          <NavLink to="/cart" onClick={toggleMenu} className="hover:text-amber-300 transition">Cart</NavLink>
          <NavLink to="/register" onClick={toggleMenu} className="hover:text-amber-300 transition">Register</NavLink>
          <NavLink to="/login" onClick={toggleMenu} className="hover:text-amber-300 transition">Login</NavLink>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
