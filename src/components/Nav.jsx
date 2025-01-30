import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
      {/* Logo section */}
      <div className="flex items-center">
        <a href="/" className="flex items-center">
          <img 
            src="../../public/Images/logo.svg" 
            alt="Company Logo" 
            className="h-8 w-auto"
          />
        </a>
      </div>
      {/* Navigation links */}
      <div className="flex items-center space-x-6">
        <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
        <Link to="/events" className="text-gray-700 hover:text-gray-900">Events List</Link>
        <Link to="/tickets" className="text-gray-700 hover:text-gray-900">My Tickets</Link>
        <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
        <div className="relative group">
            <button className="text-gray-700 hover:text-gray-900 flex items-center">
                More Options
                <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >   
                    <path d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
        </div>
        </div>
    
        {/* <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
        <a href="/events" className="text-gray-700 hover:text-gray-900">Events List</a>
        <a href="/tickets" className="text-gray-700 hover:text-gray-900">My Tickets</a>
        <a href="/contact" className="text-gray-700 hover:text-gray-900">Contact</a>
        <div className="relative group">
          <button className="text-gray-700 hover:text-gray-900 flex items-center">
            More Options
            <svg 
              className="ml-1 w-4 h-4" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
      </div> */}

      {/* Auth buttons */}
      <div className="flex items-center space-x-3">
        <button className="px-4 py-1 text-gray-600 border border-gray-300 rounded hover:bg-gray-50">
          Join
        </button>
        <button className="px-4 py-1 text-white bg-black rounded hover:bg-gray-800">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navigation;