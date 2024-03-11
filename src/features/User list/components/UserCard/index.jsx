import React from 'react'
import PropTypes from 'prop-types'

const UserListItem = (props) => {
  const { UserListItems } = props

  return (
    <>
      {UserListItems.map((item) => (
        <>
          <div className=" p-4 bg-blue-50 flex rounded-2xl h-40 cursor-pointer border border-transparent hover:shadow-md hover:border-slate-300">
            <img className="h-20 w-20 rounded-full" src={item.imgURL} alt="" />
            <div className="p-2">
              <p className="font-semibold hover:underline">{item.name}</p>
              <p className="text-sm font-medium">{item.address}</p>
              <div className="inline-flex gap-1">
                {item.tag.map((tag) => (
                  <button className="text-xs border px-2 rounded-lg text-blue-500 border-slate-400 hover:text-slate-50 hover:border-slate-50 hover:bg-blue-500">
                    {tag.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  )
}

UserListItem.propTypes = {}

export default UserListItem
