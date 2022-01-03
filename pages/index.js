import Head from 'next/head';

import Hero from '../components/ui/Hero';
import Carousel from '../components/layout/Carousel';
import Social from '../components/layout/Social';
import Newsletter from '../components/ui/Newsletter';

export default function Home({ ongoingEvents, upcomingEvents }) {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <Hero />
      {/* Ongoing Events */}
      <Carousel
        key="ongoing_events"
        type="Ongoing Events"
        events={ongoingEvents}
      />

      {/* Upcoming Events */}
      <Carousel
        key="upcoming_events"
        type="Upcoming Events"
        events={upcomingEvents}
      />

      {/* Newsletter Section */}
      <Newsletter />

      {/* Social */}
      <Social />
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
  const ongoingEvents = d.onGoingEvents;
  const upcomingEvents = d.upComingEvents;
  return {
    props: {
      ongoingEvents,
      upcomingEvents,
    },
  };
}
