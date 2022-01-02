import React from 'react';
import TableRow from './TableRow';
import Loader from '../ui/Loader';

function Table({ tableDetails, showInstitute, loading = false }) {
  const { headings, data } = tableDetails;

  if (loading)
    return (
      <div className="bg-white">
        <div className="w-full h-96 flex justify-center items-center">
          <Loader />
        </div>
      </div>
    );

  return (
    <div className="bg-white">
      {!data && (
        <div className="w-full h-96 flex justify-center items-center">
          <h1 className="font-montserrat text-indigo-800 tracking-wider">
            No Events listed Yet!
          </h1>
        </div>
      )}
      {data && (
        <table className="table bg-white w-full overflow-x-scroll">
          <thead className="sticky -top-3">
            <tr>
              <th></th>
              {headings.map((heading, index) => (
                <th key={index}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <TableRow
                key={index}
                event={item}
                index={index}
                showInstitute={showInstitute}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
