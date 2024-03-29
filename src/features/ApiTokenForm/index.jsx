import React from 'react'
import PropTypes from 'prop-types'
import ResponsiveTextarea from '../../components/ResponsiveTextarea'

const ApiTokenForm = () => {
  return (
    <div className="flex flex-col bg-slate-50 rounded-xl">
      <div className="w-[600px] p-8 flex gap-6 flex-col relative">
        <div className="absolute right-6 top-6 text-slate-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
          </svg>
        </div>

        <h1 className=" text-xl">Review API Token</h1>

        <div className="bg-slate-200 text-slate-500 font-medium flex gap-2 p-2 rounded-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z"></path>
            </svg>
          </div>
          <div className="">
            <p>
              Here is your new API token. This is the only time the token will
              ever be displayed, so be sure not to lose it! You may revoke the
              token at any time from your API settings.
            </p>
          </div>
        </div>

        <div className="">
          <label htmlFor="">API Token</label>
          <input type="text" placeholder="" />
          <ResponsiveTextarea Placeholder=""></ResponsiveTextarea>
        </div>
      </div>
      <hr />
      <div className="flex gap-4 justify-end p-4">
        <button className="px-5 py-2 bg-slate-50 rounded-md shadow-md text-slate-800 font-medium border hover:bg-slate-200 duration-300">
          Close
        </button>
        <button className="px-5 py-2 bg-slate-800 rounded-md shadow-md text-slate-50 font-medium hover:bg-slate-900 duration-300">
          Copy to clipboard
        </button>
      </div>
    </div>
  )
}

ApiTokenForm.propTypes = {}

export default ApiTokenForm
