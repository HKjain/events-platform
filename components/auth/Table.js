import React from 'react';
import TableRow from './TableRow';

function Table({ tableDetails, showInstitute }) {
  const { headings, data } = tableDetails;
  return (
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
          {data.map((item, index) => (
            <TableRow
              event={item}
              index={index}
              showInstitute={showInstitute}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
