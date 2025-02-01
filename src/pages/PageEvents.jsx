import React, { useState, useEffect } from 'react';
import Navigation from '../components/Nav';
import Footer from '../components/Footer';
import { Search } from 'lucide-react';
import EventCard from '../components/EventCard';

const SearchBar = ({ onSearch }) => (
  <div className="relative w-full max-w-2xl mx-auto">
    <input
      type="text"
      placeholder="Search events..."
      className="w-full px-4 py-3 pl-12 rounded-full border border-gray-300 focus:outline-none focus:border-black-500 shadow-sm"
      onChange={(e) => onSearch(e.target.value)}
    />
    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
  </div>
);

const PageEvents = () => {
  // ✅ Correctly defining state variables
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/events");
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchEvents();
  }, []);

  const handleBookNow = (eventId) => {
    console.log(`Booking event with ID: ${eventId}`);
  };

  const filteredEvents = events.filter((event) => {
    const title = event.title ? event.title.toLowerCase() : "";
    // const description = event.description ? event.description.toLowerCase() : "";
    return title.includes(searchQuery.toLowerCase());
  });

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50">
        <div className="relative mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-black-800 pb-32 pt-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center text-white">
                <h1 className="text-4xl font-bold mb-2">Discover</h1>
                <h2 className="text-6xl font-extrabold mb-4">Explore Upcoming Events</h2>
                <p className="text-blue-100 text-lg mb-8">
                  Find and purchase tickets for exciting events happening near you.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative -mt-16 bg-white rounded-lg shadow-xl p-6">
              <SearchBar onSearch={setSearchQuery} />
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Events</h2>
            <div className="mt-1 h-1 w-24 bg-blue-600 rounded"></div>
          </div>
          {loading ? (
            <div className="text-center py-12">Loading events...</div>
          ) : (
            <div className="space-y-6">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} onBookNow={handleBookNow} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PageEvents;
