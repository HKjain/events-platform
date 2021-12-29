import Head from 'next/head';

import Hero from '../components/ui/Hero';
import Carousel from '../components/layout/Carousel';
import Social from '../components/layout/Social';
import Newsletter from '../components/ui/Newsletter';

import { getOngoingEvents, getUpcomingEvents } from '../data/events';

export default function Home() {
  const ongoingEvents = getOngoingEvents();
  const upcomingEvents = getUpcomingEvents();

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
