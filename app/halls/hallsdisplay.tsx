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

import PeopleIcon from "./Icons/people";
import SofaIcon from "./Icons/sofa";
import AreaIcon from "./Icons/area";

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
            <section className="mx-auto mb-24 mt-12 flex w-11/12 max-w-[1600px] flex-col gap-y-0 font-barlow lg:mt-20 lg:gap-y-20 xl:w-10/12">
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
                            <p className="font-gilda text-2xl">{hall}</p>
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
