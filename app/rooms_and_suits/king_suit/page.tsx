import React from "react";
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

export default function king() {
    return (
        <section>
            <div className="flex min-h-screen flex-col items-stretch justify-center px-4 md:flex-row">
                <div className="hidden flex-grow bg-[url('../public/short_border.svg')] bg-contain bg-center bg-repeat md:w-1/12 lg:block lg:w-1/6"></div>
                <RoomPage src={src} room={title} desc1={para1} desc2={para2} />
                <div className="hidden flex-grow bg-[url('../public/short_border.svg')] bg-contain bg-center bg-repeat md:w-1/12 lg:block lg:w-1/6"></div>
            </div>
        </section>
    );
}
