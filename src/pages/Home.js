import React from 'react'
import Slider from '../components/Silder';
import { useGlobalContext } from '../lib/context';
// import Product from '../components/Product';
import Products from './Products';
import ProductsPanel from '../components/ProductsPanel';
// import sliderData from '../assests/slider';
const Home = () => {
  const { loading,ProductsData,sliderIndex } = useGlobalContext();
if (loading) {
    return  <div className="container_loader">
        <div className="spinner">
            <div className="spinner-text">Loading...</div>
            <div className="spinner-sector spinner-sector-red"></div>
            <div className="spinner-sector spinner-sector-blue"></div>
            <div className="spinner-sector spinner-sector-green"></div>
        </div>
    </div>
  }
return (
<div> 
<div className='grid place-content-center pt-32'>
      <Slider sliderIndex={sliderIndex} />
      <ProductsPanel/>
  </div>
      
      </div>
  )
}

export default Home