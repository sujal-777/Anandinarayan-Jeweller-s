import React from "react";
import Image from "next/image";
import Card from "./Card";

export default function RoomsAndSuites() {
    const rooms = [
        {
            title: "Elegant Rings",
            img: "/assets/Home/ring.jpg",
            link: "/rooms_and_suits/budget_room",
        },
        {
            title: "Bridal Collection",
            img: "/assets/Home/bridal.jpg",
            link: "/rooms_and_suits/deluxe_room",
        },
        {
            title: "Classic Bracelets",
            img: "/assets/Home/bracelet.jpg",
            link: "/rooms_and_suits/family_room",
        },
        {
            title: "Royal Necklaces",
            img: "/assets/Home/necklace.jpg",
            link: "/rooms_and_suits/king_suit",
        },
    ];

    return (
        <section className="min-h-screen bg-[#F8F5F0] px-8 py-20 lg:px-48">
            <div className="py-10" data-aos="fade-up">
                <p
                    className="font-barlow uppercase tracking-widest text-[#666666]"
                    data-aos="fade-up"
                >
                    Anadinarayan Jeweller's
                </p>
                <h2
                    className="font-gilda text-heading"
                    style={{ color: "#000000" }}
                >
                    Our Exquisite Collections
                </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {rooms.reverse().map((room, index) => (
                    <Card
                        key={index}
                        title={room.title}
                        img={room.img}
                        link={room.link}
                    />
                ))}
            </div>
            <br />
        </section>
    );
}
