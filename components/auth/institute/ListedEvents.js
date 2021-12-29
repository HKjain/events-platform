import React from 'react';

import Table from '../Table';
import { getListedEvents } from '../../../data/events';

function ListedEvents() {
  // getListedEvents takes the id of nit for which we want the list of events
  const listedEvents = getListedEvents(2);
  const tableDetails = {
    headings: ['Event Name', 'Event Start Date', 'Event End Date', 'Status'],
    data: listedEvents,
  };
  return (
    <div className="p-3 rounded-lg">
      <div className=" bg-white border-red-500 h-96 sm:h-[75vh] overflow-scroll shadow-2xl sm:w-[96%] mx-auto divide-indigo-700 p-3 text-gray-900 rounded-lg">
        <h1 className=" sticky left-0 bg-white uppercase text-center text-gray-800 font-montserrat">
          Your Listed Events
        </h1>
        <Table tableDetails={tableDetails} showInstitute={false} />
      </div>
    </div>
  );
}

export default ListedEvents;
