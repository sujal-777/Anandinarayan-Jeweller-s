import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaPhoneVolume } from "react-icons/fa6";

export default function CorporateTie() {
    return (
        <section className="min-h-screen space-y-8 bg-[#F8F5F0] px-8 py-20 lg:px-40">
            <p className="flex items-center justify-center text-3xl text-black md:text-5xl">
                Corporate Tie-ups
            </p>

            <div className="flex w-full flex-col items-center justify-center">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div className="" data-aos="fade-up">
                        <div className="py-10" data-aos="fade-up">
                            <p
                                className="font-barlow uppercase tracking-widest text-[#AA8453]"
                                data-aos="fade-up"
                            >
                                best services
                            </p>
                            <h2
                                className="font-gilda text-3xl md:text-5xl"
                                style={{ color: "#000000" }}
                            >
                                Wedding & Event Halls
                            </h2>
                        </div>

                        <div className="space-y-4 font-barlow">
                            <p data-aos="fade-up">
                                Hotel Ashok offers premium corporate tie-up
                                services, providing bespoke accommodation
                                solutions tailored to the unique needs of
                                businesses.
                            </p>
                            <p>
                                With state-of-the-art facilities and
                                personalized service, our corporate partnerships
                                ensure a seamless and productive stay for your
                                team. Elevate your business trips with the
                                unmatched hospitality of Hotel Ashok.
                            </p>

                            <div
                                className="flex items-center text-xl"
                                data-aos="fade-up"
                            >
                                <div className="mr-4">
                                    <FaPhoneVolume
                                        style={{ color: "#AA8453" }}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <p
                                        style={{ color: "" }}
                                        className="text-sm"
                                    >
                                        For Information
                                    </p>
                                    <p
                                        className="text-xl"
                                        style={{ color: "#AA8453" }}
                                    >
                                        +91 88888 70722
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 md:gap-2">
                        <div className="group relative md:col-span-2 w-full">
                            <Image
                                src="/assets/Home/corp1.png"
                                width={1000}
                                height={1000}
                                alt="Corporate Image 1"
                                className="h-full w-full object-cover object-center"
                            />
                            <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-40 opacity-0 transition-all duration-200 group-hover:opacity-100">
                                <Link href={""} className="text-white">
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div className="group relative">
                            <Image
                                src="/assets/Home/corp2.png"
                                width={1000}
                                height={1000}
                                alt="Corporate Image 1"
                                className="h-full w-full object-cover object-center"
                            />
                            <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-40 opacity-0 transition-all duration-200 group-hover:opacity-100">
                                <Link href={""} className="text-white">
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div className="group relative md:col-span-2 ">
                            <Image
                                src="/assets/Home/corp3.png"
                                width={1000}
                                height={1000}
                                alt="Corporate Image 1"
                                className="h-full w-full object-cover object-center"
                            />
                            <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-40 opacity-0 transition-all duration-200 group-hover:opacity-100">
                                <Link href={""} className="text-white">
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div className="group relative">
                            <Image
                                src="/assets/Home/corp4.png"
                                width={1000}
                                height={1000}
                                alt="Corporate Image 1"
                                className="h-full w-full object-cover object-center"
                            />
                            <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-40 opacity-0 transition-all duration-200 group-hover:opacity-100">
                                <Link href={""} className="text-white">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
