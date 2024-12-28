import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainProtectedWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true); // Manages the loading state
  const [error, setError] = useState(null); // Manages any error messages
  const { setCaptain } = useContext(CaptainDataContext); // Context to store captain data
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); // Fetch token from localStorage

  useEffect(() => {
    if (!token) {
      navigate('/captain-login');
      return;
    }

    // Fetch captain's profile
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setCaptain(response.data.captain); // Set captain data in context
        setIsLoading(false); // Set loading to false
      })
      .catch((err) => {
        console.error('Error fetching profile:', err);
        setError('Failed to authenticate. Please login again.');
        localStorage.removeItem('token'); // Clear invalid token
        navigate('/captain-login'); // Redirect to login
      });
  }, [navigate, token, setCaptain]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return <>{children}</>;
};

export default CaptainProtectedWrapper;
