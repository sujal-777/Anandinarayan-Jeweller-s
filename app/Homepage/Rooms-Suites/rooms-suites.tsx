import React from "react";
import Image from "next/image";
import Card from "./Card";

export default function RoomsAndSuites() {
    const rooms = [
        {
            title: "Budget Room",
            img: "/assets/Home/rooms1.png",
            link: "/rooms_and_suits/budget_room",
        },
        {
            title: "Deluxe Room",
            img: "/assets/Home/rooms2.png",
            link: "/rooms_and_suits/deluxe_room",
        },
        {
            title: "Family Room",
            img: "/assets/Home/rooms3.png",
            link: "/rooms_and_suits/family_room",
        },
        {
            title: "King Suite",
            img: "/assets/Home/rooms4.png",
            link: "/rooms_and_suits/king_suit",
        },
    ];

    return (
        <section className="min-h-screen bg-[#F8F5F0] px-8 py-20 lg:px-96">
            <div className="py-10" data-aos="fade-up">
                <p
                    className="font-barlow uppercase tracking-widest text-[#666666]"
                    data-aos="fade-up"
                >
                    Hotel Ashok
                </p>
                <h2
                    className="font-gilda text-heading"
                    style={{ color: "#000000" }}
                >
                    Rooms & Suites
                </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {rooms.map((room, index) => (
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
