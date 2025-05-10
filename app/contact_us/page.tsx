"use client";

import React from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import MapIcon from "@mui/icons-material/Map";

import ContactForm from "./_ContactUsForm";
import Header from "../_components/Header/Header";

export default function ContactUs() {
    return (
        <section>
            <Header
                image="/HeaderAssets/img_header.png"
                title1="Contact Us"
                title2="Anandinarayan Jewellers"
            />

            <div className="flex w-full flex-col items-center justify-center px-8 py-20 lg:px-48">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex w-full flex-col justify-center text-justify">
                        <p className="text-heading font-gilda text-black">
                            Anandinarayan Jewellers
                        </p>

                        <p className="mt-10 font-barlow text-black">
                            Welcome to Anandinarayan Jewellers, a trusted destination for timeless gold and silver jewellery in Bhandara, Maharashtra. Our legacy is built on craftsmanship, authenticity, and customer satisfaction. Whether it’s an heirloom piece or a modern design, we create ornaments that elevate every celebration.
                        </p>

                        <p className="mt-4 font-barlow text-black">
                            With decades of experience and a commitment to purity, we offer a wide range of BIS-certified jewellery tailored to your unique taste. Visit us today and experience elegance you can wear.
                        </p>

                        <div className="mt-20 flex items-center">
                            <div className="mr-4">
                                <CallIcon style={{ color: "#AA8453" }} />
                            </div>
                            <div className="flex flex-col">
                                <p className="font-gilda text-lg text-black">
                                    Contact Number
                                </p>
                                <p
                                    className="text-sm"
                                    style={{ color: "#AA8453" }}
                                >
                                    +91 96739 98267
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
                                    contact@anandinarayanjewellers.com
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
                                    Anandinarayan Jewellers, Bhandara, Maharashtra 441904
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <ContactForm />
                    </div>
                </div>
            </div>

            <div className="bg-[#1E1E1E]">
                <p className="item-center flex justify-center font-gilda text-3xl text-white px-4 py-8 text-center">
                    How to Reach Anandinarayan Jewellers, Bhandara
                </p>
            </div>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.6422212053217!2d79.65646989999999!3d21.166632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2b3f519b20bc8f%3A0xca1ef2213c55471e!2sAnadinarayan%20Jeweller&#39;s!5e0!3m2!1sen!2sin!4v1746830326091!5m2!1sen!2sin"
                height="450"
                style={{ border: "0", width: "100%", marginBlock: "2rem" }}
                className="mx-auto max-w-[1000px] px-8"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </section>
    );
}
