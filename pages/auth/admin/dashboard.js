import React from 'react';
import Head from 'next/head';

import Authorize from '../../../components/auth/admin/Authorize';
import Dashboard from '../../../components/auth/Dashboard';

function AdminDashboard() {
  const menuItems = [
    {
      id: 1,
      name: 'Authorize Institutes',
      slug: 'institute_auth',
      component: <Authorize />,
    },
  ];

  return (
    <>
      <Head>
        <title>Welcome to Admin Panel</title>
      </Head>
      <Dashboard menuItems={menuItems} />
    </>
  );
}

export default AdminDashboard;
