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
    <div className="w-96 bg-slate-50 rounded-xl">
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
    </div>
  )
}

DatePicker.propTypes = {}

export default DatePicker
