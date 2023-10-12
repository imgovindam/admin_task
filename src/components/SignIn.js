import React from "react";

import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import Person2Icon from "@mui/icons-material/Person2";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import Switch from "@mui/material/Switch";

const SignIn = () => {
  return (
    <div className="">
      {/* <img src="" alt="Mountain" /> */}

      <div className="flex back items-center bgImage flex-col   w-full justify-center fixed  h-[100vh]">
        <div className="items-center grid grid-cols-12 text-center  h-[8vh] rounded-2xl bg-gray-300">
          <div className="col-span-4 h-full cursor-pointer ">
            <h2 className="font-sans font-semibold text-center  px-2 py-2 m-1 text-gray-600">
              Material Dashboard 2{" "}
            </h2>
          </div>
          <div className="col-span-4 cursor-pointer flex text-center items-center justify-around h-full  text-gray-600">
            <span>
              <SpaceDashboardIcon />
              Dashboard
            </span>
            <span>
              <Person2Icon />
              Profile
            </span>
            <span>
              <AccountCircleIcon />
              Sign up
            </span>
            <span>
              <KeyIcon />
              Sign in
            </span>
          </div>
          <div className="col-span-4 h-full flex items-center text-center justify-evenly">
            <button className="px-4 flex  hover:text-red-400 text-center items-center m-1 mx-8 h-10 border rounded-lg text-sm border-red-400 text-red-600 font-medium">
              ONLINE BUILDER
            </button>
            <button className="px-5 hover:shadow-lg font-sans font-semibold flex  text-center items-center m-1 mx-8 h-10 border rounded-lg text-xs bg-black text-white ">
              FREE DOWNLOAD
            </button>
          </div>
        </div>
        <Card className="w-80 m-12 bg-zinc-100 p-2">
          <CardHeader
            variant="gradient"
            color="gray"
            className=" grid h-28  place-items-center bg-[#e91e63]"
          >
            <Typography
              variant="h3"
              className="text-[24px]   font-sans font-semibold"
            >
              Sign in
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col mt-4 gap-4 ">
            <Input
              className="px-2 py-2 rounded-lg outline-none bg-slate-200"
              placeholder="Email"
              // size="lg"
            />
            <Input
              className="px-2 py-2  rounded-lg outline-none bg-slate-200"
              placeholder="Password"
              // size=""
            />
            <div className="px-2 py-2">
              <Switch color="default" />
              <span className="font-sans font-medium text-sm">Remember me</span>
            </div>
          </CardBody>
          <CardFooter className=" pt-1">
            <Button className="p-3  bg-[#e91e63] w-full text-sm">
              SIGN IN
            </Button>
            <Typography variant="large" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;
