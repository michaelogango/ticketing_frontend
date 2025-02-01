import React, { useState } from 'react';
import { Settings, ChevronRight } from 'lucide-react';
import Footer from '../components/Footer';
import Navigation from '../components/Nav';

const ManageEvent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // For modal visibility
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    venue: '',
    ticketPrice: '',
    description: ''
  });
  const [errors, setErrors] = useState({});
  
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form validation function
  const validateForm = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.venue) newErrors.venue = 'Venue is required';
    if (!formData.ticketPrice || isNaN(formData.ticketPrice)) newErrors.ticketPrice = 'Valid ticket price is required';
    if (!formData.description) newErrors.description = 'Description is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Send data to the backend (mock API call for now)
      try {
        const response = await fetch('https://your-backend-api.com/events', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const result = await response.json();
        console.log('Event submitted successfully:', result);
        setIsModalOpen(false); // Close modal after successful submission
      } catch (error) {
        console.error('Error submitting event:', error);
      }
    }
  };

  return (
    <>
    <Navigation />
    <div>
      {/* Header Section with background gradient */}
      <div className="bg-gradient-to-r from-orange-500 to-white p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">Manage Your Events</h1>
          <p className="text-gray-600">
            Easily upload, update, or delete your events with just a few clicks.
          </p>
        </div>
      </div>

      {/* Buttons Section */}
      <div className=" max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Section */}
        <div className="mb-12 bg-white p-6 rounded-lg shadow">
          <h2 className="text-4xl font-bold text-gray-900 mb-2 flex justify-center">
            Make your event public
          </h2>
          <p className="text-gray-600 mb-4 flex justify-center">
            Event customization at your fingertips. Easily manage your events with just a few clicks.
          </p>
          <div className="flex justify-center gap-3">
            <button
              className="px-9 py-2 rounded-md text-sm border border-orange-300 text-gray-700 hover:bg-gray-50 transition-colors"
              onClick={() => setIsModalOpen(true)} // Open the modal
            >
              Add
            </button>
            <button className="px-9 py-2 rounded-md text-sm border border-orange-300 text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
              Edit <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
      <div className=" max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Section */}
        <div className="mb-12 bg-white p-6 rounded-lg shadow">
          <h2 className="text-4xl font-bold text-gray-900 mb-2 flex justify-center">
            Add Those Who Will Attend
          </h2>
          <p className="text-gray-600 mb-4 flex justify-center">
            Attend your event with those you consider family
          </p>
          <div className="flex justify-center gap-3">
            <button
              className="px-9 py-2 rounded-md text-sm border border-orange-300 text-gray-700 hover:bg-gray-50 transition-colors"
              onClick={() => setIsModalOpen(true)} // Open the modal
            >
              Add User
            </button>
            <button className="px-9 py-2 rounded-md text-sm border border-orange-300 text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
              Edit User <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Adding Event */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <h2 className="text-2xl font-bold mb-4">Add Event</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
                {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
                {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Time</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
                {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Venue</label>
                <input
                  type="text"
                  name="venue"
                  value={formData.venue}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
                {errors.venue && <p className="text-red-500 text-sm">{errors.venue}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Ticket Price</label>
                <input
                  type="number"
                  name="ticketPrice"
                  value={formData.ticketPrice}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
                {errors.ticketPrice && <p className="text-red-500 text-sm">{errors.ticketPrice}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Description (short)</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  rows="3"
                />
                {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
              </div>
              <div className="flex justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-md text-sm border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md text-sm border border-orange-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default ManageEvent;