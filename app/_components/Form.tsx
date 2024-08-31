"use client";
import React, { useState, useEffect } from "react";
import { FaPhoneVolume, FaPlus, FaMinus } from "react-icons/fa6";
import Link from "next/link";

export default function Form() {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);

    return (
        <div className="right-1 mx-auto  max-w-[450px] bg-[#F8F5F0] px-8 py-4">
            <div className="pb-4">
                <p className="font-barlow uppercase tracking-widest text-[#666666]">
                    ROOMS & SUITES
                </p>
                <h2
                    className="text-heading font-gilda"
                    style={{ color: "#000000" }}
                >
                    Hotel Booking Form
                </h2>
            </div>

            <form
                action={`https://www.swiftbook.io/inst/#/home?propertyId=963MTUJmY1lpZeCmz9rXlfH7YmoaIvdJKdXK4LhxJkZp0tg0ZSH9q9wNA==&checkIn=${startDate.toString()}&checkOut=${endDate.toString()}&clientWidth=1519&JDRN=Y&noofrooms=${rooms}&adult0=${adults}&child0=${children}`}
                className="grid grid-cols-1 gap-4 font-barlow lg:grid-cols-2"
            >
                <div className="bg-white p-2 lg:col-span-2">
                    <label htmlFor="" className="text-[#666666]">
                        Check In
                    </label>
                    <input
                        type="date"
                        className="block w-full"
                        value={startDate}
                        onChange={(e) => {
                            setStartDate(e.target.value);
                            const newDate = new Date(e.target.value);
                            newDate.setDate(newDate.getDate() + 1);
                            const nextDate = newDate
                                .toISOString()
                                .split("T")[0];
                            setEndDate(nextDate);
                        }}
                        min={new Date().toISOString().split("T")[0]}
                        required
                    />
                </div>
                <div className="bg-white p-2 lg:col-span-2">
                    <label htmlFor="" className="text-[#666666]">
                        Check Out
                    </label>
                    <input
                        type="date"
                        className="block w-full"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        min={endDate}
                        required
                    />
                </div>

                <div className="bg-white p-2 lg:col-span-2">
                    <label htmlFor="" className="text-[#666666]">
                        Rooms
                    </label>
                    <div className="flex items-center justify-between">
                        <p
                            className=""
                            onClick={() => {
                                setRooms((x) => x - 1);
                            }}
                        >
                            <FaMinus />
                        </p>
                        <p>{rooms}</p>
                        <p
                            onClick={() => {
                                setRooms((x) => x + 1);
                            }}
                        >
                            <FaPlus />
                        </p>
                    </div>
                </div>
                <div className="bg-white p-2 ">
                    <label htmlFor="" className="text-[#666666]">
                        Adults
                    </label>
                    <div className="flex items-center justify-between">
                        <p
                            className=""
                            onClick={() => {
                                adults > 1 && setAdults((x) => x - 1);
                                adults + children > 4 * rooms &&
                                    setChildren((x) => x - 1);
                            }}
                        >
                            <FaMinus />
                        </p>
                        <p>{adults}</p>
                        <p
                            onClick={() => {
                                adults + children > 4 * rooms - 1 &&
                                    adults < 4 * rooms &&
                                    children > 0 &&
                                    setChildren((x) => x - 1);
                                adults < 4 * rooms && setAdults((x) => x + 1);
                            }}
                        >
                            <FaPlus />
                        </p>
                    </div>
                </div>
                <div className="bg-white p-2 ">
                    <label htmlFor="" className="text-[#666666]">
                        Children
                    </label>
                    <div className="flex items-center justify-between">
                        <p
                            className=""
                            onClick={() =>
                                children > 0 && setChildren((x) => x - 1)
                            }
                        >
                            <FaMinus />
                        </p>
                        <p>{children}</p>
                        <p
                            onClick={() => {
                                adults + children > 4 * rooms - 1 &&
                                    children < 1 * rooms &&
                                    setAdults((x) => x - 1);
                                children < 1 * rooms &&
                                    setChildren((x) => x + 1);
                            }}
                        >
                            <FaPlus />
                        </p>
                    </div>
                </div>

                <button
                    className="bg-[#AA8453] p-2 text-center uppercase text-white hover:bg-black lg:col-span-2"
                    onSubmit={(e) => {}}
                >
                    Check Availabilty
                </button>
            </form>

            {/* <RoomSearch />   */}
        </div>
    );
}
