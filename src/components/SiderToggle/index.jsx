import { motion } from 'framer-motion'
import { useState } from 'react'

const TOGGLE_CLASSES =
  'text-xs font-semibold flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10'

const SliderToggle = ({ sliderName }) => {
  const [selected, setSelected] = useState(true)

  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === true ? 'text-slate-700' : 'text-slate-700'
        }`}
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => {
          setSelected((prev) => !prev)
        }}
      >
        <span className="relative z-10">{sliderName[0]}</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === false ? 'text-slate-700' : 'text-slate-700'
        }`}
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => {
          setSelected((prev) => !prev)
        }}
      >
        <span className="relative z-10">{sliderName[1]}</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === false ? 'justify-end' : 'justify-start'
        }`}
      >
        <motion.span
          layout
          transition={{ type: 'spring', damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-slate-50"
        />
      </div>
    </div>
  )
}

export default SliderToggle
