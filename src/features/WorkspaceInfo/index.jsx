import React from 'react';
import TagList from './components/taglist';
import Member from './components/Member';

export default function WorkspaceInfo() {
  const Members = [
    {
      id: 1,
      name: 'Edward Smith',
      username: 'ediesmith',
      status: 'online',
    },
    {
      id: 2,
      name: 'Michael de Santa',
      username: 'michaell',
      status: 'online',
    },
    {
      id: 3,
      name: 'Samantha Edwards',
      username: 'amantha9',
      status: 'offline',
    },
    {
      id: 4,
      name: 'Edward Jones',
      username: 'edwardjones',
      status: 'away',
    },
    {
      id: 5,
      name: 'Adam Taylor',
      username: 'damt93',
      status: 'offline',
    },
  ];

  return (
    <>
      <div className='relative flex w-[30rem] flex-col rounded-xl bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-50'>
        <div className='flex p-6'>
          <div className='absolute right-4 top-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
              />
            </svg>
          </div>
          <div className='w-full'>
            <span className='text-xl font-semibold'>Workspace Info</span>
          </div>
        </div>
        <hr className='h-px w-full border-0 bg-slate-200 dark:bg-slate-600' />
        <div className='flex flex-col gap-8 p-6'>
          <div className=''>
            <TagList></TagList>
          </div>

          <div className='flex gap-4 rounded-xl border border-slate-400 p-2 dark:border-slate-700'>
            <div className='cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                />
              </svg>
            </div>
            <input
              className='w-full bg-transparent outline-none'
              type='text'
              placeholder='Find members'
            />
          </div>

          <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-start gap-4'>
              <div className='rounded-full p-3 outline-dashed outline-2 outline-slate-400 dark:outline-slate-700'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='text-slat h-6 w-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 4.5v15m7.5-7.5h-15'
                  />
                </svg>
              </div>
              <span className='font-medium'>Add a new member</span>
            </div>
            {Members.map((mem) => (
              <Member
                key={mem.id}
                name={mem.name}
                username={mem.username}
                status={mem.status}
              ></Member>
            ))}
          </div>
        </div>
        <hr className='h-px w-full border-0 bg-slate-200 dark:bg-slate-600' />
        <div className='flex flex-col gap-4 p-6'>
          <button className='w-full rounded-lg bg-blue-400 py-2 font-semibold tracking-wide text-white'>
            Save
          </button>
          <button className='w-full rounded-lg bg-transparent py-2 font-semibold tracking-wide text-slate-800 dark:text-slate-50'>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
