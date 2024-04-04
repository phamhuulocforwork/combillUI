import React, { useState } from 'react'
import PropTypes from 'prop-types'
import FontDropdown from './FontDropdown'
import FontSize from './FontSize'
import TextStyle from './TextStyle'

const TextFormattingToolbar = () => {
  const [selectedFont, setSelectedFont] = useState()

  return (
    <div className="flex gap-8">
      <FontDropdown
        selectedFont={selectedFont}
        setSelectedFont={setSelectedFont}
      ></FontDropdown>

      <FontSize></FontSize>

      <TextStyle></TextStyle>
    </div>
  )
}

TextFormattingToolbar.propTypes = {}

export default TextFormattingToolbar
