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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-lg">
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
              borderRadius: "sm",
              boxShadow: "0 0 10px rgb(255, 255, 255)",
              backgroundColor: "black",
            }}
          >
            {/* title */}
            <div>
              <Typography level="h3" component="h1" sx={{ color: "white" }}>
                Big Back Brochure
              </Typography>
              <Typography level="body-sm" sx={{ color: "white" }}>
                your pocket guide to menus worldwide.
              </Typography>
            </div>

            {/* form */}
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
              <FormLabel sx={{ color: "white" }}>Password</FormLabel>
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
      </div>
    </div>
  );
}
