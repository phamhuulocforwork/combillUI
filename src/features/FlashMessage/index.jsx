import React from 'react'
import PropTypes from 'prop-types'

const FlashMessage = ({ state }) => {
  return (
    <div className="max-w-72 min-h-80 bg-slate-50 rounded-2xl flex flex-col items-center gap-8 p-8">
      <div
        className={`w-full h-full flex justify-center ${state === 'success' ? 'text-green-500' : 'text-red-500'}`}
      >
        {state === 'success' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="w-32 h-32"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z" />
            <line x1="9" x2="9.01" y1="9" y2="9" />
            <line x1="15" x2="15.01" y1="9" y2="9" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="w-32 h-32"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
            <line x1="9" x2="9.01" y1="9" y2="9" />
            <line x1="15" x2="15.01" y1="9" y2="9" />
          </svg>
        )}
      </div>
      <h2 className="font-bold text-xl">
        {state === 'success' ? 'yay!!' : 'oh snap'}
      </h2>
      <p className="text-base text-center">
        {state === 'success'
          ? `You have successfully eaten everyone's bacon.`
          : `Something went terribly wrong.`}
      </p>
      <button
        className={`uppercase font-bold ${state === 'success' ? 'text-green-500' : 'text-red-500'} ${state === 'success' ? 'hover:text-green-800' : 'hover:text-red-800'}`}
      >
        {state === 'success' ? 'ok cool' : 'try again'}
      </button>
    </div>
  )
}

FlashMessage.propTypes = {}

export default FlashMessage
