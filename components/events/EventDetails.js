import React from 'react';

import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import SchoolIcon from '@mui/icons-material/School';
import DevicesIcon from '@mui/icons-material/Devices';

const month = [
  'Jan',
  'Feb',
  'March',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

function EventDetails({ event }) {
  const startDate = new Date(event.startDate);
  const readableStart =
    startDate.getDate().toString() +
    ' ' +
    month[startDate.getMonth()] +
    ' ' +
    startDate.getFullYear().toString();
  const endDate = new Date(event.endDate);
  const readableEnd =
    endDate.getDate().toString() +
    ' ' +
    month[endDate.getMonth()] +
    ' ' +
    endDate.getFullYear().toString();
  return (
    <div>
      <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
          <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
            <h1 className="mt-1 uppercase font-montserrat text-lg font-semibold text-white sm:text-indigo-600 md:text-2xl ">
              {event.eventName}
            </h1>
            <p className="text-sm leading-4 font-medium text-white sm:text-gray-500 ">
              {event.institute}
            </p>
          </div>
          <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
            <img
              src="/beach-house.jpg"
              alt=""
              className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
              loading="lazy"
            />
            <img
              src="/beach-house-interior-1.jpg"
              alt=""
              className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32"
              loading="lazy"
            />
            <img
              src="/beach-house-interior-2.jpg"
              alt=""
              className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32"
              loading="lazy"
            />
          </div>

          <dl className="mt-4 text-xs font-medium flex flex-col items-start gap-2 row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
            <div className="flex w-80 justify-between">
              <dd className="text-indigo-600 gap-1 flex items-center ">
                <EventIcon />
                <span>
                  <span>{readableStart}</span> &nbsp; to &nbsp;
                  <span>{readableEnd}</span>
                </span>
              </dd>

              <dd className="text-indigo-600 flex gap-1 items-center">
                <LocationOnIcon />
                <span>{event.state}</span>
              </dd>
            </div>
            <div className="flex w-80 justify-between">
              <dd className="text-indigo-600 gap-1 flex items-center">
                <AlternateEmailIcon />
                <span>{event.email}</span>
              </dd>
            </div>
            <div className="flex w-80 justify-between">
              <dd className="text-indigo-600 gap-1 flex items-center">
                <SchoolIcon />
                <span>{event.degree}</span>
              </dd>
              <dd className="text-indigo-600 gap-1 flex items-center">
                <DevicesIcon />
                <span>{event.modeOfConduct}</span>
              </dd>
            </div>
          </dl>
          <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
            <button
              type="button"
              className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
            >
              Register
            </button>
          </div>
          <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 ">
            {event.description}
          </p>
        </div>
      </main>
    </div>
  );
}

export default EventDetails;
