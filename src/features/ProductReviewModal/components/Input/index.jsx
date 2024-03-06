import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ title, placeholder, type }) => {
  return (
    <div>
      <label htmlFor={title} className="block text-sm font-semibold">
        {title}
      </label>
      {type === 'text' && (
        <input
          className="mt-1 w-full py-3 px-3 rounded-md outline-1 border-2 border-slate-200"
          type="text"
          id="title"
          placeholder={placeholder}
        />
      )}
      {type === 'textarea' && (
        <textarea
          className="mt-1 w-full py-3 px-3 rounded-md outline-1 border-2 border-slate-200"
          type="text"
          id="title"
          placeholder={placeholder}
        />
      )}
    </div>
  )
}

Input.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'textarea']),
}

export default Input
