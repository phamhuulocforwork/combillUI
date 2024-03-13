import React, { useState } from 'react'
import PropTypes from 'prop-types'
import DropdownMenu from '../DropdownMenu'

const Comment = ({ comments }) => {
  const [openDropdownMenu, setOpenDropdownMenu] = useState(false)

  const handleDropdownClick = (index) => {
    const updatedComments = comments.map((comment, i) => {
      if (i === index) {
        return { ...comment, isOpen: !comment.isOpen }
      }
      return comment
    })
    setOpenDropdownMenu(updatedComments)
  }

  return (
    <>
      {comments.map((comment, index) => (
        <div key={comment.id}>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  className="w-12 rounded-full"
                  src={comment.avatar}
                  alt=""
                />
                <div
                  className={`w-3 h-3 ${comment.isOnline ? 'bg-green-500' : 'bg-slate-500'} border-slate-50 border rounded-full absolute right-0 bottom-0`}
                ></div>
              </div>
              <p className="font-mediums font-semibold hover:underline cursor-pointer">
                {comment.name}
              </p>
              <p className="text-sm font-mediums">&#8226; {comment.date}</p>
            </div>
            <div
              id={comment.id}
              className="hover:bg-slate-300 cursor-pointer p-1 rounded-full relative"
              onClick={() => handleDropdownClick(comment.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"></path>
              </svg>
              {comment.isOpenMenu && openDropdownMenu && (
                <DropdownMenu></DropdownMenu>
              )}
            </div>
          </div>
          <p className="mt-2">{comment.text}</p>
          <div className="flex p-2 gap-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-slate-500"
            >
              <path d="M10.5199 19.8634C10.5955 18.6615 10.8833 17.5172 11.3463 16.4676C9.81124 16.3252 8.41864 15.6867 7.33309 14.7151L8.66691 13.2248C9.55217 14.0172 10.7188 14.4978 12 14.4978C12.1763 14.4978 12.3501 14.4887 12.5211 14.471C14.227 12.2169 16.8661 10.7083 19.8634 10.5199C19.1692 6.80877 15.9126 4 12 4C7.58172 4 4 7.58172 4 12C4 15.9126 6.80877 19.1692 10.5199 19.8634ZM19.0233 12.636C15.7891 13.2396 13.2396 15.7891 12.636 19.0233L19.0233 12.636ZM22 12C22 12.1677 21.9959 12.3344 21.9877 12.5L12.5 21.9877C12.3344 21.9959 12.1677 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM10 10C10 10.8284 9.32843 11.5 8.5 11.5C7.67157 11.5 7 10.8284 7 10C7 9.17157 7.67157 8.5 8.5 8.5C9.32843 8.5 10 9.17157 10 10ZM17 10C17 10.8284 16.3284 11.5 15.5 11.5C14.6716 11.5 14 10.8284 14 10C14 9.17157 14.6716 8.5 15.5 8.5C16.3284 8.5 17 9.17157 17 10Z"></path>
            </svg>
          </div>
          {index !== comments.length - 1 && (
            <hr className="my-4 border-slate-200" />
          )}
        </div>
      ))}
    </>
  )
}

Comment.propTypes = {}

export default Comment
