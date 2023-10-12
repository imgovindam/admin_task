import React from "react";
import Navbar from "./Navbar";

import Cards from "./Cards";
import Graph from "./Graph";
import Tables from "./Tables";
import Tabletwo from "./Tabletwo";
import Dashboard from "./Dashboard";
import Func from "./Func";
import Masterinside from "./Masterinside";

const Master = () => {
  return (
    <div>
      <Func
        Navbar={<Navbar text="Pages/Dashboard" />}
        Dashboard={<Dashboard />}
        Content={<Masterinside />}
      />
      {/* <div className="w-full bg-zinc-200">
        <Cards />
        <div>
          <Graph />
        </div>
        <div>
          <Tables />
        </div>
      </div> */}

      {/* <div>
        <Tabletwo/>
      </div> */}
      <div></div>
    </div>
  );
};

export default Master;
