import React from "react";
import TodoItem from "../TodoItem";

const TodoList = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-blue-300">
        <div className="bg-slate-100 min-w-96 p-4 rounded-lg shadow-md ">
          <h2 className="font-semibold text-xl text-slate-900">My Day</h2>
          <p className="text-md text-slate-700">December 2022</p>
          <TodoItem></TodoItem>
        </div>
      </div>
    </>
  );
};

export default TodoList;
