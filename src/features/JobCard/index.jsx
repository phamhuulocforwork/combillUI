import React from 'react'
import JobItems from './components/JobItems'

const JobCard = () => {
  const jobList = [
    {
      id: 1,
      name: 'Design',
      positions: 4,
    },
    {
      id: 2,
      name: 'Engineering',
      positions: 8,
    },
    {
      id: 3,
      name: 'Operations',
      positions: 2,
    },
    {
      id: 4,
      name: 'People',
      positions: 6,
    },
    {
      id: 5,
      name: 'Sales',
      positions: 7,
    },
    {
      id: 6,
      name: 'University',
      positions: 8,
    },
  ]

  return (
    <div className="w-full min-h-screen h-fit bg-[#f3f6ff]">
      <div className="flex flex-col justify-center h-screen items-center">
        <h1 className="text-2xl font-bold">Open positions</h1>
        <div className="grid grid-cols-3 grid-rows-2 mt-8 gap-4">
          <JobItems jobList={jobList}></JobItems>
        </div>
      </div>
    </div>
  )
}

export default JobCard
