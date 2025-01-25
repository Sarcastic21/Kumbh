import React, { createContext, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Decode JWT token (without using external libraries)
  const decodeToken = (token) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
          .join('')
      );
      return JSON.parse(jsonPayload);
    } catch (e) {
      return null;
    }
  };

  // Logout function
  const logout = useCallback(() => {
    localStorage.removeItem('token');
    setUser(null);
    setIsAuthenticated(false);
    navigate("/"); // Redirect to home or login page
  }, [navigate]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = decodeToken(token);

      if (decoded) {
        const currentTime = Date.now() / 1000; // Current time in seconds
        if (decoded.exp < currentTime) {
          // Token is expired
          logout();
        } else {
          // Token is valid, calculate time remaining until expiration
          setIsAuthenticated(true);
          setUser({ token });

          const timeRemaining = (decoded.exp - currentTime) * 1000; // Convert to milliseconds
          const timer = setTimeout(() => {
            logout();
          }, timeRemaining);

          // Clean up timer on unmount
          return () => clearTimeout(timer);
        }
      } else {
        logout();
      }
    }
  }, [logout]);

  const login = (token, userData) => {
    localStorage.setItem('token', token);
    setUser({ ...userData, token });
    setIsAuthenticated(true);
    navigate("/dashboard");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
