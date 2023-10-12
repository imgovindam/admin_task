import React from "react";

const Func = ({ Navbar, Dashboard, Content }) => {
  return (
    <div className="grid grid-cols-12 ">
      <div className="col-span-3">{Dashboard}</div>
      <div className="col-span-9 flex flex-col  ">
        <div className="h-12 w-full ">{Navbar}</div>
        <div className="w-full">{Content}</div>
      </div>
    </div>
  );
};

export default Func;
