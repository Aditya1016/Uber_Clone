import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {UserDataContext} from "../context/UserContext"
import axios from 'axios'

const UserLogin = () => {
  const[email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const[userData, setUserdata] = useState({})

  const navigate = useNavigate()

  const {user, setUser} = React.useContext(UserDataContext)

  const submitHandler = async (e) => {
    e.preventDefault();
    // setUserdata({
    //   email,
    //   password
    // })

    const userData = {
      email,
      password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

    if (response.status === 200) {
      const data = response.data

      setUser(data.user)

      localStorage.setItem('token', data.token)

      navigate('/home')
    }

    setEmail('')
    setPassword('')
  }

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <img className='w-12 mb-8 ml-1 mt-1' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="logo" />
        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <h3 className='mt-16 font-uberMedium text-lg mb-2 pl-1'>What's your email?</h3>
          <input value={email} onChange={(e) => {
            setEmail(e.target.value)
          }} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base placeholder:font-uberMedium ' required type="email" placeholder='email@example.com' />
          <h3 className='font-uberMedium text-lg mb-2 pl-1'>Enter Password</h3>
          <input value={password} onChange={(e) => {
            setPassword(e.target.value)
          }} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base placeholder:font-uberMedium' required type="password" placeholder='password' />
          <button className='bg-[#111] text-white mb-4 rounded px-4 py-2 w-full text-lg'>Login <i className="bi bi-arrow-right absolute right-10"></i></button>
          <p className='text-center font-uberMedium pb-5 pl-1'>New here? <Link to='/signup' className='font-uberMedium text-blue-600 '>Create new Account!</Link></p>
        </form>
      </div>
      <div>
          <Link to='/captain-login'><button className='bg-[#666] text-white mb-5 rounded px-4 py-2 w-full text-lg'>Sign in as captain <i className="bi bi-arrow-right absolute right-10"></i></button>
          </Link>
      </div>
    </div>
  )
}

export default UserLogin