import React from "react";
import { Image } from "@nextui-org/react";
import RoomPage from "../RoomPage";

const src = "/rooms/room1.png";
const title = "King Suit";
const para1 = `The King Suites offer a spacious and luxurious stay experience,
              ideal for guests seeking comfort and elegance. These suites are
              designed with modern amenities and stylish decor, providing a
              relaxing environment. The added space and amenities, perfect for
              both leisure and business travelers looking for a touch of luxury
              during their stay.`;
const para2 = `The alpha room among the ones up for grabs at Hotel Ashok, the
              wooden floored king suite is the grandest and the majestic among
              the lot for our clients. Themed with Royal Italian, Mughal and
              Peshwa styled interiors and spacious comforting dining area the
              king suite is certainly a class above all. The king suite gives
              you the actual vibe about how a room is supposed to be in a luxury
              hotel`;

import Test from "../test";

export default function king() {
  return (
    <section>
      <div className="flex flex-col md:flex-row items-stretch justify-center min-h-screen px-4">
        <div className="hidden flex-grow lg:block md:w-1/12 lg:w-1/6 bg-[url('../public/short_border.svg')] bg-repeat bg-contain bg-center"></div>
        <RoomPage src={src} room={title} desc1={para1} desc2={para2} />
        <div className="hidden flex-grow lg:block md:w-1/12 lg:w-1/6 bg-[url('../public/short_border.svg')] bg-repeat bg-contain bg-center"></div>
      </div>
    </section>
  );
}
