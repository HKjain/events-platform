import React from 'react';

import InstituteFilter from './Filters/InstituteFilter';
import BranchFilter from './Filters/BranchFilter';
import DateFilter from './Filters/DateFilter';

function Filter({ institutes }) {
  return (
    <div className="min-h-fit min-w-fit max-w-full text-indigo-600 rounded-md">
      <div className="p-1">
        <div className="gap-3 justify-center flex flex-col py-2 sm:flex-row md:flex-col w-3/4 min-w-fit max-w-full mx-auto md:w-fit">
          <div className="flex flex-col gap-3">
            <InstituteFilter institutes={institutes} />
            <BranchFilter />
          </div>
          <div className="flex flex-col gap-3">
            <DateFilter type="from" />
            <DateFilter type="to" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
