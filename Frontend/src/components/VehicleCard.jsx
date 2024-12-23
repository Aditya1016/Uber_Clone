import React from 'react'

const VehicleCard = ({ imageSrc, name, time, description, price }) => {
    return (
      <div className="flex hover:border-2 hover:border-black rounded-lg items-center p-2 justify-between w-full mb-2 transition duration-300 ease-in-out">
        {/* Vehicle Image */}
        <img className="h-12 pr-1 object-contain" src={imageSrc} alt={`${name} image`} loading="lazy" />
  
        {/* Vehicle Info */}
        <div className="w-[65%] sm:w-[70%]">
          <h4 className="font-uberBold text-lg flex items-center gap-1">
            {name}
            <span>
              <i className="ri-user-3-fill"></i>
            </span>
          </h4>
          <h5 className="font-uberMedium text-sm text-gray-600">{time} away</h5>
          <p className="text-xs font-sans text-gray-500">{description}</p>
        </div>
  
        {/* Price */}
        <h2 className="text-lg sm:text-xl font-uberMedium text-gray-800">{price}</h2>
      </div>
    );
  };
  

export default VehicleCard