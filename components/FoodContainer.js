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
        <div className="shadow-2xl w-[22rem] min-h-[60vh] rounded-[1rem] p-[24px] flex flex-col gap-[1rem] bg-white z-[10] overflow-hidden">
          <div className=" w-full min-h-[40vh] flex justify-center items-center absolute top-0 left-0 overflow-hidden rounded-[1rem] ">
            <img
              src="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/547d98d9-0e88-409f-90ab-51a9cae35bba/Derivates/7b1d49bd-ad43-48ac-b182-920e686feb71.jpg"
              alt={altText}
              width={1080}
              height={1080}
              // className="max-w-[15rem] max-h-[15rem] flex justify-center items-center rounded-full w-full"
              className={`
                slowEase duration-[800ms] transition-all
                ${
                  active
                    ? "w-[30rem] h-[30rem] object-cover z-[0] rounded-[0%]  brightness-[50%]"
                    : "w-[15rem] h-[15rem] object-cover flex justify-center items-center rounded-[100%] z-[0] mt-[2rem] brightness-[100%]"
                }`}
            />
          </div>
          <h4
            className={`z-10 ease-slowEase duration-[800ms] transition-all
            ${active ? "mt-[0rem]" : "mt-[100%]"}`}
          >
            {" "}
            {Name}{" "}
          </h4>
          <div className="border-b border-black z-10 "></div>
          <div className="flex flex-row justify-between w-full z-10 overflow-hidden">
            <p
              className={`fastEase duration-[400ms] delay-[400ms] transition-all w-fit ${
                active ? "-mt-[5rem]" : "mt-0"
              }
          }`}
            >
              {Price}
            </p>
            <p
              className={`fastEase duration-[400ms] delay-[400ms] transition-all w-fit ${
                active ? "-mt-[5rem]" : "mt-0"
              }
          }`}
            >
              {" "}
              {Price}{" "}
            </p>
          </div>

          <div className="absolute bottom-0 mb-[2rem] h-fit w-fit  overflow-hidden">
            <div
              className={` mb-[2rem] z-10 text-left transition-all duration-500 ease-slowEase 
            ${!active ? "-mb-[5rem]" : "-mb-[0rem]"}`}
            >
              <p className="text-white"> {Price}</p>

              <p className={`text-white`}> {Description} </p>
            </div>
          </div>
        </div>
      </button>
      {/* <div
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
            {Description}
          </p>
        </div>
      </div> */}
    </section>
  );
}

export default FoodContainer;
