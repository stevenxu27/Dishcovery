import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center p-[1rem] bg-black max-w-[100vw]">
      <Button text="Click me" />
    </div>
  );
}

export default Navbar;
