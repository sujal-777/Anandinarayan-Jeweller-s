import React from "react";

import Hero from "./hero";
import Director from "./director";
import Header from "../_components/Header/Header";
import { Industry } from "./industry";
import WhatClientsSay from "../_components/WhatClientsSay/WhatClientsSay";

const page = () => {
    return (
        <div>
            <Header
                title2="luxury hotel"
                title1="About us"
                image="/assets/header1.png"
            />
            <div
                className="home fixed left-0 top-0 z-[-1] h-screen w-screen"
                data-aos="fade-in"
                data-aos-delay="200"
            ></div>
            <div className=" px-8 py-20 lg:px-96 bg-white">
                <Industry />
                <Director />
            </div>
            <WhatClientsSay />
        </div>
    );
};

export default page;
