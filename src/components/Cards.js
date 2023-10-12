import React from "react";
import "./Cards.css";
import { motion } from "framer-motion";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { MdEventSeat } from "react-icons/md";
import Person2Icon from "@mui/icons-material/Person2";

const data = [
  {
    icon: (
      <MdEventSeat
        className="bg-[#343a40]  a rounded-lg"
        style={{ color: "white", fontSize: "3rem" }} // Adjust the fontSize here (e.g., "2rem")
      />
    ),
    light: "Today's Money",
    num: " $53k",
    value: -3,
    sum: "than last week",
  },
  {
    icon: (
      <Person2Icon
        className="bg-[#d63384] ab rounded-lg"
        fontSize="small"
        style={{ color: "white" }}
      />
    ),
    light: "Today's Users",
    num: 2200,
    value: +3,
    sum: "than last month",
    style: "text-green-500",
  },
  {
    icon: (
      <MdEventSeat
        className="bg-[#4caf50] abc rounded-lg"
        fontSize="extralarge"
        style={{ color: "white" }}
      />
    ),
    light: "New Clients",
    num: 3462,
    value: -2,
    sum: "than yesterday",
  },
  {
    icon: (
      <Person2Icon
        className="bg-[#1a73e8] abcd rounded-lg"
        fontSize="small"
        style={{ color: "white" }}
      />
    ),
    light: "Sales",
    num: " 103,430",
    value: +5,
    sum: "than yesterday",
  },
];

const Cards = () => {
  return (
    <>
      <div className=" mt-10 pt-4 ">
        <div className="flex   mt-4 justify-between ">
          {data.map((item, index) => {
            return (
              <div key={index}>
                <Card className=" p-1 m-1 w-[240px] h-[150px]  bg-white shadow-lg border rounded-lg py-4">
                  <CardBody>
                    {/* <MdEventSeat
                      className="bg-[#343a40] a rounded-lg"
                      fontSize={"extralarge"}
                      style={{ color: "white" }}
                    /> */}
                    <div> {item.icon} </div>

                    <Typography
                      variant=""
                      color="blue-gray"
                      className=" float-right "
                    >
                      <p className="font-light  text-gray-400">{item.light}</p>
                      <span className="font-bold text-[22px]  ">
                        {item.num}
                      </span>
                    </Typography>
                    <Typography className=""></Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <p className="font-sans text-zinc-400">
                      {" "}
                      {item.value > 0 ? (
                        <span className={`font-bold text-green-500`}>
                          {item.value}%
                        </span>
                      ) : (
                        <span className={`font-bold ${item.style}`}>
                          {item.value}%
                        </span>
                      )}
                      {item.sum}
                    </p>
                  </CardFooter>
                </Card>
              </div>
            );
          })}
          {/* <Card className="  p-1 m-1 w-[240px] h-[150px] shadow-xl bg-white border rounded-lg">
            <CardBody>
              <Person2Icon
                className="bg-[#d63384] ab rounded-lg"
                fontSize="small"
                style={{ color: "white" }}
              />
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 float-right "
              >
                <p className="font-light  text-gray-400">Today's Users</p>
                <span className="font-bold  text-[22px] ">2,200</span>
              </Typography>

              <Typography className="border-b"></Typography>
            </CardBody>
            <CardFooter className="pt-0 ">
              <p className="font-sans text-zinc-400">
                {" "}
                <span className="text-green-500 font-bold">+3% </span> than last
                month{" "}
              </p>
            </CardFooter>
          </Card>
          <Card className="  p-1 m-1 w-[240px] h-[150px] shadow-xl bg-white border rounded-lg">
            <CardBody>
              <MdEventSeat
                className="bg-[#4caf50] abc rounded-lg"
                fontSize="extralarge"
                style={{ color: "white" }}
              />
              <Typography
                variant="h5"
                color="blue-gray"
                className=" float-right "
              >
                <p className="font-light text-gray-400">New Clients</p>
                <span className="font-bold  text-[22px] leading-loose">
                  32,00
                </span>
              </Typography>
              <Typography></Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <p className="font-sans text-zinc-400">
                {" "}
                <span className="text-green-500 font-bold">+3% </span> than last
                month{" "}
              </p>
            </CardFooter>
          </Card>
          <Card className="  p-1 m-1 w-[240px] h-[150px] shadow-xl bg-white border rounded-lg">
            <CardBody>
              <Person2Icon
                className="bg-[#1a73e8] abcd rounded-lg"
                fontSize="small"
                style={{ color: "white" }}
              />
              <Typography
                variant="h5"
                color="blue-gray"
                className=" float-right"
              >
                <p className="font-light  text-gray-400">Today's Sales</p>
                <span className="font-bold  text-[22px] leading-loose">
                  $53,234
                </span>
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 ">
              <p className="font-sans text-zinc-400">
                <span className="text-green-500 font-bold">+3% </span> than last
                month
              </p>
            </CardFooter>
          </Card> */}
        </div>
      </div>
    </>
  );
};

export default Cards;
