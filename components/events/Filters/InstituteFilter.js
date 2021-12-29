import React from 'react';

function InstituteFilter() {
  const institutes = [
    {
      id: 1,
      name: 'NIT Agartala',
    },
    {
      id: 2,
      name: 'NIT Allahabad',
    },
    {
      id: 3,
      name: 'NIT Bhopal',
    },
    {
      id: 4,
      name: 'NIT Calicut',
    },
    {
      id: 5,
      name: 'NIT Jamshedpur',
    },
    {
      id: 6,
      name: 'NIT Karnataka',
    },
    {
      id: 7,
      name: 'NIT Kurukshetra',
    },
    {
      id: 8,
      name: 'NIT Patna',
    },
    {
      id: 9,
      name: 'NIT Raipur',
    },
    {
      id: 10,
      name: 'NIT Tiruchirappalli',
    },
    {
      id: 11,
      name: 'NIT Warangal',
    },
  ];

  return (
    <>
      <div className="bg-white max-w-full h-14 drop-shadow-4xl rounded-2xl min-w-fit p-4 ">
        <select
          name="institute"
          id="institute_filter"
          className="italic max-w-full min-w-full font-medium placeholder:text-slate-200 outline-none bg-white"
        >
          <option>Select Institute</option>
          {institutes.map((institute) => (
            <option
              className="bg-white text-indigo-600 pt-2"
              value={institute.name}
              key={institute.id}
            >
              {institute.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default InstituteFilter;
