import React from "react";

import Hero from "./Hero/hero";
import Info from "./info";
import RoomsAndSuites from "./rooms-suites";
import WeddingEvent from "./wedding-event";
import CorporateTie from "./corporate-tie-ups";
import HomeServices from "./services";
import BookDirectBenefits from "./book-direct-benefits";
import Weddings from "./weddings";
import WhatClientsSay from "../_components/WhatClientsSay/WhatClientsSay";

const pageLayout = () => {
    return (
        <section className="font-gilda">
            <Hero />
            <Info />
            <RoomsAndSuites />
            <WeddingEvent />
            <CorporateTie />
            <HomeServices />
            <BookDirectBenefits />
            <Weddings />
            <WhatClientsSay />
        </section>
    );
};

export default pageLayout;
