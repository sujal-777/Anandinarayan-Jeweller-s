import React from "react";

import { Image } from "@nextui-org/react";

const header = "/faq.webp";

const hero = () => {
  return (
    <div className="w-full">
      <Image
        radius="none"
        src={header}
        alt="hero"
        className="block h-auto max-w-full"
      />
    </div>
  );
};

export default hero;
