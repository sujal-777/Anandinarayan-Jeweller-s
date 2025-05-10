import React from "react";

import Hero from "./Hero/hero";
import Info from "./info";
import RoomsAndSuites from "./Rooms-Suites/rooms-suites";
import WeddingEvent from "./WeddingEvents/wedding-event";
// import CorporateTie from "./corporate-tie-ups";
import HomeServices from "./services";
import BookDirectBenefits from "./book-direct-benefits";
import Weddings from "./Weddings/weddings";
import WhatClientsSay from "../_components/WhatClientsSay/WhatClientsSay";
import Promotional from "./Promotional/Promotional";
// import TripAdvisor from "./TripAdvisor/TripAdvisor";

const pageLayout = () => {
    return (
        <section className="overflow-x-hidden font-barlow">
            <Hero />
            <Info />
            <RoomsAndSuites />
            <WeddingEvent />
            <Promotional />
            {/* <CorporateTie /> */}
            <HomeServices />
            <BookDirectBenefits />
            <Weddings />
            {/* <TripAdvisor /> */}
            <WhatClientsSay />
        </section>
    );
};

export default pageLayout;
