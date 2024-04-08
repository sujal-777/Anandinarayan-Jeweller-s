"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Select, SelectItem, Button } from "@nextui-org/react";

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

const RoomSelect = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    return (
        <div className="hidden w-full py-20 font-barlow lg:block ">
            <div className="mx-5 flex items-center justify-center border-2">
                <div className="grid w-full grid-cols-6">
                    <div className="flex h-full items-center justify-center border-r-2 bg-white">
                        <DatePicker
                            showIcon
                            isClearable
                            placeholderText="Click to select a date"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            className="h-full w-full bg-white"
                        />
                    </div>
                    <div className="flex h-full items-center justify-center border-r-2 bg-white">
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
                            className="h-full w-full bg-white"
                        />
                    </div>
                    <div className="flex h-full items-center justify-center border-r-2">
                        <Select radius="none" label="Adults" className="w-full">
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
                    <div className="flex h-full items-center justify-center border-r-2">
                        <Select radius="none" label="Rooms" className="w-full">
                            {roomCount?.map((ele, i) => (
                                <SelectItem key={i}>{ele}</SelectItem>
                            ))}
                        </Select>
                    </div>
                    <div className="flex h-full w-full items-center justify-center">
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
        </div>
    );
};

export default RoomSelect;
