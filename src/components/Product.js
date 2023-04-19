import React from 'react'
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Product = ({image,name,price,id}) => {
  return (
      <div className='h-[17rem] w-[15rem] grid bg-orange-500'>
          <div className='w-full h-[11rem] relative'>
          <p className='bg-yellow-200 px-3 py-1 text-sm text-semibold rounded-[2rem] text-yellow-800 grid place-items-center absolute top-2 right-2'>23%</p>
          <img src={image[0].url} alt="" className='w-full h-full object-cover' />
          </div>
          <div className='px-3 text-md text-orange-900 font-medium capitalize'>
          <Link to={`/singleproduct/${id}`}>{name}</Link>
          <div className='flex gap-1 items-center text-[14px] text-yellow-300'><BsStarFill /><BsStarFill /><BsStarHalf /><BsStar/><BsStar/><span className='text-orange-900' >12 reviews</span></div>
          <div className='font-bold'></div>
          <div className="detail_bottom">
              <span>
              <samp className='text-md font-semibold text-orange-800'>${price}</samp>
              <s className=' ml-3 text-xs font-medium text-orange-950 opacity-80'>$50.00</s>
              </span>
              <p className='font-bold text-orange-900 text-lg cursor-pointer'><FaCartPlus /></p>
            </div>
          </div>
      
      </div>
  )
}

export default Product