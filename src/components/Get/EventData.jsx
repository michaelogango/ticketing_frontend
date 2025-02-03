import React, { useState, useEffect } from 'react';
import { Pencil, Trash2, X } from 'lucide-react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const EventFormikData = () => {
  const [events, setEvents] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editEvent, setEditEvent] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('https://ticket-db-dtex.onrender.com/events');
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleDelete = async (eventId) => {
    try {
      await fetch(`https://ticket-db-dtex.onrender.com/events/${eventId}`, {
        method: 'DELETE',
      });
      setEvents(events.filter(event => event.id !== eventId));
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const handleEdit = (event) => {
    setEditEvent(event);
    setIsEditing(true);
  };

  const handleUpdate = async (values, { setSubmitting }) => {
    try {
      await fetch(`https://ticket-db-dtex.onrender.com/events/${editEvent.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      
      setEvents(events.map(event => 
        event.id === editEvent.id ? { ...event, ...values } : event
      ));
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating event:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    date: Yup.date().required('Date is required'),
    time: Yup.string().required('Time is required'),
    venueid: Yup.string().required('Venue ID is required'),
    userid: Yup.string().required('User ID is required'),
    ticketprice: Yup.number().positive('Ticket price must be positive').required('Ticket price is required'),
    description: Yup.string().required('Description is required'),
  });

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Event Details</h1>
      
      <div className="space-y-4">
        {events.map(event => (
          <div key={event.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-900">{event.title}</h3>
                <p className="text-gray-600">{event.date} at {event.time}</p>
                <p className="text-gray-600">Venue: {event.venueid}</p>
                <p className="text-gray-600">Price: ${event.ticketprice}</p>
                <p className="text-gray-600">{event.description}</p>
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={() => handleEdit(event)}
                  className="p-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-colors duration-200"
                >
                  <Pencil className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleDelete(event.id)}
                  className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors duration-200"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-800">Edit Event</h2>
              <button
                onClick={() => setIsEditing(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <Formik
              initialValues={{
                title: editEvent?.title || '',
                date: editEvent?.date || '',
                time: editEvent?.time || '',
                venueid: editEvent?.venueid || '',
                userid: editEvent?.userid || '',
                ticketprice: editEvent?.ticketprice || '',
                description: editEvent?.description || '',
              }}
              validationSchema={validationSchema}
              onSubmit={handleUpdate}
            >
              {({ isSubmitting }) => (
                <Form className="p-6 space-y-4">
                  <div className="space-y-4">
                    {Object.keys(validationSchema.fields).map(field => (
                      <div key={field}>
                        <Field
                          type="text"
                          name={field}
                          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                        />
                        <ErrorMessage name={field} component="div" className="text-red-500 text-sm mt-1" />
                      </div>
                    ))}
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
                      className="px-4 py-2 text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors duration-200"
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

export default EventFormikData;
