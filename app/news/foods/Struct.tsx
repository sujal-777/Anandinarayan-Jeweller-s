import React from "react";

import LeftSide from "./LeftSide";
import RightPanel from "../RightPanel";

const Struct = () => {
    return (
        <>
            <div className="flex w-full flex-col justify-center font-barlow md:flex-row ">
                {/* Left Side */}
                <div className="left w-full md:w-[65%]">
                    <LeftSide />
                </div>
                {/* Left Side  End*/}

                {/*  Right Side */}
                <div className="my-20 w-full md:w-[30%]">
                    <RightPanel />
                </div>
                {/* Right Side end */}
            </div>
        </>
    );
};

export default Struct;
