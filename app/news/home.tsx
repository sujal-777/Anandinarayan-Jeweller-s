import React from "react";

import RightPanel from "./RightPanel";
import LeftPanel from "./LeftPanel";

const Home = () => {
    return (
        <>
            <div className="grid grid-cols-1 font-barlow lg:grid-cols-3 gap-4">
                {/* Left Side */}

                <div className="left lg:col-span-2 w-full">
                    <LeftPanel />
                </div>

                {/* Left Side  End*/}

                {/*  Right Side */}

                <div className=" w-full">
                    <RightPanel />
                </div>

                {/* Right Side end */}
            </div>
        </>
    );
};

export default Home;
