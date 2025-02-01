import React from 'react';
import { ChevronRight } from 'lucide-react';

const MyEvents = ({ title, subtitle, description, actions }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h2 className="text-xl font-bold text-gray-900 mb-1">{title}</h2>
      <h3 className="text-lg text-gray-700 mb-2">{subtitle}</h3>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <div className="flex gap-3">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.onClick}
            className={`px-4 py-2 rounded-md text-sm flex items-center gap-2 ${
              action.primary
                ? 'bg-orange-500 text-white hover:bg-orange-600'
                : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
            } transition-colors`}
          >
            {action.label}
            {action.hasArrow && <ChevronRight size={16} />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MyEvents;