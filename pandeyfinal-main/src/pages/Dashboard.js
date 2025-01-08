import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext.js';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookingDetails = async () => {
      if (!user) {
        navigate('/', { replace: true });
        return; // Redirect if user is not authenticated
      }

      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/bookings/get-bookings`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch bookings');
        }

        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error('Error fetching booking details:', error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchBookingDetails(); // Call the function to fetch booking details
  }, [user, navigate]);

  const handleBookPackage = () => {
    navigate('/booking');
  };

  const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  if (!user) return null; // Redirect logic handled in useEffect

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-orange-500 border-solid"></div>
          <div className="text-lg font-semibold text-orange-600">Loading...</div>
        </div>
      </div>
    );
  }

  if (bookings.length === 0) {
    return (
      <div className="pt-28 container min-h-screen mx-auto px-4 py-8">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <div className="text-blue-700 font-medium">No Bookings Found</div>
          <p className="text-blue-600">
            You haven't made any bookings yet. Book your first package now!
          </p>
        </div>
        <button
          onClick={handleBookPackage}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center"
        >
          <span className="mr-2">📦</span>
          Book a Package
        </button>
      </div>
    );
  }

  return (
    <div className="pt-16 container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-orange-600">
        Your Bookings
      </h2>

      {/* Booking Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.map((bookingDetail) => (
          <div
            key={bookingDetail._id}
            className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition duration-200 ease-in-out"
          >
            <h3 className="text-xl font-semibold text-orange-600 mb-3">
              {bookingDetail.bookingPackage}
            </h3>
            <div className="space-y-1 text-gray-700 text-sm">
              <p>
                Accommodation Type:{' '}
                <span className="font-medium">
                  {bookingDetail.accommodationType}
                </span>
              </p>
              <p>
                Name: <span className="font-medium">{bookingDetail.name}</span>
              </p>
              <p>
                Phone Number:{' '}
                <span className="font-medium">
                  {bookingDetail.phoneNumber}
                </span>
              </p>
              <p>
                Check-in Date:{' '}
                <span className="font-medium">
                  {new Date(bookingDetail.checkIn).toLocaleDateString()}
                </span>
              </p>
              <p>
                Adults: <span className="font-medium">{bookingDetail.adults}</span>
              </p>
              <p>
                Children:{' '}
                <span className="font-medium">{bookingDetail.children}</span>
              </p>
              <p>
                Price:{' '}
                <span className="font-medium text-orange-600">
                  Rs: {bookingDetail.price}
                </span>
              </p>
            </div>
            <div className="mt-4">
              <span className="font-semibold text-black">
                Payment Status:{' '}
                {bookingDetail.payment ? (
                  <span className="text-green-500">Successful</span>
                ) : (
                  <span className="text-red-500">Processing Please wait...</span>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex justify-between space-x-4">
        <button
          onClick={handleBookPackage}
          className="bg-orange-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-orange-700 transition duration-200 ease-in-out flex items-center justify-center transform hover:scale-105"
        >
          <span className="mr-2 text-xl">📦</span>
          <span className="font-medium">Book a Package</span>
        </button>
        <button
          onClick={handleLogout}
          className="bg-gray-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-gray-700 transition duration-200 ease-in-out flex items-center justify-center transform hover:scale-105"
        >
          <span className="mr-2 text-xl">🚪</span>
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
