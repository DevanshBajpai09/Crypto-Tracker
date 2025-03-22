"use client";

import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { Button } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

const DashboardNavbar = () => {
    const navigate = useNavigate()
  return (
    <div className="flex items-center justify-between py-4 px-10 bg-white  shadow-2xl mb-10">
      {/* Logo */}
      <a href="/signup" className="flex items-center text-3xl font-semibold text-black">
        Interview<span className="text-blue-500">Marshal</span>
      </a>

      {/* Search Bar */}
      <form className="relative w-96">
        <input
          type="search"
          id="default-search"
          className="block w-full p-3 pl-10 text-sm outline-none border rounded-full shadow-2xl text-black border-gray-600"
          placeholder="Search Mockups, Logos..."
          required
        />
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
      </form>

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        <Button onClick={()=> navigate('/')} className="flex cursor-pointer items-center gap-2 bg-black text-white rounded-none px-5 py-2  transition-all">
          Logout <IoIosArrowForward />
        </Button>
      </div>
    </div>
  );
};

export default DashboardNavbar;