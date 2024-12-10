import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CaptainLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      // Redirect to login if no token is found
      navigate('/captain-login');
      return;
    }

    // Call the logout API
    axios
      .get(`${import.meta.env.VITE_API_URL}/captains/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem('token');
          navigate('/login');
        }
      })
      .catch((error) => {
        console.error('Logout failed:', error);
        // Optionally handle errors (e.g., display an error message)
        localStorage.removeItem('token');
        navigate('/captain-login');
      });
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default CaptainLogout;
