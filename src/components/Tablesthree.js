import React from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import // ArrowDownTrayIcon,
// MagnifyingGlassIcon,
"@heroicons/react/24/outline";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CodeIcon from "@mui/icons-material/Code";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import KeyIcon from "@mui/icons-material/Key";
import PaymentsIcon from "@mui/icons-material/Payments";
import Completation from "./Completation";
import Images from "./Images";
import CheckIcon from "@mui/icons-material/Check";

import {
  Card,
  CardHeader,
  Typography,
  Avatar,
  CardBody,
  // Button,
  // Chip,
  // CardFooter,
  // IconButton,
  // Tooltip,
  // Input,
} from "@material-tailwind/react";
const TABLE_HEAD = ["Companies", "Budget", "status", "COMPLETION", ""];

const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/logo-asana.svg",
    name: "Asana",
    amount: "$2,500",
    date: "Wed 3:00pm",
    status: "paid",
    // account: "visa",

    accountNumber: "1234",
    expiry: "06/2026",
    // Members:"https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/logo-xd.svg"
  },
  {
    img: "https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/github.svg",
    name: "Github",
    amount: "$5,000",
    date: "Wed 1:00pm",
    status: "paid",

    // account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/logo-atlassian.svg",
    name: "Atlassian",
    amount: "$3,400",
    date: "Mon 7:40pm",
    status: "pending",

    // account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/bootstrap.svg",
    name: "Bootstrap",
    amount: "$1,000",
    date: "Wed 5:00pm",
    status: "paid",

    // account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/logo-slack.svg",
    name: "Slack",
    date: "Wed 3:30am",
    amount: "$14,000",
    status: "cancelled",

    // account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/devto.svg",
    name: "Devto",
    date: "Wed 3:30am",
    amount: "$14,000",
    status: "cancelled",

    // account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
];

const Tablesthree = () => {
  return (
    <div>
      <div>
        {" "}
        <div className="flex bg-zinc-100">
          <div className=" m-2 w-full mt-6 border rounded-xl">
            <Card className="h-full  mt-8 w-full">
              <div floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                  <div className="flex p-2 T1  rounded-lg bg-[#e91e63] h-20 text-center items-center font-serif text-white text-[20px] w-full  ">
                    <h1>Project Table </h1>
                  </div>
                </div>
                {/* <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                  <div>
                    <Typography variant="h5" color="blue-gray">
                      Projects
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                      <CheckIcon style={{ color: "blue" }} />{" "}
                      <span className="font-semibold">30 done </span> this month
                    </Typography>
                  </div>
                </div> */}
              </div>
              <CardBody className="overflow-scroll px-0">
                <table className="w-full min-w-max table-auto text-left">
                  <thead>
                    <tr>
                      {TABLE_HEAD.map((head) => (
                        <th
                          key={head}
                          className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                        >
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal leading-none opacity-70"
                          >
                            {head}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {TABLE_ROWS.map(({ img, name, amount, status }, index) => {
                      const isLast = index === TABLE_ROWS.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                      return (
                        <tr key={name}>
                          <td className={classes}>
                            <div className="flex items-center gap-3">
                              <Avatar
                                src={img}
                                alt={name}
                                size="md"
                                className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                              />
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-bold"
                              >
                                <div className="text-gray-500"> {name} </div>
                              </Typography>
                            </div>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <div className="font-semibold text-gray-400">
                                {amount}{" "}
                              </div>
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {/* <Images className="" /> */}
                              <div className="font-semibold text-gray-400">
                                {" "}
                                {status}
                              </div>
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Completation />
                            {/* <div className="w-max">
                              <Chip
                                size="sm"
                                variant="ghost"
                                value={status}
                                color={
                                  status === "paid"
                                    ? "green"
                                    : status === "pending"
                                    ? "amber"
                                    : "red"
                                }
                              />
                            </div> */}
                          </td>
                          <td className={classes}>
                            <div className="flex items-center gap-3">
                              {/* <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                   

                      </div> */}
                              {/* <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                                <Avatar
                                  src={
                                    account === "visa"
                                      ? "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
                                      : "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png"
                                  }
                                  size="sm"
                                  alt={account}
                                  variant="square"
                                  className="h-full w-full object-contain p-1"
                                />
                              </div> */}
                              {/* <div className="flex flex-col">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal capitalize"
                                >
                                  {account.split("-").join(" ")} {accountNumber}
                                </Typography>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal opacity-70"
                                >
                                  {expiry}
                                </Typography>
                              </div> */}
                            </div>
                          </td>
                          {/* <td className={classes}>
                            <Tooltip content="Edit User">
                              <IconButton variant="text">
                                <PencilIcon className="h-4 w-4" />
                              </IconButton>
                            </Tooltip>
                          </td> */}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </CardBody>
              {/* <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
              <Button variant="outlined" size="sm">
                Previous
              </Button> */}
              {/* <div className="flex items-center gap-2">
                <IconButton variant="outlined" size="sm">
                  1
                </IconButton>
                <IconButton variant="text" size="sm">
                  2
                </IconButton>
                <IconButton variant="text" size="sm">
                  3
                </IconButton>
                <IconButton variant="text" size="sm">
                  ...
                </IconButton>
                <IconButton variant="text" size="sm">
                  8
                </IconButton>
                <IconButton variant="text" size="sm">
                  9
                </IconButton>
                <IconButton variant="text" size="sm">
                  10
                </IconButton>
              </div> */}
              {/* <Button variant="outlined" size="sm">
                Next
              </Button>
            </CardFooter> */}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tablesthree;
