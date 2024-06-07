"use client";
import React, { useState, useEffect } from "react";
import { Select, SelectItem, Button } from "@nextui-org/react";
import { FaPhoneVolume, FaPlus, FaMinus } from "react-icons/fa6";
import Carousel from "./Carousel";
import Link from "next/link";
const imageUrl = "/WhatClientsSay/image.png";
import { useRouter } from "next/navigation";
import Form from "../Form";
import Reviews from "../Reviews/Reviews";

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

const adultCount = [
    "1 Adult",
    "2 Adult",
    "3 Adult",
    "4 Adult",
    "5 Adult",
    "6 Adult",
    "7 Adult",
];

const WhatClientsSay = ({ bg }: { bg?: string }) => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);

    return (
        <div
            className={`grid grid-cols-1 gap-16 bg-cover bg-no-repeat px-8 py-20 lg:grid-cols-2 lg:px-48`}
        >
            <Reviews />
            <Form />
        </div>
    );
};

export default WhatClientsSay;
