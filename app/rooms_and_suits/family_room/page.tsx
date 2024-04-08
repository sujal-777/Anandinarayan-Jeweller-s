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
            <div className="flex min-h-screen flex-col items-stretch justify-center px-4 md:flex-row">
                <div className="hidden flex-grow bg-[url('../public/short_border.svg')] bg-contain bg-center bg-repeat md:w-1/12 lg:block lg:w-1/6"></div>
                <RoomPage src={src} room={title} desc1={para1} desc2={para2} />
                <div className="hidden flex-grow bg-[url('../public/short_border.svg')] bg-contain bg-center bg-repeat md:w-1/12 lg:block lg:w-1/6"></div>
            </div>
        </section>
    );
}
