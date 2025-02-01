import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Nav';

const Contact = () => {
  return (
    <>
    <Navigation />
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-lg">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <p className="text-gray-600 text-lg">We'd love to help you achieve your next goals.</p>
        
        <div className="mt-6 space-y-3">
          <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-gray-700 font-medium">support@example.com</span>
          </div>
          
          <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-gray-700 font-medium">+1 (555) 123-4567</span>
          </div>
          
          <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-gray-700 font-medium">123 Santa Ave, New York NY 10001 US</span>
          </div>
        </div>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
            />
          </div>
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
          />
        </div>

        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
          />
        </div>

        <div>
          <select className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 appearance-none">
            <option value="">Select a Type</option>
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
            <option value="type3">Type 3</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <p className="font-semibold text-gray-700">How did you find?</p>
            <div className="space-y-3">
              {['Online search', 'Other search', 'Other'].map((option) => (
                <label key={option} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer">
                  <input type="radio" name="source" className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="font-semibold text-gray-700">Looking for</p>
            <div className="space-y-3">
              {['Brand review', 'Service package', 'Other'].map((option) => (
                <label key={option} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer">
                  <input type="radio" name="looking" className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div>
          <textarea
            placeholder="Write your message"
            rows={4}
            className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
          />
        </div>

        <label className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer">
          <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
          <span className="text-gray-600">I agree to Terms</span>
        </label>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl text-lg font-semibold hover:opacity-90 transform hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
    <Footer />
    </>
  );
};

export default Contact;