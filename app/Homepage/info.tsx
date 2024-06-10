import React from "react";
import CallIcon from "@mui/icons-material/Call";

import { FaPhoneVolume } from "react-icons/fa6";
import Image from "next/image";
import { ClassNames } from "@emotion/react";

const info = () => {
    return (
        <section className="min-h-screen bg-white px-8 py-20 lg:px-48">
            <div className="flex w-full flex-col items-center justify-center">
                <div className="grid w-full grid-cols-1 place-items-center gap-12 md:grid-cols-2">
                    <div
                        className="flex w-full flex-col justify-center py-7"
                        data-aos="fade-up"
                    >
                        <p className="font-barlow uppercase tracking-widest text-[#666666]">
                            Hotel Ashok
                        </p>
                        <h2 className="text-heading font-gilda">
                            Enjoy a Luxury Experience
                        </h2>

                        <br />
                        <br />

                        <div
                            className="space-y-4 font-barlow"
                            data-aos="fade-up"
                        >
                            <p>
                                Welcome to Hotel Ashok, nestled in the heart of
                                Nagpur, since our inception in February 2011, we
                                have been consistent with warm hospitality and
                                exceptional services, setting the standard for
                                excellence in the hospitality industry in
                                Nagpur.
                            </p>
                            <p>
                                Experience the regal charm and grandeur of our
                                suites, designed to make every guest feel like
                                royalty. Whether you&apos;re seeking a family
                                retreat or a romantic escape, our range of
                                rooms, from family to honeymoon suites, caters
                                to your every whim. With a host of modern
                                amenities and facilities, we ensure a
                                comfortable and memorable stay at Hotel Ashok.
                            </p>

                            <a
                                href="tel:+918888870722"
                                className="flex items-center text-xl"
                                data-aos="fade-up"
                            >
                                <div className="mr-4">
                                    <FaPhoneVolume
                                        style={{ color: "#AA8453" }}
                                    />
                                </div>
                                <div className="flex flex-col ">
                                    <p style={{ color: "" }} className="barlow-condensed">Reservation</p>
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

                    <div
                        className="flex w-full flex-col justify-center py-7"
                        data-aos="fade-in"
                    >
                        <Image
                            src="/assets/Home/luxury.png"
                            alt="Your Image"
                            width={1000}
                            height={1000}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default info;
