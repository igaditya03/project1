import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-100 to-white flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          Welcome to <span className="text-blue-600">Your React App</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          A modern and responsive React application styled with Tailwind CSS.
          Start exploring by logging in or creating an account.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/login">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition">
              Log In
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg text-lg font-medium transition">
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      <img
        src="https://reactjs.org/logo-og.png"
        alt="React Banner"
        className="w-full max-w-4xl mt-16 rounded-xl shadow-lg"
      />
    </div>
  );
}
