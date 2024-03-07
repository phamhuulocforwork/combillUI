import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Rating = () => {
  const [reviewScore, setReviewScore] = useState(1)
  return (
    <>
      {[1, 2, 3, 4, 5].map((star) => (
        <li
          key={star}
          className={`
          ${reviewScore >= star ? 'text-yellow-500' : 'text-slate-300'}
          border-2 border-slate-200 rounded-md flex justify-center items-center cursor-pointer`}
          onClick={() => setReviewScore(star)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            className={`
            ${reviewScore >= star && 'fill-yellow-400'}
            w-8 h-8`}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
        </li>
      ))}
    </>
  )
}

Rating.propTypes = {}

export default Rating
