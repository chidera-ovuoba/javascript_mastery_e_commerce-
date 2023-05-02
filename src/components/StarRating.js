import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hoveredValue, setHoveredValue] = useState(null);

  return (
    <div className='flex gap-2 ml-2 items-center justify-center'>
    {[...Array(5)].map((star,i) => {
        const ratingValue = i + 1
      return <label key={i}>
       <input type="radio" name="starRating" id="star" className='hidden' value={ratingValue} onClick={()=>setRating(ratingValue)} />
          <FaStar size={30} className={`cursor-pointer ${ratingValue <= (hoveredValue || rating) ? 'text-orange-500' : 'text-yellow-800'}`}
         style={{transition:'color 200ms'}}
          onMouseEnter={()=>setHoveredValue(ratingValue)}
          onMouseLeave={()=>setHoveredValue(null)}
          />
       </label>
    })}
    </div>
  )
}

export default StarRating