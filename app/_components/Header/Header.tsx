// Header.tsx
"use cleint";

import React from "react";

interface HeaderProps {
  aboutUsText: string;
  headerBannerSrc: string;
}

export default function Header({ aboutUsText, headerBannerSrc }: HeaderProps) {
  return (
    <section className="relative">
      <img
        src={headerBannerSrc}
        alt="Header"
        className="w-full h-96 object-cover"
      />
      <div className="absolute top-5 left-5 flex flex-col items-start w-full h-full">
        <img
          src="/HeaderAssets/hotel_logo.png"
          alt="Hotel Logo"
          className="w-20 md:w-40"
        />
        <div className="absolute top-40 left-5 flex flex-col items-start w-full h-full">
          <p className="text-white">LUXURY HOTEL</p>
          <p className="text-white text-8xl md:text-4xl">{aboutUsText}</p>
        </div>
      </div>
    </section>
  );
}
