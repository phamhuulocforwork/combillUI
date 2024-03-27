import React from 'react';
import PropTypes from 'prop-types';
import SubMenu from './SubMenu';

const Dropdown = () => {
  const MENUS = [
    {
      id: 1,
      icon: (
        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5Z"></path></svg>
      ),
      title: 'Resources',
      subMenus: [
        {
          id: 1,
          title: 'Design'
        },
        {
          id: 2,
          title: 'Development'
        },
      ]
    },
    {
      id: 2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 10C14.2091 10 16 8.20914 16 6 16 3.79086 14.2091 2 12 2 9.79086 2 8 3.79086 8 6 8 8.20914 9.79086 10 12 10ZM5.5 13C6.88071 13 8 11.8807 8 10.5 8 9.11929 6.88071 8 5.5 8 4.11929 8 3 9.11929 3 10.5 3 11.8807 4.11929 13 5.5 13ZM21 10.5C21 11.8807 19.8807 13 18.5 13 17.1193 13 16 11.8807 16 10.5 16 9.11929 17.1193 8 18.5 8 19.8807 8 21 9.11929 21 10.5ZM12 11C14.7614 11 17 13.2386 17 16V22H7V16C7 13.2386 9.23858 11 12 11ZM5 15.9999C5 15.307 5.10067 14.6376 5.28818 14.0056L5.11864 14.0204C3.36503 14.2104 2 15.6958 2 17.4999V21.9999H5V15.9999ZM22 21.9999V17.4999C22 15.6378 20.5459 14.1153 18.7118 14.0056 18.8993 14.6376 19 15.307 19 15.9999V21.9999H22Z"></path></svg>
      ),
      title: 'Community',
      subMenus: [
        {
          id: 1,
          title: 'Design'
        },
        {
          id: 2,
          title: 'Development'
        },
      ]
    },
  ]

  return (
    <div>
      <ul className='bg-slate-50 rounded-xl p-2 flex flex-col text-slate-600 font-medium w-48'>
        {MENUS.map((menu) => (
          <>
            <div key={menu.id} className='w-full border-b-2 border-slate-50 hover:border-slate-300 pb-1 relative'>
              <li className='w-full flex justify-start items-center gap-2 p-2 bg-slate-50 hover:bg-slate-300 cursor-pointer rounded-md'>
                  <span className='w-4 h-4'>{menu.icon}</span>
                  <span>{menu.title}</span>
                  <div>
                    
                    <SubMenu subMenus={menu.subMenus}></SubMenu>
                  </div>
              </li>
            </div>
          </>
        ))}
      </ul>
    </div>
  );
};


Dropdown.propTypes = {

};


export default Dropdown;
