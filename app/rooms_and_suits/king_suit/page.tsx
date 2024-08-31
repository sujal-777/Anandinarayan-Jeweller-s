import React from "react";
import RoomPage from "../RoomPage";
import Hero from "../Hero/hero";
import RoomsAndSuites from "../Rooms-Suites/rooms-suites";
import WhatClientsSay from "../WhatClientsSay/WhatClientsSay";

const src = "/rooms/room1.png";
const title = "King Suite";
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
    const slides = [
        "/assets/rooms/king1.png",
        "/assets/rooms/king2.png",
        "/assets/rooms/king3.png",
    ];
    return (
        <section>
            <Hero slides={slides} title="King Suite" />
            <div className="px-8 py-10 lg:px-48">
                <RoomPage src={src} room={title} desc1={para1} desc2={para2} images={[
                    "/assets/rooms/king-room-1.jpeg",
                    "/assets/rooms/king-room-2.jpeg",
                    "/assets/rooms/king-room-3.jpeg",
                    "/assets/rooms/king-room-4.jpeg",
                    
                ]} />
            </div>
            <RoomsAndSuites />
            <WhatClientsSay />
        </section>
    );
}
