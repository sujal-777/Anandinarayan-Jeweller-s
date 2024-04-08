import React from "react";

import { Image, Button } from "@nextui-org/react";

import Check from "./Icons/checkIcon";
import ClockIcon from "./Icons/clockIcon";
import PersonIcon from "./Icons/personIcon";
import SwimmingPool from "./Icons/swimmingPool";
import BedIcon from "./Icons/bedIcon";
import BreakfastIcon from "./Icons/breakfastIcon";
import WifiIcon from "./Icons/wifiIcon";

interface RoomPageProps {
    src: string;
    room: string;
    desc1: string;
    desc2: string;
}

const RoomPage: React.FC<RoomPageProps> = ({ src, room, desc1, desc2 }) => {
    return (
        <div className="mb-48 mt-20 flex-grow px-5 font-barlow text-[15px] text-[#666666]">
            <div className="flex items-center justify-center lg:hidden">
                <Image
                    radius="none"
                    alt={src}
                    src={src}
                    className="flex h-auto max-w-full items-center justify-center p-5"
                />
            </div>
            <div>
                <p className="font-barlow text-[#222222] ">
                    HOTEL THE ASHOK NAGPUR
                </p>
                <p className="font-gilda text-[60px] text-[#222222] ">{room}</p>
            </div>
            <div className="flex w-full">
                <div className="w-full lg:w-1/2">
                    <div>
                        <p className="justify-text">
                            {desc1}
                            <br />
                            {desc2}
                        </p>
                    </div>
                    <div className="mt-6 flex flex-col justify-between md:flex-row">
                        <div>
                            <p className="font-gilda text-[24px] text-[#222222] ">
                                Check - in
                            </p>
                            <p className="flex">
                                <Check />
                                Check-in from 9:00 AM - anytime
                            </p>
                            <p className="flex">
                                <Check />
                                Early check-in subject to availability
                            </p>
                        </div>
                        <div>
                            <p className="font-gilda text-[24px] text-[#222222] ">
                                Check - out
                            </p>
                            <p className="flex">
                                <Check />
                                Check-out before noon
                            </p>
                            <p className="flex">
                                <Check />
                                Express check-out
                            </p>
                        </div>
                    </div>
                </div>
                <div className="hidden w-1/2 lg:block">
                    <div className="flex items-center justify-center p-5">
                        <Image
                            radius="none"
                            alt={src}
                            src={src}
                            className="h-auto max-w-full"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-5 lg:mt-0">
                <p className="font-gilda text-[24px] text-[#222222]">
                    Special check-in instructions
                </p>
                <p>
                    Guests will receive an email 5 days before arrival with
                    check-in instructions; front desk staff will greet guests on
                    arrival For more details, please contact the property using
                    the information on the booking confirmation.
                </p>
            </div>

            <div className="mt-5">
                <p className="font-gilda text-[24px] text-[#222222]">
                    Children and extra beds
                </p>
                <p>
                    Children are welcome Kids stay free! Children stay free when
                    using existing bedding; children may not be eligible for
                    complimentary breakfast Rollaway/extra beds are available
                    for $ 10 per day according to policy.
                </p>
            </div>

            <div className="mt-5">
                <p className="font-gilda text-[24px] text-[#222222]">Pets</p>
                <p>Pets not allowed</p>
            </div>

            <div className="mt-5 flex flex-col">
                <div className=" order-last mt-5 md:order-first lg:mt-0">
                    <p className="font-gilda text-[24px] text-[#222222]">
                        Amenities
                    </p>
                    <p className="mt-2 flex items-center">
                        <SwimmingPool className="mr-2" /> Swimming Pool
                    </p>
                    <p className="mt-2 flex items-center">
                        <BedIcon className="mr-2" /> Twin Bed
                    </p>
                    <p className="mt-2 flex items-center">
                        <BreakfastIcon className="mr-2" /> Breakfast
                    </p>
                    <p className="mt-2 flex items-center">
                        <ClockIcon className="mr-2" /> 200 sqft room
                    </p>
                    <p className="mt-2 flex items-center">
                        <WifiIcon className="mr-2" /> Free WiFi
                    </p>
                    <p className="mt-2 flex items-center">
                        <PersonIcon className="mr-2" /> 1-2 Persons
                    </p>
                </div>
                <div className="order-first md:order-last md:mt-4">
                    <Button
                        radius="none"
                        size="lg"
                        className="bg-[#AA8453] tracking-tight text-white"
                    >
                        CHECK NOW
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default RoomPage;
