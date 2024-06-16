import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

const ResponsiveTextarea = (props) => {
  const { Placeholder } = props

  const textAreaRef = useRef(null)
  const [val, setVal] = useState()
  const handleChange = (e) => {
    setVal(e.target.value)
  }

  useEffect(() => {
    textAreaRef.current.style.height = 'auto'
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px'
  }, [val])

  return (
    <textarea
      className="box-border w-full outline-none resize-none overflow-hidden border text-sm rounded-lg p-4 border-slate-300"
      placeholder={Placeholder}
      name=""
      id=""
      row="2"
      ref={textAreaRef}
      onChange={handleChange}
    ></textarea>
  )
}

ResponsiveTextarea.propTypes = {}

export default ResponsiveTextarea
