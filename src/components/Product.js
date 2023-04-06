import React from 'react'
import { BsStarFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
const Product = ({image,name,price,id}) => {
  return (
      <div className='p-3 rounded-xl h-[24rem] w-[20rem] grid bg-blue-300'>
          <div className='rounded-xl place-self-center w-[18rem] h-[15rem]'>
          <img src={image[0].url} alt="" className='w-full h-full object-cover rounded-xl' />
          </div>
      <Link to={`/singleproduct/${id}`}>{name}</Link>
          <div className='flex gap-1 items-center'><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><span>12 reviews</span></div>
          <div className='text-3xl font-semibold'>${price}</div>
      
      </div>
  )
}

export default Product