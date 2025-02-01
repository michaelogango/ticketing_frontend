import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';

const EventsList = () => {
  const events = [
    {
      id: 1,
      date: { day: '09', dayName: 'Fri', month: 'Feb 2024' },
      title: 'Live Music Night',
      location: 'Downtown',
      description: 'Join us for an unforgettable evening of live performances and great company.',
      status: 'Sold out'
    },
    {
      id: 2,
      date: { day: '10', dayName: 'Sat', month: 'Feb 2024' },
      title: 'Theater Performance',
      location: 'Uptown',
      description: 'Experience an evening of drama and excitement at the local theater.'
    },
    {
      id: 3,
      date: { day: '11', dayName: 'Sun', month: 'Feb 2024' },
      title: 'Sports Championship',
      location: 'Stadium',
      description: 'Cheer for your favorite team in an electrifying atmosphere filled with fans.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      {events.map((event) => (
        <div
          key={event.id}
          className="border-t border-gray-200 py-6 flex justify-between items-start"
        >
          {/* Date Column */}
          <div className="flex gap-6">
            <div className="w-20 text-center">
              <div className="text-sm text-gray-500">{event.dayName}</div>
              <div className="text-2xl font-bold">{event.day}</div>
              <div className="text-sm text-gray-500">{event.month}</div>
            </div>

            {/* Event Details */}
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-lg font-semibold">{event.title}</h3>
                {event.status && (
                  <span className="text-sm text-gray-500">({event.status})</span>
                )}
              </div>
              <p className="text-sm text-gray-600 mb-1">{event.location}</p>
              <p className="text-sm text-gray-600">{event.description}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
              <Pencil className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors">
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsList;