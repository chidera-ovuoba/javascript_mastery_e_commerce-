import React from 'react'
import { Link } from 'react-router-dom'
const SignIn = () => {
  return (
    <>
      <div className='grid place-items-center pt-32'>
     <div className="grid gap-5">
      <h1 className='text-2xl font-bold mb-6 text-yellow-800'>SIGN-IN</h1>
      <div className='flex flex-col gap-6 text-lg font-medium text-yellow-800'>
      <div className='flex flex-col gap-2'>
      <label htmlFor="emailID">Email Address</label>
      <input type="text" className=' outline-none border-yellow-800 border-b-2 focus:border-yellow-500 border-solid  max-w-[26rem] bg-transparent w-[90vw] pb-3 ' placeholder='enter email' id='emailID' />
      </div>
      <div className='flex flex-col gap-2'>
      <label htmlFor="passwordID">Password</label>
      <input type="password" className='outline-none border-yellow-800 border-b-2 focus:border-yellow-500 border-solid pb-3 max-w-[26rem] bg-transparent w-[90vw]' placeholder='enter password' id='passwordID' />
      </div>
    
      </div>

      <button className='bg-orange-500 mt-4 text-orange-800 font-medium  text-center text-md text-white p-3 rounded-lg place-self-start mb-5'>Log In</button>
      <span className='place-start text-lg  text-yellow-800'> New Customer ?<Link to="/signup" className='cursor-pointer focus:text-yellow-500 hover:text-yellow-500 font-bold'>Register</Link></span>
        </div>
        </div>
      </>
  )
}

export default SignIn