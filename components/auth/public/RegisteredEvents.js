import React from 'react';
import { getRegisteredEvents } from '../../../data/events';
import TableRow from './TableRow';

function RegisteredEvents() {
  const registeredEvents = getRegisteredEvents(5);

  return (
    <div className="p-3 rounded-lg">
      <div className=" bg-white border-red-500 h-96 sm:h-[75vh] overflow-scroll shadow-2xl sm:w-[96%] mx-auto divide-indigo-700 p-3 text-gray-900 rounded-lg">
        <h1 className=" sticky left-0 bg-white uppercase text-center text-gray-800 font-montserrat">
          Registered Events
        </h1>
        <div className="bg-white">
          <table className="table bg-white w-full overflow-x-scroll">
            <thead className="sticky -top-3">
              <tr>
                <th></th>
                <th>Event Name</th>
                <th>Institute</th>
                <th>Event Start Date</th>
                <th>Event End Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {registeredEvents.map((event, index) => (
                <TableRow event={event} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RegisteredEvents;
