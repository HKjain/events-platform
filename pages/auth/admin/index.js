import React from 'react';

function AdminLogin() {
  return (
    <div>
      <div className="w-[85%] mx-auto mt-5">
        <h1 className="uppercase text-center font-montserrat">Admin Login</h1>
      </div>
      <div className="bg-white mx-auto w-[85%] sm:w-[65%] md:w-[45%] shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="password"
            type="password"
            placeholder="*********"
          />
          <p className="text-red text-xs italic">Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-indigo-600 hover:scale-95 transition-all ease-in duration-100 text-white tracking-wider font-bold py-2 px-4 rounded"
            type="button"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
