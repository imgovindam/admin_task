import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Dashboard from "./Dashboard";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { Button } from "@material-tailwind/react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import CodeIcon from "@mui/icons-material/Code";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import CreditCardIcon from "@mui/icons-material/CreditCard";
// import KeyIcon from "@mui/icons-material/Key";
// import PaymentsIcon from "@mui/icons-material/Payments";

const Billing = () => {
  return (
    <>
      <div className="grid grid-cols-12 bg-zinc-100 mt-4">
        <div className="col-span-8  bg-zinc-100 mr-2 h-[60vh]">
          {/* <div className=" flex h-[250px] bg-blue-500 w-[82%]"> */}
          <div className="flex w-full bg-zinc-100 justify-around ">
            <img
              className="h-[230px]"
              src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-front.png"
              alt="card"
            />
            {/* </div> */}

            <div className="flex  justify-between mr-3  w-[65%]">
              <div className="bg-white mr-2 h-[210px] mx-1 w-[160px] rounded-xl mt-4  text-center">
                <div className="m-4">
                  <HomeIcon
                    className="bg-[#d63384] rounded-lg"
                    style={{
                      fontSize: "60px",
                      color: "white",
                      padding: "10px",
                      margin: "1px",
                    }}
                  />
                </div>

                <div className="flex justify-evenly flex-wrap m-4 p-2">
                  <h4 className="font-semibold text-[18px] px-2">Salary</h4>
                  <p className="text-xs mt-2 text-gray-400">
                    Belong Interactive
                  </p>
                  <h2 className="mt-4 font-semibold text-[20px]">+$2000</h2>
                </div>
              </div>
              <div>
                <div className="bg-white h-[210px] w-[160px] rounded-xl mt-4 p-1 text-center">
                  <div className="mt-4">
                    <AccountBalanceWalletIcon
                      className="bg-[#d63384] rounded-lg"
                      style={{
                        fontSize: "60px",
                        color: "white",
                        padding: "10px",
                        margin: "1px",
                      }}
                    />
                  </div>
                  <div className="flex justify-evenly flex-wrap m-2 p-1">
                    <h4 className="font-semibold text-[18px] px-2">Salary</h4>
                    <p className="text-xs mt-2 text-gray-400">
                      Belong Interactive
                    </p>
                    <h2 className="mt-4 font-semibold text-[20px]">+$2000</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 mt-4  bg-white   border  rounded-lg ">
            <div className="p-2 col-span-12 rounded-lg m-2  shadow-lg h-[200px] ">
              <div className="flex justify-between  ">
                <h2 className=" font-sans font-bold mt-2 text-gray-600 text-[18px]">
                  Payment Method
                </h2>

                <div className="flex items-center p-2 px-2 m-2 rounded-lg bg-[#191919] ">
                  <a href="#buttons-with-link">
                    <Button variant="gradient">
                      <span className="text-[18px]">+ </span>ADD NEW CARD
                    </Button>
                  </a>
                </div>
              </div>
              <div className="p-2 m-2  flex   justify-around">
                <div className="  flex justify-around  bg-white  rounded-md  border-2 ">
                  <span>
                    <img
                      className="w-6 h-5 m-6 rounded-full"
                      src="https://demos.creative-tim.com/material-dashboard/assets/img/logos/mastercard.png"
                      alt="card"
                    />
                  </span>
                  <p className="p-3 m-3 font-semibold  w-[200px] h-10 rounded-lg ">
                    **** **** **** 1234
                  </p>
                  <button className="p-2 m-2">
                    <EditIcon />
                  </button>
                </div>
                <div className="  flex justify-between  bg-white rounded-md border-2 ">
                  <span>
                    <img
                      className="w-6 h-5 m-6 rounded-full"
                      src="https://demos.creative-tim.com/material-dashboard/assets/img/logos/visa.png"
                      alt="card1"
                    />
                  </span>
                  <p className="p-3 m-3 font-semibold text-center  w-[200px] h-10  rounded-lg ">
                    **** **** **** 1222
                  </p>
                  <button className="p-2 m-2">
                    <EditIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" p-2  m-2  ">
            <h3 className=" bg-white font-sans font-semibold">
              Billing Information
            </h3>
          </div>
          <div className="bg-zinc-100 w-full rounded-lg  mt-2   grid grid-cols-12 h-[100vh]">
            <div className="col-span-7 p-2 m-2 mt-2">
              <h3 className="font-semibold">Oliver Liam</h3>
              <div className="mt-2">
                <p className="font-sans text-[12px]  ">
                  <span className="text-gray-500">Company Name:</span>
                  <span className="font-semibold mx-2"> Viking Burrito </span>
                </p>
                <p className="font-sans text-[12px]">
                  <span className="text-gray-500">Email Address: </span>
                  <span className="font-semibold mx-2">
                    oliver@burrito.com{" "}
                  </span>
                </p>
                <p className="font-sans text-[12px]">
                  <span className="text-gray-500">VAT Number:</span>
                  <span className="font-semibold mx-2"> FRB1235476</span>
                </p>
              </div>
            </div>
            <div className="col-span-2 mt-10">
              <button>
                <span className="mx-2">
                  <DeleteIcon fontSize="sm" style={{ color: "red" }} />
                </span>
                Delete
              </button>
            </div>
            <div className="col-span-3 mt-10 mx-2">
              <button className="mx-2">
                <span className="mx-2">
                  <EditIcon fontSize="sm" />
                </span>
                Edit
              </button>
            </div>
            <div className="col-span-7 p-2 m-2 mt-2">
              <h3 className="font-semibold">Oliver Liam</h3>
              <div className="mt-2">
                <p className="font-sans text-[12px]  ">
                  <span className="text-gray-500">Company Name:</span>
                  <span className="font-semibold mx-2"> Viking Burrito </span>
                </p>
                <p className="font-sans text-[12px]">
                  <span className="text-gray-500">Email Address: </span>
                  <span className="font-semibold mx-2">oliver@burrito.com</span>
                </p>
                <p className="font-sans text-[12px]">
                  <span className="text-gray-500">VAT Number:</span>
                  <span className="font-semibold mx-2"> FRB1235476</span>
                </p>
              </div>
            </div>
            <div className="col-span-2 mt-10">
              <button>
                <span className="mx-2">
                  <DeleteIcon fontSize="sm" style={{ color: "red" }} />
                </span>
                Delete
              </button>
            </div>
            <div className="col-span-3 mt-10 mx-2">
              <button className="mx-2">
                <span className="mx-2">
                  <EditIcon fontSize="sm" />
                </span>
                Edit
              </button>
            </div>
            <div className="col-span-7 p-2 m-2 mt-2">
              <h3 className="font-semibold">Oliver Liam</h3>
              <div className="mt-2">
                <p className="font-sans text-[12px]  ">
                  <span className="text-gray-500">Company Name:</span>
                  <span className="font-semibold mx-2"> Viking Burrito </span>
                </p>
                <p className="font-sans text-[12px]">
                  <span className="text-gray-500">Email Address: </span>
                  <span className="font-semibold mx-2">
                    oliver@burrito.com{" "}
                  </span>
                </p>
                <p className="font-sans text-[12px]">
                  <span className="text-gray-500">VAT Number:</span>
                  <span className="font-semibold mx-2"> FRB1235476</span>
                </p>
              </div>
            </div>
            <div className="col-span-2 mt-10">
              <button>
                <span className="mx-2">
                  <DeleteIcon fontSize="sm" style={{ color: "red" }} />
                </span>
                Delete
              </button>
            </div>
            <div className="col-span-3 mt-10 mx-2">
              <button className="mx-2">
                <span className="mx-2">
                  <EditIcon fontSize="sm" />
                </span>
                Edit
              </button>
            </div>
          </div>
          {/* <div className="bg-yellow-300  h-full mt-10 flex">
            <div>
              <p>Your Transactions</p>
            </div>
          </div> */}
        </div>
        <div className="col-span-4   rounded-lg ">
          <div className="w-[320px] flex h-[70vh]  flex-col p-2 m-2 rounded-xl bg-zinc-100">
            <div className="flex justify-between">
              <p className="font-semibold p-2">Invoice </p>
              <button className="p-2 m-2 border rounded-lg text-sm border-red-400 text-red-600 font-medium">
                View All
              </button>
            </div>
            <div className=" w-full  bg-gray-50">
              <div className="flex justify-between p-2 m-2">
                <p className="font-semibold">
                  March, 01, 2020
                  <p className="font-normal text-gray-300 text-xs">
                    #MS-415646
                  </p>
                </p>{" "}
                <span className="text-gray-400">$180 </span>
                <span className="font-semibold">
                  <PictureAsPdfIcon />
                  pdf
                </span>
              </div>
              <div className="flex justify-between p-2 m-2">
                <p className="font-semibold">
                  March, 01, 2020{" "}
                  <p className="font-normal text-gray-300 text-xs">
                    #MS-415646
                  </p>
                </p>{" "}
                <span className="text-gray-400">$180 </span>
                <span className="font-semibold">
                  <PictureAsPdfIcon />
                  pdf
                </span>
              </div>
              <div className="flex justify-between p-2 m-2">
                <p className="font-semibold">
                  March, 01, 2020
                  <p className="font-normal text-gray-300 text-xs">
                    #MS-415646
                  </p>
                </p>{" "}
                <span className="text-gray-400">$180 </span>
                <span className="font-semibold">
                  <PictureAsPdfIcon />
                  pdf
                </span>
              </div>
              <div className="flex justify-between p-2 m-2">
                <p className="font-semibold">
                  March, 01, 2020{" "}
                  <p className="font-normal text-gray-300 text-xs">
                    #MS-415646
                  </p>
                </p>{" "}
                <span className="text-gray-400">$180 </span>
                <span className="font-semibold">
                  <PictureAsPdfIcon />
                  pdf
                </span>
              </div>
              <div className="flex justify-between p-2 m-2">
                <p className="font-semibold">
                  March, 01, 2020{" "}
                  <p className="font-normal text-gray-300 text-xs">
                    #MS-415646
                  </p>
                </p>{" "}
                <span className="text-gray-400">$180 </span>
                <span className="font-semibold">
                  <PictureAsPdfIcon />
                  pdf
                </span>
              </div>
            </div>
          </div>
          <div className="bg-zinc-100 rounded-lg p-2   h-[100vh] mt-10">
            <div className=" m-4 p-2">
              <p className="flex justify-between ">
                <span className="font-sans font-semibold">
                  Your Transaction's
                </span>
                <CalendarMonthIcon />
                <span className="text-sm  text-gray-400">
                  23- 30 March 2020
                </span>
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="font-medium text-sm text-gray-500">NEWEST</h3>
              <div className="flex justify-between p-1 m-1">
                <div className="flex ">
                  <ExpandCircleDownOutlinedIcon
                    style={{ color: "red" }}
                    className="mx-1"
                  />
                  <div className="flex flex-col">
                    <div>
                      <span className="font-medium text-sm m-2"> Netflix</span>
                    </div>
                    <span className="font-thin text-xs p-1 text-gray-400">
                      27 March 2020, at 12:30 PM
                    </span>
                  </div>
                </div>
                <div>
                  <span className="font-semibold text-red-400">- $ 2,500</span>
                </div>
              </div>
              <div className="flex justify-between p-1 m-1">
                <div className="flex ">
                  <ArrowCircleUpIcon
                    style={{ color: "green" }}
                    className="mx-1"
                  />
                  <div className="flex flex-col">
                    <div>
                      <span className="font-medium text-sm m-2"> Apple</span>
                    </div>
                    <span className="font-thin text-xs p-1 text-gray-400">
                      27 March 2020, at 12:30 PM
                    </span>
                  </div>
                </div>
                <div>
                  <span className="font-semibold text-green-400">
                    + $ 2,500
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="font-medium text-sm text-gray-500">YESTERDAY</h3>
              <div className="flex justify-between p-1 m-1">
                <div className="flex ">
                  <ExpandCircleDownOutlinedIcon
                    style={{ color: "red" }}
                    className="mx-1"
                  />
                  <div className="flex flex-col">
                    <div>
                      <span className="font-medium text-sm m-2"> Stripe</span>
                    </div>
                    <span className="font-thin text-xs p-1 text-gray-400">
                      27 March 2020, at 12:30 PM
                    </span>
                  </div>
                </div>
                <div>
                  <span className="font-semibold text-red-400">- $ 2,500</span>
                </div>
              </div>
              <div className="flex justify-between p-1 m-1">
                <div className="flex ">
                  <ArrowCircleUpIcon
                    style={{ color: "green" }}
                    className="mx-1"
                  />
                  <div className="flex flex-col">
                    <div>
                      <span className="font-medium text-sm m-2">HubSpot</span>
                    </div>
                    <span className="font-thin text-xs p-1 text-gray-400">
                      27 March 2020, at 12:30 PM
                    </span>
                  </div>
                </div>
                <div>
                  <span className="font-semibold text-green-400">$ 2,500</span>
                </div>
              </div>
              <div className="flex justify-between p-1 m-1">
                <div className="flex ">
                  <ArrowCircleUpIcon
                    style={{ color: "green" }}
                    className="mx-1"
                  />
                  <div className="flex flex-col">
                    <div>
                      <span className="font-medium text-sm m-2">
                        Creative Tim
                      </span>
                    </div>
                    <span className="font-thin text-xs p-1 text-gray-400">
                      27 March 2020, at 12:30 PM
                    </span>
                  </div>
                </div>
                <div>
                  <span className="font-semibold text-green-400">$ 2,500</span>
                </div>
              </div>
              <div className="flex justify-between p-1 m-1">
                <div className="flex ">
                  <ErrorOutlineOutlinedIcon className="mx-1" />
                  <div className="flex flex-col">
                    <div>
                      <span className="font-medium text-sm m-2">Webflow </span>
                    </div>
                    <span className="font-thin text-xs p-1 text-gray-400">
                      27 March 2020, at 12:30 PM
                    </span>
                  </div>
                </div>
                <div>
                  <span className="font-semibold text-gray-400">Pending</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* </div>
    </div> */}
      {/* <div className="flex w-full  h-[100vh] bg-gray-200">
        <Dashboard />
        <div className="flex flex-col">
        <div className=" flex h-[250px] bg-blue-500 w-[82%]">

          <div className="flex ">
            <img
              className="h-[250px] w-full "
              src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-front.png"
              alt="card"
            />
          </div>

          <div className="flex  justify-evenly w-[60%]  ">
            <div className="bg-white h-[210px] mx-1 w-[160px] rounded-xl mt-4  text-center">
              <div className="m-4">
                <HomeIcon
                  className="bg-[#d63384] rounded-lg"

                  style={{
                    fontSize: "60px",
                    color: "white",
                    padding: "10px",
                    margin: "1px",
                  }}
                />
              </div>
              <div className="flex justify-evenly flex-wrap m-4 p-2">
                <h4 className="font-semibold text-[18px] px-2">Salary</h4>
                <p className="text-xs mt-2 text-gray-400">Belong Interactive</p>
                <h2 className="mt-4 font-semibold text-[20px]">+$2000</h2>
              </div>
            </div>
            <div>
              <div className="bg-white h-[210px] w-[160px] rounded-xl mt-4 p-1 text-center">
                <div className="mt-4">
                  <AccountBalanceWalletIcon
                    className="bg-[#d63384] rounded-lg"

                    style={{
                      fontSize: "60px",
                      color: "white",
                      padding: "10px",
                      margin: "1px",
                    }}
                  />
                </div>
                <div className="flex justify-evenly flex-wrap m-2 p-1">
                  <h4 className="font-semibold text-[18px] px-2">Salary</h4>
                  <p className="text-xs mt-2 text-gray-400">
                    Belong Interactive
                  </p>
                  <h2 className="mt-4 font-semibold text-[20px]">+$2000</h2>
                </div>
              </div>
            </div>
          </div>
        </div>zxczxc</div>
        <div className="w-[500px] flex h-[70vh]  flex-col p-2 m-2 rounded-xl bg-white">
          <div className="flex justify-between">
            <p className="font-semibold p-2">Invoice </p>{" "}
            <button className="p-2 m-2 border rounded-lg text-sm border-red-400 text-red-600 font-medium">
              View All
            </button>
          </div>
          <div className=" w-full  bg-gray-50">
            <div className="flex justify-between p-2 m-2">
              <p className="font-semibold">
                March, 01, 2020
                <p className="font-normal text-gray-300 text-xs">#MS-415646</p>
              </p>{" "}
              <span className="text-gray-400">$180 </span>
              <span className="font-semibold">
                <PictureAsPdfIcon />
                pdf
              </span>
            </div>
            <div className="flex justify-between p-2 m-2">
              <p className="font-semibold">
                March, 01, 2020{" "}
                <p className="font-normal text-gray-300 text-xs">#MS-415646</p>
              </p>{" "}
              <span className="text-gray-400">$180 </span>
              <span className="font-semibold">
                <PictureAsPdfIcon />
                pdf
              </span>
            </div>
            <div className="flex justify-between p-2 m-2">
              <p className="font-semibold">
                March, 01, 2020
                <p className="font-normal text-gray-300 text-xs">#MS-415646</p>
              </p>{" "}
              <span className="text-gray-400">$180 </span>
              <span className="font-semibold">
                <PictureAsPdfIcon />
                pdf
              </span>
            </div>
            <div className="flex justify-between p-2 m-2">
              <p className="font-semibold">
                March, 01, 2020{" "}
                <p className="font-normal text-gray-300 text-xs">#MS-415646</p>
              </p>{" "}
              <span className="text-gray-400">$180 </span>
              <span className="font-semibold">
                <PictureAsPdfIcon />
                pdf
              </span>
            </div>
            <div className="flex justify-between p-2 m-2">
              <p className="font-semibold">
                March, 01, 2020{" "}
                <p className="font-normal text-gray-300 text-xs">#MS-415646</p>
              </p>{" "}
              <span className="text-gray-400">$180 </span>
              <span className="font-semibold">
                <PictureAsPdfIcon />
                pdf
              </span>
            </div>
          </div>
        </div>
      </div>
        <div>uhkfdjlmlfdvflfd</div> */}
    </>
  );
};

export default Billing;
