import React from 'react'
import { BiSupport } from 'react-icons/bi';
import { GiReceiveMoney, GiTruck } from 'react-icons/gi';
import { RiSecurePaymentFill } from 'react-icons/ri';

const servicesData = [
    {
        title: 'Fast & Free Delivery',
        desc: 'Free delivery on all orders',
        src:[<GiTruck/>]
    },
    {
        title: 'Secure Payment',
        desc: 'Secure payment on all orders',
        src:[<RiSecurePaymentFill/>]
    },
    {
        title: 'Money Back Guarantee',
        desc: 'Money back guarantee on all orders',
        src:[<GiReceiveMoney/>]
    },
    {
        title: 'Online Support',
        desc: 'Online support on all orders',
        src:[<BiSupport/>]
    },
] 

const Footer = () => {
  return (
   <div>
   <div className="grid place-items-center py-16  mx-auto testimonial_section_wrapper w-[90vw]">
   <div className="grid grid-cols-4 gap-8 lg:grid-cols-footer2 w-full md_1:grid-cols-1 ">
    {
        servicesData.map(({src,desc,title})=>(
        <div className="service_container flex justify-between gap-8 flex-1 md_1:flex-col">
        <div className="w-[230px] lg:w-full text-yellow-800">
        <span className='grid place-items-center text-[4rem] mb-4'>{src[0]}</span>
        <div className="text-center">
        <h5 className='text-xl capitalize font-bold my-2 text-yellow-900'>{title}</h5>
        <p className="text-md font-medium">{desc}</p>
        </div>
        </div>
        </div>
            
        ))
    }
    
    </div>
    </div> 
    </div>
  )
}

export default Footer