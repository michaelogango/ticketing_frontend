import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Footer from '../components/Footer';
import Navigation from '../components/Nav';

const ManageEvent = () => {
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);

  const [eventData, setEventData] = useState({
    title: '',
    date: '',
    time: '',
    venue: '',
    ticketPrice: '',
    description: ''
  });

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});

  // Handles changes for both event and user forms
  const handleInputChange = (e, type) => {
    const { name, value } = e.target;
    if (type === "user") {
      setUserData((prevUserData) => ({
        ...prevUserData,
        [name]: value,
      }));
    } else if (type === "event") {
      setEventData((prevEventData) => ({
        ...prevEventData,
        [name]: value,
      }));
    }
  };

  // Form validation function
  const validateForm = (type) => {
    const newErrors = {};
    if (type === "event") {
      if (!eventData.title) newErrors.title = 'Title is required';
      if (!eventData.date) newErrors.date = 'Date is required';
      if (!eventData.time) newErrors.time = 'Time is required';
      if (!eventData.venue) newErrors.venue = 'Venue is required';
      if (!eventData.ticketPrice || isNaN(eventData.ticketPrice)) newErrors.ticketPrice = 'Valid ticket price is required';
      if (!eventData.description) newErrors.description = 'Description is required';
    } else if (type === "user") {
      if (!userData.name) newErrors.name = 'Name is required';
      if (!userData.email) newErrors.email = 'Email is required';
      if (!userData.phone) newErrors.phone = 'Phone number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission for events
  const handleEventSubmit = async (e) => {
    e.preventDefault();
    if (validateForm("event")) {
      try {
        const response = await fetch('http://127.0.0.1:5000/events', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(eventData),
        });
        const result = await response.json();
        console.log('Event submitted successfully:', result);
        setIsEventModalOpen(false);
      } catch (error) {
        console.error('Error submitting event:', error);
      }
    }
  };

  // Handle form submission for users
  const handleUserSubmit = async (e) => {
    e.preventDefault();
    if (validateForm("user")) {
      try {
        const response = await fetch('http://127.0.0.1:5000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
        const result = await response.json();
        console.log('User added successfully:', result);
        setIsUserModalOpen(false);
      } catch (error) {
        console.error('Error adding user:', error);
      }
    }
  };

  return (
    <>
      <Navigation />
      <div>
        {/* Header Section */}
        <div className="relative mb-12">
          <div className="bg-gradient-to-r from-orange-600 to-black-800 pb-32 pt-12 text-center text-white">
            <h1 className="text-4xl font-bold">Discover</h1>
            <h2 className="text-6xl font-extrabold">Manage Your Events</h2>
            <p className="text-blue-100 text-lg">Easily upload, update, or delete your events with just a few clicks.</p>
          </div>
        </div>

        {/* Manage Events Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-12 bg-white p-6 rounded-lg shadow text-center">
            <h2 className="text-4xl font-bold text-gray-900">Make your event public</h2>
            <p className="text-gray-600">Event customization at your fingertips.</p>
            <div className="flex justify-center gap-3">
              <button className="px-9 py-2 rounded-md text-sm border border-orange-300 text-gray-700" onClick={() => setIsEventModalOpen(true)}>Add Event</button>
              <button className="px-9 py-2 rounded-md text-sm border border-orange-300 text-gray-700" onClick={() => setIsEventModalOpen(true)}>Manage Event</button>
            </div>
          </div>
        </div>

        {/* Manage Users Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-12 bg-white p-6 rounded-lg shadow text-center">
            <h2 className="text-4xl font-bold text-gray-900">Add Those Who Will Attend</h2>
            <p className="text-gray-600">Attend your event with those you consider family.</p>
            <div className="flex justify-center gap-3">
              <button className="px-9 py-2 rounded-md text-sm border border-orange-300 text-gray-700" onClick={() => setIsUserModalOpen(true)}>Add User</button>
              <button className="px-9 py-2 rounded-md text-sm border border-orange-300 text-gray-700" onClick={() => setIsUserModalOpen(true)}>View User</button>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-12 bg-white p-6 rounded-lg shadow text-center">
            <h2 className="text-4xl font-bold text-gray-900">Add where you would like to hold it</h2>
            <p className="text-gray-600">Location, Location Location, feel free to put any Venue</p>
            <div className="flex justify-center gap-3">
              <button className="px-9 py-2 rounded-md text-sm border border-orange-300 text-gray-700" onClick={() => setIsUserModalOpen(true)}>Add Venue</button>
              <button className="px-9 py-2 rounded-md text-sm border border-orange-300 text-gray-700" onClick={() => setIsUserModalOpen(true)}>Manage Venue</button>
            </div>
          </div>
        </div>

        {/* Modal for Adding Event */}
        {isEventModalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
              <h2 className="text-2xl font-bold mb-4">Add Event</h2>
              <form onSubmit={handleEventSubmit}>
                {["title", "date", "time", "venue", "ticketPrice", "description"].map((field) => (
                  <div className="mb-4" key={field}>
                    <label className="block text-sm font-medium">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                    <input type="text" name={field} value={eventData[field]} onChange={(e) => handleInputChange(e, "event")} className="mt-1 p-2 border w-full" />
                    {errors[field] && <p className="text-red-500">{errors[field]}</p>}
                  </div>
                ))}
                <button type="submit" className="px-4 py-2 border rounded-md">Add Event</button>
                {/* <button onClick={onClose} className="mt-4 px-4 py-2 rounded-md bg-gray-300">Close</button> */}
              </form>
            </div>
          </div>
        )}

        {/* Modal for Adding User */}
        {isUserModalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
              <h2 className="text-2xl font-bold mb-4">Add User</h2>
              <form onSubmit={handleUserSubmit}>
                {["name", "email", "phone"].map((field) => (
                  <div className="mb-4" key={field}>
                    <label className="block text-sm font-medium">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                    <input type="text" name={field} value={userData[field]} onChange={(e) => handleInputChange(e, "user")} className="mt-1 p-2 border w-full" />
                    {errors[field] && <p className="text-red-500">{errors[field]}</p>}
                  </div>
                ))}
                <button type="submit" className="px-4 py-2 border rounded-md">Add User</button>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ManageEvent;
