import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";

export default function TripAdvisor() {
    return (
        <div className="bg-[#f8f5f0] px-8 py-20 lg:px-48">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="">
                    <div className="py-10">
                        <h2
                            className="text-heading font-gilda"
                            style={{ color: "#000000" }}
                        >
                            Tripadvisor 2024 Awards
                        </h2>
                    </div>

                    <div className="space-y-4 font-barlow">
                        <p>
                            Hotel Ashok offers premium corporate tie-up
                            services, providing bespoke accommodation solutions
                            tailored to the unique needs of businesses.
                        </p>
                        <p>
                            With state-of-the-art facilities and personalized
                            service, our corporate partnerships ensure a
                            seamless and productive stay for your team. Elevate
                            your business trips with the unmatched hospitality
                            of Hotel Ashok.
                        </p>

                        <a
                            href="tel:+918888870722"
                            className="flex items-center text-xl"
                        >
                            <div className="mr-4">
                                <FaPhoneVolume style={{ color: "#AA8453" }} />
                            </div>
                            <div className="flex flex-col">
                                <p style={{ color: "" }} className="text-sm">
                                    For Information
                                </p>
                                <p
                                    className="text-xl"
                                    style={{ color: "#AA8453" }}
                                >
                                    +91 88888 70722
                                </p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="w-full items-center lg:flex lg:justify-center">
                    <Image
                        src="/assets/trip-advisor-2024.png"
                        width={1000}
                        height={1000}
                        alt="Corporate Image 1"
                        className=" w-full object-cover object-center max-w-[300px] aspect-square"
                    />
                </div>
            </div>
        </div>
    );
}
