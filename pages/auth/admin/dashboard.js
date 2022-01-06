import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';
import { connectToDatabase } from '../../../util/mongodb';

import Loading from '../../../components/ui/Loading';
import Authorize from '../../../components/auth/admin/Authorize';
import Dashboard from '../../../components/auth/Dashboard';

function AdminDashboard({ institutes }) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    getSession().then((session) => {
      if (session && session.user?.name?.is_admin) {
        setIsLoading(false);
      } else if (session && !session.user?.name?.is_admin) {
        router.replace('/');
      } else {
        router.replace('/auth/admin');
      }
    });
  }, [router]);

  const menuItems = [
    {
      id: 1,
      name: 'Authorize Institutes',
      slug: 'institute_auth',
      component: <Authorize institutes={institutes} />,
    },
  ];

  if (isLoading) return <Loading />;

  return (
    <>
      <Head>
        <title>Welcome to Admin Panel</title>
      </Head>
      <Dashboard menuItems={menuItems} />
    </>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const inst = await db
    .collection('users')
    .find({ is_institute: true })
    .toArray();
  let institutes = [];
  for (let i = 0; i < inst.length; i++) {
    institutes.push({
      id: inst[i]._id.toString(),
      email: inst[i].email,
      isActive: true,
      instituteName: inst[i].institute_name,
    });
  }

  return {
    props: {
      institutes,
    },
  };
}

export default AdminDashboard;
