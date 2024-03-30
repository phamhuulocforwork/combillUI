import React from 'react'
import PropTypes from 'prop-types'
import FontDropdown from './FontDropdown'

const TextFormattingToolbar = () => {
  return (
    <div className="flex gap-4">
      <FontDropdown></FontDropdown>
      <FontDropdown></FontDropdown>
      <FontDropdown></FontDropdown>
    </div>
  )
}

TextFormattingToolbar.propTypes = {}

export default TextFormattingToolbar
