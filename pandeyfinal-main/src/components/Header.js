import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import logo from "./logo.png";
import { useAuth } from "../context/AuthContext"; // Import your authentication context

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false); // State for showing alert
  const { user, logout, loading } = useAuth(); // Access user state, logout function, and loading state
  const navigate = useNavigate(); // Use navigate for programmatic navigation

  // Display a loading spinner while the authentication is being verified
  if (loading) {
    return <div>Loading...</div>;
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  const handleBookNowClick = () => {
    if (!user) {
      // If the user is not logged in, show the alert and redirect after 3 seconds
      setAlertVisible(true);
      setTimeout(() => {
        setAlertVisible(false); // Hide the alert after 3 seconds
      }, 3000);

      navigate("/"); // Redirect to the login page
    } else {
      // Otherwise, allow them to go to the booking page
      navigate("/booking");
    }
    setIsMenuOpen(false); // Close the menu if open
  };

  return (
    <header className="fixed w-full bg-white/60 backdrop-blur-md z-50 shadow-sm">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <RouterLink
            to="/"
            className="text-2xl font-bold text-orange-600 flex items-center "
            onClick={handleLinkClick} // Close the menu when the logo is clicked
          >
            <img src={logo} alt="logo" className="w-[100px] p-0 m-0" />
          </RouterLink>

          <div className="hidden md:flex items-center space-x-8">
  {/* Always show 'Home' */}
  <RouterLink
    to="/"
    className="block py-2 text-gray-700 hover:text-orange-600"
    onClick={handleLinkClick}
  >
    Home
  </RouterLink>

  {/* Show 'Dashboard' link only if the user is logged in */}
  {user && (
    <RouterLink
      to="/dashboard"
      className="text-gray-700 hover:text-orange-600"
    >
      Dashboard
    </RouterLink>
  )}

            <RouterLink
              to="/packages"
              className="block py-2 text-gray-700 hover:text-orange-600"
              onClick={handleLinkClick}
            >
              Packages
            </RouterLink>
            <RouterLink
              to="/events"
              className="text-gray-700 hover:text-orange-600"
            >
              Events
            </RouterLink>
            <RouterLink
              to="/about"
              className="text-gray-700 hover:text-orange-600"
            >
              About
            </RouterLink>
            <RouterLink
              to="/contact"
              className="text-gray-700 hover:text-orange-600"
            >
              Contact
            </RouterLink>

            <button
              onClick={handleBookNowClick}
              className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition"
            >
              Book Now
            </button>

            {user && (
              <button
                onClick={logout}
                className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
              >
                Logout
              </button>
            )}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
             <RouterLink
              to="/"
              className="block py-2 text-gray-700 hover:text-orange-600"
              onClick={handleLinkClick}
            >
              Home
            </RouterLink>
            <RouterLink
              to="/dashboard"
              className="block py-2 text-gray-700 hover:text-orange-600"
              onClick={handleLinkClick}
            >
              Dashboard
            </RouterLink>
            <RouterLink
              to="/packages"
              className="block py-2 text-gray-700 hover:text-orange-600"
              onClick={handleLinkClick}
            >
              Packages
            </RouterLink>
            <RouterLink
              to="/events"
              className="block py-2 text-gray-700 hover:text-orange-600"
              onClick={handleLinkClick}
            >
              Events
            </RouterLink>
            <RouterLink
              to="/about"
              className="block py-2 text-gray-700 hover:text-orange-600"
              onClick={handleLinkClick}
            >
              About
            </RouterLink>
            <RouterLink
              to="/contact"
              className="block py-2 text-gray-700 hover:text-orange-600"
              onClick={handleLinkClick}
            >
              Contact
            </RouterLink>

            <button
              onClick={handleBookNowClick}
              className="block w-full bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition text-center"
            >
              Book Now
            </button>

            {user && (
              <button
                onClick={() => {
                  logout();
                  setIsMenuOpen(false); // Close the menu after logout
                }}
                className="block w-full bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition text-center"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </nav>

      {/* Conditional Alert with Custom Style */}
      {alertVisible && (
        <div
          style={{
            backgroundColor: "white",
            color: "#e65100",
            border: "2px solid #e65100",
            padding: "10px 20px",
            borderRadius: "5px",
            fontSize: "16px",
            fontWeight: "bold",
            textAlign: "center",
            position: "fixed",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: "1000",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            opacity: alertVisible ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          Please log in to book a service.
        </div>
      )}
    </header>
  );
}
