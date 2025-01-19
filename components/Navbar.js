import React, { useState } from "react";
import Button from "./Button";
import { FaUser } from "react-icons/fa";
import Login from "../pages/login";
import Input from "@mui/joy/Input";

function Navbar() {
  const [active, setActive] = useState(false);
  const [button, setButton] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <>
      <div className="fixed bottom-8 right-8 flex flex-row items-center gap-[1rem] z-[30]">
        <div className="flex flex-row items-center">
          <div
            className={`overflow-hidden transition-all duration-[800ms] ease-slowEase flex flex-row gap-[1rem]
              ${
                active
                  ? "w-[16rem] mr-4 opacity-100 translate-x-0 scale-100"
                  : "w-0 opacity-0 translate-x-10 scale-95"
              }`}
          >
            <Button
              text="Login"
              onClick={() => {
                setShowLogin(true), setShowSignUp(false);
              }}
              className={`transform backdrop-blur-lg bg-black transition-all duration-[800ms] ease-slowEase delay-100
                ${
                  active
                    ? "translate-y-0 opacity-[100%]"
                    : "translate-y-4 opacity-[0%]"
                }`}
            />
            <Button
              text="Signup"
              onClick={() => {
                setShowSignUp(true), setShowLogin(false);
              }}
              className={`transform backdrop-blur-lg bg-black transition-all duration-[800ms] ease-slowEase delay-200
                ${
                  active
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
            />
        </div>

          <button
            className={`rounded-full px-[2rem] py-[1rem] backdrop-blur-md text-white bg-gray-800 bg-opacity-[0.1]
              transition-all duration-[800ms] ease-slowEase hover:scale-105
              ${
                active
                  ? "bg-opacity-[0.3] shadow-lg shadow-white/10"
                  : "bg-opacity-[0.1]"
              }`}
            onClick={() => setActive(!active)}
          >
            <FaUser
              className={`text-white transition-all duration-[800ms] ease-slowEase
              ${active ? "scale-90" : "scale-100"}`}
            />
          </button>
        </div>
      </div>
      {/* {showLogin && <Login onClose={() => setShowLogin(false)} />} */}

      {/* Signup*/}
      <div
        className={`fixed  backdrop-blur-md brightness-[0.8] z-[10] slowEase duration-[800ms] transition-all
          ${
            showSignUp || showLogin
              ? "w-[100vw] h-[100vh]  mt-[0] opacity-100"
              : "w-[100vw] h-[100vh] mt-[100vh] opacity-0"
          }`}
      ></div>

      {/* Signup */}
      <div
        className={`fixed w-[100vw] h-[100vh] flex-col flex items-center bottom-0 justify-center animate-fadeIn ease-slowEase duration-[800ms] transition-all delay-[0ms]
        ${showSignUp ? "z-[20]" : "z-[10]"}`}
      >
        <div
          className={`backdrop-blur-sm bg-white bg-opacity-[0.4] rounded-[1rem] h-fit w-fit flex flex-col gap-[1rem] px-[4rem] py-[2rem] slowEase duration-[800ms] transition-all
          ${showSignUp ? "opacity-100" : "opacity-0 translate-y-[30px]"}`}
        >
          <button
            className="absolute top-0 right-0 p-[1rem] h-fit w-fit z-[10]
        }"
            onClick={() => {
              setShowSignUp(false);
            }}
          >
            <h4>x</h4>
          </button>
          <img
            src="/static/Images/doughnut.png"
            alt="burger"
            className="w-[10rem] h-[10rem] animate-bounce"
          />
          <h5 className="text-black ">Sign Up</h5>

          <p
            className="text-black relative top-0 h-fi
          
          t w-fit"
          >
            {" "}
            Enter your name
          </p>
          <Input
            // html input attribute
            name="name"
            type="name"
            placeholder="John"
            sx={{ color: "#adb5bd" }}
          />
          <p className="text-black relative top-0 h-fit w-fit">
            {" "}
            Enter your last name
          </p>

          <Input
            name="LastName"
            type="LastName"
            placeholder="Doe"
            sx={{ color: "#adb5bd" }}
          />
          <p className="text-black relative top-0 h-fit w-fit">
            {" "}
            Enter your email
          </p>
          <Input
            // html input attribute
            name="email"
            type="email"
            placeholder="johndoe@email.com"
            sx={{ color: "#adb5bd" }}
          />
          <p className="text-black relative top-0 h-fit w-fit">
            {" "}
            Enter your password
          </p>

          <Input
            name="password"
            type="password"
            placeholder="Password"
            sx={{ color: "#adb5bd" }}
          />
          <p className="text-black relative top-0 h-fit w-fit"></p>
          <button
            className="rounded-full px-[2rem] py-[1rem] backdrop-blur-sm text-black bg-gray-800 bg-opacity-[0.1] hover:bg-opacity-[0.2] transition-all duration-[800ms] ease-slowEase"
            onClick={() => {
              setShowSignUp(!showSignUp);
              setShowLogin(true);
            }}
          >
            <p className="text-black mix-blend-normal">Let's get started!</p>
          </button>
        </div>
      </div>

      {/* Login */}
      <div
        className={`fixed w-[100vw] h-[100vh] flex-col flex items-center top-0 justify-center animate-fadeIn ease-slowEase duration-[800ms] transition-all delay-[200ms]
        ${showLogin ? "z-[20]" : "z-[10]"}`}
      >
        <div
          className={`backdrop-blur-sm bg-white bg-opacity-[0.4] rounded-[1rem] h-fit w-fit flex flex-col gap-[1rem] px-[4rem] py-[2rem] slowEase duration-[800ms] transition-all
          ${showLogin ? "opacity-100" : "opacity-0 -translate-y-10"}`}
        >
          <button
            className="absolute top-0 right-0 p-[1rem] h-fit w-fit
        }"
            onClick={() => {
              setShowLogin(!showLogin);
            }}
          >
            <h4>x</h4>
          </button>
          <img
            src="/static/Images/watermelon.png"
            alt="burger"
            className="w-[15rem] h-[15rem] animate-bounce"
          />
          <h5 className="text-black">Login</h5>
          <p className="text-black relative top-0 h-fit w-fit">
            {" "}
            Enter your email
          </p>
          <Input
            // html input attribute
            name="email"
            type="email"
            placeholder="johndoe@email.com"
            sx={{ color: "#adb5bd" }}
          />
          <p className="text-black relative top-0 h-fit w-fit">
            {" "}
            Enter your password
          </p>

          <Input
            name="password"
            type="password"
            placeholder="Password"
            sx={{ color: "#adb5bd" }}
          />
          <p className="text-black relative top-0 h-fit w-fit">Let's Go!</p>
          <button
            className="rounded-full px-[2rem] py-[1rem] backdrop-blur-sm text-black bg-gray-800 bg-opacity-[0.1] hover:bg-opacity-[0.2] transition-all duration-[800ms] ease-slowEase"
            onClick={() => {
              setShowLogin(!showLogin);
              setShowDashboard(true);
            }}
          >
            <p className="text-black mix-blend-normal">Login</p>
          </button>
        </div>
      </div>

      {/* User Dashboard */}
      <>
        <section
          className={`fixed w-[100vw] h-[100vh] flex flex-col items-center justify-center slowEase duration-[800ms] transition-all
            ${showDashboard ? "z-[30]" : "z-[0]"}`}
        >
          <div
            className={` backdrop-blur-sm bg-white bg-opacity-[0.4] rounded-[1rem] h-[90vh] w-[95vw] flex flex-col gap-[1rem] px-[4rem] py-[2rem] slowEase duration-[800ms] transition-all
          ${showDashboard ? "opacity-100 " : "opacity-0 translate-y-[30px] "}`}
          >
            <div className="flex flex-col gap-[0rem] mb-1rem] w-full h-full">
              <div className="flex flex-row justify-between">
                <h4>Hello John</h4>
                <button
                  className="text-black text-4xl"
                  onClick={() => setShowDashboard(false)}
                >
                  x
                </button>
              </div>
              <p> Welcome back to your dashboard.</p>

              <div className="flex flex-col w-full h-full  gap-[1rem] lg:flex-row mt-[3rem]">
                {/* box 1 */}
                <div className="w-[20rem] h-[60vh] rounded-[1rem] bg-gray-800 p-[2rem] m-[1rem] relative overflow-hidden">
                  <div
                    className={`relative top-0 left-0 transition-all z-[10]
              ease-in-out duration-[500ms]
            ${button ? "text-white" : "text-black"}`}
                  >
                    <h4>Your Allergies</h4>
                    <p>Peanuts</p>
                  </div>
                  <button
                    className={` bg-black absolute bottom-0 right-0 m-[1rem]  
              transition-all duration-300 slowEase 
              ${
                button
                  ? "w-[100rem] h-[100rem] rounded-none duration-[800ms] -bottom-[20rem] right-[-40rem] text-transparent"
                  : "w-[3rem] h-[3rem] rounded-full duration-[800ms] text-white"
              }`}
                    onClick={() => setButton(!button)}
                  >
                    <p
                      className={`${
                        button ? "text-black -z-[10]" : "text-white z-10"
                      } transition-all duration-100 ease-in-out`}
                    >
                      +
                    </p>
                  </button>
                </div>

                <></>
                <div className="w-[20rem] h-[60vh] rounded-[1rem] bg-gray-800 p-[2rem] m-[1rem] relative overflow-hidden">
                  <div
                    className={`relative top-0 left-0 transition-all z-[10]
              ease-in-out duration-[500ms]
            ${button ? "text-white" : "text-black"}`}
                  >
                    <h4>Your Galleries</h4>
                    <p>Places that you just need to come back to.</p>
                  </div>
                  <button
                    className={` bg-black absolute bottom-0 right-0 m-[1rem]  
              transition-all duration-300 slowEase 
              ${
                button
                  ? "w-[100rem] h-[100rem] rounded-none duration-[800ms] -bottom-[20rem] right-[-40rem] text-transparent"
                  : "w-[3rem] h-[3rem] rounded-full duration-[800ms] text-white"
              }`}
                    onClick={() => setButton(!button)}
                  >
                    <p
                      className={`${
                        button ? "text-black -z-[10]" : "text-white z-10"
                      } transition-all duration-100 ease-in-out`}
                    >
                      +
                    </p>
                  </button>
                </div>

                <></>
                <div className="w-[20rem] h-[60vh] rounded-[1rem] bg-gray-800 p-[2rem] m-[1rem] relative overflow-hidden">
                  <div
                    className={`relative top-0 left-0 transition-all z-[10]
              ease-in-out duration-[500ms]
            ${button ? "text-white" : "text-black"}`}
                  >
                    <h4>Your Allergies</h4>
                    <p>Peanuts</p>
                  </div>
                  <button
                    className={` bg-black absolute bottom-0 right-0 m-[1rem]  
              transition-all duration-300 slowEase 
              ${
                button
                  ? "w-[100rem] h-[100rem] rounded-none duration-[800ms] -bottom-[20rem] right-[-40rem] text-transparent"
                  : "w-[3rem] h-[3rem] rounded-full duration-[800ms] text-white"
              }`}
                    onClick={() => setButton(!button)}
                  >
                    <p
                      className={`${
                        button ? "text-black -z-[10]" : "text-white z-10"
                      } transition-all duration-100 ease-in-out`}
                    >
                      +
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}

export default Navbar;
