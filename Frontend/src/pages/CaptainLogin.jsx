import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [captainData, setCaptaindata] = useState({})


  const submitHandler = (e) => {
    e.preventDefault();
    setCaptaindata({
      email,
      password
    })

    setEmail('')
    setPassword('')
  }

  useEffect(() => {
    console.log(captainData);
  }, [captainData]);

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <img className='w-12 mb-8 ml-1 mt-1 rounded' src="https://play-lh.googleusercontent.com/bXVEomXNViejYGr4Je5Ed4J08q8G00FUPYCdgoiPNF-2XAqWMYAGCBrK-n0OMYI3OALZ" alt="logo" />
        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <h3 className='font-uberMedium text-lg mb-2 pl-1'>What's your email?</h3>
          <input value={email} onChange={(e) => {
            setEmail(e.target.value)
          }} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base placeholder:font-uberMedium ' required type="email" placeholder='email@example.com' />
          <h3 className='font-uberMedium text-lg mb-2 pl-1'>Enter Password</h3>
          <input value={password} onChange={(e) => {
            setPassword(e.target.value)
          }} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base placeholder:font-uberMedium' required type="password" placeholder='password' />
          <button className='bg-[#111] text-white mb-4 rounded px-4 py-2 w-full text-lg'>Login as Captain<i className="bi bi-arrow-right absolute right-10"></i></button>
          <p className='text-center font-uberMedium pb-5'>
            Want to drive with Uber? 
            <Link to='/captain-signup' className='font-uberMedium text-blue-600'> Sign up as a captain!</Link>
          </p>

        </form>
      </div>
      <div>
        <Link to='/login'><button className='bg-[#666] text-white mb-5 rounded px-4 py-2 w-full text-lg'>Sign in as User<i className="bi bi-arrow-right absolute right-10"></i></button>
        </Link>
      </div>
    </div>
  )
}

export default CaptainLogin