import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1593950315186-76a92975b60c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWJlcnxlbnwwfHwwfHx8MA%3D%3D)] h-screen pt-6 flex justify-between flex-col w-full'>
            <img className='w-16 ml-6' src='https://www.edigitalagency.com.au/wp-content/uploads/Uber-logo-white-png-1200x417.png'></img>    
            <div className='bg-white pb-7 pt-3 px-4'>
                <h2 className='text-3xl pb-3 font-extrabold font-uberBold'>Get Started with Uber</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black font-uberMedium text-white py-3 rounded mt-5 hover:bg-gray-800 active:bg-gray-700 transition'>Continue <i className="bi bi-arrow-right absolute right-7"></i></Link>
            </div>
        </div>
    </div>
  )
}

export default Start