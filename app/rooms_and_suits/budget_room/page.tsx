import React from "react";
import RoomPage from "../RoomPage";

const src = "/rooms/room4.png";
const title = "Deluxe Room";
const para1 =
    "Experience comfort and affordability at Hotel Ashok's budget room. Nestled in the heart of the city, our cozy accommodations provide a peaceful retreat for budget-conscious travelers. Enjoy a restful night's sleep in our well-appointed room, equipped with essential amenities for a pleasant stay. Immerse yourself in the local culture and explore nearby attractions, all within easy reach from our conveniently located hotel.";
const para2 =
    "At Hotel Ashok, we strive to offer a welcoming atmosphere without compromising on quality, making your stay both enjoyable and budget-friendly.";

export default function budget_room() {
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
