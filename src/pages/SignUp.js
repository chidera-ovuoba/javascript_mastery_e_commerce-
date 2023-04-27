import React, { useState } from 'react'
import { useGlobalContext } from '../lib/context';
import { Link, useNavigate } from 'react-router-dom';



const SignUp = () => {
  const { submitInfo,passwordError,accountError } = useGlobalContext();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const navigate = useNavigate();
  
 

  return (
      <div className='grid place-items-center pt-28 pb-7'>
      <div className="grid gap-5">
      <h1 className='text-2xl font-bold mb-6 text-yellow-800'>SIGN-UP</h1>
        <form className='flex flex-col gap-6 text-lg font-medium text-yellow-800' onSubmit={(e) => {
          e.preventDefault()
          submitInfo({ name, email, password, confirm },navigate)
        }}>
               <div className='flex flex-col gap-2' >
               <label htmlFor="nameID">Name</label>
               <input type="text" className='outline-none border-yellow-800 border-b-2 focus:border-yellow-500 border-solid pb-3 max-w-[26rem] bg-transparent w-[90vw]' placeholder='enter name' id='nameID' value={name} onChange={(e) => setName(e.target.value)}  />
               </div>     
               <div className='flex flex-col gap-2'>
              <label htmlFor="emailID">Email Address</label>
              <input type="email" className='outline-none border-yellow-800 border-b-2 focus:border-yellow-500 border-solid pb-3 max-w-[26rem] bg-transparent w-[90vw]' placeholder='enter email' id='emailID' value={email} onChange={(e) => setEmail(e.target.value)}  />
              </div>
              <div className='flex flex-col gap-2'>
               <label htmlFor="passwordID">Password</label>
               <input type="password" className='outline-none border-yellow-800 border-b-2 focus:border-yellow-500 border-solid pb-3 max-w-[26rem] bg-transparent w-[90vw]' placeholder='enter password' id='passwordID' value={password} onChange={(e) => setPassword(e.target.value)}  />
               </div>         
               <div className='flex flex-col gap-2'>
               <label htmlFor="confirmID">Confirm Password</label>
               <input type="password" className='outline-none border-yellow-800 border-b-2 focus:border-yellow-500 border-solid pb-3 max-w-[26rem] bg-transparent w-[90vw]' placeholder='enter password' id='confirmID' value={confirm} onChange={(e) => setConfirm(e.target.value)}  />
               </div>         
               
           <button type='submit' className='bg-orange-500 mt-4 text-orange-800 font-medium  text-center text-md text-white p-3 rounded-lg place-self-start mb-5'>REGISTER</button>
          <article className={`fixed w-[12rem] text-center h-auto bg-white left-[50%] border-t-4 px-3 py-1 text-sm font-medium border-t-red-500 -translate-x-1/2 -bottom-[4rem]  ${passwordError || accountError ? 'slide_up_down' : ''}`}>{passwordError && 'passwords are not identical'}{accountError && 'Account Already Exists' }</article>
        </form>

     
      <span className='place-start text-lg  text-yellow-800'>Have an account ?<Link to="/signin" className='cursor-pointer focus:text-yellow-500 hover:text-yellow-500 font-bold'>Login</Link></span>
      </div>
    </div>
   
  )
}

export default SignUp