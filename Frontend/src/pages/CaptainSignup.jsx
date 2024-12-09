import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CaptainSignup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [color, setColor] = useState('');
  const [plate, setPlate] = useState('');
  const [capacity, setCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [userData, setUserdata] = useState({});
  const [error, setError] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');
    setUserdata({
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
      vehicle: {
        color,
        plate,
        capacity: parseInt(capacity, 10),
        vehicleType,
      },
      location: {
        lat: parseFloat(latitude),
        lng: parseFloat(longitude),
      },
    });

    setFirstname('');
    setLastname('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setColor('');
    setPlate('');
    setCapacity('');
    setVehicleType('');
    setLatitude('');
    setLongitude('');
  };

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <img className='w-12 mb-8 ml-1 mt-1 rounded' src="https://play-lh.googleusercontent.com/bXVEomXNViejYGr4Je5Ed4J08q8G00FUPYCdgoiPNF-2XAqWMYAGCBrK-n0OMYI3OALZ" alt="logo" />
        <form onSubmit={submitHandler}>
          <div className='flex flex-row justify-between gap-4'>
            <div>
              <h3 className='font-uberMedium text-base mb-2'>Enter your First name</h3>
              <input
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm placeholder:font-uberMedium'
                required
                type="text"
                placeholder='First name'
              />
            </div>
            <div>
              <h3 className='font-uberMedium text-base mb-2'>Enter your Last name</h3>
              <input
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm placeholder:font-uberMedium'
                type="text"
                placeholder='Last name'
              />
            </div>
          </div>
          <h3 className='font-uberMedium text-base mb-2'>Enter your email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm placeholder:font-uberMedium'
            required
            type="email"
            placeholder='email@example.com'
          />
          <h3 className='font-uberMedium text-base mb-2'>Enter Password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm placeholder:font-uberMedium'
            required
            type="password"
            placeholder='password'
          />
          <h3 className='font-uberMedium text-base mb-2'>Confirm Password</h3>
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm placeholder:font-uberMedium'
            required
            type="password"
            placeholder='confirm password'
          />
          <h3 className='font-uberMedium text-base mb-2'>Enter Vehicle Color</h3>
          <input
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm placeholder:font-uberMedium'
            required
            type="text"
            placeholder='Vehicle color'
          />
          <h3 className='font-uberMedium text-base mb-2'>Enter Vehicle Plate Number</h3>
          <input
            value={plate}
            onChange={(e) => setPlate(e.target.value)}
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm placeholder:font-uberMedium'
            required
            type="text"
            placeholder='Plate number'
          />
          <h3 className='font-uberMedium text-base mb-2'>Enter Vehicle Capacity</h3>
          <input
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm placeholder:font-uberMedium'
            required
            type="number"
            placeholder='Capacity'
          />
          <h3 className='font-uberMedium text-base mb-2'>Select Vehicle Type</h3>
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm placeholder:font-uberMedium'
            required
          >
            <option value="" disabled>Select vehicle type</option>
            <option value="car">Car</option>
            <option value="motorcycle">Motorcycle</option>
            <option value="auto">Auto</option>
          </select>
          <div>
            <h3 className='font-uberMedium text-base mb-2'>Enter Current Location (Latitude)</h3>
            <input
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
              className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm placeholder:font-uberMedium'
              required
              type="number"
              placeholder='Latitude'
            />
            <h3 className='font-uberMedium text-base mb-2'>Enter Current Location (Longitude)</h3>
            <input
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
              className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm placeholder:font-uberMedium'
              required
              type="number"
              placeholder='Longitude'
            />
          </div>
          {error && <p className="text-red-600 font-uberMedium mb-3">{error}</p>}
          <button className='bg-[#111] text-white mb-3 rounded px-4 py-2 w-full text-lg'>
            Register as a Captain <i className="bi bi-arrow-right absolute right-10"></i>
          </button>
          <p className='text-center font-uberMedium pb-7 pl-1'>
            Already have an account? <Link to='/captain-login' className='font-uberMedium text-blue-600'>Login!</Link>
          </p>
        </form>
      </div>
      <div>
        <p className="pb-2 text-sm text-gray-600 text-center mt-4">
          By proceeding, you agree to Uber's <a href="/terms" className="text-blue-600 underline">Terms of Service</a> and acknowledge you have read our <a href="/privacy" className="text-blue-600 underline">Privacy Policy</a>. 
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;