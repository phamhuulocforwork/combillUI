import React, { useState } from 'react'
import PropTypes from 'prop-types'

const FontSize = () => {
  const [fontSize, setFontSize] = useState(16)

  return (
    <div className="flex justify-center items-center bg-white rounded-md border text-slate-800 border-slate-400 shadow-sm">
      <div
        className="p-2 hover:bg-slate-300 cursor-pointer rounded-l-md select-none border-r border-slate-300 box-border"
        onClick={() => setFontSize(fontSize - 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M5 11V13H19V11H5Z"></path>
        </svg>
      </div>
      <input
        className="font-medium w-12 select-none text-center outline-none"
        type="text"
        value={fontSize}
        onChange={(e) => setFontSize(parseInt(e.target.value))}
      ></input>
      <div
        className="p-2 hover:bg-slate-300 cursor-pointer rounded-r-md select-none border-l border-slate-300 box-border"
        onClick={() => setFontSize(fontSize + 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
        </svg>
      </div>
    </div>
  )
}

FontSize.propTypes = {}

export default FontSize
