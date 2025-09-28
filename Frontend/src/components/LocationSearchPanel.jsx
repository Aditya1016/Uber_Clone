import PropTypes from 'prop-types';

const LocationSearchPanel = ({ 
  suggestions,  
  setPanelOpen, 
  setPickup, 
  setVehiclePanelOpen,
  setDestination, 
  activeField, 
  setActiveField,   // 👈 add this from parent
  destinationInputRef // 👈 add this from parent
}) => {
  const handleSuggestionClick = (suggestion) => {
    if (activeField === "pickup") {   
      setPickup(suggestion.description);
      setActiveField("destination");          // 👈 switch to destination
      destinationInputRef.current?.focus();   // 👈 move focus
    } else if (activeField === "destination") { 
      setDestination(suggestion.description);
      setPanelOpen(false);                    // 👈 close panel after destination chosen
      setVehiclePanelOpen(true);
    }
  };

  return (
    <div className="mt-16 p-4">
      {suggestions.length > 0 ? (
        suggestions.map((suggestion, index) => (
          <div 
            key={index} 
            className="mt-5 p-2 border-b cursor-pointer flex items-center gap-3" 
            onClick={() => handleSuggestionClick(suggestion)}
          >
            <h2 className="bg-[#eee] rounded-full flex items-center justify-center p-1">
              <i className="ri-map-pin-2-fill"></i>
            </h2>
            <h4 className="font-uberMedium">{suggestion.description}</h4>
          </div>
        ))
      ) : (
        <div className="mt-20 p-2 text-center text-gray-500 font-uberMedium text-lg">
          Enter your location
        </div>
      )}
    </div>
  );
};

LocationSearchPanel.propTypes = {
  suggestions: PropTypes.array.isRequired,
  setVehiclePanelOpen: PropTypes.func.isRequired,
  setPanelOpen: PropTypes.func.isRequired,
  setPickup: PropTypes.func.isRequired,
  setDestination: PropTypes.func.isRequired,
  activeField: PropTypes.string.isRequired,
  setActiveField: PropTypes.func.isRequired,
  destinationInputRef: PropTypes.object.isRequired,
};

export default LocationSearchPanel;
