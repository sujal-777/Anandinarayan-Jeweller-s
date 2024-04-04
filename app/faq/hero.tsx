import React from "react";

// import { Image } from "@nextui-org/react";
import Image from "next/image";

const header = "/faq.webp";

const hero = () => {
  return (
    <div className="">
      <Image
        src={header}
        alt="hero"
        width={1920}
        height={650}
        className="block h-auto w-full"
      />
    </div>
  );
};

export default hero;
