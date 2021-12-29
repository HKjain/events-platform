import React from 'react';
import Head from 'next/head';
import Dashboard from '../../../components/auth/public/Dashboard';

function PublicAuthHome() {
  const userName = 'Harsh Kawadia';
  return (
    <div>
      <Head>
        <title>{`Welcome!, ${userName}`}</title>
      </Head>
      <Dashboard />
    </div>
  );
}

export default PublicAuthHome;
