import React from 'react';
import Head from 'next/head';
import Dashboard from '../../../components/auth/Dashboard';
import Profile from '../../../components/auth/public/Profile';
import RegisteredEvents from '../../../components/auth/public/RegisteredEvents';

function PublicAuthHome() {
  const userName = 'Harsh Kawadia';

  const menuItems = [
    { id: 1, name: 'Profile', slug: 'profile', component: <Profile /> },
    {
      id: 2,
      name: 'Registered Events',
      slug: 'registered_events',
      component: <RegisteredEvents />,
    },
  ];

  return (
    <div>
      <Head>
        <title>{`Welcome!, ${userName}`}</title>
      </Head>
      <Dashboard menuItems={menuItems} />
    </div>
  );
}

export default PublicAuthHome;
