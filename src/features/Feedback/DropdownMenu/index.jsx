import React from 'react'
import PropTypes from 'prop-types'

const DropdownMenu = () => {
  return (
    <div
      className={`
                absolute cursor-default w-auto top-10 -right-[0.1rem] bg-slate-50 border border-slate-300 rounded-lg shadow-md
                before:absolute
                before:bg-slate-50
                before:-top-[0.42rem]
                before:w-3
                before:h-3
                before:rotate-45
                before:right-3
                before:border-l
                before:border-t
                before:border-slate-300
                `}
    >
      <ul className="py-2">
        <li className="px-4 py-2 hover:bg-slate-100 cursor-pointer text-nowrap">
          Option 1
        </li>
        <li className="px-4 py-2 hover:bg-slate-100 cursor-pointer text-nowrap">
          Option 2
        </li>
        <li className="px-4 py-2 hover:bg-slate-100 cursor-pointer text-nowrap">
          Option 3
        </li>
      </ul>
    </div>
  )
}

DropdownMenu.propTypes = {}

export default DropdownMenu
