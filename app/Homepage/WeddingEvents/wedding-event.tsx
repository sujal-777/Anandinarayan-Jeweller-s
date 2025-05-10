import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import Carousel from "./Carousel";

export default function WeddingEvent() {
    const services = [
        {
            name: "Gold",
            desc: "Exclusive handcrafted gold jewelry to elevate your elegance.",
            img: "/assets/Home/gold.jpg",
            guests: 0,
            seats: 0,
            area: "0",
            link1: "",
            link2: "",
        },
        {
            name: "Pearl & Ruby",
            desc: "Timeless pearl collections that embody grace and charm.",
            img: "/assets/Home/pearl.jpg",
            guests: 0,
            seats: 0,
            area: "0",
            link1: "",
            link2: "",
        },
        {
            name: "Platinum",
            desc: "Luxurious platinum designs made for modern royalty.",
            img: "/assets/Home/platinum.jpeg",
            guests: 0,
            seats: 0,
            area: "0",
            link1: "",
            link2: "",
        },
        {
            name: "Silver",
            desc: "Elegant silver jewelry perfect for every occasion.",
            img: "/assets/Home/silver.jpg",
            guests: 0,
            seats: 0,
            area: "0",
            link1: "",
            link2: "",
        },
  
    ];

    return (
        <section className="flex min-h-screen items-center bg-[#222222] px-8 py-20 lg:px-48">
            <div className="grid grid-cols-1 place-items-center gap-4 lg:grid-cols-2">
                <div className="flex w-full flex-col justify-center" data-aos="fade-up">
                    <p className="font-barlow uppercase tracking-widest text-[#AA8453]" data-aos="fade-up">
                        Our Collection
                    </p>
                    <h2 className="font-gilda text-heading" style={{ color: "#fff" }}>
                        Jewelry Categories
                    </h2>

                    <br />
                    <br />

                    <div className="space-y-4 font-barlow">
                        <p className=" text-white">
                            Discover timeless elegance in every piece. We craft emotions into jewelry.
                        </p>
                        <p className=" text-white">
                            Explore a range of luxurious collections made for every special moment.
                        </p>
                    </div>

                    <br />
                    <br />

                    <div className="flex items-center text-xl" data-aos="fade-up">
                        <div className="mr-4">
                            <FaPhoneVolume style={{ color: "#AA8453" }} />
                        </div>
                        <div className="flex flex-col font-barlow text-sm">
                            <p style={{ color: "#ADADAD" }}>Contact Us</p>
                            <p className="text-xl" style={{ color: "#AA8453" }}>
                                +91 96739 98267
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full" data-aos="fade-in" data-aos-delay="200">
                    <Carousel cards={services} />
                </div>
            </div>
        </section>
    );
}
