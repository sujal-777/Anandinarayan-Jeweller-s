"use client";
import React from "react";
import CallIcon from "@mui/icons-material/Call";

import { Image } from "@nextui-org/react";

const info = () => {
    return (
        <section>
            <div className="flex w-full flex-col items-center justify-center">
                <div className="flex flex-col items-start justify-center sm:flex-row">
                    <div className="flex w-full flex-col justify-center px-10 py-7 text-justify sm:w-1/2">
                        <p className="inline-block bg-[#AA8453] p-2 text-3xl text-white" data-aos="fade-up">
                            Hotel Ashok
                        </p>

                        <br />
                        <br />

                        <p className="text-3xl" data-aos="fade-up">Enjoy a Luxury Experience</p>

                        <br />
                        <br />

                        <p data-aos="fade-up">
                            Welcome to Hotel Ashok, nestled in the heart of
                            Nagpur, since our inception in February 2011, we
                            have been consistent with warm hospitality and
                            exceptional services, setting the standard for
                            excellence in the hospitality industry in Nagpur.
                            Experience the regal charm and grandeur of our
                            suites, designed to make every guest feel like
                            royalty. Whether you&apos;re seeking a family
                            retreat or a romantic escape, our range of rooms,
                            from family to honeymoon suites, caters to your
                            every whim. With a host of modern amenities and
                            facilities, we ensure a comfortable and memorable
                            stay at Hotel Ashok.
                        </p>

                        <br />
                        <br />

                        <div className="flex items-center" data-aos="fade-up">
                            <div className="mr-4">
                                <CallIcon style={{ color: "#AA8453" }} />
                            </div>
                            <div className="flex flex-col">
                                <p
                                    className="text-lg"
                                    style={{ color: "#AA8453" }}
                                >
                                    Reservation
                                </p>
                                <p
                                    className="text-sm"
                                    style={{ color: "#AA8453" }}
                                >
                                    +91 88888 70722
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full flex-col justify-center px-10 py-7 sm:w-1/2"  data-aos="fade-in">
                        <Image
                            alt="man with generator"
                            src="/HomePageAssets/home_info.png"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default info;
