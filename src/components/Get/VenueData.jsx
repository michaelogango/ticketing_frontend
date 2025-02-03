import React, { useState, useEffect } from 'react';
import { Pencil, Trash2, X } from 'lucide-react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const VenueFormikData = () => {
  const [venues, setVenues] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editVenue, setEditVenue] = useState(null);

  useEffect(() => {
    fetchVenues();
  }, []);

  const fetchVenues = async () => {
    try {
      const response = await fetch('https://ticket-db-dtex.onrender.com/venues');
      const data = await response.json();
      setVenues(data);
    } catch (error) {
      console.error('Error fetching venues:', error);
    }
  };

  const handleDelete = async (venueId) => {
    try {
      await fetch(`https://ticket-db-dtex.onrender.com/venues/${venueId}`, {
        method: 'DELETE',
      });
      setVenues(venues.filter(venue => venue.id !== venueId));
    } catch (error) {
      console.error('Error deleting venue:', error);
    }
  };

  const handleEdit = (venue) => {
    setEditVenue(venue);
    setIsEditing(true);
  };

  const handleUpdate = async (values, { setSubmitting }) => {
    try {
      await fetch(`https://ticket-db-dtex.onrender.com/venues/${editVenue.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      
      setVenues(venues.map(venue => 
        venue.id === editVenue.id ? { ...venue, ...values } : venue
      ));
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating venue:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    location: Yup.string().required('Location is required'),
    capacity: Yup.number().positive('Capacity must be positive').required('Capacity is required'),
  });

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Venue Details</h1>
      
      <div className="space-y-4">
        {venues.map(venue => (
          <div key={venue.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-900">{venue.name}</h3>
                <p className="text-gray-600">{venue.location}</p>
                <p className="text-gray-600">Capacity: {venue.capacity}</p>
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={() => handleEdit(venue)}
                  className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors duration-200"
                >
                  <Pencil className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleDelete(venue.id)}
                  className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors duration-200"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-800">Edit Venue</h2>
              <button
                onClick={() => setIsEditing(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <Formik
              initialValues={{
                name: editVenue?.name || '',
                location: editVenue?.location || '',
                capacity: editVenue?.capacity || '',
              }}
              validationSchema={validationSchema}
              onSubmit={handleUpdate}
            >
              {({ isSubmitting }) => (
                <Form className="p-6 space-y-4">
                  <div className="space-y-4">
                    <div>
                      <Field
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                      />
                      <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div>
                      <Field
                        type="text"
                        name="location"
                        placeholder="Location"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                      />
                      <ErrorMessage name="location" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div>
                      <Field
                        type="number"
                        name="capacity"
                        placeholder="Capacity"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                      />
                      <ErrorMessage name="capacity" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                  </div>
                  
                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 mr-2 transition-colors duration-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      {isSubmitting ? 'Saving...' : 'Save Changes'}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
};

export default VenueFormikData;
