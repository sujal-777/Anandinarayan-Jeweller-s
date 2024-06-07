"use client";
import React, { useState, useEffect } from "react";
import { FaPhoneVolume, FaPlus, FaMinus } from "react-icons/fa6";
import Link from "next/link";

export default function HorizontalForm() {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);

    return (
        <form
            action={`https://www.swiftbook.io/inst/#/home?propertyId=963MTUJmY1lpZeCmz9rXlfH7YmoaIvdJKdXK4LhxJkZp0tg0ZSH9q9wNA==&checkIn=${startDate.toString()}&checkOut=${endDate.toString()}&clientWidth=1519&JDRN=Y&noofrooms=${rooms}&adult0=${adults}&child0=${children}`}
            className="block flex w-full justify-center divide-x-2"
        >
            <div className="w-full bg-white p-2">
                <label htmlFor="" className="text-[#666666]">
                    Check In
                </label>
                <input
                    type="date"
                    className="block w-full"
                    value={startDate}
                    onChange={(e) => {
                        setStartDate(e.target.value);
                    }}
                    min={new Date().toISOString().split("T")[0]}
                    required
                />
            </div>
            <div className="w-full bg-white  p-2">
                <label htmlFor="" className="text-[#666666]">
                    Check Out
                </label>
                <input
                    type="date"
                    className="block w-full"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    required
                />
            </div>

            <div className="w-full bg-white  p-2">
                <label htmlFor="" className="text-[#666666]">
                    Rooms
                </label>
                <div className="flex items-center justify-between">
                    <p
                        className="cursor-pointer"
                        onClick={() => {
                            setRooms((x) => x - 1);
                        }}
                    >
                        <FaMinus />
                    </p>
                    <p>{rooms}</p>
                    <p
                        className="cursor-pointer"
                        onClick={() => {
                            setRooms((x) => x + 1);
                        }}
                    >
                        <FaPlus />
                    </p>
                </div>
            </div>
            <div className="w-full bg-white  p-2">
                <label htmlFor="" className="text-[#666666]">
                    Adults
                </label>
                <div className="flex items-center justify-between">
                    <p
                        className="cursor-pointer"
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
                        className="cursor-pointer"
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
            <div className="w-full bg-white  p-2">
                <label htmlFor="" className="text-[#666666]">
                    Children
                </label>
                <div className="flex items-center justify-between ">
                    <p
                        className="cursor-pointer"
                        onClick={() =>
                            children > 0 && setChildren((x) => x - 1)
                        }
                    >
                        <FaMinus className="text-[#aa8453]" />
                    </p>
                    <p>{children}</p>
                    <p
                        className="cursor-pointer"
                        onClick={() => {
                            adults + children > 4 * rooms - 1 &&
                                children < 1 * rooms &&
                                setAdults((x) => x - 1);
                            children < 1 * rooms && setChildren((x) => x + 1);
                        }}
                    >
                        <FaPlus className="text-[#aa8453]" />
                    </p>
                </div>
            </div>

            <button
                className="w-full bg-[#AA8453] p-2 text-center uppercase text-white  hover:bg-black"
                onSubmit={(e) => {}}
            >
                Check Availabilty
            </button>
        </form>
    );
}
