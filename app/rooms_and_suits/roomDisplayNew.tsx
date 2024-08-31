import React from "react";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Divider,
    Button,
    Link,
} from "@nextui-org/react";

import { RxArrowRight } from "react-icons/rx";

import BreakfastIcon from "./Icons/breakfastIcon";
import ClockIcon from "./Icons/clockIcon";
import PersonIcon from "./Icons/personIcon";
import WifiIcon from "./Icons/wifiIcon";
import SwimmingPool from "./Icons/swimmingPool";
import BedIcon from "./Icons/bedIcon";
import Image from "next/image";

const cardArray = [
    {
        imageArray: [
            {
                img: "/assets/rooms/rooms1.png", // Corrected image path
                alt: "",
            },
        ],
        price: "500/Night",
        room: "Budget Room",
        description:
            "Our Budget rooms  are second to none in this range with the vast options of services and amenities.",
        link: "/rooms_and_suits/budget_room",
    },
    {
        imageArray: [
            {
                img: "/assets/rooms/rooms2.png", // Corrected image path
                alt: "",
            },
        ],
        price: "1000/Night",
        room: "Deluxe Room",
        description:
            "The Deluxe Rooms at our hotel are designed to provide a comfortable space and relaxing stay for our guests.",
        link: "/rooms_and_suits/deluxe_room",
    },
    {
        imageArray: [
            {
                img: "/assets/rooms/rooms3.png", // Corrected image path
                alt: "",
            },
        ],
        price: "800/Night",
        room: "Family Room",
        description:
            "We present the best in line family rooms which will go soft on the pocket when you see the array of services.",
        link: "/rooms_and_suits/family_room",
    },
    {
        imageArray: [
            {
                img: "/assets/rooms/rooms4.png", // Corrected image path
                alt: "",
            },
        ],
        price: "1500/Night",
        room: "King Suite",
        description:
            "The King Suites offer a spacious and luxurious stay experience, ideal for guests seeking comfort and more.",
        link: "/rooms_and_suits/king_suit",
    },
];

const Service = () => {
    return (
        <>
            <section className="space-y-10">
                {cardArray
                    ?.reverse()
                    .map((ele, i) => (
                        <ServiceCard key={ele.room} {...ele} index={i} />
                    ))}
            </section>
        </>
    );
};

export default Service;

const ServiceCard = ({
    imageArray,
    price,
    room,
    description,
    link,
    index,
}: {
    imageArray: any;
    price: string;
    room: string;
    description: string;
    link: string;
    index: any;
}) => {
    return (
        <div className="group relative w-full">
            <div
                className={`lg:w-[60%] ${index % 2 === 0 ? "ml-auto" : "mr-auto"} overflow-clip`}
            >
                <Image
                    src={imageArray[0].img}
                    alt={imageArray[0].alt}
                    width={800}
                    height={500}
                    className="transition-all duration-200 group-hover:scale-110"
                />
            </div>

            <div
                className={`bottom-0 top-0 my-auto h-fit -translate-y-[2rem] p-4 lg:absolute lg:w-[50%] lg:translate-y-0 lg:p-0 ${
                    index === 0 || index % 2 === 0 ? "left-[0%]" : "right-[0%]"
                }`}
            >
                <Card radius="none" className="shadow-none">
                    <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                            <p className="font-gilda text-2xl">{room}</p>
                        </div>
                    </CardHeader>
                    <CardBody className="text-sm p-4">
                        <p>{description}</p>
                        <div className=" flex items-center justify-center py-4">
                            <div className="grid grid-cols-3 gap-4">
                                <p className="mt-2 flex items-center">
                                    <PersonIcon className="mr-2" /> 1-2 Persons
                                </p>
                                <p className="mt-2 flex items-center">
                                    <WifiIcon className="mr-2" /> Free WiFi
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
                                    <SwimmingPool className="mr-2" /> Swimming
                                    Pool
                                </p>
                            </div>
                        </div>
                    </CardBody>
                    <div className="flex items-center justify-center">
                        <Divider className="w-11/12" />
                    </div>
                    <CardFooter className="flex justify-between">
                        <Link href={link}>
                            <Button radius="none" variant="flat">
                                Details
                                <RxArrowRight />
                            </Button>
                        </Link>
                        <Link target="_blank" href="https://www.swiftbook.io/inst/#home?propertyId=963MTUJmY1lpZeCmz9rXlfH7YmoaIvdJKdXK4LhxJkZp0tg0ZSH9q9wNA==&JDRN=Y">
                            <Button
                                radius="none"
                                className="bg-[#AA8453] text-white hover:bg-black hover:text-white"
                            >
                                Book Now
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};
