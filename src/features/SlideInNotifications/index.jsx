import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { AnimatePresence, motion } from 'framer-motion'

const SlideInNotifications = () => {
  const [notifications, setNotifications] = useState([])

  const removeNotif = (id) => {
    setNotifications((pv) => pv.filter((n) => n.id !== id))
  }

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => {
          setNotifications((pv) => [generateRandomNotif(), ...pv])
        }}
        className="text-sm text-white bg-indigo-500 hover:bg-indigo-600 active:scale-95 transition-all font-medium px-3 py-2 rounded"
      >
        Add notification
      </button>
      <div className="flex flex-col gap-1 w-72 fixed top-2 right-2 z-50 pointer-events-none">
        <AnimatePresence>
          {notifications.map((n) => (
            <Notification removeNotif={removeNotif} {...n} key={n.id} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

const NOTIFICATION_TTL = 5000

const Notification = ({ text, id, removeNotif }) => {
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif(id)
    }, NOTIFICATION_TTL)

    return () => clearTimeout(timeoutRef)
  }, [])

  return (
    <motion.div
      layout
      initial={{ y: -15, scale: 0.95 }}
      animate={{ y: 0, scale: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="p-2 flex items-start rounded gap-2 text-xs font-medium shadow-lg text-white bg-indigo-500 pointer-events-auto"
    >
      <span>{text}</span>
      <button
        onClick={() => removeNotif(id)}
        className="ml-auto mt-0.5"
      ></button>
    </motion.div>
  )
}

const generateRandomNotif = () => {
  const names = [
    'John Anderson',
    'Emily Peterson',
    'Frank Daniels',
    'Laura Williams',
    'Donald Sanders',
    'Tom Smith',
    'Alexandra Black',
  ]

  const randomIndex = Math.floor(Math.random() * names.length)

  const data = {
    id: Math.random(),
    text: `New notification from ${names[randomIndex]}`,
  }

  return data
}

SlideInNotifications.propTypes = {}

export default SlideInNotifications
