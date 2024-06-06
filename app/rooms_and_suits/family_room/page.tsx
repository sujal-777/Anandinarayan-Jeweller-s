import React from "react";
import RoomPage from "../RoomPage";
import Hero from "../Hero/hero";
import RoomsAndSuites from "../Rooms-Suites/rooms-suites";
import WhatClientsSay from "../WhatClientsSay/WhatClientsSay";

const src = "/rooms/room2.png";
const title = "Family Room";
const para1 =
    "We present the best in line family rooms which will go soft on the pocket when you see the array of facilities and services it provides along with it. These rooms typically feature multiple beds or a combination of bed types to suit family needs.";
const para2 =
    "The rooms are equipped with modern amenities, including a flat-screen TV, mini-fridge, tea/coffee making facilities, and an en-suite bathroom with complimentary toiletries. Guests staying in Family Rooms can also enjoy additional perks such as complimentary breakfast and access to the hotel's recreational facilities.";

export default function family_room() {
    const slides = [
        "/assets/rooms/family1.png",
        "/assets/rooms/family2.png",
        "/assets/rooms/family3.png",
    ];
    return (
        <section>
            <Hero slides={slides} title="Family Room" />
            <div className="px-8 py-10 lg:px-48">
                <RoomPage src={src} room={title} desc1={para1} desc2={para2} />
            </div>
            <RoomsAndSuites />
            <WhatClientsSay />
        </section>
    );
}
