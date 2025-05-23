import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation Bar */}
    
      {/* Full-Width Image */}
      <div className="mt-20"> {/* Adjusts for fixed navbar */}
        <img 
          src="https://dcc.edu.ph/wp-content/uploads/2023/04/DCC-WEB-main-and-bed-scaled.jpg" 
          alt="DCC Campus" 
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}

export default Home;
