import React, {useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'

const CaptainHome = (props) => {
  const [ridePopUpPanelOpen, setRidePopUpPanelOpen] = useState(true)
  const ridePopUpRef = useRef(null)
  const [confirmRidePopUpPanelOpen, setConfirmRidePopUpPanelOpen] = useState(false)
  const confirmRidePopUpRef = useRef(null)

  useGSAP(() => {
    if(ridePopUpPanelOpen){
      gsap.to(ridePopUpRef.current,{
        transform: 'translateY(0)'
      })
    } else{
      gsap.to(ridePopUpRef.current,{
        transform: 'translateY(100%)'
      })
    }
  }, [ridePopUpPanelOpen])

  useGSAP(() => {
    if(confirmRidePopUpPanelOpen){
      gsap.to(confirmRidePopUpRef.current,{
        transform: 'translateY(0)'
      })
    } else{
      gsap.to(confirmRidePopUpRef.current,{
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
        <Link to='/home'><i className="text-lg ri-logout-box-r-line"></i></Link>
      </div>
      <div className='h-[65%]'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />

      </div>
      <div className='h-[35%]'>
        <CaptainDetails />
      </div>
      <div className='translate-y-full fixed bottom-0 w-full bg-white' ref={ridePopUpRef}>
        <RidePopUp setConfirmRidePopUpPanelOpen={setConfirmRidePopUpPanelOpen} setRidePopUpPanelOpen={setRidePopUpPanelOpen}/>
      </div>
      <div className='translate-y-full h-screen fixed bottom-0 w-full bg-white' ref={confirmRidePopUpRef}>
        <ConfirmRidePopUp setRidePopUpPanelOpen={setRidePopUpPanelOpen} setConfirmRidePopUpPanelOpen={setConfirmRidePopUpPanelOpen}/>
      </div>
    </div>
  )
}

export default CaptainHome