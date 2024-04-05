"use client";

import React, { useState } from "react";

import { Button, Input, Textarea } from "@nextui-org/react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Content() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <>
      <div className="my-10 ">
        <div className=" flex items-center justify-center ">
          <Button
            radius="none"
            size="lg"
            className=" text-white bg-[#AA8453] font-gilda text-4xl uppercase "
          >
            Feedback
          </Button>
        </div>
        <p className="flex items-center justify-center text-center mx-5 md:mx-40 lg:mx-96 font-barlow text-xl mt-3">
          Getting things right for you is an important part of what we do and
          really do like to hear your feedback about your stay with us.
        </p>
      </div>
      <div className="flex flex-col md:flex-row bg-[#EDEDED]">
        <div className="w-full md:w-1/2 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 py-5">
            <Input
              label="First Name"
              variant="underlined"
              isRequired
              isClearable
              radius="lg"
              classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                  "bg-transparent",
                  "text-black/90 dark:text-white/90",
                  "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                  "shadow-xl",
                  "bg-default-200/50",
                  "dark:bg-default/60",
                  "backdrop-blur-xl",
                  "backdrop-saturate-200",
                  "hover:bg-default-200/70",
                  "dark:hover:bg-default/70",
                  "group-data-[focused=true]:bg-default-200/50",
                  "dark:group-data-[focused=true]:bg-default/60",
                  "!cursor-text",
                ],
              }}
              placeholder="First Name"
            />
            <Input
              label="Last Name"
              variant="underlined"
              isRequired
              isClearable
              radius="lg"
              classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                  "bg-transparent",
                  "text-black/90 dark:text-white/90",
                  "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                  "shadow-xl",
                  "bg-default-200/50",
                  "dark:bg-default/60",
                  "backdrop-blur-xl",
                  "backdrop-saturate-200",
                  "hover:bg-default-200/70",
                  "dark:hover:bg-default/70",
                  "group-data-[focused=true]:bg-default-200/50",
                  "dark:group-data-[focused=true]:bg-default/60",
                  "!cursor-text",
                ],
              }}
              placeholder="Last Name"
            />
            <Input
              label="@Email"
              type="email"
              variant="underlined"
              isClearable
              radius="lg"
              classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                  "bg-transparent",
                  "text-black/90 dark:text-white/90",
                  "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                  "shadow-xl",
                  "bg-default-200/50",
                  "dark:bg-default/60",
                  "backdrop-blur-xl",
                  "backdrop-saturate-200",
                  "hover:bg-default-200/70",
                  "dark:hover:bg-default/70",
                  "group-data-[focused=true]:bg-default-200/50",
                  "dark:group-data-[focused=true]:bg-default/60",
                  "!cursor-text",
                ],
              }}
              placeholder="email@address.com"
            />
            <Input
              label="Phone No."
              type="number"
              variant="underlined"
              isClearable
              radius="lg"
              classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                  "bg-transparent",
                  "text-black/90 dark:text-white/90",
                  "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                  "shadow-xl",
                  "bg-default-200/50",
                  "dark:bg-default/60",
                  "backdrop-blur-xl",
                  "backdrop-saturate-200",
                  "hover:bg-default-200/70",
                  "dark:hover:bg-default/70",
                  "group-data-[focused=true]:bg-default-200/50",
                  "dark:group-data-[focused=true]:bg-default/60",
                  "!cursor-text",
                ],
              }}
              placeholder="Enter your phone number..."
            />
            <div>
              <DatePicker
                showIcon
                isClearable
                placeholderText="Check-in"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                className="w-full bg-transparent"
              />
            </div>

            <div>
              <DatePicker
                showIcon
                isClearable
                placeholderText="Check-out"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                className="w-full bg-transparent"
              />
            </div>

            <div className="md:col-span-2">
              <Input
                label="Room Number"
                type="text"
                variant="underlined"
                isClearable
                radius="lg"
                classNames={{
                  label: "text-black/50 dark:text-white/90",
                  input: [
                    "bg-transparent",
                    "text-black/90 dark:text-white/90",
                    "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                  ],
                  innerWrapper: "bg-transparent",
                  inputWrapper: [
                    "shadow-xl",
                    "bg-default-200/50",
                    "dark:bg-default/60",
                    "backdrop-blur-xl",
                    "backdrop-saturate-200",
                    "hover:bg-default-200/70",
                    "dark:hover:bg-default/70",
                    "group-data-[focused=true]:bg-default-200/50",
                    "dark:group-data-[focused=true]:bg-default/60",
                    "!cursor-text",
                  ],
                }}
                placeholder="Room No."
              />
            </div>
            <div className="md:col-span-2">
              <Textarea
                isRequired
                variant="underlined"
                label="Description"
                labelPlacement="outside"
                placeholder="Enter your description"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src="/feedback/feed_img.png"
            alt="feedback image"
            className="block h-auto max-w-full items-center justify-center "
          />
        </div>
      </div>
    </>
  );
}
