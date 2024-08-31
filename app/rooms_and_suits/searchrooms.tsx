"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Select, SelectItem, Button } from "@nextui-org/react";
import HorizontalForm from "../_components/HorizontalForm";
import Form from "../_components/Form";

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
            <div className="pb-5 px-8 lg:px-0" data-aos="fade-up">
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

            <div className="hidden lg:block">
                <HorizontalForm />
            </div>
            <div className="block lg:hidden">
                <Form />
            </div>
        </div>
    );
};

export default SearchRooms;
