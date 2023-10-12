import React, { useState } from "react";

import BackupTableIcon from "@mui/icons-material/BackupTable";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import FormatTextdirectionRToLIcon from "@mui/icons-material/FormatTextdirectionRToL";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Person2Icon from "@mui/icons-material/Person2";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import "./Dashboard.css";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    // <div className="flex flex-col">
    <div className="flex bg-zinc-100 rounded-lg p-2 ">
      <div className="bg-[#212529] cursor-pointer  text-white items-center text-center h-full mb-4 w-[280px] p-4 m-1 overflow-scroll fixed rounded-md">
        <div
          onClick={() => navigate("/")}
          className="font-sans text-white p-2 m-2 rounded font-medium  bg-[#e91e63] flex items-center"
        >
          <span className="mr-2">
            <SpaceDashboardIcon />
          </span>
          <p className="px-2 " label="Dashboard">
            Dashboard
          </p>
        </div>
        <div className="flex flex-col  justify-evenly  cursor-pointer w-full m-2 h-[60vh] items-center  font-sans text-[15px]">
          {/* <div className="flex m-2 p-2 justify-normal w-full py-2  hover:bg-gray-600 hover:rounded-lg "> */}
          <div
            className={`flex m-2 p-2 justify-normal w-full py-2 ${
              activeItem === "Tables" ? " bg-[#e91e63]" : "hover:bg-gray-600"
            } hover:rounded-lg`}
            onClick={() => {
              handleItemClick("Tables");
              navigate("/Tabletwo");
            }}
          >
            <span className="flex">
              <BackupTableIcon className="text-[30px] sidebar-item:hover" />
            </span>
            <span
              className="flex mx-4 px-1 "
              // onClick={() => {
              //   handleItemClick("Tables");
              //   navigate("/Tabletwo");
              // }}
            >
              Tables
            </span>
          </div>
          <div
            onClick={() => navigate("/Billing")}
            className="flex m-2 p-2  justify-normal w-full py-2  hover:bg-gray-600 hover:rounded-lg "
          >
            <span>
              <ReceiptLongIcon className="text-[30px]" />
            </span>
            <span className="flex mx-4 px-1" label="Billing">
              Billing
            </span>
          </div>
          <div className="flex m-2 p-2  justify-normal w-full  py-2  hover:bg-gray-600 hover:rounded-lg ">
            <span>
              <ViewInArIcon className="text-[30px]" />
            </span>
            <span className="flex mx-4 px-1">Virtual Reality</span>
          </div>
          <div className="flex m-2 p-2  justify-normal w-full  py-2  hover:bg-gray-600 hover:rounded-lg ">
            <span>
              <FormatTextdirectionRToLIcon className="text-[30px]" />
            </span>
            <span className="flex mx-4 px-1">RTL</span>
          </div>
          <div
            onClick={() => navigate("/Notification")}
            className="flex m-2 p-2  justify-normal w-full py-2  hover:bg-gray-600 hover:rounded-lg "
          >
            <span>
              <NotificationsIcon className="text-[30px]" />
            </span>
            <span className="flex mx-4 px-1">Notification</span>
          </div>
        </div>
        <div className="font-bold text-sm ">ACCOUNT PAGES</div>
        <div
          onClick={() => navigate("/Profile")}
          className="flex m-2 p-2  justify-normal w-full py-2  hover:bg-gray-600 hover:rounded-lg "
        >
          <span>
            <Person2Icon className="text-[30px]" />
          </span>
          <span className="flex mx-4 px-1"> Profile</span>
        </div>
        <div
          onClick={() => navigate("/SignIn")}
          className="flex m-2 p-2  justify-normal w-full py-2  hover:bg-gray-600 hover:rounded-lg "
        >
          <span>
            <ExitToAppIcon className="text-[30px]" />
          </span>
          <span className="flex mx-4 px-1"> Sign in</span>
        </div>
        <div className="flex m-2 p-2  justify-normal w-full py-2  hover:bg-gray-600 hover:rounded-lg ">
          <span>
            <AssignmentIcon className="text-[30px]" />
          </span>
          <span className="flex mx-4 px-1"> Sign up</span>
        </div>

        <div className="font-sans text-white p-2 m-2 rounded font-medium bg-[#e91e63] flex items-center">
          Upgrade to pro
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
