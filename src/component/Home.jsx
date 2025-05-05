import React from 'react';
import { Link } from 'react-router-dom';  // Link is used for navigation

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-gree to-blue-600">
      {/* Navigation Bar */}
      <nav className="w-full px-6 py-4 bg-white shadow-md fixed top-0 left-0 z-50">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-blue-600">
            <Link to="/">Trigo</Link>
          </div>
          <div className="space-x-6 text-lg">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">About Us</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center flex-grow w-full max-w-md mt-24">
        <div className="text-center p-8 bg-white shadow-xl rounded-lg w-full">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-8">Welcome to Trigo</h1>
          <p className="text-lg text-gray-600 mb-6"></p>
          <nav>
            <ul className="space-y-6">
              <li>
                <Link 
                  to="/login" 
                  className="inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg text-lg transition duration-300 hover:bg-blue-700 transform hover:scale-105"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link 
                  to="/register" 
                  className="inline-block px-8 py-3 bg-green-500 text-white font-semibold rounded-lg text-lg transition duration-300 hover:bg-green-700 transform hover:scale-105"
                >
                  Register
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Home;
