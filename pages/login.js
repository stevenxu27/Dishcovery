import "@fontsource/inter";
import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";

export default function Login({ onClose }) {
  return (
    <div className="fixed z-[20] w-[100vw] h-[100vh] flex-col flex items-center top-0 justify-center animate-fadeIn">
      <div className="backdrop-blur-sm bg-white rounded-[1rem] h-fit w-fit flex flex-col gap-[1rem] px-[4rem] py-[2rem] animate-scaleIn">
        <button
          className="absolute top-0 right-0 p-[1rem] h-fit w-fit border-2 border-black bg-red-700
        }"
          onClick={onClose}
        >
          <h4>x</h4>
        </button>
        <img src="/static/Images/watermelon.png" alt="burger" />
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
        <p className="text-black relative top-0 h-fit w-fit">
          You have no menu selected yet.
        </p>
        <button
          className="rounded-full px-[2rem] py-[1rem] backdrop-blur-sm text-black bg-gray-800 bg-opacity-[0.1] hover:bg-opacity-[0.2] transition-all duration-[800ms] ease-slowEase"
          onClick={onClose}
        >
          <p className="text-black mix-blend-normal">Upload Menu</p>
        </button>
      </div>
      {/* <div className="rounded-[1rem]">
        <CssVarsProvider>
          <Sheet
            sx={{
              width: 500,
              mx: "auto", // margin left & right
              my: 4, // margin top & bottom
              py: 3, // padding top & bottom
              px: 2, // padding left & right
              display: "flex",
              flexDirection: "column",
              gap: 2,

              backgroundColor: "black",
            }}
          >
           
            <div>
              <Typography level="h3" component="h1" sx={{ color: "white" }}>
                Big Back Brochure
              </Typography>
              <Typography level="body-sm" sx={{ color: "white" }}>
                your pocket guide to menus worldwide.
              </Typography>
            </div>

          
            <FormControl>
              <FormLabel sx={{ color: "white" }}>Email</FormLabel>
              <Input
                // html input attribute
                name="email"
                type="email"
                placeholder="johndoe@email.com"
                sx={{ color: "#adb5bd" }}
              />
            </FormControl>

            <FormControl>
              <FormLabel
                className="border-2 border-red-600"
                sx={{ color: "white" }}
              >
                Password
              </FormLabel>
              <Input
                name="password"
                type="password"
                placeholder="Password"
                sx={{ color: "#adb5bd" }}
              />
            </FormControl>

            <Button sx={{ mt: 1, boxShadow: "0 0 10px 5px rgba(255,255,255)" }}>
              Log in
            </Button>
            <Typography
              endDecorator={
                <Link href="/sign-up" sx={{ color: "#2fa8fe" }}>
                  Sign up
                </Link>
              }
              fontSize="sm"
              sx={{
                alignSelf: "center",
                color: "white",
              }}
            >
              Don't have an account?
            </Typography>
          </Sheet>
        </CssVarsProvider>
        <button onClick={onClose} className="text-white">
          Close
        </button>
      </div> */}
    </div>
  );
}
