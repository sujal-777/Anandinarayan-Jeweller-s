import React from "react";

import { Button } from "@nextui-org/react";

import Check from "./Icons/checkIcon";
import ClockIcon from "./Icons/clockIcon";
import PersonIcon from "./Icons/personIcon";
import SwimmingPool from "./Icons/swimmingPool";
import BedIcon from "./Icons/bedIcon";
import BreakfastIcon from "./Icons/breakfastIcon";
import WifiIcon from "./Icons/wifiIcon";
import Link from "next/link";
import Image from "next/image";

interface RoomPageProps {
    src: string;
    room: string;
    desc1: string;
    desc2: string;
    images: string[];
}

const RoomPage: React.FC<RoomPageProps> = ({
    src,
    room,
    desc1,
    desc2,
    images,
}) => {
    return (
        <>
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
                <div className="col-span-2 space-y-4 font-barlow">
                    <div className="pb-8">
                        <p className="font-barlow uppercase tracking-widest text-[#666666]">
                            Hotel the nagpur Ashok
                        </p>
                        <h2
                            className="text-heading font-gilda"
                            style={{ color: "#000000" }}
                        >
                            {room}
                        </h2>
                    </div>
                    <div className="flex w-full">
                        <div className="w-full">
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
                    </div>
                    <br />
                    <div className="mt-5 lg:mt-0">
                        <p className="font-gilda text-[24px] text-[#222222]">
                            Special check-in instructions
                        </p>
                        <p>
                            Guests will receive an email 5 days before arrival
                            with check-in instructions; front desk staff will
                            greet guests on arrival For more details, please
                            contact the property using the information on the
                            booking confirmation.
                        </p>
                    </div>

                    <div className="mt-5">
                        <p className="font-gilda text-[24px] text-[#222222]">
                            Children and extra beds
                        </p>
                        <p>
                            Children are welcome Kids stay free! Children stay
                            free when using existing bedding; children may not
                            be eligible for complimentary breakfast
                            Rollaway/extra beds are available for $ 10 per day
                            according to policy.
                        </p>
                    </div>

                    <div className="mt-5">
                        <p className="font-gilda text-[24px] text-[#222222]">
                            Pets
                        </p>
                        <p>Pets not allowed</p>
                    </div>

                    <div className="mt-5 block lg:hidden">
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

                    <div className="mt-5 flex flex-col">
                        <div className="order-first md:order-last md:mt-4">
                            <Link
                                target="_blank"
                                href={
                                    "https://www.swiftbook.io/inst/#home?propertyId=963MTUJmY1lpZeCmz9rXlfH7YmoaIvdJKdXK4LhxJkZp0tg0ZSH9q9wNA==&JDRN=Y"
                                }
                            >
                                <Button
                                    radius="none"
                                    size="lg"
                                    className="bg-[#AA8453] p-4 text-center uppercase text-white hover:bg-black"
                                >
                                    CHECK NOW
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-5 hidden lg:block">
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
            </div>

            <div className="grid grid-cols-1 gap-4 py-10 md:grid-cols-2">
                {images.map((image, index) => {
                    return (
                        <div key={index} className="relative">
                            <Image
                                src={image}
                                alt="image"
                                width={1000}
                                height={1000}
                                className="h-full w-full"
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default RoomPage;
