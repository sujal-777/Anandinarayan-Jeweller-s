import React from "react";

import Hero from "./hero";
// import Page from "./roomdisplay";
import Search from "./searchrooms";
import Room from "./roomDisplayNew";
import Header from "../_components/Header/Header";

export default function rooms() {
    return (
        <section className="">
            <Header
                image="/HeaderAssets/img_header.png"
                title1="Rooms & Suites"
                title2=""
            />
            <div className="px-8 py-20 md:px-48">
                <Room />
                {/* <Page /> */}
            </div>
            <div className="my-20 bg-[#F8F5F0] px-8 md:px-96">
                <Search />
            </div>
        </section>
    );
}
