import React, { useState } from 'react';
import RegisteredEvents from './RegisteredEvents';
import Profile from './Profile';

function Dashboard() {
  const menuItems = [
    { id: 1, name: 'Profile', slug: 'profile' },
    { id: 2, name: 'Registered Events', slug: 'registered_events' },
  ];

  const [selectedMenu, setSelectedMenu] = useState('profile');

  const handleChange = (slug) => {
    setSelectedMenu(slug);
  };

  return (
    <div>
      <div class="rounded-lg my-2 mx-2 shadow bg-base-200 drawer drawer-mobile min-h-[87.2vh]">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="flex flex-col items-center bg-white justify-center drawer-content">
          <div className="w-full rounded-lg bg-white">
            {selectedMenu === 'profile' && <Profile />}
            {selectedMenu === 'registered_events' && <RegisteredEvents />}
          </div>
        </div>
        <div class="drawer-side bg-indigo-600">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="flex flex-col overflow-hidden p-4 overflow-y-auto w-64 md:w-80 justify-center text-base-content">
            {menuItems.map((menu) => (
              <li
                className={`rounded-xl hover:scale-105 transition-all ease-in-out hover:bg-indigo-400 cursor-pointer my-1 p-3 text-white ${
                  selectedMenu === menu.slug ? 'bg-indigo-500' : ''
                }`}
                key={menu.id}
                onClick={() => handleChange(menu.slug)}
              >
                <a className="uppercase font-bold">{menu.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <label
        for="my-drawer-2"
        class="mb-4 btn btn-primary drawer-button lg:hidden"
      >
        open menu
      </label> */}
    </div>
  );
}

export default Dashboard;
