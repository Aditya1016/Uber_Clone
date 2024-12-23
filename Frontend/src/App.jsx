import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Start from './pages/Start';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignup from './pages/CaptainSignup';
import Home from './pages/Home';
import UserProtectedWrapper from './pages/UserProtectedWrapper';
import UserContext from './context/UserContext';
import 'bootstrap-icons/font/bootstrap-icons.css';
import UserLogout from './pages/UserLogout';
import CaptainHome from './pages/CaptainHome';
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper';
import CaptainLogout from './pages/CaptainLogout';
import 'remixicon/fonts/remixicon.css'

const App = () => {
  return (
    <UserContext>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />
        <Route path='/home'
          element={
            <UserProtectedWrapper>
              <Home />
            </UserProtectedWrapper>
          }
        />
        <Route path='/logout'
          element={
            <UserProtectedWrapper>
              <UserLogout />
            </UserProtectedWrapper>
          } 
        />
        <Route path='/captain-home'
          element={
            <CaptainProtectedWrapper>
              <CaptainHome />
            </CaptainProtectedWrapper>
          }
        />
        <Route path='/captain-logout'
          element={
            <CaptainProtectedWrapper>
              <CaptainLogout />
            </CaptainProtectedWrapper>
          }
        />
      </Routes>
    </UserContext>
  );
};

export default App;
