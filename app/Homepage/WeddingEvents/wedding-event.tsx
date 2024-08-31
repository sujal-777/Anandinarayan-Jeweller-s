import React from "react";

import { Image } from "@nextui-org/react";
import { FaPhoneVolume } from "react-icons/fa6";
import EmblaCarousel from "./EmblaCarousel";
import Carousel from "./Carousel";

export default function WeddingEvent() {
    const halls = [
        {
            name: "Kohinoor",
            desc: "A prestigious venue where every detail is tailored to perfection for your special day.",
            img: "/assets/Home/event1.png",
            guests: 500,
            seats: 300,
            area: "5000 x 2000",
            link1: "/weddings-and-events/kohinoor",
            link2: "",
        },
        {
            name: "Maurya",
            desc: "Maurya Wedding Event Hall at Hotel Ashok offers elegance and sophistication for your special day.",
            img: "/assets/Home/event2.png",
            guests: 500,
            seats: 400,
            area: "5000 x 2000",
            link1: "/weddings-and-events/maurya",
            link2: "",
        },
        {
            name: "Magadh",
            desc: "A harmonious blend of luxury and elegance, creating the perfect backdrop for your cherished celebrations",
            img: "/assets/Home/event3.png",
            guests: 500,
            seats: 500,
            area: "5000 x 2000",
            link1: "/weddings-and-events/magadh",
            link2: "",
        },
        {
            name: "Samrat",
            desc: "Elevate your celebrations in a regal setting that promises an unforgettable wedding experience.",
            img: "/assets/Home/event4.png",
            guests: 500,
            seats: 450,
            area: "5000 x 2000",
            link1: "/weddings-and-events/samrat",
            link2: "",
        },
    ];

    return (
        <section className="flex min-h-screen items-center bg-[#222222] px-8 py-20 lg:px-48">
            <div className="grid grid-cols-1 place-items-center gap-4 lg:grid-cols-2">
                <div
                    className="flex w-full flex-col justify-center"
                    data-aos="fade-up"
                >
                    <p
                        className="font-barlow uppercase tracking-widest text-[#AA8453]"
                        data-aos="fade-up"
                    >
                        Best services
                    </p>
                    <h2
                        className="font-gilda text-heading"
                        style={{ color: "#fff" }}
                    >
                        Wedding & Event Halls
                    </h2>

                    <br />
                    <br />

                    <div className="space-y-4 font-barlow">
                        <p className=" text-white">
                            At Hotel Ashok, we understand that your special
                            occasions deserve an equally exceptional setting.
                        </p>

                        <p className=" text-white">
                            Our luxurious and versatile event halls provide the
                            perfect backdrop for weddings, receptions, and a
                            variety of special events.
                        </p>
                    </div>

                    <br />
                    <br />

                    <a
                                href="tel:+918888870722"
                        className="flex items-center text-xl"
                        data-aos="fade-up"
                    >
                        <div className="mr-4">
                            <FaPhoneVolume style={{ color: "#AA8453" }} />
                        </div>
                        <div className="flex flex-col font-barlow text-sm">
                            <p style={{ color: "#ADADAD" }}>For Information</p>
                            <p className="text-xl" style={{ color: "#AA8453" }}>
                                +91 88888 70722
                            </p>
                        </div>
                    </a>
                </div>

                <div className="w-full" data-aos="fade-in" data-aos-delay="200">
                <Carousel cards={halls} />
                </div>
            </div>
        </section>
    );
}
