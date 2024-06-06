import React from "react";
import Hero from "./hero";
import Awards from "./display";
import Header from "../_components/Header/Header";
import WhatClientsSay from "./WhatClientsSay/WhatClientsSay";

const awards = () => {
    return (
        <div>
            <Header
                image="/assets/awards/awards.png"
                title1="Awards"
                title2=""
            />
            <Awards />
            <WhatClientsSay bg="/assets/awards/awards.png" />
        </div>
    );
};

export default awards;
