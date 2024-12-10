import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import axios from "axios"

const UserProtectedWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const {user, setUser} = useContext(UserDataContext)

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } 

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        setUser(response.data.user)
        setIsLoading(false)
        setIsAuthenticated(true)
      })
      .catch((err) => {
        console.log(err)
        navigate('/login')
      })

  }, [navigate, token]);

  if (!isAuthenticated) {
    return null; // Show a loader or blank screen while checking
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default UserProtectedWrapper;
