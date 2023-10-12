import React, { useState } from "react";
import Dashboard from "./Dashboard";
import { Button } from "@material-tailwind/react";

const array = [
  {
    Menu: "A simple primary alert with an example link. Give it a click if you like.",
    style: "bg-black",
  },
  {
    Menu: "A simple primary alert with an example link. Give it a click if you like.",
    style: "bg-green-500",
  },
  {
    Menu: "A simple primary alert with an example link. Give it a click if you like.",
    style: "bg-purple-400",
  },
  {
    Menu: "A simple primary alert with an example link. Give it a click if you like.",
    style: "bg-red-400",
  },
  {
    Menu: "A simple primary alert with an example link. Give it a click if you like.",
    style: "bg-blue-400",
  },
  {
    Menu: "A simple primary alert with an example link. Give it a click if you like.",
    style: "bg-zinc-500",
  },
  {
    Menu: "A simple primary alert with an example link. Give it a click if you like.",
    style: "bg-blue-400",
  },
  {
    Menu: "A simple primary alert with an example link. Give it a click if you like.",
    style: "bg-purple-500",
  },
  {
    Menu: "A simple primary alert with an example link. Give it a click if you like.",
    style: "bg-red-300",
  },
  {
    Menu: "A simple primary alert with an example link. Give it a click if you like.",
    style: "bg-yellow-400",
  },
];

const Notificationinside = () => {
  const [data, setData] = useState(array);

  const removeTask = (index) => {
    const removeItem = data.filter((item, idx) => {
      return idx !== index;
    });
    setData(removeItem);

    console.log("removeTask");
  };
  return (
    <>
      <div>
        <div className="flex justify-center items-center flex-row">
          {/* <div>
            <Dashboard />
          </div> */}
          <div className="flex flex-col  items-center  ">
            <div className=" px-4  w-full  p-4 m-4 flex ">
              <div className="flex flex-col w-full  p-4 rounded-lg mt-4 shadow-lg border">
                <h1 className="font-semibold text-[20px]"> Alerts </h1>
                {data.map((item, index) => (
                  <div
                    key={item}
                    className={`${item.style} flex w-full items-center    h-14 mt-8    rounded-md`}
                  >
                    <p className="p-4 m-4  font-serif font-medium text-white h-20 text-center items-center flex justify-between w-full">
                      {item.Menu}
                      <span>
                        <button
                          className="    text-center rounded"
                          onClick={() => removeTask(index)}
                          style={{ color: "white" }}
                        >
                          X
                        </button>
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-40 rounded-lg shadow-md  bg-zinc-100">
              <div>
                <div className="font-semibold font-sans text-[20px] p-2 text-gray-600">
                  {" "}
                  Notifications{" "}
                </div>
                <div className="mx-2 font-serif font-thin text-gray-500">
                  Notifications on this page use Toasts from Bootstrap. Read
                  more details here.
                </div>
                <div className="flex m-2 p-2 text-[12px] items-center text-center justify-around font-bold text-gray-300  w-full">
                  <button className="border-2 mx-1 flex p-4 bg-green-500 items-center h-10 rounded-lg">
                    SUCCESS
                  </button>
                  <button className="border-2 mx-1 flex p-4 bg-blue-500 items-center h-10 rounded-lg">
                    INFO
                  </button>
                  <button className="border-2 mx-1 flex p-4 bg-yellow-500 items-center h-10 rounded-lg">
                    WARNING
                  </button>
                  <button className="border-2 mx-1 flex p-4 bg-red-500 items-center h-10 rounded-lg">
                    DANGER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notificationinside;
