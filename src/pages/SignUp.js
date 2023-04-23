import React, { useState } from 'react'
import { useGlobalContext } from '../lib/context';



const SignUp = () => {
  const { submitInfo } = useGlobalContext();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  return (
      <div className='grid place-items-center pt-28 pb-7'>
      <div className="grid gap-2">
      <h1 className='text-2xl font-bold mb-6'>SIGN-IN</h1>
      <div className='flex flex-col gap-4'>
        <label htmlFor="nameID">Name</label>
          <input type="text" className=' outline-none border-gray-400 border-b-2 focus:border-indigo-500 border-solid pb-3 w-[26rem] bg-transparent' placeholder='enter name' id='nameID' value={name} onChange={(e) => setName(e.target.value)}  />
    
       <label htmlFor="emailID">Email Address</label>
                  <input type="text" className=' outline-none border-gray-400 border-b-2 focus:border-indigo-500 border-solid pb-3 w-[26rem] bg-transparent' placeholder='enter email' id='emailID' value={email} onChange={(e) => setEmail(e.target.value)}  />
                  
       <label htmlFor="passwordID">Password</label>
                  <input type="password" className=' outline-none border-gray-400 border-b-2 focus:border-indigo-500 border-solid pb-3 w-[26rem] bg-transparent' placeholder='enter password' id='passwordID' value={password} onChange={(e) => setPassword(e.target.value)}  />
                  
       <label htmlFor="confirmID">Confirm Password</label>
          <input type="password" className=' outline-none border-gray-400 border-b-2 focus:border-indigo-500 border-solid pb-3 w-[26rem] bg-transparent' placeholder='enter password' id='confirmID' value={confirm} onChange={(e) => setConfirm(e.target.value)}  />
     
           <button type='submit' className='bg-blue-800 mt-4 text-center text-md text-white p-3 rounded-lg shadow-xl place-self-start mb-0' onClick={()=>submitInfo({name,email,password,confirm})}>REGISTER</button>

        </div>

     
      <span className='place-start'>Have an account?<a href="#">Login</a></span>
      </div>
    </div>
   
  )
}

export default SignUp