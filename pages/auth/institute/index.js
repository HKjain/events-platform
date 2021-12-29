import React from 'react';
import Head from 'next/head';

import AddEvent from '../../../components/auth/institute/AddEvent';
import ListedEvents from '../../../components/auth/institute/ListedEvents';
import RegisteredStudents from '../../../components/auth/institute/RegisteredStudents';

import Dashboard from '../../../components/auth/Dashboard';

function InstituteHome() {
  const username = 'Harsh Kawadia';
  const menuItems = [
    { id: 1, name: 'Add Event', slug: 'add_event', component: <AddEvent /> },
    {
      id: 2,
      name: 'Listed Events',
      slug: 'listed_events',
      component: <ListedEvents />,
    },
    {
      id: 3,
      name: 'Registered Students',
      slug: 'registered_students',
      component: <RegisteredStudents />,
    },
  ];

  return (
    <div>
      <Head>
        <title>Welcome!, {username}</title>
      </Head>
      <Dashboard menuItems={menuItems} />
    </div>
  );
}

export default InstituteHome;
