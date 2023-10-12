import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Graphone from "./Graphone";
import Graphtwo from "./Graphtwo";
import Graphthree from "./Graphthree";

const Graph = () => {
  return (
    <div className="m-2 p-2 bg-zinc-100">
      <div className="flex justify-between">
        <Card className="mt-6 w-[325px] h-[250px] p-2 m-2 rounded-lg">
          <Graphtwo />
          {/* <img
            className="bg-no-repeat bg-cover bg-center h-[180px]"
            src="https://docs.elixirtech.com/Ambience/2020/dashboards/designer/views/images/barChart-Main.png"
            alt="graph"
          /> */}
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Team performance
            </Typography>
            {/* <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography> */}
          </CardBody>
          <CardFooter className="pt-0"></CardFooter>
        </Card>
        <Card className="mt-6 w-[325px] h-[250px]  p-2 m-2 rounded-lg">
          <Graphone />
          {/* <img
            className="bg-no-repeat bg-cover bg-center h-[180px]"
            src="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content-gh/en/_mdb5/standard/web/docs/design-blocks/admin/charts/assets/2.webp"
            alt="graph"
          /> */}
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Inflation
            </Typography>
          </CardBody>
          <CardFooter className="pt-0"></CardFooter>
        </Card>
        <Card className="mt-6 w-[325px] h-[250px]  p-2 m-2 rounded-lg">
          <Graphthree />
          {/* <img
            className="bg-no-repeat bg-cover bg-center h-[180px]"
            src="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content-gh/en/_mdb5/standard/web/docs/design-blocks/admin/charts/assets/5.webp"
            alt="graph"
          /> */}
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Completed Tasks
            </Typography>
          </CardBody>
          <CardFooter className="pt-0"></CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Graph;
