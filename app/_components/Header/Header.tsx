// Header.tsx
"use client";

import React from "react";
import { Image } from "@nextui-org/react";

interface HeaderProps {
    aboutUsText: string;
    headerBannerSrc: string;
}

export default function Header({ aboutUsText, headerBannerSrc }: HeaderProps) {
    return (
        <section className="relative">
            <img src={headerBannerSrc} alt="Header" />
            <div className="absolute left-5 top-5 flex h-full w-[80%] flex-col items-start">
                <Image
                    src="/HeaderAssets/hotel_logo.png"
                    alt="Hotel Logo"
                    className="w-20 md:w-40"
                />
                <div className="hidden md:block absolute left-5 top-60 flex h-full w-fit flex-col items-start">
                    <p className="font-gilda text-white">LUXURY HOTEL</p>
                    <p className="font-gilda text-8xl text-white md:text-4xl">
                        {aboutUsText}
                    </p>
                </div>
            </div>
        </section>
    );
}
