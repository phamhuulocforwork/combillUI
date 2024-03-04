import React from 'react'
import PropTypes from 'prop-types'

const CollectionList = () => {
  const TAGS = ['Profile', 'New York', 'Relax', 'Person', 'Fashion']

  const COLLECTIONS = ['A', 'B', 'C']

  return (
    <div className="rounded-lg bg-slate-50 p-4 font-gray-900 shadow-lg w-fit text-gray-900">
      <h1 className="text-3xl font-bold mb-4">Popular collections</h1>

      <div className="flex gap-2 flex-wrap">
        {TAGS.map((tag) => (
          <button
            key={tag}
            className="transition duration-500 hover:bg-gray-800 hover:text-slate-50 border-gray-300 border px-4 py-2 rounded-lg font-medium text-sm"
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {COLLECTIONS.map((collection) => (
          <div
            key={collection}
            className="grid grid-cols-1 w-full bg-blue-100 mt-4 p-2 sm:p-4 rounded-2xl"
          >
            <div>
              <img
                src="https://placehold.co/700x400"
                className="w-full rounded-xl aspect-video"
                alt=""
              />
            </div>
            <div className="grid grid-cols-3 gap-2 mt-2">
              <img
                src="https://placehold.co/700x400"
                className="w-full rounded-xl aspect-video"
                alt=""
              />
              <img
                src="https://placehold.co/700x400"
                className="w-full rounded-xl aspect-video"
                alt=""
              />
              <img
                src="https://placehold.co/700x400"
                className="w-full rounded-xl aspect-video"
                alt=""
              />
            </div>
            <div className="flex mt-4 justify-between items-center">
              <p className="font-bold">People</p>
              <div className="flex items-center gap-1 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M15 8V4H5V20H19V8H15ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918ZM11 9.5C11 10.3284 10.3284 11 9.5 11C8.67157 11 8 10.3284 8 9.5C8 8.67157 8.67157 8 9.5 8C10.3284 8 11 8.67157 11 9.5ZM17.5 17L13.5 10L8 17H17.5Z"></path>
                </svg>
                <p className="font-medium text-sm">23k</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

CollectionList.propTypes = {}

export default CollectionList
