"use client";
import React from "react";

function Button({ text, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-[2rem] py-[1rem] backdrop-blur-sm text-white bg-gray-800 bg-opacity-[0.1]
        hover:bg-opacity-[0.2] hover:scale-105 transition-all duration-[800ms] ease-slowEase
        ${className}`}
    >
      <p className="text-white mix-blend-normal">{text}</p>
    </button>
  );
}

export default Button;
