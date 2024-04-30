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

const CalendarTodoList = () => {
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
    <div className="text-stale-800 w-96 rounded-xl bg-slate-50 p-6">
      <div className="mb-4 flex justify-between">
        <div className="flex items-center justify-between text-2xl font-semibold text-slate-800">
          <p>Calendar</p>
        </div>
      </div>
      <div className="grid pb-2">
        <div className="grid grid-cols-7 gap-1">
          {WEEKDAYS.map((day, index) => (
            <div
              key={index}
              className="flex h-10 w-10 cursor-default items-center justify-center rounded-md text-center text-sm font-semibold text-slate-500"
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
              className="flex h-10 w-10 cursor-default items-center justify-center rounded-md text-center text-sm font-semibold text-slate-500"
              onMouseDown={(e) => e.preventDefault()}
            >
              <span
                className={`${isToday(day) ? 'flex h-8 w-9 items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-blue-500 text-slate-50' : ''}`}
              >
                {format(day, 'd')}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <p className="font-semibold text-slate-800">
            {format(currentDate, 'MMMM')} {currentDate.getFullYear()}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-slate-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-slate-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

CalendarTodoList.propTypes = {}

export default CalendarTodoList
