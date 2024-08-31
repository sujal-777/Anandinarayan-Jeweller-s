import React from "react";

import Hero from "./hero";
import Mandolin from "./mandolin";
import Header from "../_components/Header/Header";

function page() {
    return (
        <>
            <Header
                title1="Frequently Asked Questions"
                title2="F. A. Q. s"
                image="/HeaderAssets/img_header.png"
            />
            <Mandolin />
        </>
    );
}

export default page;
