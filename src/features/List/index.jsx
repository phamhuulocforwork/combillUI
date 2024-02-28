import React from 'react'

const List = () => {
  return (
    <div className="w-[636px] bg-slate-50 p-16 rounded-3xl">
      <div className=" flex items-center justify-between">
        <div className="flex gap-3 border p-2 border-gray-400 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            className="w-[162px] border-none outline-none bg-transparent"
          />
        </div>

        <div className="flex items-center gap-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
          <img
            src="https://placewaifu.com/image/200"
            alt=""
            className="h-12 w-12 rounded-full"
          />
        </div>
      </div>

      <div className="">
        <p className="font-semibold text-2xl my-4 gap-2">Accounts</p>
        <div className=" hover:bg-neutral-200 cursor-pointer flex justify-between items-center rounded-2xl">
          <div className="items-center flex p-4 gap-4">
            <img
              src="https://placewaifu.com/image/200"
              alt=""
              className="h-12 w-12 rounded-full"
            />
            <div className="flex flex-col">
              <p className="font-bold">Dropbox</p>
              <p className="text-xs">dropbox.com</p>
            </div>
          </div>
          <div>
            <p className="text-xs font-medium">24 accounts</p>
          </div>
          <div className="p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 bg-white rounded-full"
            >
              <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
            </svg>
          </div>
        </div>
        <div className=" hover:bg-neutral-200 cursor-pointer flex justify-between items-center rounded-2xl">
          <div className="items-center flex p-4 gap-4">
            <img
              src="https://placewaifu.com/image/200"
              alt=""
              className="h-12 w-12 rounded-full"
            />
            <div className="flex flex-col">
              <p className="font-bold">Dropbox</p>
              <p className="text-xs">dropbox.com</p>
            </div>
          </div>
          <div>
            <p className="text-xs font-medium">24 accounts</p>
          </div>
          <div className="p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 bg-white rounded-full"
            >
              <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
            </svg>
          </div>
        </div>
        <div className=" hover:bg-neutral-200 cursor-pointer flex justify-between items-center rounded-2xl">
          <div className="items-center flex p-4 gap-4">
            <img
              src="https://placewaifu.com/image/200"
              alt=""
              className="h-12 w-12 rounded-full"
            />
            <div className="flex flex-col">
              <p className="font-bold">Dropbox</p>
              <p className="text-xs">dropbox.com</p>
            </div>
          </div>
          <div>
            <p className="text-xs font-medium">24 accounts</p>
          </div>
          <div className="p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 bg-white rounded-full"
            >
              <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
