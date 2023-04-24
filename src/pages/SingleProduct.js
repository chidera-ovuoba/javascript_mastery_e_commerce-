import React,{useCallback, useEffect, useState} from 'react'
import { BsStar } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../lib/context';
import Stripe from 'stripe';
const SingleProduct = () => {
    const { ProductsData,addToCart,changeAmount } = useGlobalContext();
    const { id } = useParams();
    const [productData, setProductData] = useState({})
    const { name, price_1, images,description } = productData;

    const price = `${price_1?.slice(0,price_1?.length - 2)}.${price_1?.slice(price_1?.length-2,price_1?.length)}`
    const retrieveProduct = useCallback(async () => {
        const stripe = await Stripe(process.env.REACT_APP_STRIPE_SECRET_KEY)
        const product = await stripe.products.retrieve(
            id
            );
            console.log(product)
        const price = await stripe.prices.retrieve(
            product.default_price
            );  
            setProductData({...product,price_1:price.unit_amount_decimal})
                
            },[id])
useEffect(() => {
   retrieveProduct()

}, [id,retrieveProduct])


  return (
      <div className='w-[90vw] mx-auto py-10 pt-[7rem]'>
          <Link className='p-3 rounded-lg bg-white shadow-3xl mb-5' to='/'>Go Back</Link>
          <div className="grid gap-10 justify-between grid-cols-4 xl_1:grid-cols-3 my-10 lg_12:grid-cols-1">
              <div className='max-w-[32rem] col-span-2 bg-yellow-200 p-5 rounded-xl lg_12:col-span-1 lg_12:justify-self-center'>
              <img src={images?.[0]} alt={name} className='w-full img'/>
              </div>
           
              
              <div className='xl_1:col-start-1 xl_1:row-start-2 xl_1:col-span-3 xl_1:max-w-[80%] xl_1:justify-self-center lg_12:col-span-1 lg_12:row-start-3'>
                  <h2 className='p-5 border-b-2 border-gray-300 border-solid'>{name}</h2>
                <div className='p-4 border-b-2 border-gray-300 border-solid gap-1 flex items-center justify-center'><BsStar/><BsStar/><BsStar/><BsStar/><BsStar/> <span className='ml-4'>2 reviews</span></div>
                  <div className='p-4 border-b-2 border-gray-300 border-solid'>
                      {`Price:$${price}`}
                  </div>
                  <p className="mt-4">Description: {description}</p>
              </div>

              <div className="shadow-3xl min-w-[220px] lg_12:justify-self-center">
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
                  <input type="number" className='border-black border-b-2 w-2/4 outline-none focus:border-blue-500' value ={ProductsData[4]?.amount} onChange={(e)=>changeAmount(ProductsData[4]?.id,parseFloat(e.target.value),'singleproduct')} />
                  </div>
                  <div className="p-5">
                      <Link className="flex px-10 py-2 gap-3 items-center justify-center text-sm uppercase text-white shadow-xl rounded-md bg-sky-400" to='/carts' onClick={()=>addToCart(4)}>
                      <AiOutlinePlus/><AiOutlineShoppingCart/> add to cart 
                      </Link>
                  </div>
                  </div>
          </div>
          <h3 className='text-2xl uppercase font-bold mb-6'>Reviews</h3>
          <div className='mb-4 ml-4 pb-4 border-b-2  border-gray-400 grid gap-2'>
              <span className='bold'>asda</span>
              <div className='flex gap-1'><BsStar /><BsStar /><BsStar /><BsStar /><BsStar /></div>
              <span className='bold'>2022-20-12</span>
              <p>jbnkfnkgrkmgk</p>
              </div>
           <h3 className='text-2xl uppercase font-bold mb-6'>WRITE A CUSTOMER REVIEW</h3>
           <div className='bg-purple-400 text-white p-5 rounded-md w-[10rem] items-center'>Please sign in to write a review</div>
          <div className='flex items-center gap-2 min-w-[500px] md:min-w-full text-md text-yellow-950 flex-wrap'>
          <input type='text' className='w-[30rem] focus:border-b-yellow-600 bg-transparent border-b-4 border-b-yellow-800 outline-none' />
          <button className='px-6 py-3 bg-orange-500 font-semibold text-md capitalize mr-auto lg_2:mr-0'>submit review</button>
          </div>

      </div>
  )
}

export default SingleProduct