import React from 'react'
import PropTypes from 'prop-types'

const JobItems = (props) => {
  const { jobList } = props

  return (
    <>
      {jobList.map((item) => (
        <div
          key={item.id}
          className="col-span-1 w-full p-6 bg-slate-50 rounded-lg shadow-xl text-slate-900"
        >
          <div key={item.id} className="flex gap-4 items-center justify-center">
            <div className="bg-gradient-to-r from-[#beccfb] to-[#feced6] p-2 w-fit rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8"
              >
                <path d="M6.93912 14.0328C6.7072 14.6563 6.51032 15.2331 6.33421 15.8155C7.29345 15.1189 8.43544 14.6767 9.75193 14.5121C12.2652 14.198 14.4976 12.5385 15.6279 10.4537L14.1721 8.99888L15.5848 7.58417C15.9185 7.25004 16.2521 6.91614 16.5858 6.58248C17.0151 6.15312 17.5 5.35849 18.0129 4.2149C12.4197 5.08182 8.99484 8.50647 6.93912 14.0328ZM17 8.99739L18 9.99669C17 12.9967 14 15.9967 10 16.4967C7.33146 16.8303 5.66421 18.6636 4.99824 21.9967H3C4 15.9967 6 1.99669 21 1.99669C20.0009 4.99402 19.0018 6.99313 18.0027 7.99402C17.6662 8.33049 17.3331 8.66382 17 8.99739Z"></path>
              </svg>
            </div>
            <p className="font-medium">{item.name}</p>
          </div>
          <button className="mt-6 transition duration-500 hover:bg-[#1e2246] hover:text-slate-50 border-gray-300 border px-8 py-2 rounded-lg font-medium text-sm">
            {item.positions} open positions
          </button>
        </div>
      ))}
    </>
  )
}

JobItems.propTypes = {
  jobList: PropTypes.array,
}

JobItems.default = {
  jobList: [],
}

export default JobItems
