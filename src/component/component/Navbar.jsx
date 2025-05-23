import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="w-full px-6 py-4 bg-green-900 shadow-md fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img 
            src="https://www.davaocitydirectory.com/wp-content/uploads/2017/07/davaocentralcollege.jpg" 
            alt="DCC Logo" 
            className="h-10 w-10 rounded-full"
          />
          <Link to="/" className="text-xl font-bold text-white">
            Davao Central College
          </Link>
        </div>
        <div className="space-x-6 text-lg">
          <Link to="/" className="text-white hover:underline">Home</Link>
          <Link to="/about" className="text-white hover:underline">About Us</Link>
          <Link to="/programs" className="text-white hover:underline">Academic Programs</Link>
          <Link to="/admission" className="text-white hover:underline">Admission</Link>
          <Link to="/contactus" className="text-white hover:underline">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
