import React, { useRef, useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'
import { SocketDataContext } from '../context/SocketContext'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'
import LiveTracking from '../components/LiveTracking'

const CaptainHome = (props) => {
  const [ridePopUpPanelOpen, setRidePopUpPanelOpen] = useState(false)
  const ridePopUpRef = useRef(null)
  const [confirmRidePopUpPanelOpen, setConfirmRidePopUpPanelOpen] = useState(false)
  const confirmRidePopUpRef = useRef(null)

  const [ride, setRide] = useState(null)

  const { socket } = useContext(SocketDataContext)
  const { captain } = useContext(CaptainDataContext)

  useEffect(() => {
    socket.emit('join', {
      userType: 'captain',
      userId: captain._id,
    });

    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          socket.emit('update-location-captain', {
            userId: captain._id,
            location: {
              ltd: latitude,
              lng: longitude
            }
          });
        });
      }
    };

    const intervalId = setInterval(updateLocation, 10000); // 10 seconds
    updateLocation();
    // Clean up the interval on component unmount
    // return () => clearInterval(intervalId);
  }, [captain, socket]);

  socket.on('new-ride', (data) => {
    setRide(data);
    setRidePopUpPanelOpen(true);
  });

  async function confirmRide() {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/confirm-ride`,
      {
        rideId: ride._id,
        captainId: captain._id,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      });
    setConfirmRidePopUpPanelOpen(true);
    setRidePopUpPanelOpen(true);
  }

  useGSAP(() => {
    if (ridePopUpPanelOpen) {
      gsap.to(ridePopUpRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(ridePopUpRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [ridePopUpPanelOpen])

  useGSAP(() => {
    if (confirmRidePopUpPanelOpen) {
      gsap.to(confirmRidePopUpRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmRidePopUpRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePopUpPanelOpen])

  return (
    <div className='h-screen'>
      <div className='fixed h-14 w-14 m-1'>
        <img className='w-10 m-3 rounded-lg' src="https://play-lh.googleusercontent.com/bXVEomXNViejYGr4Je5Ed4J08q8G00FUPYCdgoiPNF-2XAqWMYAGCBrK-n0OMYI3OALZ" alt="logo" />
      </div>
      <div className='fixed h-10 w-10 right-0 m-4 bg-white flex items-center justify-center rounded-full'>
        <Link
          to='/home'>
          <i className="text-lg ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className='h-[65%]'>
        {/* <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" /> */}
        <LiveTracking />
      </div>
      <div className='h-[35%]'>
        <CaptainDetails />
      </div>
      <div className='translate-y-full fixed bottom-0 w-full bg-white' ref={ridePopUpRef}>
        <RidePopUp
          ride={ride}
          setConfirmRidePopUpPanelOpen={setConfirmRidePopUpPanelOpen}
          setRidePopUpPanelOpen={setRidePopUpPanelOpen}
          confirmRide={confirmRide}
        />
      </div>
      <div className='translate-y-full h-screen fixed bottom-0 w-full bg-white' ref={confirmRidePopUpRef}>
        <ConfirmRidePopUp
          ride={ride}
          setRidePopUpPanelOpen={setRidePopUpPanelOpen}
          setConfirmRidePopUpPanelOpen={setConfirmRidePopUpPanelOpen}
        />
      </div>
    </div>
  )
}

export default CaptainHome