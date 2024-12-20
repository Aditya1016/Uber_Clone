import React from 'react'

const ConfirmedRide = (props) => {
    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setConfirmRidePanelOpen(false)
            }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className='text-2xl font-uberMedium mb-5 pl-2'>Confirm your ride</h3>

            <div className='flex gap-2 justify-between flex-col items-center'>
                <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png" alt="" />
                <div className='w-full flex flex-col gap-2'>
                    <div className='flex items-center gap-5 pl-5 border-b-2 active:border-black pb-3'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='font-uberMedium text-lg'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 pl-5 border-b-2 active:border-black pb-3'>
                        <i className="ri-map-pin-user-line"></i>
                        <div>
                            <h3 className='font-uberMedium text-lg'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 pl-5 border-b-2 active:border-black pb-3 mb-5'>
                        <i className="ri-wallet-2-fill"></i>
                        <div>
                            <h3 className='font-uberMedium text-lg'>$5.20</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>
                <button onClick={() => {
                    props.setLookingForDriverPanel(true)
                    props.setConfirmRidePanelOpen(false)
                }} className='w-full bg-green-600 text-white font-uberBold p-2 rounded-lg'>Confirm</button>
            </div>

        </div>
    )
}

export default ConfirmedRide