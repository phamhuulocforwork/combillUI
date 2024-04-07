import React from 'react'
import PropTypes from 'prop-types'

const PopupNotifications = () => {
  const Notification = [
    {
      id: 1,
      type: 'update',
      timeStamp: '1 hour ago',
      content: 'System update available. Restart to apply changes.',
      color: 'bg-orange-500',
    },
    {
      id: 2,
      type: 'message',
      timeStamp: '1 hour ago',
      content: 'You have a new message.',
      color: 'bg-violet-500',
    },
    {
      id: 3,
      type: 'reminder',
      timeStamp: '1 hour ago',
      content: "Don't forget to submit your report.",
      color: 'bg-green-500',
    },
  ]

  return (
    <div className="flex flex-col gap-6">
      {Notification.map((noti) => (
        <div
          key={noti.id}
          className="bg-slate-50 rounded-xl w-80 h-full p-4 text-slate-800 font-medium"
        >
          <p>{noti.content}</p>
          <span className="text-slate-400 text-sm font-light">
            {noti.timeStamp}
          </span>
          <div className="flex gap-2 mt-6 text-base">
            <button className="px-4 py-1/2 rounded-md border border-slate-400 tracking-tighter hover:bg-slate-200 transition-all duration-300">
              {noti.type === 'update' && 'Later'}
              {noti.type === 'message' && 'Dismiss'}
              {noti.type === 'reminder' && 'Snooze'}
            </button>
            <button
              className={`px-4 py-1/2 rounded-md ${noti.color} text-slate-50`}
            >
              {noti.type === 'update' && 'Update Now'}
              {noti.type === 'message' && 'Open'}
              {noti.type === 'reminder' && 'View'}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

PopupNotifications.propTypes = {}

export default PopupNotifications
