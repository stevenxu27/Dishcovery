"use client";
import React, { useState } from "react";

function FoodContainer({ vegImage, Name, Price, Description, altText }) {
  const [active, setActive] = useState(false);
  return (
    <section className="flex flex-row relative z-[10] group">
      <button
        className="z-[10] transition-transform duration-500 ease-slowEase "
        onClick={() => setActive(!active)}
      >
        <div className="shadow-2xl w-[22rem] min-h-[60vh] rounded-[1rem] p-[24px] flex flex-col gap-[1rem] bg-white z-[10]">
          <div className=" flex justify-center items-center">
            <img
              src={vegImage}
              alt={altText}
              width={100}
              height={100}
              className="max-w-[15rem] max-h-[15rem] flex justify-center items-center  w-full"
            />
          </div>
          <h4> {Name} </h4>
          <div className="border-b border-black"></div>
          <div className="flex flex-row justify-between w-full">
            <p> {Price}</p>
            <p> {Description} </p>
          </div>
        </div>
      </button>
      <div
        className={`flex flex-col w-fit rounded-[1rem] gap-[1rem] bg-black text-white px-[2rem] py-[3rem] 
          absolute min-w-[24rem] min-h-[60vh] transition-all duration-[800ms] ease-slowEase
          
          ${
            !active
              ? "rotate-[8reg] translate-x-[30%] translate-y-[-1rem] scale-105 opacity-90 z-[0]"
              : "rotate-[4deg] translate-x-[90%] translate-y-0 scale-95 opacity-100 z-[0]"
          }`}
      >
        <div className="transition-all duration-500 ease-slowEase">
          <h4 className="transform transition-all duration-500"> {Name} </h4>
          <p className="text-my-gray transform transition-all duration-500">
            {" "}
            {Price}
          </p>
        </div>
        <div className="transition-all duration-500 ease-slowEase">
          <h5 className="transform transition-all duration-500">
            {" "}
            Description{" "}
          </h5>
          <p className="text-my-gray transform transition-all duration-500">
            {" "}
            {Description}{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default FoodContainer;
