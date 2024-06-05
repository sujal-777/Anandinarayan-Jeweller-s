import React from "react";

import Hero from "./hero";
import Content from "./content";
import Header from "./Header/Header";
import WhatClientsSay from "./WhatClientsSay/WhatClientsSay";

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
