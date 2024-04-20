import React from 'react'

export default function WorkspaceInfo() {
  return (
    <>
      <div className="w-[30rem] bg-slate-50 rounded-xl flex flex-col relative">
        <div className="p-6 flex">
          <div className="absolute top-4 right-4">
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
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <div className="w-full">
            <span className="font-semibold text-xl">Workspace Info</span>
          </div>
        </div>
        <hr className="h-px w-full bg-slate-300 border-0" />
        <div className="p-6 flex flex-col">
          <div className="">
            <ul className="bg-slate-200 w-fit rounded-md">
              <li className="px-4 py-2">Summary</li>
            </ul>
          </div>

          <div>
            <input type="text" />
          </div>
        </div>
      </div>
    </>
  )
}
