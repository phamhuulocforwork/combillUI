import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import ResponsiveTextarea from '../../components/ResponsiveTextarea'

const Feedback = () => {
  const COMMENTS = [
    {
      id: 1,
      name: 'Alexander Koghuashvili',
      avatar: 'https://placewaifu.com/image/200',
      isOnline: true,
      isOpenMenu: false,
      date: '1 hour ago',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      reactions: {
        thumbsUp: 10,
        heart: 1,
      },
    },
    {
      id: 2,
      name: 'John Welsone',
      avatar: 'https://placewaifu.com/image/200',
      isOnline: false,
      isOpenMenu: false,
      date: '1 hour ago',
      text: 'Love this! Huge fan of the low opacity tiles they add such a cool dimension to the design',
      reactions: {
        thumbsUp: 10,
        heart: 1,
      },
    },
  ]

  return (
    <div className="bg-slate-50  text-slate-900 w-[30rem] p-6 rounded-lg">
      <p className="font-semibold text-xl mb-4">Feedback</p>
      <div className="mb-4">
        <ResponsiveTextarea></ResponsiveTextarea>
      </div>
      <div className="flex flex-col">
        <Comment comments={COMMENTS}></Comment>
      </div>
    </div>
  )
}

Feedback.propTypes = {}

export default Feedback
