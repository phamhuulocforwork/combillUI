import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isToday,
  startOfMonth,
} from 'date-fns'

const DatePicker = () => {
  const WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

  const [currentDate, setCurrentDate] = useState(new Date())

  const firstDayOfMonth = startOfMonth(currentDate)
  const lastDayOfMonth = endOfMonth(currentDate)

  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  })

  const startingDayIndex = getDay(firstDayOfMonth)

  return (
    <div className="w-96 bg-slate-50 rounded-xl p-6 text-stale-800">
      <div className="flex justify-between mb-4">
        <div className="flex gap-1">
          <div className="p-2 rounded-xl border-2 cursor-pointer hover:bg-slate-200 text-slate-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M4.83578 12L11.0429 18.2071L12.4571 16.7929L7.66421 12L12.4571 7.20712L11.0429 5.79291L4.83578 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path>
            </svg>
          </div>
          <div className="p-2 rounded-xl border-2 cursor-pointer hover:bg-slate-200 text-slate-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
            </svg>
          </div>
        </div>
        <div className="flex justify-center items-center font-semibold">
          <p>
            {format(currentDate, 'MMMM')} {currentDate.getFullYear()}
          </p>
        </div>
        <div className="flex gap-1">
          <div className="p-2 rounded-xl border-2 cursor-pointer hover:bg-slate-200 text-slate-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
            </svg>
          </div>
          <div className="p-2 rounded-xl border-2 cursor-pointer hover:bg-slate-200 text-slate-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="grid pb-2">
        <div className="grid grid-cols-7 gap-1">
          {WEEKDAYS.map((day, index) => (
            <div
              key={index}
              className="text-slate-500 text-center text-sm font-semibold w-10 h-10 flex justify-center items-center rounded-md cursor-default"
              onMouseDown={(e) => e.preventDefault()}
            >
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {Array.from({ length: startingDayIndex - 1 }).map((_, index) => {
            return (
              <div
                key={`empty-${index}`}
                onMouseDown={(e) => e.preventDefault()}
              ></div>
            )
          })}
          {daysInMonth.map((day, index) => (
            <div
              key={index}
              className="text-slate-500 text-center text-sm font-semibold w-10 h-10 flex justify-center items-center rounded-md cursor-default"
              onMouseDown={(e) => e.preventDefault()}
            >
              <span
                className={`${isToday(day) ? 'bg-slate-700 w-8 h-8 rounded-full text-slate-50 flex items-center justify-center' : ''}`}
              >
                {format(day, 'd')}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between gap-1">
        <button className="px-4 py-2 bg-slate-50 border-2 rounded-lg flex-1">
          Cancel
        </button>
        <button className="px-4 py-2 bg-slate-800 border-2 rounded-lg flex-1 text-slate-50">
          Apply
        </button>
      </div>
    </div>
  )
}

DatePicker.propTypes = {}

export default DatePicker
