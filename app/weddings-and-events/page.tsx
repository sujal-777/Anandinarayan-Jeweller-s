import React from "react";

import Hero from "./hero";
import Halls from "./hallsdisplay";
import Header from "../_components/Header/Header";
import Weddings from "./Weddings/Weddings";
import Corporate from "./Corporate/Corporate";

const halls = () => {
    return (
        <div>
            <Header
                image="/HeaderAssets/img_header.png"
                title1="Weddings & Events"
                title2="luxury hotel"
            />
            <div className="px-8 lg:px-48">
                <Halls />
            </div>
            <Weddings />
            <Corporate />
        </div>
    );
};

export default halls;
