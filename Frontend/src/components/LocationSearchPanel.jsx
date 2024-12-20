import React from 'react';

const LocationSearchPanel = (props) => {
  // Updated location data with types
  const locations = [
    { name: "24B, Near Kapoor's Cafe, Sheryians Coding School, Bhopal", type: "default" },
    { name: "5th Avenue Mall, MG Road, Indore", type: "default" },
    { name: "Indira Gandhi International Airport, New Delhi", type: "airport" },
    { name: "Sunrise Towers, Jayanagar, Bengaluru", type: "default" },
    { name: "12th Floor, TechHub Plaza, Hitech City, Hyderabad", type: "default" },
    { name: "Bengaluru City Railway Station, Majestic, Bengaluru", type: "train" },
  ];

  const getIconClass = (type) => {
    switch (type) {
      case "airport":
        return "ri-flight-takeoff-line";
      case "train":
        return "ri-train-line";
      default:
        return "ri-map-pin-fill";
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {locations.map((location, index) => (
        <div
          onClick={() => {
            props.setVehiclePanelOpen(true);
            props.setPanelOpen(false);
          }}
          key={index}
          className="p-2 flex items-center border-2 border-white active:border-black rounded-lg justify-start gap-3"
        >
          {/* Dynamic Icon */}
          <div
            className="bg-[#eee] rounded-full flex items-center justify-center"
            style={{
              height: "7vw",
              width: "7vw",
              maxHeight: "3rem",
              maxWidth: "3rem",
              minHeight: "2rem",
              minWidth: "2rem",
            }}
          >
            <i className={getIconClass(location.type)}></i>
          </div>
          {/* Location Name */}
          <h4 className="font-uberMedium">{location.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
