import React from "react";

import Hero from "./hero";
import Halls from "./hallsdisplay";
import Header from "../_components/Header/Header";

const halls = () => {
    return (
        <div>
            <Header
                image="/HeaderAssets/img_header.png"
                title1="Halls"
                title2="luxury hotel"
            />
            <div className="px-8 lg:px-48">
                <Halls />
            </div>
        </div>
    );
};

export default halls;
