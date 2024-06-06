import React from "react";

import { Image, Button } from "@nextui-org/react";
import HallCarousel from "./HallCarousel/HallCarousel";
import { FaPhoneVolume } from "react-icons/fa6";

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
        <div className="font-barlow">
            <div className="">
                <p className="font-barlow uppercase tracking-widest text-[#666666]">
                    Hotel the nagpur Ashok
                </p>
                <h2
                    className="text-heading font-gilda"
                    style={{ color: "#000000" }}
                >
                    {hall}
                </h2>
            </div>
            <div className="py-10 md:px-8">
                <div className="">
                    <div className="">
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
                </div>

                <div className="mt-5">
                    <p>Occasions Held at {hall}:</p>
                    {occasions.map((occasion, index) => (
                        <li key={index} className=" pl-5 ">
                            {occasion}
                        </li>
                    ))}
                </div>

                {/* <div className="mt-5">
                    <Button
                        radius="none"
                        size="lg"
                        className="bg-[#AA8453] tracking-tight text-white"
                    >
                        CHECK NOW
                    </Button>
                </div> */}

                <a
                    href="tel:+918888870722"
                    className="flex items-center text-xl mt-6"
                >
                    <div className="mr-4">
                        <FaPhoneVolume style={{ color: "#AA8453" }} />
                    </div>
                    <div className="flex flex-col">
                        <p style={{ color: "" }}>Reservation</p>
                        <p className="text-xl" style={{ color: "#AA8453" }}>
                            +91 88888 70722
                        </p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default HallsPage;
