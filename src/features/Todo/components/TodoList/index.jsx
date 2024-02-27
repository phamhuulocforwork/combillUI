import React from 'react'
import TodoItem from '../TodoItem'

const TodoList = () => {
  const todoList = {
    title: 'My Day',
    date: 'December 2022',
    todoItems: [
      {
        id: 1,
        title: '🧑‍💻 Promotion banner',
        tag: 'GoPay',
        date: 'Today',
      },
      {
        id: 2,
        title: '💪 Daily workout',
        tag: 'Personal',
        date: 'Today',
      },
      {
        id: 3,
        title: '🎥 Edit video for social media',
        tag: 'Personal',
        date: 'Wednesday, Dec 28',
      },
    ],
  }

  return (
    <>
      <div className="flex items-center justify-center bg-blue-300 h-screen">
        <div className="bg-slate-100 min-w-96 py-6 px-8 rounded-lg shadow-md ">
          <h2 className="font-semibold text-xl text-slate-900">My Day</h2>
          <p className="text-md text-slate-700">December 2022</p>
          <TodoItem todoItems={todoList.todoItems}></TodoItem>
        </div>
      </div>
    </>
  )
}

export default TodoList
