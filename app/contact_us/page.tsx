"use client";

import React from "react";

import Header from "../_components/Header/Header";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import MapIcon from "@mui/icons-material/Map";

import ContactForm from "./_ContactUsForm";

import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";

export default function ContactUs() {
    return (
        <section>
            <Header
                image="/HeaderAssets/img_header.png"
                title1="Contact Us"
                title2="luxury hotel"
            />

            <div className="flex w-full flex-col items-center justify-center px-8 py-20 lg:px-40">
                <div className="flex flex-col items-start justify-center sm:flex-row">
                    <div className="flex w-full flex-col justify-center text-justify sm:w-1/2">
                        <p className="font-gilda text-3xl text-black">
                            Hotel Ashok
                        </p>

                        <p className="mt-10 font-gilda text-black">
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

                        <div className="mt-20 flex items-center">
                            <div className="mr-4">
                                <CallIcon style={{ color: "#AA8453" }} />
                            </div>
                            <div className="flex flex-col">
                                <p className="font-gilda text-lg text-black">
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

                        <div className="mt-10 flex items-center">
                            <div className="mr-4">
                                <EmailIcon style={{ color: "#AA8453" }} />
                            </div>
                            <div className="flex flex-col">
                                <p className="font-gilda text-lg text-black">
                                    Email Info
                                </p>
                                <p
                                    className="text-sm"
                                    style={{ color: "#AA8453" }}
                                >
                                    booking@thenagpurashok.com
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 flex items-center">
                            <div className="mr-4">
                                <MapIcon style={{ color: "#AA8453" }} />
                            </div>
                            <div className="flex flex-col">
                                <p className="font-gilda text-lg text-black">
                                    Address
                                </p>
                                <p
                                    className="text-sm"
                                    style={{ color: "#AA8453" }}
                                >
                                    WHC Road, Aath Rasta Square,Laxmi Nagar,
                                    Nagpur, Maharashtra 440022{" "}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full flex-col px-8 sm:w-1/2">
                        <ContactForm />
                    </div>
                </div>
            </div>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.728442230228!2d79.06194007448362!3d21.123389984523246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c07e29b66081%3A0xe1ff7f6028251a43!2sHotel%20Nagpur%20Ashok!5e0!3m2!1sen!2sin!4v1714800728687!5m2!1sen!2sin"
                height="450"
                style={{ border: "0", width: "100%", marginBlock: "2rem" }}
                className="mx-auto max-w-[1000px] px-8"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="bg-[#1E1E1E]">
                <p className="item-center flex justify-center font-gilda text-3xl text-white">
                    How to get to the Hotel Ashok, Nagpur
                </p>

                <Card className="item-center h-100 flex justify-center border-none bg-[#fff]">
                    <CardBody>
                        <div className="grid grid-cols-6 items-center justify-center gap-6 md:grid-cols-12 md:gap-4">
                            <div className="relative col-span-6 md:col-span-4"></div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </section>
    );
}
