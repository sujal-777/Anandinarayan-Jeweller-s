import React from "react";

import { Image, Button } from "@nextui-org/react";

interface RoomPageProps {
    src: string;
    hall: string;
    desc1: string;
    features: string[];
    occasions: string[];
}

const HallsPage: React.FC<RoomPageProps> = ({
    src,
    hall,
    desc1,
    features,
    occasions,
}) => {
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
                <p className="hidden font-barlow text-[#222222] md:block">
                    HOTEL THE NAGPUR ASHOK
                </p>
                <p className="font-barlow text-[#222222] md:hidden">
                    HOTEL ASHOK LUXURY HOTEL
                </p>
                <p className="font-gilda text-[60px] text-[#222222] ">{hall}</p>
            </div>
            <div className="flex w-full">
                <div className="w-full lg:w-[40%]">
                    <div>
                        <p className="justify-text">{desc1}</p>
                    </div>
                    <div className="mt-5">
                        <h1>Features:</h1>
                        {features.map((feature, index) => (
                            <li key={index} className=" pl-5 ">
                                {feature}
                            </li>
                        ))}
                    </div>
                </div>
                <div className="hidden w-[60%] lg:block">
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

            <div className="mt-5">
                <p>Occasions Held at {hall}:</p>
                {occasions.map((occasion, index) => (
                    <li key={index} className=" pl-5 ">
                        {occasion}
                    </li>
                ))}
            </div>

            <div className="mt-5">
                <Button
                    radius="none"
                    size="lg"
                    className="bg-[#AA8453] tracking-tight text-white"
                >
                    CHECK NOW
                </Button>
            </div>
        </div>
    );
};

export default HallsPage;
