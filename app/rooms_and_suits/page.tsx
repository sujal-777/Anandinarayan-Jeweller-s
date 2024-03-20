import React from "react";

import Hero from "./hero";
// import Page from "./roomdisplay";
import Search from "./searchrooms";
import Room from "./roomDisplayNew";

export default function rooms() {
  return (
    <section>
      <Hero />
      <Room />
      {/* <Page /> */}
      <Search />
    </section>
  );
}
