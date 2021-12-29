import React from 'react';

function BranchFilter() {
  const branches = [
    {
      id: 1,
      name: 'MCA',
    },
    {
      id: 2,
      name: 'BTech Chemical',
    },
    {
      id: 3,
      name: 'BTech Mechanical',
    },
    {
      id: 4,
      name: 'BTech Robotics',
    },
  ];

  return (
    <>
      <div className="max-w-full h-14 bg-white drop-shadow-4xl rounded-2xl min-w-fit p-4 ">
        <select
          name="branch"
          id="branch_filter"
          className="italic min-w-full max-w-full font-medium placeholder:text-slate-200 outline-none bg-white"
        >
          <option>Select Branch</option>
          {branches.map((branch) => (
            <option
              className="bg-white text-indigo-600 pt-2"
              value={branch.name}
              key={branch.id}
            >
              {branch.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default BranchFilter;
