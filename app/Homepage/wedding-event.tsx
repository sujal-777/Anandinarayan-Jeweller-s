import React from "react";

import { Image } from "@nextui-org/react";

export default function WeddingEvent() {
    return (
        <section className="bg-[#222222]">
            <div className="flex w-full flex-col items-center justify-center">
                <div className="flex flex-col items-start justify-center sm:flex-row">
                    <div className="flex w-full flex-col justify-center p-5 text-justify sm:w-1/2 md:p-20" data-aos="fade-up">
                        <p className="font-gilda" style={{ color: "#AA8453" }}>
                            Hotel Ashok
                        </p>

                        <br />
                        <br />

                        <p className="font-gilda text-3xl text-white">
                            Wedding & Event Halls{" "}
                        </p>

                        <br />
                        <br />

                        <p className="font-gilda text-white">
                            At Hotel Ashok, we understand that your special
                            occasions deserve an equally exceptional setting.
                        </p>

                        <p className="font-gilda text-white">
                            Our luxurious and versatile event halls provide the
                            perfect backdrop for weddings, receptions, and a
                            variety of special events.
                        </p>

                        <br />
                        <br />

                        <div className="flex items-center">
                            <div className="mr-4"></div>
                            <div className="flex flex-col">
                                <p className="text-lg text-white">
                                    For information
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

                    <div className="flex w-full flex-col justify-center px-10 py-7 sm:w-1/2" data-aos="fade-in">
                        <Image
                            radius="none"
                            alt=""
                            src="/HomePageAssets/wedding_event.png"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
