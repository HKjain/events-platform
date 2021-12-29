import React from 'react';
import { getAllEvents, getEventById } from '../../data/events';

import EventDetails from '../../components/events/EventDetails';

export default function EventDetail({ event }) {
  return (
    <div>
      <EventDetails event={event} />
    </div>
  );
}

export async function getStaticPaths() {
  const allEvents = getAllEvents();

  const paths = allEvents.map((event) => ({
    params: { eventId: event.eventId },
  }));
  return {
    paths: paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const event = getEventById(eventId);

  if (!event) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      event,
    },
  };
}
