"use client";
import React, { useState } from "react";

function Button({ text, onClick }) {
  const [active, setActive] = useState(false);
  return (
    <button className="rounded-full px-[2rem] py-[1rem] backdrop-blur-sm text-white bg-gray-800 bg-opacity-[0.1]">
      <p className="text-white mix-blend-normal"> {text}</p>
    </button>
  );
}

export default Button;
