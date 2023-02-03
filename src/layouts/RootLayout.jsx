import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <div className="flex my-8">
        <Link to="/" className="text-5xl">
          PocketTask
        </Link>
        <div className="ml-auto my-auto ">
          <button className="bg-green-500 text-white py-2 px-4 rounded-md">
            Log In
          </button>
          <button className="border border-green-500 text-green-500 py-2 px-4 rounded-md ml-4">
            Sign Up
          </button>
        </div>
      </div>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}
