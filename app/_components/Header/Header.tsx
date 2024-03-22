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
      <div className="absolute top-5 left-5 flex flex-col items-start w-full h-full">
        <Image
          src="/HeaderAssets/hotel_logo.png"
          alt="Hotel Logo"
          className="w-20 md:w-40"
        />
        <div className="absolute top-60 left-5 flex flex-col items-start w-full h-full">
          <p className="text-white font-gilda">LUXURY HOTEL</p>
          <p className="text-white text-8xl md:text-4xl font-gilda">
            {aboutUsText}
          </p>
        </div>
      </div>
    </section>
  );
}
