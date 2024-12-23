import React, { useState, useRef } from 'react'
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'

const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelClosedRef = useRef(null)
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)
  const vehiclePanelRef = useRef(null)

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

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
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
        <h5 className='text-center w-[93%] p-1 absolute top-0' onClick={() => {
          setVehiclePanelOpen(false)
        }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-uberBold mb-5'>Choose a Vehicle</h3>
        <div className='flex border-2  mb-2 active:border-black rounded-lg items-center p-2 justify-between w-full'>
          <img className='h-10 pr-1' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png" alt="" />
          <div className='w-[70%]'>
            <h4 className='font-uberBold text-lg flex items-center gap-1'>
              UberGo
              <span className='font-uberMedium text-base'><i className="ri-user-3-fill"></i>4</span>
            </h4>
            <h5 className='font-uberMedium text-sm'>2 mins away</h5>
            <p className='text-xs font-sans'>Affordable, compact rides</p>
          </div>
          <h2 className='text-xl font-uberMedium'>$5.20</h2>
        </div>
        <div className='flex border-2 mb-2 active:border-black rounded-lg items-center p-2 justify-between w-full'>
          <img className='h-10 pr-1' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
          <div className='w-[70%]'>
            <h4 className='font-uberBold text-lg flex items-center gap-1'>
              Moto
              <span className='font-uberMedium text-base'><i className="ri-user-3-fill"></i>2</span>
            </h4>
            <h5 className='font-uberMedium text-sm'>3 mins away</h5>
            <p className='text-xs font-sans'>Affordable, motorcycle rides</p>
          </div>
          <h2 className='text-xl font-uberMedium'>$2.50</h2>
        </div>
        <div className='flex border-2 mb-2 active:border-black rounded-lg items-center p-2 justify-between w-full'>
          <img className='h-10 pr-1' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className='w-[70%]'>
            <h4 className='font-uberBold text-lg flex items-center gap-1'>
              Auto
              <span className='font-uberMedium text-base'><i className="ri-user-3-fill"></i>3</span>
            </h4>
            <h5 className='font-uberMedium text-sm'>2 mins away</h5>
            <p className='text-xs font-sans'>Affordable, auto rides</p>
          </div>
          <h2 className='text-xl font-uberMedium'>$3.80</h2>
        </div>
      </div>
    </div>
  )
}

export default Home