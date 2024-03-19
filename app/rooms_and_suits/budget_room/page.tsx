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
      <div className="flex flex-col md:flex-row items-stretch justify-center min-h-screen px-4">
        <div className="hidden flex-grow lg:block md:w-1/12 lg:w-1/6 bg-[url('../public/short_border.svg')] bg-repeat bg-contain bg-center"></div>
        <RoomPage src={src} room={title} desc1={para1} desc2={para2} />
        <div className="hidden flex-grow lg:block md:w-1/12 lg:w-1/6 bg-[url('../public/short_border.svg')] bg-repeat bg-contain bg-center"></div>
      </div>
    </section>
  );
}
