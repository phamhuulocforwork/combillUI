import React, { useState } from 'react'
import PropTypes from 'prop-types'
import FontDropdown from './FontDropdown'
import FontSize from './FontSize'

const TextFormattingToolbar = () => {
  const [selectedFont, setSelectedFont] = useState()

  return (
    <div className="flex gap-8">
      <FontDropdown
        selectedFont={selectedFont}
        setSelectedFont={setSelectedFont}
      ></FontDropdown>

      <FontSize></FontSize>
    </div>
  )
}

TextFormattingToolbar.propTypes = {}

export default TextFormattingToolbar
