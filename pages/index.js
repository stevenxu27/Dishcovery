"use client";

import Login from "./login";
import SignUp from "./signup";
import FoodContainer from "../components/FoodContainer";

import React, { useState } from "react";

export default function Home() {
  const [active, setActive] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="bg-dark-gradient w-[100vw] h-[100vh]">
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
              ${
                active
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
                className={`absolute ease-slowEase transition-all duration-[800ms] ${
                  active
                    ? "opacity-0 translate-y-4 mt-[10rem]"
                    : "opacity-100 translate-y-0 mt-[5rem]"
                }`}
              >
                {/* ¨This is where drop your item would go */}
              </p>
            </div>
          </button>

          <div className="flex flex-row gap-[1rem] text-my-gray">
            <button
              className="hover:text-white transition-colors duration-300"
              onClick={() => setShowLogin(true)}
            >
              Login
            </button>
            <p>|</p>
            <button
              className="hover:text-white transition-colors duration-300"
              onClick={() => setShowSignUp(true)}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      {showSignUp && <SignUp onClose={() => setShowSignUp(false)} />}

      <section className="flex flex-row w-full relative bottom-0 mt-[5rem] overflow-hidden">
        <div className="flex animate-scroll-slow gap-[2rem] whitespace-nowrap">
          <div className="flex gap-[2rem]">
            {["Eggplant", "croisssant", "doughnut", "Gummi", "watermelon"].map(
              (image, index) => (
                <img
                  key={index}
                  src={`/static/Images/${image}.png`}
                  alt="menu"
                  width={100}
                  height={100}
                  className="w-[15rem] h-[15rem] min-w-[15rem] hover:animate-pulse-slow transition-all duration-[800ms] ease-slowEase"
                />
              )
            )}
          </div>

          <div className="flex gap-[2rem]">
            {["Eggplant", "croisssant", "doughnut", "Gummi", "watermelon"].map(
              (image, index) => (
                <img
                  key={`dup-${index}`}
                  src={`/static/Images/${image}.png`}
                  alt="menu"
                  width={100}
                  height={100}
                  className="w-[15rem] h-[15rem] min-w-[15rem] hover:animate-pulse-slow transition-all duration-[800ms] ease-slowEase"
                />
              )
            )}
          </div>
        </div>
      </section>

      <FoodContainer
        vegImage="/static/Images/Veggie.png"
        Name="Veggie Tomato Mix"
        Price="$10.99"
        Weight="100g"
        Description="A mix of vegetables and tomatoes"
        altText="menu"
      />
    </div>
  );
}
