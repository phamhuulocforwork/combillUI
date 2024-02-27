import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = (props) => {
  const { todoItems } = props

  return (
    <>
      {todoItems.map((todo) => (
        <div key={todo.id} className="my-10 flex items-center">
          <div className="p-4">
            <input
              type="checkbox"
              className="border-2 border-gray-300 h-4 w-4 mr-2"
            />
          </div>
          <div>
            <p className="font-semibold text-slate-900 text-lg">{todo.title}</p>
            <div className="text-slate-700 text-base">
              <div className="inline-flex gap-1">
                <p>{todo.tag}</p>
                <p>•</p>
                <p className="text-blue-700 font-medium">Today</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

TodoItem.propTypes = {
  todoItems: PropTypes.array,
}

TodoItem.defaultProps = {
  todoItems: [],
}

export default TodoItem
