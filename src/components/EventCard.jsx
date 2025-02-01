import React from 'react';

const EventCard = ({ event, onBookNow }) => {
  const handleBookNow = () => {
    if (onBookNow) {
      onBookNow(event.id);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-600">Date</p>
              <p className="font-medium">{new Date(event.date).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Time</p>
              <p className="font-medium">{event.time}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Venue</p>
              <p className="font-medium">{event.venue}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Price</p>
              <p className="font-medium">${typeof event.ticketPrice === "number" ? event.ticketPrice.toFixed(2) : "0.00"}</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">{event.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">
              {event.remainingTickets} tickets remaining
            </span>
            <button 
              onClick={handleBookNow}
              className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
