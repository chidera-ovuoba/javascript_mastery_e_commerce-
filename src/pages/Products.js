import React from 'react'
import Product from '../components/Product';
import { useGlobalContext } from '../lib/context';
const Products = () => {
  const {ProductsData,searchTerm } = useGlobalContext();
  return (
    <div  className='grid place-content-center'>
    <div className='grid grid-cols-4  gap-[2rem] mb-10 pt-44'>
      {ProductsData.filter((item)=> searchTerm ? item.fields.name.includes(searchTerm):item).map((item, i) => {
        return <Product {...item.fields} key={item.id} id={i} />
      })}
     
      </div>
      </div>
  )
}

export default Products