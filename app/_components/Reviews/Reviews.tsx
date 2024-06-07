import React from "react";
import Carousel from "./Carousel";
import { FaPhoneVolume } from "react-icons/fa6";

export default function Reviews() {
    const reviews = [
        {
            name: "Vaishali Kumar",
            text: "The services at Hotel Ashok were superb. The staff were extremely polite, the location convenient from the railway station and airport, and the room service excellent and quick. The complimentary airport pickup and drop were awesome.",
            image: "/WhatClientsSay/1.jpg",
            role: "CTO at Flowbite",
            rating: 5,
        },
        {
            name: "Harshit Das",
            text: "Hotel Ashok boasts a good location, clean rooms, and cordial staff. The breakfast was also very good, offering great value for money. Its proximity to all important business centers makes it an ideal choice. Overall, it was a very good and comfortable stay.",
            image: "/WhatClientsSay/3.jpg",
            role: "CTO at Flowbite",
            rating: 5,
        },
        {
            name: "Shalini Gupta",
            text: "The rooms were spacious and clean, with good services. The restaurant was nice, and both breakfast and dinner were tasty. We thoroughly enjoyed our stay and recommend it for solo travelers. The hotel`s location is just a plus point.",
            image: "/WhatClientsSay/2.jpg",
            role: "CTO at Flowbite",
            rating: 5,
        },
        // Add more reviews here
    ];
    return (
        <div className="space-y-4">
            <h2 className="font-gilda text-3xl text-white md:text-4xl">
                What Client&apos;s Say?
            </h2>
            <Carousel reviews={reviews} />
            <div className="flex items-center text-xl">
                <div className="mr-4">
                    <FaPhoneVolume style={{ color: "#fff" }} />
                </div>
                <a href="tel:+918888870722" className="flex flex-col">
                    <p style={{ color: "#fff" }}>Reservation</p>
                    <p className="text-xl" style={{ color: "#fff" }}>
                        +91 88888 70722
                    </p>
                </a>
            </div>
        </div>
    );
}
