import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
let interval
const VideoPlayer = () => {
  const iconStyle = 'text-slate-50 w-8 h-8 cursor-pointer'

  const rangevalValue = 3373

  const [isPlay, setPlay] = useState(false)

  const secondsToHHMMSS = (seconds) => {
    const date = new Date(null)
    date.setSeconds(seconds)
    return date.toISOString().slice(11, 19)
  }

  useEffect(() => {
    if (isPlay) {
      interval = setInterval(() => {
        setRangeval((prev) => prev + 1)
      }, 1000)
    } else {
      clearInterval(interval)
    }
    return () => {
      clearInterval(interval)
    }
  }, [isPlay])

  const [rangeval, setRangeval] = useState(0)

  return (
    <div className="w-[48rem] h-[28rem] rounded-3xl bg-gray-700 relative flex flex-col p-4">
      <div className="absolute top-4 right-4">
        <div className="bg-slate-800 rounded-2xl p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className={iconStyle}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>

      <div className="mt-auto bg-slate-950 w-full rounded-2xl p-4 flex items-center justify-between gap-4">
        <div onClick={() => setPlay((prev) => !prev)}>
          {(isPlay && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={4}
              stroke="currentColor"
              className={iconStyle}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 5.25v13.5m-7.5-13.5v13.5"
              />
            </svg>
          )) || (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={iconStyle}
            >
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>

        <div className="flex justify-center items-center flex-1">
          <input
            type="range"
            min="0"
            max={rangevalValue}
            value={rangeval}
            step="1"
            className="w-full"
            onChange={(event) => setRangeval(parseInt(event.target.value))}
          />
        </div>

        <div className="flex w-48 justify-center px-1">
          <p className="text-slate-50 flex">
            {secondsToHHMMSS(rangeval)}&nbsp;
            <p className="text-slate-400">/ {secondsToHHMMSS(rangevalValue)}</p>
          </p>
        </div>

        <div className="flex gap-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={iconStyle}
            >
              <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
              <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={iconStyle}
            >
              <path d="M6 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 1 1 1.5 0v7.5A.75.75 0 0 1 6 12ZM18 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 18 12ZM6.75 20.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM18.75 18.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0ZM12.75 5.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM12 21a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 12 21ZM3.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0ZM12 11.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM15.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0Z" />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              strokeWidth={3}
              className={iconStyle}
            >
              <path d="M8 3V5H4V9H2V3H8ZM2 21V15H4V19H8V21H2ZM22 21H16V19H20V15H22V21ZM22 9H20V5H16V3H22V9Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

VideoPlayer.propTypes = {}

export default VideoPlayer
