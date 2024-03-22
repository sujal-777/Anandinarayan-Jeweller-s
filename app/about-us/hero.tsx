import React from "react";
import { Image } from "@nextui-org/react";

const header = "/about/about_header.png";

const hero = () => {
  return (
    <div className="">
      <Image
        className="h-auto max-w-full rounded-none"
        src={header}
        alt="hero"
      />
    </div>
  );
};

export default hero;
