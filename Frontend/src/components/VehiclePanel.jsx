import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 className='text-center w-[93%] p-1 absolute top-0' onClick={() => {
          props.setVehiclePanelOpen(false)
        }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-uberBold mb-5'>Choose a Vehicle</h3>
        <div onClick={() => {
            props.setConfirmRidePanelOpen(true)
        }} className='flex border-2  mb-2 active:border-black rounded-lg items-center p-2 justify-between w-full'>
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
        <div onClick={() => {
            props.setConfirmRidePanelOpen(true)
        }} className='flex border-2 mb-2 active:border-black rounded-lg items-center p-2 justify-between w-full'>
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
        <div onClick={() => {
            props.setConfirmRidePanelOpen(true)
        }} className='flex border-2 mb-2 active:border-black rounded-lg items-center p-2 justify-between w-full'>
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
  )
}

export default VehiclePanel