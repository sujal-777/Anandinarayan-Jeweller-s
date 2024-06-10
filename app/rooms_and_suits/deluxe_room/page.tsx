import React from "react";
import RoomPage from "../RoomPage";
import RoomsAndSuites from "../Rooms-Suites/rooms-suites";
import WhatClientsSay from "../WhatClientsSay/WhatClientsSay";
import Hero from "../Hero/hero";

const src = "/rooms/room3.png";
const title = "Deluxe Room";
const para1 =
    "Our deluxe rooms  are second to none in this range with the vast options of services and facilities to provide a comfortable and memorable stay for our guests. Deluxe room are designed with contemporary style to cater basic needs of our travelling guests. Single bed or double bed available as per clients requirements in selected rooms.";
const para2 =
    "Each Deluxe Room is equipped with a plush king-size bed or twin beds, a flat-screen TV, a work desk, a mini-fridge, and tea/coffee making facilities. The en-suite bathroom is stocked with complimentary toiletries and features a shower & a bathtub.";

export default function deluxe_room() {
    const slides = [
        "/assets/rooms/duplex1.png",
        "/assets/rooms/duplex2.png",
        "/assets/rooms/duplex3.png",
    ];
    return (
        <section>
            <Hero slides={slides} title="Deluxe Room" />
            <div className="px-8 py-10 lg:px-48">
                <RoomPage
                    src={src}
                    room={title}
                    desc1={para1}
                    desc2={para2}
                    images={[
                        "/assets/rooms/deluxe-room-1.jpeg",
                        "/assets/rooms/deluxe-room-2.jpeg",
                        "/assets/rooms/deluxe-room-3.jpeg",
                        "/assets/rooms/deluxe-room-4.jpeg",
                    ]}
                />
            </div>
            <RoomsAndSuites />
            <WhatClientsSay />
        </section>
    );
}
