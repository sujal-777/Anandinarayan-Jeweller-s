"use client";

import React, { useState } from "react";

import { Button, Input, Textarea } from "@nextui-org/react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Content = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    return (
        <>
            <div className="px-8  py-20 font-barlow lg:px-48">
                <h3 className="text-2xl uppercase tracking-wider text-[#666666]">
                    Feedback
                </h3>
                <h2 className="text-center text-3xl text-[#AA8453]">
                    Getting things right for you is an important part of what we
                    do and really do like to hear your feedback about your stay
                    with us.
                </h2>
            </div>
            <div className="grid grid-cols-1 gap-12 bg-[#141414] px-8  py-20 font-barlow text-white lg:grid-cols-2 lg:px-48">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <input
                        type="text"
                        placeholder="First Name*"
                        className="block w-full border-b-2 border-[#aa8453] bg-transparent p-2"
                    />
                    <input
                        type="text"
                        placeholder="Last Name*"
                        className="block w-full border-b-2 border-[#aa8453] bg-transparent p-2"
                    />
                    <input
                        type="email"
                        placeholder="Email*"
                        className="block w-full border-b-2 border-[#aa8453] bg-transparent p-2"
                    />
                    <input
                        type="tel"
                        placeholder="Phone*"
                        className="block w-full border-b-2 border-[#aa8453] bg-transparent p-2"
                    />

                    <div>
                        <label htmlFor="" className="text-[#6a6f76]">
                            Check In
                        </label>
                        <input
                            type="date"
                            placeholder="Check-out*"
                            className="block w-full border-b-2 border-[#aa8453] bg-transparent p-2"
                        />
                    </div>

                    <div>
                        <label htmlFor="" className="text-[#6a6f76]">
                            Check Out
                        </label>
                        <input
                            type="date"
                            placeholder="Check-out*"
                            className="block w-full border-b-2 border-[#aa8453] bg-transparent p-2"
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Room No.*"
                        className="block w-full border-b-2 border-[#aa8453] bg-transparent p-2 md:col-span-2"
                    />
                    <textarea
                        name=""
                        id=""
                        placeholder="Message*"
                        rows={3}
                        className="block w-full border-b-2 border-[#aa8453] bg-transparent p-2 md:col-span-2"
                    ></textarea>

                    <Button
                        radius="none"
                        size="lg"
                        className="bg-[#AA8453] font-barlow uppercase tracking-tight text-white"
                    >
                        Send a Message
                    </Button>
                </div>
                <div className="">
                    <Image
                        src="/feedback/feed_img.png"
                        alt="feedback image"
                        className="block h-auto max-w-full items-center justify-center"
                        width={1000}
                        height={1000}
                    />
                </div>
            </div>
        </>
    );
};

export default Content;
