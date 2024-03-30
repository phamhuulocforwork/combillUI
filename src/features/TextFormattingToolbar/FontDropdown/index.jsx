import React, { useState } from 'react'
import PropTypes from 'prop-types'

const FontDropdown = () => {
  const [openDropdownMenu, setOpenDropdownMenu] = useState(false)
  const dropDownItemsStyle =
    'block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900'

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
    <div>
      <div className="relative">
        <button
          className="flex justify-center items-center bg-white p-2 border border-slate-600 rounded-md w-full"
          onClick={() => setOpenDropdownMenu((prev) => !prev)}
          onMouseDown={(e) => e.preventDefault()}
        >
          Open Menu
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`w-6 h-6 ${openDropdownMenu && 'rotate-180'} duration-300`}
          >
            <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
          </svg>
        </button>
        {openDropdownMenu && (
          <ul className="absolute bg-white w-full left-0">
            <li className={dropDownItemsStyle}>Menu Item 1</li>
            <li className={dropDownItemsStyle}>Menu Item 2</li>
            <li className={dropDownItemsStyle}>Menu Item 3</li>
          </ul>
        )}
      </div>
    </div>
  )
}

FontDropdown.propTypes = {}

export default FontDropdown
