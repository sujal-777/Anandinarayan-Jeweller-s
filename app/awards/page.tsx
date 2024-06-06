import React from "react";
import Hero from "./hero";
import Awards from "./display";
import WhatClientsSay from "./WhatClientsSay/WhatClientsSay";
import Header from "../_components/Header/Header";

const awards = () => {
    return (
        <div>
            <Header
                image="/assets/awards/awards.png"
                title1="Awards"
                title2=""
            />
            <Awards />
            <WhatClientsSay />
        </div>
    );
};

export default awards;
