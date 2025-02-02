import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import MyEvents from '../components/MyEvents';
import Footer from '../components/Footer';
import Navigation from '../components/Nav';

const LoadingSkeleton = () => (
  <div className="space-y-6">
    {[1, 2, 3, 4].map((n) => (
      <div key={n} className="p-6 bg-white rounded-lg shadow-sm animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-1/4 mb-3"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="flex gap-3">
          <div className="h-8 bg-gray-200 rounded w-20"></div>
          <div className="h-8 bg-gray-200 rounded w-20"></div>
        </div>
      </div>
    ))}
  </div>
);

const MyList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users,setUsers]= useState([]);

  
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://127.0.0.1:5000/tickets'); 
        if (!response.ok) throw new Error('Failed to fetch events');
        const data = await response.json();
        setEvents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/users');
        const result = await response.json();
        setUsers(result); // Set fetched users into state
      } catch (error) {
        console.error('Error fetching Users:', error);
      }
    };
    fetchUser();
  }, []);

  // Group events by category
  const groupedEvents = {
    today: events.filter(event => 
      new Date(event.date).toDateString() === new Date().toDateString()
    ),
    tomorrow: events.filter(event => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return new Date(event.date).toDateString() === tomorrow.toDateString();
    }),
    past: events.filter(event => 
      new Date(event.date) < new Date() && event.status === 'past'
    ),
    archived: events.filter(event => event.status === 'archived')
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <p className="text-red-600 mb-4">Error: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
    <Navigation />
    <div className="min-h-screen bg-gray-50">
      {/* Header with gradient */}
      <div className="relative mb-12">
          <div className="bg-gradient-to-r from-orange-600 to-black-800 pb-32 pt-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center text-white">
                <h1 className="text-4xl font-bold mb-2">Discover</h1>
                <h2 className="text-6xl font-extrabold mb-4">View your events</h2>
                <p className="text-blue-100 text-lg mb-8">
                Easily view and manage all your booked events in one convenient location.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          </div>
        </div>


      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Section */}
        <div className="mb-12 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Upcoming and Past Events at a Glance
          </h2>
          <p className="text-gray-600 mb-4">
            Here's a comprehensive timeline of all your booked events. Stay organized and never miss out!
          </p>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-md text-sm border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
              Manage
            </button>
            <button className="px-4 py-2 rounded-md text-sm border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
              Details <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Timeline Sections */}
        {loading ? (
          <LoadingSkeleton />
        ) : (
          <div className="space-y-6">
            {groupedEvents.today.length > 0 && (
              <MyEvents
                title="Today"
                subtitle={groupedEvents.today[0].title}
                description="Check your ticket details below."
                actions={[
                  { 
                    label: 'Edit', 
                    primary: true,
                    onClick: () => console.log('Edit clicked')
                  },
                  { 
                    label: 'Cancel', 
                    hasArrow: true,
                    onClick: () => console.log('Cancel clicked')
                  }
                ]}
              />
            )}

            {groupedEvents.tomorrow.length > 0 && (
              <MyEvents
                title="Tomorrow"
                subtitle={groupedEvents.tomorrow[0].title}
                description="Your ticket details are ready."
                actions={[
                  { label: 'Update' },
                  { label: 'View', hasArrow: true }
                ]}
              />
            )}

            {groupedEvents.past.length > 0 && (
              <MyEvents
                title="Past"
                subtitle="Completed Events"
                description={`You have ${groupedEvents.past.length} past events.`}
                actions={[
                  { label: 'View History', hasArrow: true }
                ]}
              />
            )}

            {groupedEvents.archived.length > 0 && (
              <MyEvents
                title="Archived"
                subtitle="Old Events"
                description={`You have ${groupedEvents.archived.length} archived events.`}
                actions={[
                  { label: 'Browse Archives', hasArrow: true }
                ]}
              />
            )}
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default MyList;