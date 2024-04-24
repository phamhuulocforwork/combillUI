import React from 'react'

export default function CreateNewWorkSpace() {
  return (
    <div className="bg-slate-100 py-8 px-6 w-[30rem] rounded-xl">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-xl">Create New Workspace</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
      <form action="">
        <div className="flex flex-col gap-4 mt-4 p-4 bg-white rounded-lg text-slate-900 text-sm font-medium">
          <span>Workspace details</span>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Name</label>
            <input
              className="py-2 px-4 outline-none border border-slate-400 rounded-md"
              type="text"
              placeholder="Enter workspace name"
            />
          </div>
        </div>
      </form>
    </div>
  )
}
