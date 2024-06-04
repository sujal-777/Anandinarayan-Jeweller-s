import React from "react";

import Hero from "./hero";
import Halls from "./hallsdisplay";
import Header from "../_components/Header/Header";

const halls = () => {
    return (
        <div>
            <Header
                title1="Our Services"
                title2="discover"
                image="/assets/header1.png"
            />
            <div className="px-8 lg:px-80">
                <Halls />
            </div>
        </div>
    );
};

export default halls;
