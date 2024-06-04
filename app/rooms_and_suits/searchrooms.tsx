"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Select, SelectItem, Button } from "@nextui-org/react";
import Form from "./Hero/Form";

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

const SearchRooms = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    return (
        <div className="w-full py-10 font-barlow">
            <div className="pb-10" data-aos="fade-up">
                <p
                    className="font-barlow uppercase tracking-widest text-[#666666]"
                    data-aos="fade-up"
                >
                    Hotel the nagpur Ashok
                </p>
                <h2
                    className="text-heading font-gilda"
                    style={{ color: "#000000" }}
                >
                    Search Rooms
                </h2>
            </div>
            <div className="lg:flex items-center justify-center border-2 hidden">
                <div className="grid w-full grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-6">
                    <div className="flex items-stretch justify-center border-b-2 border-r-0 bg-white md:border-b-0 md:border-r-2">
                        <DatePicker
                            showIcon
                            isClearable
                            placeholderText="Click to select a date"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            className="w-full "
                        />
                    </div>
                    <div className="flex items-stretch justify-center border-b-2 border-r-0 bg-white md:border-b-0 md:border-r-2">
                        <DatePicker
                            showIcon
                            isClearable
                            placeholderText="Click to select a date"
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            className="w-full"
                        />
                    </div>
                    <div className="flex items-stretch justify-center border-b-2 border-r-0 md:border-b-0 md:border-r-2">
                        <Select radius="none" label="Adults" className="w-full">
                            {adultCount?.map((ele, i) => (
                                <SelectItem key={i}>{ele}</SelectItem>
                            ))}
                        </Select>
                    </div>
                    <div className="flex items-stretch justify-center border-b-2 border-r-0 md:border-b-0 md:border-r-2">
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
                    <div className="flex items-stretch justify-center border-b-2 border-r-0 md:border-b-0 md:border-r-2">
                        <Select radius="none" label="Rooms" className="w-full">
                            {roomCount?.map((ele, i) => (
                                <SelectItem key={i}>{ele}</SelectItem>
                            ))}
                        </Select>
                    </div>
                    <div className="flex items-stretch justify-center border-b-2 md:border-b-0">
                        <Button
                            radius="none"
                            variant="flat"
                            className="h-full w-full bg-[#AA8453] text-white"
                        >
                            Check Now
                        </Button>
                    </div>
                </div>
            </div>
            <div className="block bg-[#F8F5F0] p-4 lg:hidden">
                <Form />
            </div>
        </div>
    );
};

export default SearchRooms;
