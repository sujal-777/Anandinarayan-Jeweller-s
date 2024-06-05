"use client";

import { menuItems } from "@/constants/menuItems";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Header({
    image,
    title1,
    title2,
}: {
    image: string;
    title1: string;
    title2: string;
}) {
    const [hidden, setHidden] = useState(true);
    return (
        <div className="relative h-[100dvh] bg-gray-300">
            {/* NAVBAR */}
            <div className="bg-gradient-black fixed left-0 top-0 z-40 flex w-full items-center justify-between gap-12 px-4 font-barlow backdrop-blur-sm lg:justify-center lg:px-12">
                <Image
                    src="/logo.svg"
                    alt="logo"
                    width={500}
                    height={500}
                    className="max-w-[80px] md:max-w-[120px]"
                />

                <button
                    className="group relative block overflow-clip rounded-lg lg:hidden"
                    onClick={() => {
                        setHidden((x) => !x);
                    }}
                >
                    <div
                        className={`nav-btn flex flex-col justify-center gap-1 p-4 transition-all delay-200 duration-200  `}
                    >
                        <div
                            className={`w-6 origin-center border-2 border-white transition-all duration-200 md:w-8 ${
                                !hidden &&
                                "translate-y-[220%] rotate-45 border-[#D5AF80]"
                            }`}
                        ></div>
                        <div
                            className={`w-6 border-2 border-white md:w-8 ${
                                !hidden && "opacity-0"
                            }`}
                        ></div>
                        <div
                            className={`w-6 origin-center border-2 border-white transition-all duration-200 md:w-8 ${
                                !hidden &&
                                "-translate-y-[220%] -rotate-45 border-[#D5AF80]"
                            }`}
                        ></div>
                    </div>
                </button>

                <div
                    className={`absolute left-0 top-full block w-full items-center gap-8 space-y-4 overflow-clip bg-white px-4 transition-all duration-300 lg:static lg:flex lg:w-fit lg:space-y-0 lg:overflow-visible lg:bg-transparent lg:p-0 ${hidden ? "max-h-[0dvh] p-0 lg:max-h-fit" : "max-h-[80dvh] py-4 lg:max-h-fit"}`}
                >
                    {menuItems.map((item, index) => {
                        return (
                            <div key={index} className="group relative">
                                <Link
                                    href={item.href}
                                    className="uppercase text-black hover:text-[#AA8453] lg:text-white"
                                >
                                    {item.text}
                                    {item.links && (
                                        <KeyboardArrowDownIcon className=" text-black hover:text-[#AA8453] lg:text-white" />
                                    )}
                                </Link>
                                {item.links && (
                                    <div className="left-0 right-0 top-full hidden w-full max-w-[20rem]  space-y-2 divide-y-2 bg-white p-4 group-hover:block lg:absolute lg:max-w-[10rem]">
                                        {item.links.map((link, index) => {
                                            return (
                                                <Link
                                                    key={index}
                                                    href={link.href}
                                                    className="block pt-2 text-sm text-black hover:text-[#AA8453]"
                                                >
                                                    {link.name}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
            <Image
                src={image}
                alt="header image"
                width="2000"
                height="2000"
                className="h-full w-full object-cover"
            />
            <div className="absolute left-0 left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-40 px-8 py-20 text-center font-gilda text-white md:items-start lg:px-40">
                <h3 className=" font-barlow uppercase tracking-[0.5rem]">
                    {title2}
                </h3>
                <h3 className="text-heading">{title1}</h3>
            </div>
        </div>
    );
}
