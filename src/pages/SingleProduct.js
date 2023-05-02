import React,{useCallback, useEffect, useState} from 'react'
import { BsStar } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../lib/context';
import Stripe from 'stripe';
import { FaUserAlt } from 'react-icons/fa';
import StarRating from '../components/StarRating';
const SingleProduct = () => {
    const { ProductsData,addToCart,changeAmount } = useGlobalContext();
    const { id } = useParams();
    const [productData, setProductData] = useState({})
    const { name, price_1, images, description } = productData;
    
    const nameInitialsArr = localStorage.getItem('username')?.split(' ');
    const userImg = localStorage.getItem('userImg');

    // const timeFormat = () => {
    //   const d = new Date();
    //   const presumedDate =  new Date('July 21, 1983 00:15:00:526').toLocaleString();
    //   let text = d.toLocaleString();
    //   console.log(text.split(', ')[1].split(':'),presumedDate.split(', ')[1].split(':'));
    // //   switch
    // }
    
    // timeFormat()


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
              <div className='max-w-[32rem] h-[32rem] sm:h-[22rem] col-span-2 bg-yellow-200 p-5 rounded-xl lg_12:col-span-1 lg_12:justify-self-center'>
              <img src={images?.[0]} alt={name} className='w-full h-full img'/>
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
          <div className='mb-4 ml-4 pb-4  grid gap-2'>
          <div className='flex justify-between items-center gap-2'>
          <div className='w-[45px] h-[45px] bg-orange-500 grid place-items-center rounded-full mr-2'>
          <div className={userImg ? 'hidden':'text-xl font-bold uppercase'}>{nameInitialsArr?.length > 1 ? nameInitialsArr?.[0]?.charAt(0).concat(nameInitialsArr?.[1]?.charAt(0)) : nameInitialsArr?.[0]?.slice(0, 2)}{!nameInitialsArr?.[0] && <FaUserAlt />}</div>
                <img src={userImg} alt='reviewImg' className={userImg ? 'w-full h-full rounded-full img': 'hidden'} />
                </div>
                <div className='grid mr-auto gap-1'>
                <span className='bold'>Light Yagami</span>
                <span className='flex gap-1'><BsStar /><BsStar /><BsStar /><BsStar /><BsStar /></span>
                </div>
                <span className='bold '>2022-20-12</span>
                </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi molestias, dignissimos voluptas recusandae sequi laborum voluptatibus assumenda ratione nesciunt magnam, iure rem, perspiciatis velit corporis voluptatum eligendi sunt ipsum nisi!</p>
              </div>
           <h3 className='text-2xl uppercase font-bold mb-6'>WRITE A CUSTOMER REVIEW</h3>
           <div className='bg-purple-400 text-white p-5 rounded-md w-[10rem] items-center'>Please sign in to write a review</div>
          <div className='flex  flex-col justify-center items-center gap-6 min-w-[500px] md:min-w-full text-md text-yellow-950 flex-wrap'>
          <textarea style={{width:'90vw',height:'15rem'}} className='bg-yellow-200 p-3 resize-none' placeholder="what's your pick on the product?"/>
          <div className="flex items-center justify-center">Rate :  <StarRating/></div>
          <button className='mx-auto px-6 py-3 bg-orange-500 font-semibold text-md capitalize mr-auto lg_2:mr-0'>submit review</button>
          </div>

      </div>
  )
}

export default SingleProduct