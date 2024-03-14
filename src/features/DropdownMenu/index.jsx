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
    <div className="text-slate-800 bg-transparent p-2  rounded-full border-2 border-slate-800">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
      </svg>
    </div>
  )
}

DropdownMenu.propTypes = {}

export default DropdownMenu
