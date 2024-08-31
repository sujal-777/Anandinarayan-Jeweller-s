import React from "react";

import Hero from "./hero";
import Content from "./content";
import WhatClientsSay from "./WhatClientsSay/WhatClientsSay";
import Header from "../_components/Header/Header";

export default function page() {
    return (
        <>
            <Header
                title1="Feedback"
                title2=""
                image="/HeaderAssets/img_header.png"
            />
            <div className="">
                <Content />
                <WhatClientsSay />
            </div>
        </>
    );
}
