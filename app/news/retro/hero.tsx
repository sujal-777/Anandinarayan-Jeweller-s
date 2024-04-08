import React from "react";

import Image from "next/image";

export default function hero() {
  return (
    <>
      <Image
        alt="hero banner retro"
        src="/news/retro/banner.png"
        width={1920}
        height={650}
        className="block h-auto w-full"
      />
    </>
  );
}
