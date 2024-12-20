import React from 'react'

const WaitingForDriver = (props) => {
    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setWaitingForDriverPanel(false)
            }}>
                <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
            </h5>
            <div className='flex items-center justify-between mb-3 p-3'>
                <img className='w-12 h-12 object-cover rounded-full' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1677712861/assets/35/390041-6c33-425c-b7ee-7258bb7c0817/original/upfront_historic-data_360x240-2x.png" alt="" />
                <div className='text-right'>
                    <h2 className='font-uberMedium text-base'>Sarthak</h2>
                    <h4 className='font-uberMedium text-lg -mt-1'>MP04 AB 1234</h4>
                    <p className='text-sm text-gray-600 -mt-1'>White Suzuki Alto</p>
                </div>
            </div>
            <div className='flex gap-2 justify-between flex-col items-center'>
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
                    <div className='flex items-center justify-center'>
                        <h3 className='font-uberMedium text-lg  p-2'>Please be patient while we fetch your ride</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WaitingForDriver