import React from "react";

import Hero from "./hero";
import Info from "./info";
import RoomsAndSuites from "./rooms-suites";

const pageLayout = () => {
  return (
    <section>
      <Hero />
      <Info />
      <RoomsAndSuites />
    </section>
  );
};

export default pageLayout;
