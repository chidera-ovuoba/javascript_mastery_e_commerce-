import React from 'react'
import Product from '../components/Product';
import { useGlobalContext } from '../lib/context';
const Products = () => {
  const {ProductsData,searchTerm } = useGlobalContext();
  return (
    <div  className='grid place-items-center w-[95vw]'>
    <div className='flex gap-[1rem] mb-10 pt-44 flex-wrap items-center justify-center'>
      {ProductsData.filter((item)=> searchTerm ? item.fields.name.includes(searchTerm):item).map((item, i) => {
        return <Product {...item.fields} key={item.id} id={i} />
      })}
     
      </div>
      </div>
  )
}

export default Products