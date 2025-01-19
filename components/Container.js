import React from "react";

function Container() {
  return (
    <div>
      <section className="flex flex-row gap-[1rem] w-[100vw] h-[100vh]">
        <div className="w-[20rem] h-[60vh] rounded-[1rem] bg-gray-400 p-[2rem] m-[1rem] relative overflow-hidden">
          <div
            className={`relative top-0 left-0 transition-all z-[10]
        ease-in-out duration-[500ms]
      ${active ? "text-white" : "text-black"}`}
          >
            <h2>Hello</h2>
            <p>I love the smell of chocolate.</p>
          </div>
          <button
            className={` bg-black absolute bottom-0 right-0 m-[1rem]  
        transition-all duration-300 slowEase 
        ${
          active
            ? "w-[100rem] h-[100rem] rounded-none duration-[800ms] -bottom-[30rem] right-[-40rem] text-transparent"
            : "w-[3rem] h-[3rem] rounded-full duration-[800ms] text-white"
        }`}
            onClick={() => setActive(!active)}
          >
            <p
              className={`${
                active ? "text-black -z-[10]" : "text-white z-10"
              } transition-all duration-100 ease-in-out`}
            >
              +
            </p>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Container;
