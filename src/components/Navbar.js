import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Person2Icon from "@mui/icons-material/Person2";
import StarBorderIcon from "@mui/icons-material/StarBorder";
const Navbar = ({ text }) => {
  return (
    <>
      <div className="flex  justify-between w-full bg-zinc-100  rounded-sm items-center border">
        <div className="w-full text-start flex justify-between ">
          <div className="flex flex-col font-sans font-semibold text-gray-600 p-2 m-2">
            {text}
          </div>
          <input
            color="indigo"
            label="Input Indigo"
            className="bg-slate-100 h-10 mt-2 p-2 mx-2  border font-sans border-gray-400 rounded-md"
            type="text"
            placeholder="Type here..."
          />
        </div>
        <div className="p-1 flex w-1/4 text-center items-center m-1 mx-8 h-10 border rounded-lg text-sm border-red-400 text-red-600 font-medium">
          <button className="hover:text-red-400">ONLINE BUILDER</button>
        </div>
        <div className="border-2 flex  cursor-pointer ">
          <span className="text-center flex items-center">
            <StarBorderIcon className="  " fontSize="small" />
          </span>
          <div className="p-2 text-center  font-sans text-xs font-medium">
            Star
          </div>
          <span className="border-l-2 border-gray-400 mx-2 text-xs p-2 hover:text-blue-500">
            10,143
          </span>
        </div>
        <div className="flex justify-end  w-1/2 cursor-pointer">
          <div>
            <span className="mx-2 font-sans font-semibold text-zinc-500 ">
              <SettingsIcon fontSize="sm" />
            </span>
          </div>
          <div>
            <span className="mx-1 font-sans font-semibold text-zinc-500">
              <NotificationsIcon fontSize="sm" />
            </span>
          </div>
          <div>
            <span className="mx-1 font-sans font-semibold text-gray-500">
              <Person2Icon fontSize="small" />
            </span>
            <span className="mx-1 font-sans font-semibold text-zinc-500">
              Sign in
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
