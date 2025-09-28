import { useState, useRef, useEffect, useContext } from "react";
import axios from "axios";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import { SocketDataContext } from "../context/SocketContext";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import WaitingForDriver from "../components/WaitingForDriver";
import LiveTracking from "../components/LiveTracking";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [activeField, setActiveField] = useState(null);
  const panelRef = useRef(null);
  const panelClosedRef = useRef(null);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const vehiclePanelRef = useRef(null);
  const [confirmRidePanelOpen, setConfirmRidePanelOpen] = useState(false);
  const confirmRidePanelRef = useRef(null);
  const [vehicleFoundPanelOpen, setVehicleFoundPanelOpen] = useState(false);
  const vehicleFoundRef = useRef(null);
  const [fare, setFare] = useState({});
  const [, setRideDetails] = useState({});
  const [vehicleType, setVehicleType] = useState(null);
  const { socket } = useContext(SocketDataContext);
  const { user } = useContext(UserDataContext);
  const [ride, setRide] = useState(null);
  const [waitingForDriverPanelOpen, setWaitingForDriverPanelOpen] =
    useState(false);
  const waitingForDriverRef = useRef(null);
  const destinationInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    socket.emit("join", { userType: "user", userId: user._id });
  }, [user, socket]);

  socket.on("ride-confirmed", (ride) => {
    setVehicleFoundPanelOpen(false);
    setWaitingForDriverPanelOpen(true);
    setRide(ride);
  });

  socket.on("ride-started", (ride) => {
    setWaitingForDriverPanelOpen(false);
    navigate("/riding", { state: { ride } });
  });

  const handlePickupChange = async (e) => {
    setPickup(e.target.value);
    setActiveField("pickup");
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
        {
          params: {
            input: e.target.value,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setPickupSuggestions(response.data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const handleDestinationChange = async (e) => {
    setDestination(e.target.value);
    setActiveField("destination");
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
        {
          params: {
            input: e.target.value,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setDestinationSuggestions(response.data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const findTrip = async () => {
    setVehiclePanelOpen(true);
    setPanelOpen(false);

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/rides/get-fare`,
        {
          params: {
            pickup: pickup,
            destination: destination,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setFare(response.data);
    } catch (error) {
      console.error("Error fetching fare:", error);
    }
  };

  const createRide = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/rides/create`,
        {
          pickup,
          destination,
          vehicleType,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setRideDetails(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error creating ride:", error);
    }
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "100%",
        });
        gsap.to(panelClosedRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding: 0,
        });
        gsap.to(panelClosedRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(() => {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0)",
        opacity: 1,
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
        opacity: 0,
      });
    }
  }, [vehiclePanelOpen]);

  useGSAP(() => {
    if (confirmRidePanelOpen) {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(0)",
        opacity: 1,
      });
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(100%)",
        opacity: 0,
      });
    }
  }, [confirmRidePanelOpen]);

  useGSAP(() => {
    if (vehicleFoundPanelOpen) {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehicleFoundPanelOpen]);

  useGSAP(() => {
    if (waitingForDriverPanelOpen) {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [waitingForDriverPanelOpen]);

  return (
    <div className="w-full h-screen bg-gradient-to-tr from-gray-600 to-gray-900 flex items-center">
      <div className="h-screen relative overflow-hidden w-full max-w-4xl mx-auto">
        <img
          className="w-16 absolute left-5 top-5"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber_logo"
        />
        <div className="h-screen w-screen">
          {/* <img className='h-full w-full object-cover' src="../src/assets/icons/map.png" alt="map" /> */}
          <LiveTracking />
        </div>
        <div className="flex flex-col justify-end w-full h-screen absolute top-0">
          <div className="h-[23%] p-5 bg-white relative">
            <h5
              ref={panelClosedRef}
              onClick={() => {
                setPanelOpen(false);
              }}
              className="opacity-0 absolute right-5 top-5 text-2xl"
            >
              <i className="ri-arrow-down-wide-line"></i>
            </h5>
            <h4 className="text-2xl font-uberMedium">Find a trip</h4>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="line absolute h-14 w-1 top-[53%] left-9 rounded-lg bg-gray-800"></div>
              <input
                value={pickup}
                onChange={(e) => handlePickupChange(e)}
                onClick={() => {
                  setPanelOpen(true), setActiveField("pickup");
                }}
                className="bg-[#eee] w-full px-10 py-2 mt-5 text-base rounded-lg font-uberMedium"
                type="text"
                placeholder="Add a pickup location"
              />
              <input
                ref={destinationInputRef}
                value={destination}
                onChange={(e) => handleDestinationChange(e)}
                onClick={() => {
                  setPanelOpen(true), setActiveField("destination");
                }}
                className="bg-[#eee] w-full px-10 py-2 mt-3 text-base rounded-lg font-uberMedium"
                type="text"
                placeholder="Enter your destination"
              />
            </form>
            <button
              className="w-full p-3 mt-8 bg-black text-white text-2xl font-uberMedium rounded-lg"
              onClick={() => {
                findTrip();
              }}
            >
              Find Trip
            </button>
          </div>
          <div ref={panelRef} className="bg-white overflow-hidden h-0">
            <LocationSearchPanel
              suggestions={
                activeField === "pickup"
                  ? pickupSuggestions
                  : destinationSuggestions
              }
              setPanelOpen={setPanelOpen}
              setPickup={setPickup}
              setDestination={setDestination}
              activeField={activeField}
              setActiveField={setActiveField}
              destinationInputRef={destinationInputRef}
            />
          </div>
        </div>
        <div
          ref={vehiclePanelRef}
          className="absolute z-1 opacity-0 bottom-0 translate-y-full bg-white px-3 py-10 w-full rounded-t-xl"
        >
          <VehiclePanel
            setVehicleType={setVehicleType}
            fare={fare}
            setVehiclePanelOpen={setVehiclePanelOpen}
            setConfirmRidePanelOpen={setConfirmRidePanelOpen}
          />
        </div>
        <div
          ref={confirmRidePanelRef}
          className="absolute z-1 opacity-0 bottom-0 translate-y-full bg-white px-3 py-10 w-full rounded-t-xl"
        >
          <ConfirmRide
            createRide={createRide}
            pickup={pickup}
            destination={destination}
            fare={fare[vehicleType]}
            setVehicleFoundPanelOpen={setVehicleFoundPanelOpen}
            setConfirmRidePanelOpen={setConfirmRidePanelOpen}
          />
        </div>
        <div
          ref={vehicleFoundRef}
          className="absolute z-1 bottom-0 translate-y-full bg-white px-3 py-10 w-full rounded-t-xl"
        >
          <LookingForDriver
            pickup={pickup}
            destination={destination}
            fare={fare[vehicleType]}
            setVehicleFoundPanelOpen={setVehicleFoundPanelOpen}
          />
        </div>
        <div
          ref={waitingForDriverRef}
          className="fixed z-1 bottom-0 translate-y-full bg-white px-3 py-10 w-full"
        >
          <WaitingForDriver
            ride={ride}
            setVehicleFoundPanelOpen={setVehicleFoundPanelOpen}
            setWaitingForDriverPanelOpen={setWaitingForDriverPanelOpen}
            waitingForDriverPanelOpen={waitingForDriverPanelOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
