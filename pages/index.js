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
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState(null);
  const [chatBot, setChatBot] = useState(false);
  const entries = document ? Object.entries(document) : []; // Safely handle undefined/null

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const res = await fetch("/api/db"); // Fetch from the API route

        // Check if the response status is OK (200)
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json(); // Parse the response as JSON
        setDocument(data); // Store the fetched documents
      } catch (err) {
        console.error("Failed to fetch document:", err);
        setError(err.message); // Store the error message
      } finally {
        setLoading(false);
      }
    };

    fetchDocument(); // Fetch the document on component mount
  }, []);

  useEffect(() => {
    if (menuItems.length > 0) {
      setIsUploading(false);
    }
  }, [menuItems]);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const scrollToTop = () => {
    window.dispatchEvent(new CustomEvent("resetScroll"));
  };

  const handleUpload = async () => {
    try {
      setIsUploading(true);
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
      setIsUploading(false);
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
      setIsUploading(true);
      const reader = new FileReader();
      reader.onload = (event) => {
        setDroppedImage(event.target.result);
        setActive(false);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-start items-end  absolute">
      <section className="fixed top-8 right-8 z-[999]">
        <div
          className={`rounded-[1rem] overflow-hidden transition-all duration-[800ms] ease-slowEase
          ${
            chatBot
              ? "w-[24rem] h-[70vh] bg-gray-800/90 backdrop-blur-md shadow-xl translate-y-0 scale-100 opacity-100"
              : "w-[3.5rem] h-[3.5rem] bg-gray-800/50 hover:bg-gray-800/70 translate-y-4 scale-95 opacity-0"
          }`}
        >
          <div
            className={`flex flex-col h-full transition-all duration-[800ms] ease-slowEase
              ${
                chatBot
                  ? "opacity-100 p-6 translate-y-0"
                  : "opacity-0 p-0 translate-y-4"
              }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-white text-xl font-semibold">
                Chat Assistant
              </h2>
            </div>
            <div className="flex-1 overflow-y-auto text-white scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
              <p className="mb-2"> {entries[2] ? entries[2][1] : "Hi, how can we help?"}</p>
            </div>
            <div className="mt-4 flex gap-2">
              <input
                type="text"
                placeholder={entries[1] ? entries[1][1] : "Type a message..."}
                className="flex-1 bg-gray-700/50 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Send
              </button>
            </div>
          </div>

          <button
            className={`absolute transition-all duration-[800ms] ease-slowEase hover:opacity-80
              ${
                chatBot
                  ? "top-4 right-4 opacity-100 scale-100"
                  : "inset-0 w-full h-full opacity-100 scale-100"
              }`}
            onClick={() => setChatBot(!chatBot)}
          >
            {chatBot ? (
              <span className="text-white text-2xl">×</span>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-white text-2xl">💬</span>
              </div>
            )}
          </button>
        </div>
      </section>

      <div className="fixed bg-dark-gradient w-[99vw] h-[100vh] z-[-10] top-0"></div>
      <Navbar setShowLogin={setShowLogin} setShowSignUp={setShowSignUp} />
      <div className="smooth-scroll-container">
        <div
          className={`h-[60vh] flex flex-col justify-between slowEase duration-[800ms] transition-all pt-[9rem] 
          ${active ? "pt-[8rem]" : "pt-[3rem]"}`}
        >
          <div
            className={`flex flex-col gap-[0.5rem] justify-center items-center text-white slowEase duration-[800ms] transition-all`}
          >
            <h2 className="animate-spring" id="home">
              {" "}
              Welcome!{" "}
            </h2>
            <p className="animate-spring delay-100">
              Let's start by uploading your menu.
            </p>
          </div>

          <div className="flex flex-col gap-[2rem] justify-center items-center mt-[4rem]">
            {isUploading && (
              <div className="flex items-center justify-center gap-[1rem]">
                <div className="w-6 h-6 border-4 border-gray-900 border-t-blue-500 rounded-full animate-spin"></div>
                <p className="text-white">Uploading...</p>
              </div>
            )}

            <div
              className={`group bg-gray-900 text-white w-fit bg-opacity-[0.9] overflow-hidden z-[200]
                transition-all duration-[800ms] ease-slowEase hover:bg-opacity-60
                ${
                  isUploading
                    ? "bg-opacity-60 rounded-[2rem] py-[8rem] px-[8rem] hover:mt-[2rem]"
                    : "rounded-[100%] py-[1rem] px-[1.75rem] mt-[0] "
                } 
                animate-pulse  `}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={handleUpload}
            >
              {droppedImage ? (
                <img
                  src={droppedImage}
                  alt="Dropped"
                  className="w-[15rem] h-full object-cover rounded-[1rem]"
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
          <div className="flex-col text-white text-left w-[80vw] flex gap-[1rem]">
            {menuItems.length > 0 && (
              <>
                <h3 className="text-left">
                  Welcome to {menuItems[0].restaurant}
                </h3>
                <p>{menuItems[0].slogan}</p>
              </>
            )}
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
        </section>
      </div>
    </div>
  );
}
