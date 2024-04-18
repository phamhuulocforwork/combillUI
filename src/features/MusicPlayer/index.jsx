import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { interval } from 'date-fns'

const MusicPlayer = () => {
  const [isPlay, setPlay] = useState(false)

  return (
    <>
      <div className="min-w-72 flex flex-col font-bold text-slate-700">
        <div className="bg-gradient-to-l from-yellow-200 via-green-200 to-green-300 rounded-t-xl">
          <div className="flex justify-between p-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 cursor-pointer"
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
                className="w-6 h-6 cursor-pointer"
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
        </div>

        <div className="w-full bg-white p-4 space-y-6 rounded-b-xl">
          <div className="w-full">
            <div className="flex justify-center items-center flex-1">
              <input type="range" min="0" step="1" className="w-full" />
            </div>
            <div className="w-full flex justify-between text-xs text-slate-700">
              <span>0:16</span>
              <span>3:33</span>
            </div>
          </div>
          <div className="flex justify-between items-center px-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-slate-400 cursor-pointer"
            >
              <path d="M9.195 18.44c1.25.714 2.805-.189 2.805-1.629v-2.34l6.945 3.968c1.25.715 2.805-.188 2.805-1.628V8.69c0-1.44-1.555-2.343-2.805-1.628L12 11.029v-2.34c0-1.44-1.555-2.343-2.805-1.628l-7.108 4.061c-1.26.72-1.26 2.536 0 3.256l7.108 4.061Z" />
            </svg>

            <div onClick={() => setPlay((prev) => !prev)}>
              {(isPlay && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12 cursor-pointer"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              )) || (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12 cursor-pointer"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-slate-400 cursor-pointer"
            >
              <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

MusicPlayer.propTypes = {}

export default MusicPlayer
