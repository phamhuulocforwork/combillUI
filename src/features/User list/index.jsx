import React from 'react'
import PropTypes from 'prop-types'
import Button from './components/Button'
import UserListItem from './components/UserCard'

const UserList = () => {
  const Buttons = [
    {
      id: 1,
      title: 'Reputation',
      isActive: false,
    },
    {
      id: 2,
      title: 'New users',
      isActive: true,
    },
    {
      id: 3,
      title: 'Voters',
      isActive: false,
    },
    {
      id: 4,
      title: 'Editors',
      isActive: false,
    },
    {
      id: 5,
      title: 'Moderators',
      isActive: false,
    },
  ]

  const UserListItems = [
    {
      id: 1,
      imgURL: 'https://placewaifu.com/image/200',
      name: 'Lelah Nichols',
      address: 'Troy, MI',
      tag: [
        {
          id: 1,
          name: 'tag 1',
        },
        {
          id: 2,
          name: 'tag 2',
        },
      ],
    },
    {
      id: 2,
      imgURL: 'https://placewaifu.com/image/200',
      name: 'Jesus Weiss',
      address: 'Fort worth. TX',
      tag: [
        {
          id: 1,
          name: 'tag 1',
        },
        {
          id: 2,
          name: 'tag 2',
        },
      ],
    },
    {
      id: 3,
      imgURL: 'https://placewaifu.com/image/200',
      name: 'Annie Rice',
      address: 'Austin. TX',
      tag: [
        {
          id: 1,
          name: 'tag 1',
        },
        {
          id: 2,
          name: 'tag 2',
        },
      ],
    },
    {
      id: 4,
      imgURL: 'https://placewaifu.com/image/200',
      name: 'Robert Brower',
      address: 'Cincinnati. OH',
      tag: [
        {
          id: 1,
          name: 'tag 1',
        },
        {
          id: 2,
          name: 'tag 2',
        },
      ],
    },
    {
      id: 5,
      imgURL: 'https://placewaifu.com/image/200',
      name: 'Amy Campbell',
      address: 'Warrior. AL',
      tag: [
        {
          id: 1,
          name: 'tag 1',
        },
        {
          id: 2,
          name: 'tag 2',
        },
      ],
    },
    {
      id: 6,
      imgURL: 'https://placewaifu.com/image/200',
      name: 'Anthony S. Morin',
      address: 'Lyndhurst, NJ',
      tag: [
        {
          id: 1,
          name: 'tag 1',
        },
        {
          id: 2,
          name: 'tag 2',
        },
      ],
    },
  ]

  return (
    <div className="container justify-center flex">
      <div className="w-[60rem] bg-slate-50 p-12 rounded-xl text-slate-900">
        <h1 className="text-3xl font-bold mb-4">User</h1>
        <div className="flex mb-6">
          <div className="justify-between flex w-full">
            <div className="border p-4 rounded-md flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
              </svg>
              <input
                type="text"
                placeholder="Search users..."
                className="outline-none bg-transparent block"
              />
            </div>
            <div className="flex gap-2 items-center">
              <Button Buttons={Buttons}></Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          <UserListItem UserListItems={UserListItems}></UserListItem>
        </div>
      </div>
    </div>
  )
}

UserList.propTypes = {}

export default UserList
