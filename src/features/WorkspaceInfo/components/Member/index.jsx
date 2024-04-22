import React from 'react'

export default function Member({ name, username, status }) {
  return (
    <>
      <div className="flex justify-start gap-4 items-center">
        <div className="relative">
          <img
            className="w-12 h-12 rounded-full"
            src="https://placewaifu.com/image/200"
            alt=""
          />
          <div
            className={`absolute w-3 h-3 rounded-full bottom-0 right-0 outline outline-2 outline-white
              ${status === 'online' ? 'bg-green-500' : status === 'offline' ? 'bg-slate-500' : 'bg-yellow-500'}
            `}
          ></div>
        </div>
        <div className="flex flex-col justify-center">
          <span>{name}</span>
          <span className="text-slate-400 text-sm">@{username}</span>
        </div>
      </div>
    </>
  )
}
