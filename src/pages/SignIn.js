import React from 'react'
import { Link } from 'react-router-dom'
const SignIn = () => {
  return (
    <>
      <div className='grid place-items-center pt-32'>
     <div className="grid gap-2">
      <h1 className='text-2xl font-bold mb-6'>SIGN-IN</h1>
      <div className='flex flex-col gap-4'>
        <label htmlFor="emailID">Email Address</label>
        <input type="text" className=' outline-none border-gray-400 border-b-2 focus:border-indigo-500 border-solid p-6 w-[26rem] bg-transparent' placeholder='enter email' id='emailID' />
    
       <label htmlFor="emailID">Email Address</label>
            <input type="text" className=' outline-none border-gray-400 border-b-2 focus:border-indigo-500 border-solid p-6 w-[26rem] bg-transparent' placeholder='enter email' id='emailID' />
    
      </div>

      <button className='bg-blue-800 mt-4 text-center text-md text-white p-3 rounded-lg shadow-xl place-self-start mb-5'>SIGN-IN</button>
      <span className='place-start'> New Customer?<Link to="/signup">Register</Link></span>
        </div>
        </div>
      </>
  )
}

export default SignIn