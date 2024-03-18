import React from "react";
import RoomPage from "../RoomPage";

const src = "/rooms/room2.png";
const title = "Family Room";
const para1 =
  "We present the best in line family rooms which will go soft on the pocket when you see the array of facilities and services it provides along with it. These rooms typically feature multiple beds or a combination of bed types to suit family needs.";
const para2 =
  "The rooms are equipped with modern amenities, including a flat-screen TV, mini-fridge, tea/coffee making facilities, and an en-suite bathroom with complimentary toiletries. Guests staying in Family Rooms can also enjoy additional perks such as complimentary breakfast and access to the hotel's recreational facilities.";

export default function family_room() {
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
