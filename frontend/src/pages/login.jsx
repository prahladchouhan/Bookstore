import React from 'react';

const Login = () => {
  return (
    <div className="bg-gray-800 text-amber-50 min-h-screen px-4 py-10">
      <div className="w-full max-w-md mx-auto mt-16 bg-gray-700 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Login Page</h1>

        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 bg-gray-600 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 bg-gray-600 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
