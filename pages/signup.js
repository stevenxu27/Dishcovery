"use client";
import "@fontsource/inter";
import React, { useState } from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";

export default function SignUp({ onClose }) {
  return (
    <>
      {/* <div className="fixed w-[100vw] h-[100vh] backdrop-blur-md brightness-75 z-[40] transition-all duration-500 ease-in-out"></div>

      <div className="fixed z-[50] w-[100vw] h-[100vh] flex-col flex items-center top-0 justify-center animate-fadeIn">
        <div className="backdrop-blur-sm bg-white/90 rounded-[1rem] h-fit w-fit flex flex-col gap-[1rem] px-[4rem] py-[2rem] animate-scaleIn shadow-xl">
          <button
            className="absolute top-0 right-0 p-4 min-w-[3rem] min-h-[3rem] flex items-center justify-center hover:bg-gray-100 rounded-tr-[1rem] transition-all duration-300"
            onClick={onClose}
          >
            <h4>×</h4>
          </button>
          <img
            src="/static/Images/watermelon.png"
            alt="burger"
            className="w-[8rem] h-[8rem] mx-auto animate-float"
          />
          <h3 className="text-black text-2xl font-semibold text-center">
            Sign Up
          </h3>
          <FormControl>
            <FormLabel>Full Name</FormLabel>
            <Input
              name="name"
              type="text"
              placeholder="John Doe"
              sx={{ mb: 2 }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="johndoe@email.com"
              sx={{ mb: 2 }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              placeholder="Password"
              sx={{ mb: 2 }}
            />
          </FormControl>
          <Button
            variant="solid"
            color="primary"
            className="w-full mt-2"
            onClick={onClose}
          >
            Create Account
          </Button>
        </div>
      </div> */}
    </>
  );
}
