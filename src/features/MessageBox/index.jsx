import React from 'react'
import PropTypes from 'prop-types'
import DearName from './components/DearName'

const MessageBox = (props) => {
  const dearNames = [
    {
      id: 1,
      name: 'Pogbone',
      img_url: 'https://placewaifu.com/image/200',
    },
    {
      id: 2,
      name: 'Sally',
      img_url: 'https://placewaifu.com/image/200',
    },
  ]

  return (
    <div className="w-96 bg-gray-700 px-10 py-8 rounded-2xl">
      <div className="flex items-center justify-between">
        <p className="text-gray-200 font-semibold text-2xl">Message</p>
        <div className="bg-gray-600 hover:bg-gray-500 text-gray-400 hover:text-gray-300 cursor-pointer border border-gray-600 h-9 w-9 flex items-center justify-center rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6 "
          >
            <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
          </svg>
        </div>
      </div>
      <hr className="mt-8 border-gray-500" />
      <DearName dearNames={dearNames}></DearName>
      <div className="bg-slate-800 w-full relative rounded-2xl p-4">
        <div className="absolute top-4 right-4">
          <img
            className="h-8 w-8 rounded-full"
            src="https://placewaifu.com/image/200"
            alt=""
          />
        </div>
        <textarea
          type="text"
          placeholder="Please share figma file!"
          className="text-gray-200 bg-transparent outline-none overflow-hidden resize-none border-none"
        ></textarea>
        <div className="gap-4 flex items-center text-gray-500 justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 hover:text-gray-200 cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 hover:text-gray-200 cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 hover:text-gray-200 cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

MessageBox.propTypes = {}

export default MessageBox
