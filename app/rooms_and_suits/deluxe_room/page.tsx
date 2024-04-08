import React from "react";
import RoomPage from "../RoomPage";

const src = "/rooms/room3.png";
const title = "Deluxe Room";
const para1 =
    "Our deluxe rooms  are second to none in this range with the vast options of services and facilities to provide a comfortable and memorable stay for our guests. Deluxe room are designed with contemporary style to cater basic needs of our travelling guests. Single bed or double bed available as per clients requirements in selected rooms.";
const para2 =
    "Each Deluxe Room is equipped with a plush king-size bed or twin beds, a flat-screen TV, a work desk, a mini-fridge, and tea/coffee making facilities. The en-suite bathroom is stocked with complimentary toiletries and features a shower & a bathtub.";

export default function deluxe_room() {
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
