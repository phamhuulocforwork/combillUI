import React from 'react'
import PropTypes from 'prop-types'

const DearName = (props) => {
  const { dearNames } = props

  return (
    <>
      <div className="flex items-center gap-2 flex-wrap my-6">
        <p className="font-mediums text-slate-50">to: </p>
        {dearNames.map((dearName) => (
          <>
            <div
              key={dearName.id}
              className="rounded-full flex items-center bg-slate-500 pr-2 p-1 gap-2 cursor-pointer"
            >
              <img
                className="w-6 h-6 rounded-full"
                src={dearName.img_url}
                alt=""
              />
              <p className="text-sm font-semibold hover:text-gray-900">
                {dearName.name}
              </p>
              <div className="text-gray-400 hover:text-gray-500 cursor-pointer hover:bg-gray-300 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
                </svg>
              </div>
            </div>
          </>
        ))}
        <div className="text-gray-300 hover:text-gray-200 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
          </svg>
        </div>
      </div>
    </>
  )
}

DearName.propTypes = {
  dearName: PropTypes.array,
}

DearName.default = {
  dearName: [],
}

export default DearName
