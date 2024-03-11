import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  const { Buttons } = props

  return (
    <>
      {Buttons.map((button) => (
        <button
          key={button.id}
          className={`
           text-sm font-medium px-4 h-12 rounded-md transition duration-300 
           ${button.isActive ? 'bg-blue-500 text-slate-50' : 'bg-transparent'}
          `}
        >
          {button.title}
        </button>
      ))}
    </>
  )
}

Button.propTypes = {}

export default Button
