import React from "react";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";

const Practice = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 ">
        <Navbar />
      </div>
      <div className="col-span-9 flex flex-col ">
        <div className="h-12">
          <Dashboard />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Practice;
