import React from 'react'

export default function StepCount() {
  return (
    <div className="bg-white p-8 text-slate-800 rounded-2xl flex flex-col min-w-[30rem]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4 text-[#f45330]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 h-8"
          >
            <path
              fill="currentColor"
              d="M21 8h-.7l-.05-.03c-2.11-.13-3.87-.8-4.72-1.74L14 7c-.05.1-.11.19-.16.28c.71.61 1.16 1.37 1.16 2.22c0 .33-.09.64-.21.95l-1.87-1.87c-.22.25-.45.49-.7.71l2.03 2.03c-.21.25-.45.47-.75.68l-2.07-2.09c-.29.2-.58.37-.88.54l2.03 2.05c-.33.13-.69.24-1.08.32l-1.91-1.91c-.34.14-.68.27-1.03.38l1.7 1.71H10c-1.5 0-2.8-.46-3.72-1.18c-.82.13-1.6.18-2.28.18c-2 0-2 3-2 3c0 1.11.89 2 2 2v1c0 .55.45 1 1 1s1-.45 1-1v-1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h3v1c0 .55.45 1 1 1s1-.45 1-1v-1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1s1 0 1-4.5C22 9 21 8 21 8Z"
            />
          </svg>
          <p className="font-semibold text-slate-800 text-xl">Step</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </div>
      </div>

      <div className="mt-4">
        <span className="font-bold text-2xl">9,038</span>
      </div>

      <div className="flex flex-col gap-4 mt-8">
        <span className="font-medium text-lg">Goal: 10.000 steps</span>
        <div className="overflow-hidden h-3 text-xs flex rounded-full bg-slate-200">
          <div className="w-[90.35%] shadow-none flex flex-col text-center rounded-full whitespace-nowrap text-white justify-center bg-gradient-to-r from-[#f45330] to-[#ff8b4b]"></div>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">9,038</span>
          <span className="font-medium">10.000</span>
        </div>
      </div>
    </div>
  )
}
