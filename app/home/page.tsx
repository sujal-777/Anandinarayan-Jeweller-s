"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Info from "./info";
import RoomsAndSuites from "./rooms-suites";

export default function HomePage() {
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);

  return (
    <section>
      <div
        className="relative w-full h-screen bg-cover"
        style={{ backgroundImage: "url('/HeaderAssets/header_banner.png')" }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-xl text-white">
            COMMITMENT TOWARDS HONOURABLE & SUSTAINABLE TOURISM
          </p>
          <br /> <br />
          <p className="text-6xl text-white mb-4">Enjoy a Luxury Experience</p>
          <br /> <br />
          <br />
          <form className="mt-8 flex justify-center space-x-4">
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              placeholderText="Check In"
              className="py-2 px-4 bg-white border border-gray-300 rounded-md"
              wrapperClassName="date-picker-wrapper"
            />

            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              placeholderText="Check Out"
              className="py-2 px-4 bg-white border border-gray-300 rounded-md"
              wrapperClassName="date-picker-wrapper"
            />
            <input
              type="number"
              placeholder="1 Adult"
              className="py-2 px-4 bg-white border border-gray-300 rounded-md"
            />
            <input
              type="number"
              placeholder="1 Children"
              className="py-2 px-4 bg-white border border-gray-300 rounded-md"
            />
            <input
              type="number"
              placeholder="1 Room"
              className="py-2 px-4 bg-white border border-gray-300 rounded-md"
            />
            <button className="py-2 px-6 bg-[#AA8453] text-white rounded-md">
              Check Now
            </button>
          </form>
        </div>
      </div>

      <Info />
      <RoomsAndSuites />
    </section>
  );
}
