import React, { useState } from "react";
import Button from "./Button";
import { FaUser } from "react-icons/fa";
import Login from "../pages/login";

function Navbar() {
  const [active, setActive] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      <div className="flex flex-row justify-end w-full px-[2rem] items-center py-[1rem] bg-transparent fixed max-w-[100vw] gap-[1rem] slowEase duration-[800ms] transition-all z-[30]">
        <div className="flex flex-row items-center">
          <div
            className={`overflow-hidden transition-all duration-[800ms] ease-slowEase flex flex-row gap-[1rem]
              ${
                active
                  ? "w-[16rem] mr-4 opacity-100 translate-x-0 scale-100"
                  : "w-0 opacity-0 -translate-x-10 scale-95"
              }`}
          >
            <Button
              text="Login"
              onClick={() => setShowLogin(true)}
              className={`transform transition-all duration-[800ms] ease-slowEase delay-100
                ${
                  active
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-4 opacity-0"
                }`}
            />
            <Button
              text="Signup"
              onClick={() => setShowSignUp(true)}
              className={`transform transition-all duration-[800ms] ease-slowEase delay-200
                ${
                  active
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-4 opacity-0"
                }`}
            />
          </div>

          <button
            className={`rounded-full px-[2rem] py-[1rem] backdrop-blur-sm text-white bg-gray-800 bg-opacity-[0.1]
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
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  );
}

export default Navbar;
