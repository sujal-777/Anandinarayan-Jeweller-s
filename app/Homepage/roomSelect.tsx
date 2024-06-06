/* eslint-disable */
"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Select, SelectItem, Button } from "@nextui-org/react";
import Script from "next/script";

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
        <>
            <Script
                src="https://www.swiftbook.io/plugin/js/booking-service.min.js"
                id="propInfo"
                propertyid="963MTUJmY1lpZeCmz9rXlfH7YmoaIvdJKdXK4LhxJkZp0tg0ZSH9q9wNA=="
                cal-rendererId="quickbook-widget"
                JDRN="Y"
            />
            <div id="quickbook-widget"></div>
        </>
    );
};

export default RoomSelect;
/* eslint-disable */