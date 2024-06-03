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
            <Halls />
        </div>
    );
};

export default halls;
