import React from "react";
// import ProgressBar from "@ramonak/react-progress-bar";
import { Slider } from "@material-tailwind/react";
const Completation = () => {
  // const mainDiv = {
  //     width: "120px",
  //     // height:"1px"
  // }
  return (
    <div>
      <div>
        <div className=" w-full   ">
          <Slider defaultValue={40} />
        </div>

        {/* <ProgressBar completed={30} bgColor="green" isLabelVisible={false} /> */}
        {/* <ProgressBar completed = {50} bgColor = "grey" animateOnRender = {true} /> */}
        {/* <br></br>
         <br></br>
         <ProgressBar completed = {90} bgColor = "red" animateOnRender = {true} isLabelVisible = {false} />
         <br></br>
         <ProgressBar completed = {90.1} bgColor = "black" />
         <br></br>
         <ProgressBar completed = {90.3} animateOnRender = {true} /> */}
      </div>
    </div>
  );
};

export default Completation;
