import React from "react";
import { Image } from "@nextui-org/react";
export default function Component() {
    return (
        <div className="flex min-h-screen flex-col items-stretch justify-center p-4 md:flex-row">
            <div className="w-1/6 flex-grow">
                <Image
                    alt="image"
                    src="/short_border.png"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="w-4/6 flex-grow bg-[url('../public/short_border.png')]">
                2
            </div>
            <div className="w-1/6 flex-grow bg-green-300">
                <Image
                    alt="image"
                    src="/short_border.png"
                    className="h-full w-full object-cover"
                />
            </div>
        </div>
    );
}
