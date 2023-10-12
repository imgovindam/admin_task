import React from "react";
import Func from "./Func";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Tabletwo from "./Tabletwo";

const Tab = () => {
  return (
    <div>
      {" "}
      <Func
        Navbar={<Navbar text="Table Page" />}
        Dashboard={<Dashboard />}
        Content={<Tabletwo />}
      />
    </div>
  );
};

export default Tab;
