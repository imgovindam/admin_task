import React from "react";
import Func from "./Func";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import { Avatar } from "@material-tailwind/react";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";
// import { Switch } from "@material-tailwind/react";
import Switch from "@mui/material/Switch";
import {
  List,
  ListItem,
  ListItemPrefix,
  Card,
  Typography,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import Images from "./Images";

const Profile = () => {
  return (
    <div>
      <Func
        Navbar={<Navbar text="Profile/Profile" />}
        Dashboard={<Dashboard />}
        Content={
          <div>
            <div>
              <img
                className="bg-cover bg-no-repeat bg-center h-64 px-2 mt-2 w-full rounded-3xl"
                src="https://images.unsplash.com/photo-1528465424850-54d22f092f9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="cover"
              />
            </div>
            <div className="grid grid-cols-12 justify-ends space-x-7   p-2">
              <div className="flex w-full col-span-6">
                <Avatar
                  size="lg"
                  alt="avatar"
                  src="https://www.material-tailwind.com/img/face-2.jpg"
                  className="border h-20 border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
                />
                <div className="flex flex-col   px-2 py-2">
                  <span className="font-sans font-bold text-lg text-zinc-700">
                    Richard Davis
                  </span>
                  <span className="text-sm text-zinc-500">
                    CEO / Co-Founder
                  </span>
                </div>
              </div>
              <div className=" flex col-span-6 justify-evenly text-center items-center px-2 py-2">
                <ul className="flex  ">
                  <span className="mx-2">
                    <HomeIcon fontSize="small" style={{ color: "black" }} />
                  </span>

                  <li className="font-sans font-medium text-gray-500">App</li>
                </ul>
                <ul className="flex   ">
                  <span className="mx-2">
                    <EmailIcon fontSize="small" style={{ color: "black" }} />
                  </span>

                  <li className="font-sans font-medium text-gray-500">
                    Message
                  </li>
                </ul>
                <ul className="flex   ">
                  <span className="mx-2">
                    <SettingsIcon fontSize="small" style={{ color: "black" }} />
                  </span>

                  <li className="font-sans font-medium text-gray-500">
                    Settings
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-12 ">
              <div className="col-span-4 h-full ">
                <div className="flex flex-col p-2 m-2">
                  <h2 className="font-sans font-bold text-gray-600 text-[17px] m-2">
                    Platform Settings
                  </h2>
                  <div className="font-sans font-medium text-gray-600 text-sm m-2">
                    ACCOUNT
                  </div>
                  <div className="flex ">
                    <span className="my-1">
                      <Switch defaultChecked color="default" />
                    </span>
                    <p className="flex font-sans font-normal text-gray-400 mx-2">
                      Email me when someone follows...
                    </p>
                  </div>
                  <div className="flex ">
                    <span>
                      <Switch defaultChecked color="default" />
                    </span>
                    <p className="flex font-sans font-normal text-gray-400 mx-2">
                      Email me when someone follows...
                    </p>
                  </div>
                  <div className="flex ">
                    <span>
                      <Switch defaultChecked color="default" />
                    </span>
                    <p className="flex font-sans font-normal text-gray-400 mx-2">
                      Email me when someone follows...
                    </p>
                  </div>
                  <h2 className="font-sans font-medium text-gray-600 text-sm mx-2 p-2">
                    APPLICATION
                  </h2>
                  <div className="flex py-2">
                    <span>
                      <Switch defaultChecked color="default" />
                    </span>
                    <p className="flex font-sans font-normal text-gray-400 mx-2 p-2">
                      New launches and projects{" "}
                    </p>
                  </div>
                  <div className="flex ">
                    <span>
                      <Switch defaultChecked color="default" />
                    </span>
                    <p className="flex font-sans font-normal text-gray-400 mx-2">
                      Monthly product updates{" "}
                    </p>
                  </div>
                  <div className="flex ">
                    <span>
                      <Switch defaultChecked color="default" />
                    </span>
                    <p className="flex font-sans font-normal text-gray-400 mx-2">
                      Subscribe to newsletter{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-4 ">
                <div className="flex flex-col p-2 m-2">
                  <h2 className="font-sans font-bold text-gray-600 text-[17px] m-2">
                    Profile Information{" "}
                  </h2>
                  <p className="text-sm text-gray-500">
                    Hi, I’m Alec Thompson, Decisions: If you can’t decide, the
                    answer is no. If two equally difficult paths, choose the one
                    more painful in the short term (pain avoidance is creating
                    an illusion of equality).
                  </p>
                  <div className="mt-6 ">
                    <p className="p-2">
                      {" "}
                      <span className="font-bold text-gray-700">
                        Full Name:
                      </span>{" "}
                      Alec M. Thompson
                    </p>
                    <p className="p-2">
                      {" "}
                      <span className="font-bold text-gray-700">
                        Mobile::
                      </span>{" "}
                      (44) 123 1234 123
                    </p>
                    <p className="p-2">
                      {" "}
                      <span className="font-bold text-gray-700">
                        Email:{" "}
                      </span>{" "}
                      alecthompson@mail.com
                    </p>
                    <p className="p-2">
                      {" "}
                      <span className="font-bold text-gray-700">
                        Location:{" "}
                      </span>{" "}
                      Begusarai
                    </p>
                    <p className="p-2">
                      {" "}
                      <span className="font-bold text-gray-700">
                        Social:{" "}
                      </span>{" "}
                      Alec M. Thompson
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-4  ">
                <div className="flex flex-col p-2 m-2">
                  <h2 className="font-sans font-bold text-gray-600 text-[17px] m-2">
                    Conversations
                  </h2>
                  <div>
                    <Card className="w-full">
                      <List>
                        <ListItem>
                          <ListItemPrefix>
                            <Avatar
                              className="mx-2"
                              variant="circular"
                              alt="candice"
                              src="https://demos.creative-tim.com/material-dashboard/assets/img/kal-visuals-square.jpg"
                            />
                          </ListItemPrefix>
                          <div>
                            <Typography variant="h6" color="blue-gray">
                              Tania Andrew
                            </Typography>
                            <Typography
                              variant="small"
                              color="gray"
                              className="font-normal"
                            >
                              Hi! I need more information..
                            </Typography>
                          </div>
                        </ListItem>
                        <ListItem>
                          <ListItemPrefix>
                            <Avatar
                              className="mx-2"
                              variant="circular"
                              alt="alexander"
                              src="https://demos.creative-tim.com/material-dashboard/assets/img/marie.jpg"
                            />
                          </ListItemPrefix>
                          <div>
                            <Typography variant="h6" color="blue-gray">
                              Alexander
                            </Typography>
                            <Typography
                              variant="small"
                              color="gray"
                              className="font-normal"
                            >
                              Awesome work, can you..
                            </Typography>
                          </div>
                        </ListItem>
                        <ListItem>
                          <ListItemPrefix>
                            <Avatar
                              className="mx-2"
                              variant="circular"
                              alt="emma"
                              src="https://demos.creative-tim.com/material-dashboard/assets/img/ivana-square.jpg"
                            />
                          </ListItemPrefix>
                          <div>
                            <Typography variant="h6" color="blue-gray">
                              Emma Willever
                            </Typography>
                            <Typography
                              variant="small"
                              color="gray"
                              className="font-normal"
                            >
                              About files I can..
                            </Typography>
                          </div>
                        </ListItem>
                        <ListItem>
                          <ListItemPrefix>
                            <Avatar
                              className="mx-2"
                              variant="circular"
                              alt="emma"
                              src="https://demos.creative-tim.com/material-dashboard/assets/img/team-3.jpg"
                            />
                          </ListItemPrefix>
                          <div>
                            <Typography variant="h6" color="blue-gray">
                              Emma Willever
                            </Typography>
                            <Typography
                              variant="small"
                              color="gray"
                              className="font-normal"
                            >
                              Have a great afternoon..
                            </Typography>
                          </div>
                        </ListItem>
                        <ListItem>
                          <ListItemPrefix>
                            <Avatar
                              className="mx-2"
                              variant="circular"
                              alt="emma"
                              src="https://demos.creative-tim.com/material-dashboard/assets/img/team-3.jpg"
                            />
                          </ListItemPrefix>
                          <div>
                            <Typography variant="h6" color="blue-gray">
                              Emma Willever
                            </Typography>
                            <Typography
                              variant="small"
                              color="gray"
                              className="font-normal"
                            >
                              Hi! I need more information.
                            </Typography>
                          </div>
                        </ListItem>
                      </List>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b mb-2 rounded-xl ">
              {" "}
              <div>
                <h2 className="font-sans font-bold text-gray-600 text-[17px] m-2">
                  Projects
                </h2>
                <span className="p-2 text-gray-500 font-thin">
                  Architects design houses
                </span>
                <div className="grid grid-cols-12">
                  <Card className="mt-6 col-span-3 ">
                    <CardHeader color="blue-gray" className="relative h-30">
                      <img
                        className="mt-2 rounded-lg"
                        src="https://demos.creative-tim.com/material-dashboard/assets/img/home-decor-1.jpg"
                        alt="card"
                      />
                    </CardHeader>
                    <CardBody>
                      <Typography
                        // variant="h5"
                        color="blue-gray"
                        className="m-2 text-gray-500"
                      >
                        Project #2
                      </Typography>
                      <h2 className="font-sans font-bold text-gray-600 text-[20px] m-2">
                        Modern
                      </h2>
                      <Typography className="p-2 text-gray-500 font-normal">
                        As Uber works through a huge amount of internal
                        management turmoil.
                      </Typography>
                    </CardBody>
                    <CardFooter className="flex justify-between text-center items-center px-2 mx-2">
                      <Button className=" flex  text-center items-center px-2   h-8 border rounded-lg text-xs hover:text-red-400 border-red-400 text-red-600 font-bold">
                        VIEW PROJECT
                      </Button>
                      <Images />
                    </CardFooter>
                  </Card>
                  <Card className="mt-6 col-span-3 ">
                    <CardHeader color="blue-gray" className="relative h-30">
                      <img
                        className="mt-2 rounded-lg"
                        src="https://demos.creative-tim.com/material-dashboard/assets/img/home-decor-2.jpg"
                        alt="card"
                      />
                    </CardHeader>
                    <CardBody>
                      <Typography
                        // variant="h5"
                        color="blue-gray"
                        className="m-2 text-gray-500"
                      >
                        Project #2
                      </Typography>
                      <h2 className="font-sans font-bold text-gray-600 text-[20px] m-2">
                        Scandinavian
                      </h2>
                      <Typography className="p-2 text-gray-500 font-normal">
                        As Uber works through a huge amount of internal
                        management turmoil.
                      </Typography>
                    </CardBody>
                    <CardFooter className="flex justify-between text-center items-center px-2 mx-2">
                      <Button className=" flex  text-center items-center px-2   h-8 border rounded-lg text-xs hover:text-red-400 border-red-400 text-red-600 font-bold">
                        VIEW PROJECT
                      </Button>
                      <Images />
                    </CardFooter>
                  </Card>
                  <Card className="mt-6 col-span-3 ">
                    <CardHeader color="blue-gray" className="relative h-30">
                      <img
                        className="mt-2 rounded-lg"
                        src="https://demos.creative-tim.com/material-dashboard/assets/img/home-decor-3.jpg"
                        alt="card"
                      />
                    </CardHeader>
                    <CardBody>
                      <Typography
                        // variant="h5"
                        color="blue-gray"
                        className="m-2 text-gray-500"
                      >
                        Project #2
                      </Typography>
                      <h2 className="font-sans font-bold text-gray-600 text-[20px] m-2">
                        Minimalist
                      </h2>
                      <Typography className="p-2 text-gray-500 font-normal">
                        As Uber works through a huge amount of internal
                        management turmoil.
                      </Typography>
                    </CardBody>
                    <CardFooter className="flex justify-between text-center items-center px-2 mx-2">
                      <Button className=" flex  text-center items-center px-2   h-8 border rounded-lg text-xs hover:text-red-400 border-red-400 text-red-600 font-bold">
                        VIEW PROJECT
                      </Button>
                      <Images />
                    </CardFooter>
                  </Card>
                  <Card className="mt-6 col-span-3 ">
                    <CardHeader color="blue-gray" className="relative h-30">
                      <img
                        className="mt-2 rounded-lg"
                        src="https://demos.creative-tim.com/material-dashboard/assets/img/home-decor-1.jpg"
                        alt="card"
                      />
                    </CardHeader>
                    <CardBody>
                      <Typography
                        // variant="h5"
                        color="blue-gray"
                        className="m-2 text-gray-500"
                      >
                        Project #2
                      </Typography>
                      <h2 className="font-sans font-bold text-gray-600 text-[20px] m-2">
                        Gothic
                      </h2>
                      <Typography className="p-2 text-gray-500 font-normal">
                        As Uber works through a huge amount of internal
                        management turmoil.
                      </Typography>
                    </CardBody>
                    <CardFooter className="flex justify-between text-center items-center px-2 mx-2">
                      <Button className=" flex  text-center items-center px-2   h-8 border rounded-lg text-xs hover:text-red-400 border-red-400 text-red-600 font-bold">
                        VIEW PROJECT
                      </Button>
                      <Images />
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Profile;
