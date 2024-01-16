import React, {useState} from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [ratingColor, setRatingColor] = useState(null);

  return (
    <>
      {[...Array(5)].map((star, index) => {
        const curRating = index + 1;

        return (
          <>
          <label>
            <input className='inputBox' type='ratio' name='rating' value={curRating} onClick={() => setRating(curRating)} />
            <FaStar size={70} style={{cursor: 'pointer'}}
            color={ curRating <= (ratingColor || rating) ? 'yellow' : 'white'}
            />
          </label>
          </>
        )
      })}
    </>
  )
}

export default StarRating