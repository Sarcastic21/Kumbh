import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import your authentication context

const PackageCard = ({ pkg = {} }) => {
  const { user, login } = useAuth(); // Assuming `useAuth` provides `user` state to indicate login status
  const [alertVisible, setAlertVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(null); // Define activeSection state

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handleClick = (e) => {
    if (!user) {
      e.preventDefault(); // Prevent the navigation if the user is not logged in
      setAlertVisible(true); // Show the alert
      setTimeout(() => setAlertVisible(false), 3000); // Hide the alert after 3 seconds
    }
  };
  const renderDay = (day, dayData = {}) => {
    return (
      <div className="mb-6 bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold text-lg mb-3 text-blue-800">Day {day}</h4>

        {dayData.morning && (
          <div className="mb-4">
            <p className="font-medium text-blue-700 flex items-center mb-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Morning
            </p>
            <ul className="ml-4 space-y-2">
              {Object.entries(dayData.morning).map(([key, value]) => (
                <li key={key} className="text-sm text-gray-700">{value}</li>
              ))}
            </ul>
          </div>
        )}

        {Array.isArray(dayData.afternoon) && dayData.afternoon.length > 0 && (
          <div className="mb-4">
            <p className="font-medium text-blue-700 flex items-center mb-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Afternoon
            </p>
            <ul className="ml-4 space-y-2">
              {dayData.afternoon.map((item, index) => (
                <li key={index} className="text-sm text-gray-700">
                  <span className="font-medium text-blue-600">{item?.activity}</span>: {item?.description}
                </li>
              ))}
            </ul>
          </div>
        )}

        {Array.isArray(dayData.evening) && dayData.evening.length > 0 && (
          <div className="mb-4">
            <p className="font-medium text-blue-700 flex items-center mb-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Evening
            </p>
            <ul className="ml-4 space-y-2">
              {dayData.evening.map((item, index) => (
                <li key={index} className="text-sm text-gray-700">
                  <span className="font-medium text-blue-600">{item?.activity}</span>: {item?.description}
                </li>
              ))}
            </ul>
          </div>
        )}

        {dayData.night && (
          <div className="mb-4">
            <p className="font-medium text-blue-700 flex items-center mb-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Night
            </p>
            <ul className="ml-4 space-y-2">
              {Object.entries(dayData.night).map(([key, value]) => (
                <li key={key} className="text-sm text-gray-700">{value}</li>
              ))}
            </ul>
          </div>
        )}

        {dayData.early_morning && (
          <div className="mb-4">
            <p className="font-medium text-blue-700 flex items-center mb-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Early Morning
            </p>
            <ul className="ml-4 space-y-2">
              {Object.entries(dayData.early_morning).map(([key, value]) => (
                <li key={key} className="text-sm text-gray-700">{value}</li>
              ))}
            </ul>
          </div>
        )}
        {Array.isArray(dayData.morning_visits) && dayData.morning_visits.length > 0 && (
          <div className="mb-4">
            <p className="font-medium text-blue-700 flex items-center mb-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Morning Visits
            </p>
            <ul className="ml-4 space-y-2">
              {dayData.morning_visits.map((item, index) => (
                <li key={index} className="text-sm text-gray-700">
                  <span className="font-medium text-blue-600">{item?.activity}</span>: {item?.description}
                </li>
              ))}
            </ul>
          </div>
        )}
        {Array.isArray(dayData.midday) && dayData.midday.length > 0 && (
          <div className="mb-4">
            <p className="font-medium text-blue-700 flex items-center mb-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Midday
            </p>
            <ul className="ml-4 space-y-2">
              {dayData.midday.map((item, index) => (
                <li key={index} className="text-sm text-gray-700">
                  <span className="font-medium text-blue-600">{item?.activity}</span>: {item?.description}
                </li>
              ))}
            </ul>
          </div>
        )}
        {dayData.check_out_and_departure && (
          <div className="mb-4">
            <p className="font-medium text-blue-700 flex items-center mb-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Check-out and Departure
            </p>
            <ul className="ml-4 space-y-2">
              <li className="text-sm text-gray-700">
                {dayData.check_out_and_departure.drop_off}
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  };

  if (!pkg) {
    return null;
  }

  return (
    <div className="border rounded-xl min-w-[300px]  p-6 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      {pkg.image && (
        <div className="mb-6">
          <img
            src={pkg.image}
            alt={`${pkg.title}`}
            className="w-full object-cover rounded-lg"
          />
        </div>
      )}
      {/* Header Section */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2 text-blue-900">{pkg.title || 'Package Title'}</h2>
        <p className="text-gray-600 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {pkg.duration || 'Duration not specified'}
        </p>
      </div>

      {/* Contact Numbers */}
      {Array.isArray(pkg.contact_numbers) && pkg.contact_numbers.length > 0 && (
        <div className="mb-6 bg-blue-50 p-4 rounded-lg">
          <div className="flex flex-wrap gap-3">
            {pkg.contact_numbers.map((number) => (
              <a
                key={number}
                href={`tel:${number}`}
                className="inline-flex items-center px-4 py-2 bg-white text-blue-600 rounded-full border border-blue-200 hover:bg-blue-600 hover:text-white transition-colors duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {number}
              </a>
            ))}
            
            <div>
      {alertVisible && (
        <div
          style={{
            backgroundColor: 'white',
            color: '#e65100',
            border: '2px solid #e65100',
            padding: '10px 20px',
            borderRadius: '5px',
            fontSize: '16px',
            fontWeight: 'bold',
            textAlign: 'center',
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: '1000',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            opacity: alertVisible ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        >
          Please login to book service
        </div>
      )}

      <RouterLink
        to={user ? "/booking" : "#"} // Only allow navigation if user is logged in
        className="button"
        onClick={handleClick}
      >
        Book Now
      </RouterLink>
    </div>
          </div>
          
        </div>
      )}

      {/* Collapsible Sections */}
      <div className="space-y-4">
        {pkg.itinerary && (
          <div className="border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('itinerary')}
              className="w-full text-left py-4 px-6 bg-gradient-to-r from-blue-50 to-white font-medium flex justify-between items-center hover:bg-blue-100 transition-colors"
            >
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Itinerary
              </span>
              <span className="text-blue-600 text-xl">{activeSection === 'itinerary' ? '−' : '+'}</span>
            </button>
            {activeSection === 'itinerary' && (
              <div className="p-6">
                {Object.entries(pkg.itinerary).map(([day, dayData]) => (
                  <div key={day}>
                    {renderDay(day.replace('day_', ''), dayData)}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Inclusions Section */}
        {Array.isArray(pkg._inclusions_) && pkg._inclusions_.length > 0 && (
          <div className="border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('inclusions')}
              className="w-full text-left py-4 px-6 bg-gradient-to-r from-blue-50 to-white font-medium flex justify-between items-center hover:bg-blue-100 transition-colors"
            >
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Inclusions
              </span>
              <span className="text-blue-600 text-xl">{activeSection === 'inclusions' ? '−' : '+'}</span>
            </button>
            {activeSection === 'inclusions' && (
              <div className="p-6">
                <ul className="space-y-2">
                  {pkg._inclusions_.map((item, index) => (
                    <li key={index} className="text-sm text-gray-700 flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-1.5"></span>
                      {item?.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Exclusions Section */}
        {Array.isArray(pkg._exclusions_) && pkg._exclusions_.length > 0 && (
          <div className="border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('exclusions')}
              className="w-full text-left py-4 px-6 bg-gradient-to-r from-blue-50 to-white font-medium flex justify-between items-center hover:bg-blue-100 transition-colors"
            >
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Exclusions
              </span>
              <span className="text-blue-600 text-xl">{activeSection === 'exclusions' ? '−' : '+'}</span>
            </button>
            {activeSection === 'exclusions' && (
              <div className="p-6">
                <ul className="space-y-2">
                  {pkg._exclusions_.map((item, index) => (
                    <li key={index} className="text-sm text-gray-700 flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-1.5"></span>
                      {item?.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Terms & Conditions Section */}
        {Array.isArray(pkg._terms_conditions_) && pkg._terms_conditions_.length > 0 && (
          <div className="border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('terms')}
              className="w-full text-left py-4 px-6 bg-gradient-to-r from-blue-50 to-white font-medium flex justify-between items-center hover:bg-blue-100 transition-colors"
            >
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Terms & Conditions
              </span>
              <span className="text-blue-600 text-xl">{activeSection === 'terms' ? '−' : '+'}</span>
            </button>
            {activeSection === 'terms' && (
              <div className="p-6 min-h-[150px]"> {/* Adjust height here */}
                {pkg._terms_conditions_.map((term, index) => (
                  <div key={index} className="mb-4 last:mb-0">
                    <h4 className="font-medium text-blue-800 mb-1">{term?.title}</h4>
                    <p className="text-sm text-gray-700">{term?.policy}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

        )}


      </div>

      {/* Book Now Button */}
      {/* <button className="mt-8 w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Book Now
      </button> */}
    </div>
  );
};

export default PackageCard;