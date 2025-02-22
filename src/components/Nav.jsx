import React from 'react';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
      {/* Logo section */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <img 
            src="../../public/Images/logo.svg" 
            alt="Company Logo" 
            className="h-8 w-auto"
          />
        </Link>
      </div>
      {/* Navigation links */}
      <div className="flex items-center space-x-6">
        <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
        <Link to="/events" className="text-gray-700 hover:text-gray-900">Events List</Link>
        <Link to="/tickets" className="text-gray-700 hover:text-gray-900">My Tickets</Link>
        
        <div className="relative group">
            <button className="text-gray-700 hover:text-gray-900 flex items-center"
            onClick={() => navigate('/manage')}
            >Manage Events</button>
        </div>
        <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
        </div>
    

      {/* Auth buttons */}
      <div className="flex items-center space-x-3">
      <button
          className="px-4 py-1 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
          onClick={() => navigate('/logi')}
        >
          Join
        </button>
        <button
          className="px-4 py-1 text-white bg-black rounded hover:bg-gray-800"
          onClick={() => navigate('/logi')}
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navigation;