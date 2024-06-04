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
                title1="Rooms & Suite"
                title2="luxury hotel"
            />
            <div className="">
                <Room />
                {/* <Page /> */}
                <Search />
            </div>
        </section>
    );
}
