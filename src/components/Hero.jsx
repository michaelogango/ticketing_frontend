import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-black/40"
        style={{
          backgroundImage: `url('../Images/hero.jpg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Content container */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 text-white">
        {/* Hero text content */}
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Discover and manage your events with our seamless ticketing solution.
          </h1>
          
          <p className="text-lg mb-10 opacity-90">
            Easily purchase, upload, and update tickets for all your favorite events in one place.
          </p>
          
          {/* Call to action links */}
          <div className="flex gap-4">
            <Link 
              to="/events" 
              className="px-6 py-3 bg-white text-black font-medium rounded hover:bg-white/90 transition-colors"
            >
              Get Tickets
            </Link>
            <Link 
              to="/tickets" 
              className="px-6 py-3 border-2 border-white font-medium rounded hover:bg-white/10 transition-colors"
            >
              My tickets
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;