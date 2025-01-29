import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Modern icons

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div
          className="text-2xl font-bold text-gray-900 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Recipe<span className="text-green-500">App</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          <li
            onClick={() => navigate("/")}
            className="text-gray-700 font-medium hover:bg-green-500 hover:text-white px-4 py-2 rounded-lg transition-all cursor-pointer"
          >
            Search
          </li>
          <li
            onClick={() => navigate("/favorites")}
            className="text-gray-700 font-medium hover:bg-green-500 hover:text-white px-4 py-2 rounded-lg transition-all cursor-pointer"
          >
            Favorites
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full py-4">
          <ul className="flex flex-col space-y-2 text-center">
            <li
              onClick={() => {
                navigate("/");
                setMenuOpen(false);
              }}
              className="text-gray-700 font-medium hover:bg-green-500 hover:text-white py-2 rounded-lg transition-all cursor-pointer"
            >
              Search
            </li>
            <li
              onClick={() => {
                navigate("/favorites");
                setMenuOpen(false);
              }}
              className="text-gray-700 font-medium hover:bg-green-500 hover:text-white py-2 rounded-lg transition-all cursor-pointer"
            >
              Favorites
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
