import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
    return (
        <div className='h-screen'>
            <div>
                <Link to='/home' className='absolute p-3 rounded-full right-3 top-1'>
                    <i className="text-2xl ri-home-6-fill"></i>
                </Link>
                <div>
                    <img className='absolute top-5 left-5 h-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                </div>
            </div>
            <div className='h-[55%]'>
                <img className='w-full h-full object-cover' src="https://s.wsj.net/public/resources/images/BN-XR452_201802_M_20180228165525.gif" alt="" />
            </div>
            <div className='h-[45%] p-6'>
                <div className='flex items-center justify-between mb-7'>
                    <img className='w-12 h-12 object-cover rounded-full' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1677712861/assets/35/390041-6c33-425c-b7ee-7258bb7c0817/original/upfront_historic-data_360x240-2x.png" alt="" />
                    <div className='text-right'>
                        <h2 className='font-uberMedium text-base'>Sarthak</h2>
                        <h4 className='font-uberMedium text-lg -mt-1'>MP04 AB 1234</h4>
                        <p className='text-sm text-gray-600 -mt-1'>White Suzuki Alto</p>
                    </div>
                </div>
                <div className='flex justify-between flex-col items-center'>
                    <div className='w-full flex flex-col'>
                        <div className='flex items-center gap-5 pb-3'>
                            <i className="ri-map-pin-user-line"></i>
                            <div>
                                <h3 className='font-uberMedium text-lg'>562/11-A</h3>
                                <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <i className="ri-wallet-2-fill"></i>
                            <div>
                                <h3 className='font-uberMedium text-lg'>$5.20</h3>
                                <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='w-full text-white bg-green-500 rounded-lg p-2 mt-6 font-uberMedium'>Make a Payment</button>
            </div>
        </div>
    )
}

export default Riding