import React from "react";

import Hero from "./hero";
import Industry from "./industry";
import Director from "./director";
import Header from "../_components/Header/Header";

const page = () => {
    return (
        <div>
            <Header
                title2="luxury hotel"
                title1="About us"
                image="/assets/header1.png"
            />
            <div className=" px-8 py-20 lg:px-40">
                <Industry />
                <Director />
            </div>
        </div>
    );
};

export default page;
