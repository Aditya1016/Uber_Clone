import React, {useEffect, useContext} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SocketDataContext } from '../context/SocketContext'
import { useNavigate } from 'react-router-dom'
import LiveTracking from '../components/LiveTracking'

const Riding = (props) => {
    const location = useLocation()
    const { ride } = location.state || {}

    const {socket} = useContext(SocketDataContext)
    const navigate = useNavigate()

    socket.on("ride-ended", () => {
        navigate('/home')
    })

    return (
        <div className='h-screen overflow-hidden'>
            <div className='fixed h-14 w-14 m-1'>
                <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            </div>
            <div className='fixed h-10 w-10 right-0 m-4 bg-white flex items-center justify-center rounded-full'>
                <Link to='/home'><i className="ri-home-6-line"></i></Link>
            </div>
            <div className='h-1/2'>
                {/* <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" /> */}
                <LiveTracking />
            </div>
            <div className='h-1/2 px-6 pb-5 pt-1'>
                <div className='flex items-center justify-between'>
                    <img className='h-12' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
                    <div className='text-right'>
                        <h2 className='text-lg font-medium capitalize'>{ride?.captain.fullname.firstname + " " + ride?.captain.fullname.firstname}</h2>
                        <h4 className='text-xl font-semibold'>{ride?.captain.vehicle.plate}</h4>
                        <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                        <div className='flex align items-center justify-center gap-1 mt-2'>
                            <h1 className='font-uberBold border-2 text-lg rounded-lg bg-yellow-300 px-2 hover:border-yellow-600'>OTP:</h1>
                            <h1 className='text-lg font-uberBold border-2 rounded-lg bg-gray-200 px-2 hover:border-black'> {ride?.otp} </h1>
                        </div>
                    </div>
                </div>

                <div className='flex gap-2 justify-between flex-col items-center'>
                    <div className='w-full mt-2'>
                        <div className='flex items-center gap-5 p-3 border-b-2'>
                            <i className="text-lg ri-map-pin-2-fill"></i>
                            <div>
                                <h3 className='text-lg font-medium'>562/11-A</h3>
                                <p className='text-sm -mt-1 text-gray-600'>{ride?.destination}</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 p-3'>
                            <i className="ri-currency-line"></i>
                            <div>
                                <h3 className='text-lg font-medium'>₹{ride?.fare} </h3>
                                <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='w-full mt-3 p-2 font-uberMedium text-lg rounded-lg border-2 text-white bg-green-600 border-gray-300 active:border-black '>Make a payment</button>
            </div>

        </div>
    )
}

export default Riding