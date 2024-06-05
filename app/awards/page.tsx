import React from "react";
import Hero from "./hero";
import Awards from "./display";
import Header from "./Header/Header";
import WhatClientsSay from "./WhatClientsSay/WhatClientsSay";

const awards = () => {
    return (
        <div>
            <Header
                image="/assets/awards/awards.png"
                title1=""
                title2=""
            />
            <Awards />
            <WhatClientsSay />
        </div>
    );
};

export default awards;
