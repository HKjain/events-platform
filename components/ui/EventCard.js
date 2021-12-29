import React from 'react';
import Image from 'next/image';

import ev from '../../public/images/events.jpg';
import CollegeIcon from '../icons/CollegeIcon';

function EventCard({ event }) {
  return (
    <div>
      <div className="bg-indigo-600 duration-500 hover:scale-105 hover:cursor-pointer transition-all ease-in-out p-2 w-52 mx-auto drop-shadow-4xl rounded-lg my-2">
        <div className="flex flex-col justify-center items-center">
          {/* Image */}
          <div className="w-28 rounded-lg overflow-hidden drop-shadow-5xl relative h-28">
            <Image src={ev} layout="fill" objectFit="cover" />
          </div>
          {/* Details */}
          <div className="w-full mt-2 mb-1 text-white flex flex-col p-2">
            <h2 className="font-montserrat text-center text-lg uppercase">
              {event.eventName}
            </h2>
            <h2 className="flex space-x-1 space-y-2 font-montserrat items-center text-xs font-thin">
              <span>
                <CollegeIcon className="h-5 w-5" />
              </span>
              <span>{event.institute}</span>
            </h2>
            {/* View Details */}
            <button className="active:focus:scale-90 duration-300 transition-all ease-in-out capitalize border-0 font-bold text-xs btn-sm mt-2 hover:bg-indigo-900 hover:text-white bg-white text-indigo-600 rounded-lg">
              Know More &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
