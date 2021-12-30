import React, { useState } from 'react';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import BadgeIcon from '@mui/icons-material/Badge';

function RegisterForm() {
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

  const [userType, setUserType] = useState('student');
  const [eyeOpen, setEyeOpen] = useState(false);
  const [passwordType, setPasswordType] = useState('password');
  const handleToggle = () => {
    setEyeOpen(!eyeOpen);
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };
  const handleUserType = (newType) => {
    setUserType(newType);
  };
  return (
    <div className="flex flex-col w-full mt-3 pl-2">
      {/* user Type */}
      <div className="flex gap-5 mb-2 w-72 sm:w-96 px-2 py-2 ">
        <div className=" flex justify-center items-center gap-2">
          <input
            type="radio"
            onClick={() => handleUserType('student')}
            className="radio border-white radio-xs checked:bg-indigo-600 m-0"
            id="student"
            name="user_type"
            value="student"
            checked={userType === 'student'}
          />
          <label
            htmlFor="student"
            className="text-xs font-semibold text-zinc-200 cursor-pointer"
          >
            Student
          </label>
        </div>
        <div className="flex justify-center items-center gap-2">
          <input
            type="radio"
            onClick={() => handleUserType('institute')}
            className="radio border-white  radio-xs checked:bg-indigo-600"
            id="institute"
            name="user_type"
            value="student"
            checked={userType === 'institute'}
          />
          <label
            htmlFor="institute"
            className="text-xs font-semibold text-zinc-200 cursor-pointer"
          >
            Insitute
          </label>
        </div>
      </div>

      {/* Institute Selection */}
      {userType === 'institute' && (
        <div className="flex gap-1 bg-indigo-500 shadow-2xl w-72 sm:w-96 px-2 py-2 rounded-xl">
          <div className="grow">
            <h6 className="text-xs font-semibold text-zinc-200 mb-1">
              Institute Authorization
            </h6>

            <select
              name="institute"
              id="institute_filter"
              className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
            >
              <option disabled className="bg-white text-indigo-600">
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
      )}

      {/* name */}
      {userType === 'student' && (
        <div className="flex flex-col sm:justify-between sm:gap-1 sm:flex-row w-96">
          <div className="flex gap-1 bg-indigo-500 shadow-2xl w-72 sm:w-[12rem] px-2 py-2 rounded-xl">
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
            <div className="flex justify-center items-center">
              <BadgeIcon sx={{ color: 'white', fontSize: '20px' }} />
            </div>
          </div>
          {/* lastName */}
          <div className="flex gap-1 mt-4 sm:mt-0 bg-indigo-500 shadow-2xl w-72 sm:w-[12rem] px-2 py-2 rounded-xl">
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
            <div className="flex justify-center items-center">
              <BadgeIcon sx={{ color: 'white', fontSize: '20px' }} />
            </div>
          </div>
        </div>
      )}

      {/* email */}
      <div className="flex gap-1 mt-4 bg-indigo-500 shadow-2xl w-72 sm:w-96 px-2 py-2 rounded-xl">
        <div className="grow">
          <h6 className="text-xs font-semibold text-zinc-200 mb-1">
            Email Address
          </h6>
          <input
            className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
            type="text"
            name="email"
            id="email"
          />
        </div>
        <div className="flex justify-center items-center">
          <AlternateEmailIcon sx={{ color: 'white', fontSize: '20px' }} />
        </div>
      </div>
      {/* Password */}
      <div className="flex gap-1 bg-indigo-500 mt-4 shadow-2xl w-72 sm:w-96 px-2 py-2 rounded-xl">
        <div className="grow">
          <h6 className="text-xs font-semibold text-zinc-200 mb-1">Password</h6>
          <input
            className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
            type={passwordType}
            name="password"
            id="password"
          />
        </div>
        <div className="flex justify-center items-center">
          {eyeOpen && (
            <VisibilityIcon
              onClick={handleToggle}
              sx={{ color: 'white', fontSize: '20px', cursor: 'pointer' }}
            />
          )}
          {!eyeOpen && (
            <VisibilityOffIcon
              onClick={handleToggle}
              sx={{ color: 'white', fontSize: '20px', cursor: 'pointer' }}
            />
          )}
        </div>
      </div>
      {/* Login Button */}
      <div className="mt-4 w-36 sm:w-48 rounded-3xl shadow-2xl">
        <button className="bg-indigo-400 w-full sm:py-3 hover:scale-95 hover:drop-shadow-2xl hover:bg-white hover:text-indigo-500 transition-all duration-500 ease-in-out border-0 outline-none tracking-widest rounded-3xl text-center font-semibold px-5 py-2 uppercase text-white">
          Register
        </button>
      </div>
    </div>
  );
}

export default RegisterForm;
