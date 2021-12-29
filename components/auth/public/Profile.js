import React from 'react';

function Profile() {
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
    <div className="p-3 rounded-lg">
      <div className="bg-white h-96 sm:h-[75vh] overflow-scroll shadow-2xl sm:w-[96%] mx-auto grid grid-cols-1 gap-2 divide-indigo-700 divide-y-4 md:divide-y-0 md:divide-x-4 md:grid-cols-2 p-3 text-gray-900 rounded-lg">
        <div className="flex flex-col pl-1 pt-1 pb-1">
          <h1 className="font-montserrat">Personal Information</h1>

          {/* Name */}
          <div className="grid mt-2 grid-cols-1 sm:gap-1 sm:grid-cols-2">
            <div className="flex gap-1 mt-2 sm:mt-0 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
              <div className="grow">
                <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                  First Name
                </h6>
                <input
                  className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                  type="text"
                  name="first_name"
                  id="first_name"
                />
              </div>
            </div>
            {/* lastName */}
            <div className="flex gap-1 mt-2 sm:mt-0 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
              <div className="grow">
                <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                  Last Name
                </h6>
                <input
                  className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                  type="text"
                  name="last_name"
                  id="last_name"
                />
              </div>
            </div>
          </div>

          {/* Phone & Gender */}
          <div className="grid grid-cols-1 sm:mt-2 sm:gap-1 sm:grid-cols-2">
            <div className="flex gap-1 mt-2 sm:mt-0 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
              <div className="grow">
                <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                  Contact Number
                </h6>
                <input
                  className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                  type="text"
                  name="phone"
                  id="phone"
                />
              </div>
            </div>
            {/* Gender */}
            <div className="flex gap-1 mt-2 sm:mt-0 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
              <div className="grow">
                <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                  Gender
                </h6>
                <select
                  name="gender"
                  id="gender"
                  className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                >
                  <option value="">Select Gender</option>
                  <option value="">Male</option>
                  <option value="">Female</option>
                  <option value="">Prefer not to say.</option>
                </select>
              </div>
            </div>
          </div>

          {/* State & DOB */}
          <div className="grid grid-cols-1 sm:mt-2 sm:gap-1 sm:grid-cols-2">
            <div className="flex gap-1 mt-2 sm:mt-0 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
              <div className="grow">
                <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                  Date of Birth
                </h6>
                <input
                  className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                  type="date"
                  name="date_of_birth"
                  id="date_of_birth"
                />
              </div>
            </div>
            {/* State*/}
            <div className="flex gap-1 mt-2 sm:mt-0 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
              <div className="grow">
                <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                  State
                </h6>
                <select
                  name="state"
                  id="state"
                  className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                >
                  <option value="">Select State</option>
                  <option value="">Gujarat</option>
                  <option value="">Karnataka</option>
                  <option value="">Tamil Nadu</option>
                </select>
              </div>
            </div>
          </div>

          {/* LinkedIn & Github */}
          <div className="grid grid-cols-1 sm:mt-2 sm:gap-1 sm:grid-cols-2">
            <div className="flex gap-1 mt-2 sm:mt-0 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
              <div className="grow">
                <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                  LinkedIn Profile
                </h6>
                <input
                  className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                  type="url"
                  name="linkedin"
                  id="linkedin"
                />
              </div>
            </div>
            {/* Github */}
            <div className="flex gap-1 mt-2 sm:mt-0 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
              <div className="grow">
                <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                  Github Profile
                </h6>
                <input
                  className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                  type="url"
                  name="github"
                  id="github"
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-1 mt-2 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
            <div className="grow">
              <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                Email Address
              </h6>
              <input
                className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                type="email"
                name="email"
                id="email"
              />
            </div>
          </div>

          {/* Address */}
          <div className="flex gap-1 mt-2 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
            <div className="grow">
              <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                Home Address
              </h6>
              <textarea
                className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                type="text"
                name="address"
                id="address"
              />
            </div>
          </div>
        </div>

        {/*  */}
        <div className="flex flex-col pl-1 sm:pl-2 pt-1">
          <h1 className="font-montserrat">Educational Information</h1>
          {/* Institute */}
          <div className="flex gap-1 mt-2 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
            <div className="grow">
              <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                Current Institute
              </h6>
              <select
                name="institute"
                id="institute_filter"
                className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
              >
                <option className="bg-white text-indigo-600">
                  Select Institute
                </option>
                {institutes.map((institute) => (
                  <option
                    className="bg-white text-indigo-600"
                    value={institute.name}
                    key={institute.id}
                  >
                    {institute.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* College Email */}
          <div className="flex gap-1 mt-2 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
            <div className="grow">
              <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                Institute Email Address
              </h6>
              <input
                className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                type="email"
                name="institute_email"
                id="institute_email"
              />
            </div>
          </div>

          {/* Degree */}
          <div className="flex gap-1 mt-2 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
            <div className="grow">
              <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                Degree (Ex. MCA,BTech,MTech..)
              </h6>
              <input
                className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                type="text"
                name="degree"
                id="degree"
              />
            </div>
          </div>

          {/* semester & Roll No */}
          <div className="grid grid-cols-1 sm:mt-2 sm:gap-1 sm:grid-cols-2">
            <div className="flex gap-1 mt-2 sm:mt-0 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
              <div className="grow">
                <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                  Semester
                </h6>
                <input
                  className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                  type="number"
                  min="1"
                  name="semester"
                  id="semester"
                />
              </div>
            </div>
            {/* Roll No */}
            <div className="flex gap-1 mt-2 sm:mt-0 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
              <div className="grow">
                <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                  Roll / Registration Number
                </h6>
                <input
                  className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                  type="url"
                  name="github"
                  id="github"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 flex justify-center">
        <button className="bg-violet-600 w-fit hover:scale-95 hover:drop-shadow-2xl hover:bg-white hover:text-violet-600 transition-all duration-500 ease-in-out border-0 outline-none tracking-widest rounded-3xl text-center font-semibold px-5 py-2 uppercase text-white">
          Save
        </button>
      </div>
    </div>
  );
}

export default Profile;
