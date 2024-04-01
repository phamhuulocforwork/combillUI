import React, { useState } from 'react'
import PropTypes from 'prop-types'

const FontDropdown = ({ selectedFont, setSelectedFont }) => {
  const [openDropdownMenu, setOpenDropdownMenu] = useState(false)
  const dropDownItemsStyle =
    'block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-slate-200'

  const FONTS = [
    {
      id: 1,
      name: 'Arial',
    },
    {
      id: 2,
      name: 'Inter',
    },
    {
      id: 3,
      name: 'Cucho',
    },
  ]

  return (
    <div className="relative">
      <div
        className={`flex justify-between select-none text-slate-800 items-center bg-white border font-medium p-2 border-slate-400 shadow-sm w-32 p= rounded-md`}
        onClick={() => setOpenDropdownMenu((prev) => !prev)}
      >
        <div></div>
        <div>{selectedFont}</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`w-6 h-6 ${openDropdownMenu && 'rotate-180'} duration-300`}
        >
          <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
        </svg>
      </div>
      {openDropdownMenu && (
        <ul
          className={`absolute bg-white w-full select-none font-medium text-slate-800 left-0 rounded-md border top-12 border-slate-400`}
        >
          {FONTS.map((font) => (
            <li
              className={dropDownItemsStyle}
              key={font.id}
              onClick={(e) => {
                setSelectedFont(font.name)
                setOpenDropdownMenu((prev) => !prev)
              }}
            >
              {font.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

FontDropdown.propTypes = {
  selectedFont: PropTypes.string.isRequired,
  setSelectedFont: PropTypes.func.isRequired,
}

FontDropdown.defaultProps = {
  selectedFont: 'Select font',
}

export default FontDropdown
