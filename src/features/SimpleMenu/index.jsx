import React from 'react'
import PropTypes from 'prop-types'
import Menu from './Menu'

const SimpleMenu = () => {
  return (
    <div className="flex flex-col gap-6">
      <Menu bgColor={'slate-900'} shapeColor={'slate-800'}></Menu>
      <Menu bgColor={'rose-500'} shapeColor={'rose-600'}></Menu>
      <Menu bgColor={'sky-900'} shapeColor={'sky-800'}></Menu>
    </div>
  )
}

SimpleMenu.propTypes = {}

export default SimpleMenu
