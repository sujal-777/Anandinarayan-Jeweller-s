"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import ReviewCarousel from "./ReviewCarousel";
import SelectRooms from "./SelectRooms";
import RoomSearch from "../../Homepage/roomSelect";
import EmblaCarousel from "./EmblaCarousel";
import DatePicker from "react-datepicker";
import { Select, SelectItem, Button } from "@nextui-org/react";
import { FaPhoneVolume } from "react-icons/fa6";
import Reviews from "@/app/_components/Reviews/Reviews";
import Form from "@/app/_components/Form";
const imageUrl = "/WhatClientsSay/image.png";
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
const childCount = [
    "1 Child",
    "2 Children",
    "3 Children",
    "4 Children",
    "5 Children",
];
const roomCount = [
    "1 room",
    "2 rooms",
    "3 rooms",
    "4 rooms",
    "5 rooms",
    "6 rooms",
];

const WhatClientsSay = () => {
    const [currentReview, setCurrentReview] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentReview((currentReview + 1) % reviews.length);
        }, 10000);

        return () => clearInterval(intervalId);
    }, [currentReview]);

    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    return (
        <div className="grid grid-cols-1 gap-16 bg-[url('/assets/pooldeck/pooldeck.png')] bg-cover bg-no-repeat px-8 py-20 lg:grid-cols-2 lg:px-48">
            <Reviews />
            <Form />
        </div>
    );
};

export default WhatClientsSay;
