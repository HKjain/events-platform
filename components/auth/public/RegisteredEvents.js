import React from 'react';
import { getRegisteredEvents } from '../../../data/events';
import Table from '../Table';

function RegisteredEvents() {
  const registeredEvents = getRegisteredEvents(5);
  const tableDetails = {
    headings: [
      'Event Name',
      'Institute',
      'Event Start Date',
      'Event End Date',
      'Status',
    ],
    data: registeredEvents,
  };
  return (
    <div className="p-3 rounded-lg">
      <div className=" bg-white border-red-500 h-96 sm:h-[75vh] overflow-scroll shadow-2xl sm:w-[96%] mx-auto divide-indigo-700 p-3 text-gray-900 rounded-lg">
        <h1 className=" sticky left-0 bg-white uppercase text-center text-gray-800 font-montserrat">
          Registered Events
        </h1>
        <Table tableDetails={tableDetails} showInstitute={true} />
      </div>
    </div>
  );
}

export default RegisteredEvents;
