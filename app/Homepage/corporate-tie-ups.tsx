import React from "react";

import { Image } from "@nextui-org/react";

export default function CorporateTie() {
    return (
        <section className="bg-[#F8F5F0]">
            <p className="flex items-center justify-center text-4xl text-black md:p-20">
                Corporate Tie-ups
            </p>

            <div className="flex w-full flex-col items-center justify-center">
                <div className="flex flex-col items-start justify-center sm:flex-row">
                    <div className="flex w-full flex-col justify-center p-5 text-justify sm:w-1/2 md:p-20">
                        <p
                            className="font-gilda text-2xl"
                            style={{ color: "#AA8453" }}
                        >
                            Best Services
                        </p>

                        <br />
                        <br />

                        <p className="font-gilda text-3xl text-black ">
                            Corporate Tie-ups{" "}
                        </p>

                        <br />
                        <br />

                        <p className="font-gilda text-black">
                            Hotel Ashok offers premium corporate tie-up
                            services, providing bespoke accommodation solutions
                            tailored to the unique needs of businesses.{" "}
                        </p>

                        <p className="font-gilda text-black">
                            With state-of-the-art facilities and personalized
                            service, our corporate partnerships ensure a
                            seamless and productive stay for your team. Elevate
                            your business trips with the unmatched hospitality
                            of Hotel Ashok.{" "}
                        </p>

                        <br />
                        <br />

                        <div className="flex items-center">
                            <div className="mr-4"></div>
                            <div className="flex flex-col">
                                <p className="text-lg text-black">
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

                    <div className="flex w-full flex-col justify-center px-10 py-7 sm:w-1/2">
                        <Image radius="none" alt="" src="/image_cop_ties.png" />
                    </div>
                </div>
            </div>
        </section>
    );
}
