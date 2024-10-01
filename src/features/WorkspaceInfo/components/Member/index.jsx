import React from 'react';

export default function Member({ name, username, status }) {
  return (
    <>
      <div className='flex items-center justify-start gap-4'>
        <div className='relative'>
          <img
            className='h-12 w-12 rounded-full'
            src='https://placewaifu.com/image/200'
            alt=''
          />
          <div
            className={`absolute bottom-0 right-0 h-3 w-3 rounded-full outline outline-2 outline-white ${status === 'online' ? 'bg-green-500' : status === 'offline' ? 'bg-slate-500' : 'bg-yellow-500'} `}
          ></div>
        </div>
        <div className='flex flex-col justify-center'>
          <span>{name}</span>
          <span className='text-sm text-slate-400'>@{username}</span>
        </div>
      </div>
    </>
  );
}
