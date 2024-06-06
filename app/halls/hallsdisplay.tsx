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

import PeopleIcon from "./Icons/people";
import SofaIcon from "./Icons/sofa";
import AreaIcon from "./Icons/area";
import Image from "next/image";

const cardArray = [
    {
        imageArray: [
            {
                img: "/halls/kohinoor.png", // Corrected image path
                alt: "Kohinoor Hall",
            },
        ],
        price: "150$/Night",
        hall: "Kohinoor",
        description:
            "A prestigious venue where every detail is tailored to perfection for your special day.",
        link: "/halls/kohinoor",
    },
    {
        imageArray: [
            {
                img: "/halls/maurya.png", // Corrected image path
                alt: "Maurya Hall",
            },
        ],
        price: "200$/Night",
        hall: "Maurya",
        description:
            "Maurya Wedding Event Hall at Hotel Ashok offers elegance and sophistication for your special day.",
        link: "/halls/maurya",
    },
    {
        imageArray: [
            {
                img: "/halls/samrat.png", // Corrected image path
                alt: "Samrat Hall",
            },
        ],
        price: "250$/Night",
        hall: "Samrat",
        description:
            "Elevate your celebrations in a regal setting that promises an unforgettable wedding experience.",
        link: "/halls/samrat",
    },
    {
        imageArray: [
            {
                img: "/halls/magadh.png", // Corrected image path
                alt: "Magadh Hall",
            },
        ],
        price: "300$/Night",
        hall: "Magadh",
        description:
            "A harmonious blend of luxury and elegance, creating the perfect backdrop for your cherished celebrations",
        link: "/halls/magadh",
    },
];

const Service = () => {
    return (
        <>
            <section className="space-y-4 py-20 lg:space-y-10">
                {cardArray?.map((ele, i) => (
                    <ServiceCard key={ele.hall} {...ele} index={i} />
                ))}
            </section>
        </>
    );
};

export default Service;

const ServiceCard = ({
    imageArray,
    price,
    hall,
    description,
    link,
    index,
}: {
    imageArray: any;
    price: string;
    hall: string;
    description: string;
    link: string;
    index: any;
}) => {
    return (
        <div className="relative w-full">
            <div
                className={`lg:w-[60%] ${index % 2 === 0 ? "ml-auto" : "mr-auto"}`}
            >
                <Image
                    src={imageArray[0].img}
                    alt={imageArray[0].alt}
                    width={800}
                    height={500}
                />
            </div>

            <div
                className={`bottom-0 top-0 my-auto h-fit -translate-y-[2rem] p-4 lg:absolute lg:w-[50%] lg:translate-y-0 lg:p-0 ${
                    index === 0 || index % 2 === 0
                        ? "-left-[0%]"
                        : "-right-[0%]"
                }`}
            >
                <Card radius="none" className="space-y-0 shadow-none">
                    <CardHeader className="flex gap-3">
                        <div className="flex flex-col">

                            <p className="font-gilda text-xl">{hall}</p>
                        </div>
                    </CardHeader>
                    <CardBody className="text-sm">
                        <p>{description}</p>
                        <div className=" flex items-center justify-center">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                <p className="mt-2 flex items-center">
                                    <PeopleIcon className="mr-2" /> 500+ Guests
                                </p>
                                <p className="mt-2 flex items-center">
                                    <SofaIcon className="mr-2" /> 300 seats
                                </p>
                                <p className="mt-2 flex items-center">
                                    <AreaIcon className="mr-2" /> 5000 x 2000
                                    sq. ft
                                </p>
                            </div>
                        </div>
                    </CardBody>
                    <div className="flex items-center justify-center">
                        <Divider className="w-11/12" />
                    </div>
                    <CardFooter className="flex justify-end">
                        <Link href={link}>
                            <Button
                                radius="none"
                                variant="flat"
                                className="bg-[#AA8453] text-white"
                            >
                                Details
                                <RxArrowRight />
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};
