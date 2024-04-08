import React from "react";

import {
    Image,
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

const cardArray = [
    {
        imageArray: [
            {
                img: "/rooms/king_suit.png", // Corrected image path
                alt: "",
            },
        ],
        price: "1500/Night",
        room: "King Suit",
        description:
            "The King Suites offer a spacious and luxurious stay experience, ideal for guests seeking comfort and more.",
        link: "/rooms_and_suits/king_suit",
    },
    {
        imageArray: [
            {
                img: "/rooms/family_room.png", // Corrected image path
                alt: "",
            },
        ],
        price: "800/Night",
        room: "Family Room",
        description:
            "We present the best in line family rooms which will go soft on the pocket when you see the array of...read more",
        link: "/rooms_and_suits/family_room",
    },
    {
        imageArray: [
            {
                img: "/rooms/deluxe_room.png", // Corrected image path
                alt: "",
            },
        ],
        price: "1000/Night",
        room: "Deluxe Room",
        description:
            "The Deluxe Rooms at our hotel are designed to provide a comfortable space and relaxing stay for...read more",
        link: "/rooms_and_suits/deluxe_room",
    },
    {
        imageArray: [
            {
                img: "/rooms/budget_room.png", // Corrected image path
                alt: "",
            },
        ],
        price: "500/Night",
        room: "Budget Room",
        description:
            "Our Budget rooms  are second to none in this range with the vast options of services and...read more",
        link: "/rooms_and_suits/budget_room",
    },
];

const Service = () => {
    return (
        <>
            <section className="mx-auto mt-12 flex w-11/12 max-w-[1600px] flex-col gap-y-0 font-barlow lg:mt-20 lg:gap-y-20 xl:w-10/12">
                {cardArray?.map((ele, i) => (
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
        <div
            className={` flex flex-col items-center justify-center ${
                index === 0 || index % 2 === 0
                    ? "lg:flex-row-reverse"
                    : "lg:flex-row"
            }`}
        >
            <div className="inline-block w-full md:w-10/12 lg:w-6/12">
                <div>
                    {imageArray?.map((ele: any, i: number) => (
                        <div key={i}>
                            <Image
                                src={ele.img}
                                alt={ele.alt}
                                radius="none"
                                className="h-auto max-w-full"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div
                className={`relative -top-5 z-10 inline-block w-11/12 bg-white text-sm md:w-8/12 lg:top-0 lg:w-5/12 ${
                    index === 0 || index % 2 === 0
                        ? "lg:-right-20"
                        : "lg:-left-20"
                }`}
            >
                <Card radius="none" className="">
                    <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                            <p className=" font-gilda text-lg text-[#AA8453] ">
                                {price}
                            </p>
                            <p className="font-gilda text-2xl">{room}</p>
                        </div>
                    </CardHeader>
                    <CardBody className="text-sm">
                        <p>{description}</p>
                        <div className=" flex items-center justify-center">
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
                        <Button
                            radius="none"
                            className="bg-[#AA8453] text-white"
                        >
                            Book Now
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};
