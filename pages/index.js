"use client";

import FoodContainer from "../components/FoodContainer";
import { useResistiveScroll } from "../hooks/useResistiveScroll";
import Navbar from "../components/Navbar";

import React, { useState, useEffect } from "react";

export default function Home() {
  useResistiveScroll();
  const [active, setActive] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [droppedImage, setDroppedImage] = useState(null);
  const [document, setDocument] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const res = await fetch('/api/db'); // Fetch from the API route

        // Check if the response status is OK (200)
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json(); // Parse the response as JSON
        setDocument(data); // Store the fetched documents
      } catch (err) {
        console.error('Failed to fetch document:', err);
        setError(err.message); // Store the error message
      } finally {
        setLoading(false);
      }
    };

    fetchDocument(); // Fetch the document on component mount
  }, []);

  const scrollToTop = () => {
    window.dispatchEvent(new CustomEvent("resetScroll"));
  };

  const handleUpload = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/upload-menu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setMenuItems(data.menuItems);
      scrollToTop();
    } catch (error) {
      console.error("Error uploading menu:", error);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setDroppedImage(event.target.result);
        setActive(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="w-[100vw] min-h-[100vh] fixed">
      <div className="fixed bg-dark-gradient w-[99vw] h-[100vh] z-[-10] top-0"></div>
      <Navbar setShowLogin={setShowLogin} setShowSignUp={setShowSignUp} />
      <div className="smooth-scroll-container">
        <div
          className={`h-[60vh] flex flex-col justify-between slowEase duration-[800ms] transition-all pt-[9rem] 
          ${active ? "pt-[8rem]" : "pt-[3rem]"}`}
        >
          <div
            className={`flex flex-col gap-[0.5rem] justify-center items-center text-white slowEase duration-[800ms] transition-all 
              `}
          >
            <h2 className="animate-spring" id="home">
              {" "}
              Welcome!{" "}
            </h2>
            <p className="animate-spring delay-100">
              Let's start by uploading your menu.
            </p>
          </div>

          <div className="flex flex-col gap-[2rem] justify-center items-center">
            <div
              className={`group bg-gray-900 text-white w-fit bg-opacity-40 
                transition-all duration-[800ms] ease-slowEase 
                hover:bg-opacity-60 animate-pulse rounded-[100%] py-[1rem] px-[1.75rem] mt-[0]  hover:rounded-[2rem] hover:py-[8rem] hover:px-[8rem] hover:mt-[2rem]`}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={handleUpload}
            >
              {droppedImage ? (
                <img
                  src={droppedImage}
                  alt="Dropped"
                  className="w-[12rem] h-full object-cover rounded-[1rem]"
                />
              ) : (
                <div className="flex flex-col justify-center items-center relative">
                  <h2 className="text-[2.5rem] transition-transform duration-[800ms] ease-slowEase">
                    +
                  </h2>
                  <p
                    className={`absolute ease-slowEase transition-all duration-[2400ms] ${
                      active
                        ? "opacity-0 translate-y-4 mt-[5rem]"
                        : "opacity-100 translate-y-0 mt-[5rem]"
                    }`}
                  >
                    {/* ¨This is where drop your item would go */}
                  </p>
                </div>
              )}
            </div>

            {/* <div className="flex flex-row gap-[1rem] text-my-gray">
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
            </div> */}
            <button
              className={`py-2 px-4 rounded z-50 
    ${
      droppedImage
        ? "bg-blue-500 text-white"
        : "bg-transparent text-blue-500 border border-blue-500"
    }
    ${!droppedImage && "cursor-not-allowed"}`}
              onClick={handleUpload}
              disabled={!droppedImage}
            >
              Upload
            </button>
          </div>
        </div>

        <section className="flex flex-row w-[99vw] relative bottom-0 mt-[25vh] overflow-hidden">
          <div className="flex animate-scroll-slow gap-[2rem] whitespace-nowrap">
            <div className="flex gap-[2rem]">
              {[
                "Eggplant",
                "croisssant",
                "doughnut",
                "Gummi",
                "watermelon",
              ].map((image, index) => (
                <img
                  key={index}
                  src={`/static/Images/${image}.png`}
                  alt="menu"
                  width={100}
                  height={100}
                  className="w-[20%] h-fit min-w-[14.2vw] hover:animate-pulse-slow transition-all duration-[800ms] ease-slowEase"
                />
              ))}
            </div>
            {/* ))} */}

            {/* <div className="flex gap-[2rem]">
              {[
                "Eggplant",
                "croisssant",
                "doughnut",
                "Gummi",
                "watermelon",
              ].map((image, index) => ( */}
            <div className="flex gap-[2rem]">
              {[
                "Eggplant",
                "croisssant",
                "doughnut",
                "Gummi",
                "watermelon",
              ].map((image, index) => (
                <img
                  key={`dup-${index}`}
                  src={`/static/Images/${image}.png`}
                  alt="menu"
                  width={100}
                  height={100}
                  className="w-[20%] h-fit min-w-[14.2vw] hover:animate-pulse-slow transition-all duration-[800ms] ease-slowEase"
                />
              ))}
            </div>
          </div>
        </section>

        <section
          className={`h-[100vh] w-[100vw] flex flex-col justify-center gap-[5rem] items-center slowEase duration-[800ms] transition-all
          ${menuItems ? "mt-[35rem]" : "mt-[10rem]"}`}
        >
          <div className="flex-col  text-white text-left  w-[80vw] flex gap-[1rem]">
            <h3 className="text-left">Welcome to Burger King</h3>
            <p>
              We are a fast food restaurant that serves burgers, fries, and
              other fast food items.
            </p>
            {/* <div className="flex flex-row gap-[1rem]">
              <button className="bg-white w-fit h-fit"> + </button>
              <button className="bg-white w-fit h-fit"> + </button>
            </div> */}
          </div>

          <div className="flex flex-row gap-[1rem] w-[80vw] flex-1 flex-wrap">
            {menuItems ? (
              menuItems.map((item, index) => (
                <FoodContainer
                  key={index}
                  vegImage={item.vegImage}
                  Name={item.name}
                  Price={item.price}
                  Description={item.description}
                  altText={item.altText}
                />
              ))
            ) : (
              <div className=" backdrop-blur-sm bg-gray-900/50 p-[1rem] rounded-[1rem] h-fit w-fit flex flex-col gap-[1rem]">
                <img src="/static/Images/watermelon.png" alt="burger" />
                <h3 className="text-white">Uh oh!</h3>
                <p className="text-white relative top-0 h-fit w-fit">
                  You have no menu selected yet.
                </p>
                <button
                  onClick={scrollToTop}
                  className="rounded-full px-[2rem] py-[1rem] backdrop-blur-sm text-white bg-gray-800 bg-opacity-[0.1] hover:bg-opacity-[0.2] transition-all duration-[800ms] ease-slowEase"
                >
                  <p className="text-white mix-blend-normal">Upload Menu</p>
                </button>
              </div>
            )}
          </div>

          <div style={{ color: 'white', fontSize: '20px' }}>
            <h2 style={{ fontSize: '24px', color: 'white' }}>Latest Documents:</h2>
            {loading ? (
              <p style={{ color: 'white' }}>Loading...</p>
            ) : (
              <pre style={{ color: 'white', fontSize: '18px' }}>
                {JSON.stringify(document, null, 2)} {/* Display stored document as JSON */}
              </pre>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
