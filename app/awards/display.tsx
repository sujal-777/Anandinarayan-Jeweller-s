import React from "react";

import { Image, Card, CardHeader, CardBody } from "@nextui-org/react";

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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
            <section className="mx-auto mb-24 mt-12 flex w-11/12 max-w-[1600px] flex-col gap-y-0 font-barlow lg:mt-20 lg:gap-y-20 xl:w-10/12">
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
                            <p className="font-gilda  text-2xl text-[#AA8453]">
                                {award}
                            </p>
                        </div>
                    </CardHeader>
                    <CardBody className="text-sm">
                        <p>{description}</p>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};
