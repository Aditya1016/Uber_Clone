import React from 'react';

const LocationSearchPanel = ({ suggestions, setVehiclePanelOpen, setPanelOpen, setPickup, setDestination, activeField }) => {
  const handleSuggestionClick = (suggestion) => {
    if(activeField === 'pickup') {   
      setPickup(suggestion.description);
    } else if (activeField === 'destination') { 
      setDestination(suggestion.description);
    }
    // setVehiclePanelOpen(true);
    // setPanelOpen(false);
  }
  return (
    <div className='mt-16 p-4'>
      {suggestions.length > 0 ? (
        suggestions.map((suggestion, index) => (
          <div key={index} className='mt-5 p-2 border-b cursor-pointer flex items-center gap-3' onClick={() => handleSuggestionClick(suggestion)}>
            <h2 className='bg-[#eee] rounded-full flex items-center justify-center p-1'><i className="ri-map-pin-2-fill"></i></h2>
            <h4 className='font-uberMedium'>{suggestion.description}</h4>
          </div>
        ))
      ) : (
        <div className='mt-20 p-2 text-center text-gray-500 font-uberMedium text-lg'>
          Enter your location
        </div>
      )}
    </div>
  );
};

export default LocationSearchPanel;