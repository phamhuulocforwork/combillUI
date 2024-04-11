import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ cards }) => {
  return (
    <>
      {cards.map((card) => (
        <div
          key={card.id}
          className="group max-w-96 bg-gray-900 border-slate-500 hover:bg-slate-50 hover:border-slate-50 hover:text-slate-800 border p-4 flex flex-col gap-4 hover:gap-5 hover:py-5  rounded-lg transition-all duration-300"
        >
          <h2 className="text-base">{card.name}</h2>
          <span className="text-4xl font-bold">{card.price}</span>
          <p className="font-medium text-slate-500">{card.describe}</p>
          <ul>
            {card.featureList.map((feature) => (
              <li
                key={feature.id}
                className="border-b border-slate-700 group-hover:border-slate-300 p-2 flex items-center gap-2 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
                </svg>
                <span>{feature.title}</span>
              </li>
            ))}
          </ul>
          <button className="py-2 w-full rounded-md bg-transparent border border-slate-500 group-hover:bg-blue-500 group-hover:border-transparent group-hover:text-slate-50 font-bold transition-all duration-300">
            Get started
          </button>
        </div>
      ))}
    </>
  )
}

Card.propTypes = {}

export default Card
