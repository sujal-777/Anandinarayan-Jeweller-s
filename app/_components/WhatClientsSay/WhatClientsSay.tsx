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
        <div className="grid grid-cols-1 gap-16 px-8 py-20 lg:grid-cols-2 lg:px-96">
            <div className="space-y-4">
                <h2 className="font-gilda text-3xl text-white md:text-4xl">
                    What Client&apos;s Say?
                </h2>
                <EmblaCarousel slides={reviews} />
                <div className="flex items-center text-xl" data-aos="fade-up">
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
            <div className="right-1 mx-auto  max-w-[450px] bg-[#F8F5F0] p-4">
                <div className="py-10" data-aos="fade-up">
                    <p className="font-barlow uppercase tracking-widest text-[#666666]">
                        ROOMS & SUITES
                    </p>
                    <h2
                        className="font-gilda text-heading"
                        style={{ color: "#000000" }}
                    >
                        Hotel Booking Form
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-4 font-barlow lg:grid-cols-2">
                    <div className="bg-white p-4 lg:col-span-2">
                        <DatePicker
                            showIcon
                            isClearable
                            placeholderText="Check In"
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            className="h-full w-full bg-white"
                        />
                    </div>
                    <div className="bg-white p-4 lg:col-span-2">
                        <DatePicker
                            showIcon
                            isClearable
                            placeholderText="Check Out"
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            className="h-full w-full bg-white"
                        />
                    </div>
                    <div className="flex h-full items-center justify-center border-r-2 bg-white">
                        <Select
                            radius="none"
                            label="Adults"
                            className="w-full bg-white"
                        >
                            {adultCount?.map((ele, i) => (
                                <SelectItem key={i}>{ele}</SelectItem>
                            ))}
                        </Select>
                    </div>
                    <div className="flex h-full items-center justify-center border-r-2">
                        <Select
                            radius="none"
                            label="Children"
                            className="w-full"
                        >
                            {childCount?.map((ele, i) => (
                                <SelectItem key={i}>{ele}</SelectItem>
                            ))}
                        </Select>
                    </div>
                    <button className="bg-[#AA8453] p-4 text-center uppercase text-white hover:bg-black lg:col-span-2">
                        CHECK AVAILABILITY
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WhatClientsSay;
