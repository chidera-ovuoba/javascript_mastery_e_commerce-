import React from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const ProductsPanel = ({ productsPanelData }) => {
  const moveLeft = () => {
     
   }
  const moveRight = () => {
     
   }

  return (
    <div className='relative pb-20'>
    <div className='grid grid-flow-col auto-cols-1fr place-items-center w-[80vw] overflow-x-scroll gap-[1rem] py-8'>
    <div className='absolute -bottom-[6%] p-4 md_1:p-3 md_1:text-lg cursor-pointer rounded-full text-yellow-700 text-xl bg-[#f59e0b] z-10 left-[38%] lg_1:left-[5%]' onClick={moveLeft}><BsArrowLeft/>
    </div>
    <div className='absolute -bottom-[6%] p-4 md_1:p-3 md_1:text-lg cursor-pointer rounded-full text-yellow-700 text-xl bg-[#f59e0b] z-10 right-[38%] lg_1:right-[5%]' onClick={moveRight}><BsArrowRight/>
      </div>
      {
        productsPanelData.map(({image,text}) => (
          <div key={text} className='text-center grid place-items-center w-full h-[170px]'>
            <div className='grid place-items-center bg-yellow-400 w-full h-[150px] overflow-hidden rounded-lg'>
            <img src={image} alt={text}  className='w-auto h-[90%]' />
            </div>
            <p>{text}</p>
          </div>
        ))
    }
    </div>
    </div>
  )
}

export default ProductsPanel