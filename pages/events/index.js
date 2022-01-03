import React, { useState } from 'react';
import Head from 'next/head';

import Filter from '../../components/events/Filter';
import EventCard from '../../components/ui/EventCard';

function Events({ allEvents, institutes }) {
  const [events, setEvents] = useState(allEvents);

  return (
    <>
      <Head>
        <title>Events</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col px-3 mb-3 gap-2 md:flex-row w-full">
        {/* Filter */}
        <div className="md:w-1/4 z-10 p-2 rounded-xl sticky top-16 md:top-20 h-fit min-w-fit max-w-full bg-white">
          <Filter institutes={institutes} />
        </div>

        {/* List of Events */}
        <div className="md:mt-4 rounded-md w-full md:grow-1">
          {/* content */}
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {events.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const resp = await fetch(`${process.env.base_url}/api/events`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const d = await resp.json();
  const events = d.events;

  const response = await fetch(`${process.env.base_url}/api/institutes`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  const institutes = data.institutes;

  return {
    props: {
      allEvents: events,
      institutes,
    },
  };
}

export default Events;
