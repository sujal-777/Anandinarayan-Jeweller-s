import React from "react";
import RoomPage from "../RoomPage";
import Hero from "../Hero/hero";
import RoomsAndSuites from "../Rooms-Suites/rooms-suites";
import WhatClientsSay from "../WhatClientsSay/WhatClientsSay";

const src = "/rooms/room4.png";
const title = "Budget Room";
const para1 =
    "Experience comfort and affordability at Hotel Ashok's budget room. Nestled in the heart of the city, our cozy accommodations provide a peaceful retreat for budget-conscious travelers. Enjoy a restful night's sleep in our well-appointed room, equipped with essential amenities for a pleasant stay. Immerse yourself in the local culture and explore nearby attractions, all within easy reach from our conveniently located hotel.";
const para2 =
    "At Hotel Ashok, we strive to offer a welcoming atmosphere without compromising on quality, making your stay both enjoyable and budget-friendly.";

export default function budget_room() {
    const slides = [
        "/assets/rooms/budget1.png",
        "/assets/rooms/budget2.png",
        "/assets/rooms/budget3.png",
    ];
    return (
        <section>
            <Hero slides={slides} title="Budget Room" />
            <div className="px-8 py-10 lg:px-48">
                <RoomPage
                    src={src}
                    room={title}
                    desc1={para1}
                    desc2={para2}
                    images={[
                        "/assets/rooms/budget-room-1.jpeg",
                        "/assets/rooms/budget-room-2.jpeg",
                    ]}
                />
            </div>
            <RoomsAndSuites />
            <WhatClientsSay />
        </section>
    );
}
