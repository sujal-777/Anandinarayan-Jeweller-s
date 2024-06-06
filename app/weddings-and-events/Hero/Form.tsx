"use client";
import React, { useState, useEffect } from "react";

import DatePicker from "react-datepicker";
import { Select, SelectItem, Button } from "@nextui-org/react";
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

export default function Form() {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    return (
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
                <Select radius="none" label="Children" className="w-full">
                    {childCount?.map((ele, i) => (
                        <SelectItem key={i}>{ele}</SelectItem>
                    ))}
                </Select>
            </div>
            <button className="bg-[#AA8453] p-4 text-center uppercase text-white hover:bg-black lg:col-span-2">
                CHECK AVAILABILITY
            </button>
        </div>
    );
}
