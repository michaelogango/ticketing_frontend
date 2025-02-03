import React, { useState, useEffect } from "react";
import Navigation from "../components/Nav";
import Footer from "../components/Footer";
import { Search } from "lucide-react";
import EventCard from "../components/EventCard";

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
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("https://ticket-db-dtex.onrender.com/events");
        if (!response.ok) throw new Error(`Failed to fetch events: ${response.status}`);
        const data = await response.json();
        setEvents(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching events:", error);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://ticket-db-dtex.onrender.com/users");
        if (!response.ok) throw new Error(`Failed to fetch users: ${response.status}`);
        const data = await response.json();
        setUsers(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching users:", error);
        setUsers([]);
      }
    };

    fetchUsers();
  }, []);

  const handleBookNow = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const confirmBooking = async () => {
    if (!selectedUser) {
      alert("Please select a user.");
      return;
    }

    try {
      const response = await fetch("https://ticket-db-dtex.onrender.com/tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventid: selectedEvent.id,
          userid: selectedUser,
          ticketType: "General", // Default ticket type
          price: selectedEvent.ticketprice, // Use event's price
        }),
      });

      if (!response.ok) throw new Error("Failed to book event.");

      alert("Event booked successfully!");
      setShowModal(false);
      setSelectedUser(null);
      setSelectedEvent(null);
    } catch (error) {
      console.error("Error booking event:", error);
      alert("Failed to book event.");
    }
  };

  const filteredEvents = events.filter((event) =>
    event.title?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50">
        <div className="relative mb-12">
          <div className="bg-gradient-to-r from-orange-600 to-black-800 pb-32 pt-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center text-white">
                <h1 className="text-4xl font-bold mb-2">Discover</h1>
                <h2 className="text-6xl font-extrabold mb-4">Explore Upcoming Events</h2>
                <p className="text-orange-100 text-lg mb-8">
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
            <div className="mt-1 h-1 w-24 bg-orange-600 rounded"></div>
          </div>
          {loading ? (
            <div className="text-center py-12">Loading events...</div>
          ) : (
            <div className="space-y-6">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} onBookNow={() => handleBookNow(event)} />
              ))}
            </div>
          )}
        </div>
      </div>

      {showModal && selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Confirm Booking</h2>
            <p className="mb-2"><strong>Event:</strong> {selectedEvent.title}</p>
            <p className="mb-2"><strong>Date:</strong> {selectedEvent.date}</p>
            <p className="mb-2"><strong>Price:</strong> ${selectedEvent.ticketprice}</p>
            
            <h3 className="text-lg font-semibold mb-2">Select a User</h3>
            <ul className="mb-4">
              {users.map((user) => (
                <li
                  key={user.id}
                  className={`p-2 cursor-pointer rounded-md ${
                    selectedUser === user.id ? "bg-orange-500 text-white" : "hover:bg-gray-200"
                  }`}
                  onClick={() => setSelectedUser(user.id)}
                >
                  {user.name}
                </li>
              ))}
            </ul>
            <div className="flex justify-end space-x-2">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-orange-600 text-white px-4 py-2 rounded"
                onClick={confirmBooking}
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default PageEvents;
