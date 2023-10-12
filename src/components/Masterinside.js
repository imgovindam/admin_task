import React from "react";
import Cards from "./Cards";
import Graph from "./Graph";
import Tables from "./Tables";

const Masterinside = () => {
  return (
    <div>
      <div className="w-full bg-white">
        <Cards />
        <div>
          <Graph />
        </div>
        <div>
          <Tables />
        </div>
      </div>
    </div>
  );
};

export default Masterinside;
