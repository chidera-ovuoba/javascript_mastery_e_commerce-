import React from 'react'
import { BsStar } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../lib/context';
const SingleProduct = () => {
    const { ProductsData,addToCart,changeAmount } = useGlobalContext();
    const { id } = useParams();
    const { name, price, image } = ProductsData[id].fields;
  return (
      <div className='pl-20 pr-10 py-10 pt-[10rem]'>
          <Link className='p-3 rounded-lg bg-white shadow-3xl mb-5' to='/'>Go Back</Link>
          <div className="flex gap-20 my-10 ">
              <img src={image[0].url} alt="" className='w-[35rem]'/>
           
              
              <div className='w-60 mr-16'>
                  <h2 className='p-5 border-b-2 border-gray-300 border-solid'>{name}</h2>
                <div className='p-4 border-b-2 border-gray-300 border-solid gap-1 flex items-center justify-center'><BsStar/><BsStar/><BsStar/><BsStar/><BsStar/> <span className='ml-4'>2 reviews</span></div>
                  <div className='p-4 border-b-2 border-gray-300 border-solid'>
                      {`Price:$${price}`}
                  </div>
                  <p className="mt-4">Description: auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a</p>
              </div>

              <div className="shadow-3xl h-5/6">
                  <div className="flex p-5 justify-between border-b-2 border-gray-300 border-solid">
                      <span>Price:</span>
                      <p className="font-bold">${price}</p>
                  </div>
                  <div className="flex p-5 justify-between border-b-2 border-gray-300 border-solid">
                      <span>Status</span>
                      <p className="font-bold">in Stock</p>
                  </div>
                  <div className="flex p-5 justify-between border-b-2 border-gray-300 border-solid">
                      <span>Qty:</span>
                  <input type="number" className='border-black border-b-2 w-2/4 outline-none focus:border-blue-500' value ={ProductsData[id].amount} onChange={(e)=>changeAmount(ProductsData[id].id,parseFloat(e.target.value),'singleproduct')} />
                  </div>
                  <div className="p-5">
                      <Link className="flex px-10 py-2 gap-3 items-center justify-center text-sm uppercase text-white shadow-xl rounded-md bg-sky-400" to='/carts' onClick={()=>addToCart(id)}>
                      <AiOutlinePlus/><AiOutlineShoppingCart/> add to cart 
                      </Link>
                  </div>
                  </div>
          </div>
          <h3 className='text-2xl uppercase font-bold mb-6'>Reviews</h3>
          <div className=' mb-4 ml-4 pb-10 border-b-2 w-2/5 border-gray-400 grid gap-2'>
              <span className='bold'>asda</span>
              <div className='flex gap-1'><BsStar /><BsStar /><BsStar /><BsStar /><BsStar /></div>
              <span className='bold'>2022-20-12</span>
              <p>jbnkfnkgrkmgk</p>
          </div>
           <div className=' mb-4 ml-4 pb-10 border-b-2 w-2/5 border-gray-400 grid gap-2'>
              <span className='bold'>asda</span>
              <div className='flex gap-1'><BsStar /><BsStar /><BsStar /><BsStar /><BsStar /></div>
              <span className='bold'>2022-20-12</span>
              <p>jbnkfnkgrkmgk</p>
          </div>
          <h3 className='text-2xl uppercase font-bold mb-6'>WRITE A CUSTOMER REVIEW</h3>
          <div className='bg-purple-400 text-white p-5 rounded-md w-[40%] items-center'>Please sign in to write a review</div>
      </div>
  )
}

export default SingleProduct