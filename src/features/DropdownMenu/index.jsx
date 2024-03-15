import React, { useState } from 'react'
import PropTypes from 'prop-types'

const DropdownMenu = () => {
  const [openDropdownMenu, setOpenDropdownMenu] = useState(false)

  const menuItems = [
    {
      id: 1,
      title: 'Friends',
    },
    {
      id: 2,
      title: 'Profile',
    },
    {
      id: 3,
      title: 'Settings',
    },
    {
      id: 4,
      title: 'Sign Out',
    },
  ]

  return (
    <div>
      <div
        className="text-slate-800 relative bg-transparent p-2 cursor-pointer rounded-full border-2 border-slate-800"
        onClick={() => setOpenDropdownMenu((prev) => !prev)}
        onMouseDown={(e) => e.preventDefault()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
        </svg>
        {openDropdownMenu && (
          <div
            className={`absolute rounded-xl bg-slate-50 py-4 top-16 left-1/2 transform -translate-x-1/2
            before:absolute
            before:bg-slate-50
            before:w-6
            before:h-6
            before:-top-3
            before:rotate-45
            before:left-1/2
            before:transform
            before:-translate-x-1/2
          `}
          >
            <ul className="flex flex-col justify-center gap-1">
              {menuItems.map((menuItem) => (
                <li
                  key={menuItem.id}
                  className="text-slate-800 hover:bg-slate-200 px-12 py-2 cursor-pointer text-nowrap "
                >
                  {menuItem.title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

DropdownMenu.propTypes = {}

export default DropdownMenu
