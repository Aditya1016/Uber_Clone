import React, { useState, useRef } from 'react'
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'
import LookingForDriver from '../components/LookingForDriver'

const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelClosedRef = useRef(null)
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)
  const vehiclePanelRef = useRef(null)
  const [confirmRidePanelOpen, setConfirmRidePanelOpen] = useState(false)
  const confirmRidePanelRef = useRef(null)
  const [vehicleFoundPanelOpen, setVehicleFoundPanelOpen] = useState(false)
  const vehicleFoundRef = useRef(null)


  const submitHandler = (e) => {
    e.preventDefault()
  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        paddingLeft: 24,
        paddingRight: 24
      })
      gsap.to(panelClosedRef.current, {
        opacity: 1
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0
      })
      gsap.to(panelClosedRef.current, {
        opacity: 0
      })
    }
  }, [panelOpen])

  useGSAP(() => {
    if(vehiclePanelOpen){
      gsap.to(vehiclePanelRef.current,{
        transform: 'translateY(0)'
      })
    } else{
      gsap.to(vehiclePanelRef.current,{
        transform: 'translateY(100%)'
      })
    }
  }, [vehiclePanelOpen])

  useGSAP(() => {
    if(confirmRidePanelOpen){
      gsap.to(confirmRidePanelRef.current,{
        transform: 'translateY(0)'
      })
    } else{
      gsap.to(confirmRidePanelRef.current,{
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePanelOpen])

  useGSAP(() => {
    if(vehicleFoundPanelOpen){
      gsap.to(vehicleFoundRef.current,{
        transform: 'translateY(0)'
      })
    } else{
      gsap.to(vehicleFoundRef.current,{
        transform: 'translateY(100%)'
      })
    }
  }, [vehicleFoundPanelOpen])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber_logo" />
      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="../src/assets/icons/map.png" alt="map" />
      </div>
      <div className='flex flex-col justify-end w-full h-screen absolute top-0'>
        <div className='h-[30%] p-5 bg-white relative'>
          <h5 ref={panelClosedRef} onClick={() => {
            setPanelOpen(false)
          }} className='opacity-0 absolute right-5 top-5 text-2xl'><i className="ri-arrow-down-wide-line"></i></h5>
          <h4 className='text-2xl font-uberMedium'>Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <div className='line absolute h-14 w-1 top-[45%] left-9 rounded-lg bg-gray-800'></div>
            <input value={pickup} onChange={(e) => {
              setPickup(e.target.value)
            }} onClick={() => {
              setPanelOpen(true)
            }} className='bg-[#eee] w-full px-10 py-2 mt-5 text-base rounded-lg font-uberMedium' type="text" placeholder='Add a pickup location' />
            <input value={destination} onChange={(e) => {
              setDestination(e.target.value)
            }} onClick={() => {
              setPanelOpen(true)
            }} className='bg-[#eee] w-full px-10 py-2 mt-3 text-base rounded-lg font-uberMedium' type="text" placeholder='Enter your destination' />
          </form>
        </div>
        <div ref={panelRef} className='bg-white h-0'>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen}/>
        </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed z-1 bottom-0 translate-y-full bg-white px-3 py-10 w-full'>
        <VehiclePanel setVehiclePanelOpen={setVehiclePanelOpen} setConfirmRidePanelOpen={setConfirmRidePanelOpen}/>
      </div>
      <div ref={confirmRidePanelRef} className='fixed z-1 bottom-0 translate-y-full bg-white px-3 py-10 w-full'>
        <ConfirmRide setVehicleFoundPanelOpen={setVehicleFoundPanelOpen} setConfirmRidePanelOpen={setConfirmRidePanelOpen}/>
      </div>
      <div ref={vehicleFoundRef} className='fixed z-1 bottom-0 translate-y-full bg-white px-3 py-10 w-full'>
        <LookingForDriver setVehicleFoundPanelOpen={setVehicleFoundPanelOpen}/>
      </div>
    </div>
  )
}

export default Home