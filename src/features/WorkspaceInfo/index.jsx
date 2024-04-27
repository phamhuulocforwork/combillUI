import React from 'react'
import TagList from './components/taglist'
import Member from './components/Member'

export default function WorkspaceInfo() {
  const Members = [
    {
      id: 1,
      name: 'Edward Smith',
      username: 'ediesmith',
      status: 'online',
    },
    {
      id: 2,
      name: 'Michael de Santa',
      username: 'michaell',
      status: 'online',
    },
    {
      id: 3,
      name: 'Samantha Edwards',
      username: 'amantha9',
      status: 'offline',
    },
    {
      id: 4,
      name: 'Edward Jones',
      username: 'edwardjones',
      status: 'away',
    },
    {
      id: 5,
      name: 'Adam Taylor',
      username: 'damt93',
      status: 'offline',
    },
  ]

  return (
    <>
      <div className="w-[30rem] bg-slate-50 dark:bg-slate-900 rounded-xl flex flex-col relative text-slate-800 dark:text-slate-50">
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
        <hr className="h-px w-full bg-slate-200 dark:bg-slate-600 border-0" />
        <div className="p-6 flex flex-col gap-8">
          <div className="">
            <TagList></TagList>
          </div>

          <div className="flex gap-4 border border-slate-400 dark:border-slate-700 p-2 rounded-xl">
            <div className="cursor-pointer">
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
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <input
              className="w-full outline-none bg-transparent"
              type="text"
              placeholder="Find members"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex justify-start items-center gap-4">
              <div className="outline-dashed p-3 outline-2 outline-slate-400 dark:outline-slate-700 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-slat"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
              <span className="font-medium">Add a new member</span>
            </div>
            {Members.map((mem) => (
              <Member
                name={mem.name}
                username={mem.username}
                status={mem.status}
              ></Member>
            ))}
          </div>
        </div>
        <hr className="h-px w-full bg-slate-200 dark:bg-slate-600 border-0" />
        <div className="flex flex-col p-6 gap-4">
          <button className="w-full bg-blue-400 text-white py-2 rounded-lg font-semibold tracking-wide">
            Save
          </button>
          <button className="w-full bg-transparent text-slate-800 dark:text-slate-50 py-2 rounded-lg font-semibold tracking-wide">
            Cancel
          </button>
        </div>
      </div>
    </>
  )
}
