import React from "react";

import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";

const cardArray = [
    {
        imageArray: [
            {
                img: "/awards/award-1.png", // Corrected image path
                alt: "",
            },
        ],
        award: "TRIPADVISOR AWARD",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        imageArray: [
            {
                img: "/awards/award-2.png", // Corrected image path
                alt: "",
            },
        ],
        award: "INDIAN ACHIEVERS AWARD FOR HOSPITALITY & TOURISM",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
    },
    {
        imageArray: [
            {
                img: "/awards/award-3.png", // Corrected image path
                alt: "",
            },
        ],
        award: "JUSTDIAL AWARD",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        imageArray: [
            {
                img: "/awards/award-4.png", // Corrected image path
                alt: "",
            },
        ],
        award: "INDIAN ECHONOMIC DEVELOPMENT & RESEARCH ASSOCIATION AWARD",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        imageArray: [
            {
                img: "/awards/award-5.png", // Corrected image path
                alt: "",
            },
        ],
        award: "REALTY KINGS AWARDS",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
];

const Service = () => {
    return (
        <>
            <section className=" space-y-10 px-8 py-20 md:px-96">
                {cardArray?.map((ele, i) => (
                    <ServiceCard key={ele.award} {...ele} index={i} />
                ))}
            </section>
        </>
    );
};

export default Service;

const ServiceCard = ({
    imageArray,
    award,
    description,
    index,
}: {
    imageArray: any;
    award: string;
    description: string;
    index: any;
}) => {
    return (
        <div className="relative w-full">
            <div
                className={`lg:w-[70%] ${index % 2 === 0 ? "ml-auto" : "mr-auto lg:-translate-x-[10%]"}`}
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
                        ? "-left-[10%]"
                        : "-right-[0%]"
                }`}
            >
                <Card radius="none" className="">
                    <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                            <p className="font-gilda  text-2xl text-[#AA8453]">
                                {award}
                            </p>
                        </div>
                    </CardHeader>
                    <CardBody className="font-barlow text-sm">
                        <p>{description}</p>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};
