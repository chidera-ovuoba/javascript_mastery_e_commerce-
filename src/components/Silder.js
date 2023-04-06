import React, { useEffect, useRef } from 'react'
import { GrFormNext } from 'react-icons/gr';
import { GrFormPrevious } from 'react-icons/gr';
import { MdNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md';
import { useGlobalContext } from '../lib/context';
import sliderData from '../assests/slider';
const Silder = ({sliderIndex }) => {
  const { sliderInput, moveRight, moveLeft } = useGlobalContext();
  const imageHeroRef=useRef(null) 
  // useEffect(() => {
  //   // console.log()
  //   // if(imageHeroRef.current.complete){
      
  //   // }
  //   // imageHeroRef.current.classList.toggle('fadeIn_1',!imageHeroRef.current.classList.contains('fadeIn_1'));
  //   // imageHeroRef.current.classList.toggle('fadeIn',!imageHeroRef.current.classList.contains('fadeIn'));
  //   return () => {
  //   }
  // }, [sliderIndex])
  
  return (
         <>
         <div className='w-[60vw] h-[30rem] rounded-2xl relative'>
         <div className='absolute top-2/4 p-4 cursor-pointer rounded-full text-yellow-700 text-xl bg-[#f59e0bc4] -left-28' onClick={moveLeft}><MdNavigateBefore/>
         </div>
      <div className='absolute top-2/4 p-4 cursor-pointer rounded-full text-yellow-700 text-xl bg-[#f59e0bc4] -right-28' onClick={moveRight}><MdOutlineNavigateNext/>
      </div>
      <img src={sliderData[sliderIndex]} alt="hero_img_slider" className='w-full h-full object-cover rounded-3xl select-none hero_image_banner' ref={imageHeroRef}  />
      <div className='absolute bottom-4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex gap-2'>
        {sliderData.map((item, i) => {
          return <div key={i} className={`w-3 h-3 cursor-pointer rounded-full ${sliderIndex === i ? 'bg-yellow-700' : 'bg-yellow-400'}`
        } onClick={()=>sliderInput(i)} ></div>
      })}
      </div>
      </div>
      </>
    
  )
}

export default Silder