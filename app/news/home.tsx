import React from "react";

import RightPanel from "./RightPanel";
import LeftPanel from "./LeftPanel";

const Home = () => {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row justify-center font-barlow ">
        {/* Left Side */}

        <div className="left w-full md:w-[65%]">
          <LeftPanel />
        </div>

        {/* Left Side  End*/}

        {/*  Right Side */}

        <div className="w-full md:w-[30%] my-20">
          <RightPanel />
        </div>

        {/* Right Side end */}
      </div>
    </>
  );
};

export default Home;
