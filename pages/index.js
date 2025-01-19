"use client";

import Login from "./login";
import SignUp from "./signup";

import React, { useState } from "react";

export default function Home() {
  const [active, setActive] = useState(false);

  const handleUpload = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/upload-menu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      const data = await response.json();
      console.log('Response from server:', data);
    } catch (error) {
      console.error('Error uploading menu:', error);
    }
  };

  return (
    <div className="bg-black w-[100vw] h-[100vh]">
      <div
        className={`h-[60vh] flex flex-col justify-between slowEase duration-[800ms] transition-all
        ${active ? "pt-[8rem]" : "pt-[3rem]"}`}
      >
        <div
          className={`flex flex-col gap-[0.5rem] justify-center items-center text-white slowEase duration-[800ms] transition-all
            `}
        >
          <h2 className="animate-spring"> Welcome! </h2>
          <p className="animate-spring delay-100">
            Let's start by uploading your menu.
          </p>
        </div>

        <div className="flex flex-col gap-[2rem] justify-center items-center">
          <button
            className={`bg-gray-900 text-white w-fit bg-opacity-40 
              transition-all duration-[800ms] ease-slowEase 
              hover:bg-opacity-60 hover:scale-105
              ${active
                ? "rounded-[100%] py-[1rem] px-[1.75rem] mt-[0]"
                : "rounded-[2rem] py-[8rem] px-[8rem] mt-[2rem]"
              }`}
            onClick={() => setActive(!active)}
          >
            <div className="flex flex-col justify-center items-center relative">
              <h2 className="text-[2.5rem] transition-transform duration-[800ms] ease-slowEase">
                +
              </h2>
              <p
                className={`absolute slowEase transition-all ${active
                    ? " text-transparent duration-[400ms] w-[5rem] h-[1rem] mt-[10rem]"
                    : "text-opacity-[100%] duration-[1200ms] w-[20rem] h-[2rem] mt-[5rem]"
                  }`}
              >
                Drop your menu here
              </p>
            </div>
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={handleUpload}
          >
            Upload Menu
          </button>

          {/* 
          <div className="flex flex-row gap-[1rem] text-my-gray">
            <p className="hover:text-white transition-colors duration-300 cursor-pointer">
              <Login />
            </p>
            <p>|</p>
            <p className="hover:text-white transition-colors duration-300 cursor-pointer">
              <SignUp />
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}