import React from 'react'
import PropTypes from 'prop-types'

const MusicPlayer = () => {
  return (
    <>
      <div className="min-w-72 flex flex-col gap-8 bg-gradient-to-l from-yellow-200 via-green-200 to-green-300 font-bold text-slate-700">
        <div className="flex justify-between p-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
            </svg>
          </div>
          <span>Collection</span>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
            </svg>
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center p-4">
          <img
            className="rounded-full w-2/3 shadow-xl"
            src="https://placewaifu.com/image/200"
            alt=""
          />
          <span className="text-lg">ASTRONAUT</span>
          <span className="opacity-45">NASA</span>
        </div>

        <div className="w-full bg-white p-4"></div>
      </div>
    </>
  )
}

MusicPlayer.propTypes = {}

export default MusicPlayer
