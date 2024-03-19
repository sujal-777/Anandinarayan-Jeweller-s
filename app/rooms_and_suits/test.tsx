import React from "react";
import { Image } from "@nextui-org/react";
export default function Component() {
  return (
    <div className="flex flex-col md:flex-row items-stretch justify-center min-h-screen p-4">
      <div className="w-1/6 flex-grow">
        <Image
          alt="image"
          src="/short_border.png"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="w-4/6 flex-grow bg-[url('../public/short_border.png')]">
        2
      </div>
      <div className="w-1/6 flex-grow bg-green-300">
        <Image
          alt="image"
          src="/short_border.png"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
}
