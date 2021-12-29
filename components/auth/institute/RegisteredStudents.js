import React from 'react';

import { getRegisteredStudents } from '../../../data/events';

import TableRowStudent from '../TableRowStudent';

function RegisteredStudents() {
  const headings = [
    'First Name',
    'Last Name',
    'Email',
    'Event Name',
    'Institute',
    'Registration Date',
  ];

  const data = getRegisteredStudents(2);

  return (
    <div className="p-3 rounded-lg">
      <div className=" bg-white border-red-500 h-96 sm:h-[75vh] overflow-scroll shadow-2xl sm:w-[96%] mx-auto divide-indigo-700 p-3 text-gray-900 rounded-lg">
        <h1 className=" sticky left-0 bg-white uppercase text-center text-gray-800 font-montserrat">
          Registered Students
        </h1>
        <div className="bg-white">
          <table className="table bg-white w-full overflow-x-scroll">
            <thead className="sticky -top-3">
              <tr>
                <th></th>
                {headings.map((heading) => (
                  <th>{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((student, index) => (
                <TableRowStudent student={student} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RegisteredStudents;
