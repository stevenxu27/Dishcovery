import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import { Box } from "@mui/joy";
import "@fontsource/inter";

export default function SignUp({ onClose }) {
  return (
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
            Sign up to join us!
          </Typography>
        </div>

        {/* form */}
        <Box sx={{ display: "flex", gap: 1 }}>
          {" "}
          {/* Added gap prop */}
          <FormControl sx={{ flex: 1 }}>
            <FormLabel sx={{ color: "white" }}>First Name</FormLabel>
            <Input
              name="firstName"
              type="text"
              placeholder="Enter your first name"
              sx={{ color: "#adb5bd" }}
            />
          </FormControl>
          <FormControl sx={{ flex: 1 }}>
            <FormLabel sx={{ color: "white" }}>Last Name</FormLabel>
            <Input
              name="lastName"
              type="text"
              placeholder="Enter your last name"
              sx={{ color: "#adb5bd" }}
            />
          </FormControl>
        </Box>

        <FormControl>
          <FormLabel sx={{ color: "white" }}>Email</FormLabel>
          <Input
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
          Sign up
        </Button>
        <Typography
          endDecorator={
            <Link
              onClick={onClose}
              sx={{ color: "#2fa8fe", cursor: "pointer" }}
            >
              Log in
            </Link>
          }
          fontSize="sm"
          sx={{
            alignSelf: "center",
            color: "white",
          }}
        >
          Already have an account?
        </Typography>
      </Sheet>
    </CssVarsProvider>
  );
}
