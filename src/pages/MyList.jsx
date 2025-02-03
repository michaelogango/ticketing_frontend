import React, { useState, useEffect } from 'react';
import MyEvents from '../components/MyEvents';
import Footer from '../components/Footer';
import Navigation from '../components/Nav';

const MyList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://ticket-db-dtex.onrender.com/users');
        if (!response.ok) throw new Error('Failed to fetch users');
        const result = await response.json();
        setUsers(result);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const fetchUserTickets = async (userId) => {
    if (!userId) return;
    try {
      setLoading(true);
      setError(null);
      setEvents([]); // Reset previous events
  
      const response = await fetch(`https://ticket-db-dtex.onrender.com/tickets`);
      if (!response.ok) throw new Error('Failed to fetch tickets');
  
      const data = await response.json();
      
      // Ensure tickets belong to the selected user
      const filteredTickets = data.filter(ticket => ticket.user_id === userId);
      setEvents(filteredTickets);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUserChange = (event) => {
    const userId = event.target.value;
    setSelectedUser(userId);
    fetchUserTickets(userId);
  };

  return (
    <>
      <Navigation />
      <div className="relative mb-12">
        <div className="bg-gradient-to-r from-orange-600 to-black-800 pb-32 pt-12 text-center text-white">
          <h1 className="text-4xl font-bold">Discover</h1>
          <h2 className="text-6xl font-extrabold">Manage Your Events</h2>
          <p className="text-blue-100 text-lg">Easily upload, update, or delete your events with just a few clicks.</p>
        </div>
      </div>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4 text-center">View User Tickets</h1>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Select a User:</label>
            <select
              className="w-full p-2 border rounded-md"
              onChange={handleUserChange}
              value={selectedUser}
            >
              <option value="" disabled>Select a user</option>
              {users.map(user => (
                <option key={user.id} value={user.id}>{user.name}</option>
              ))}
            </select>
          </div>

          {error && <p className="text-red-500">Error: {error}</p>}
          {loading && <p className="text-gray-600">Loading tickets...</p>}

          {!loading && events.length === 0 && selectedUser && (
            <p className="text-gray-500">No tickets found for this user.</p>
          )}

          {!loading && events.length > 0 && (
            <div className="space-y-6">
              {events.map(event => (
                <MyEvents
                  key={event.id}
                  title={event.title}
                  subtitle={event.date}
                  description="View your ticket details below."
                  actions={[{ label: 'View Details', hasArrow: true }]}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyList;
