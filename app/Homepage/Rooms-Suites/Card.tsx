import Image from "next/image";
import React from "react";
import { GiGemChain, GiDiamondRing, GiCutDiamond } from "react-icons/gi";
import { PiCrownSimpleFill } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function Card({
    title,
    img,
    link,
}: {
    title: string;
    img: string;
    link: string;
}) {
    return (
        <div
            className="group relative aspect-video w-full overflow-clip"
            data-aos="fade-in"
        >
            <Image
                src={img}
                alt={title + " image"}
                width={1000}
                height={1000}
                className="h-full w-full object-cover trans-duration-500 group-hover:scale-110"
            />

            <Link
                target="_blank"
                href="https://www.swiftbook.io/inst/#home?propertyId=963MTUJmY1lpZeCmz9rXlfH7YmoaIvdJKdXK4LhxJkZp0tg0ZSH9q9wNA==&JDRN=Y"
                className="absolute right-0 top-[10%] z-30 -rotate-90 border-2 border-white p-2 font-barlow text-[0.5rem] md:text-sm uppercase tracking-wider text-white md:top-[15%] hover:bg-white hover:text-black duration-200"
            >
                Know More
            </Link>

            <div className="absolute bottom-0 left-0 z-20 w-full translate-y-[50%] group-hover:translate-y-0 trans-duration-500 space-y-4 bg-gradient-to-t from-[#00000080] to-transparent p-4 md:px-8 text-white">
                <div>
                    <h3 className="text-2xl py-2">{title}</h3>
                    <div className="h-[2px] w-[6rem] bg-[#ffffff80] trans-duration-500 group-hover:w-full"></div>
                </div>

                <div className="flex items-center justify-between pb-2 md:py-2">
                    <div className="grid grid-cols-4 gap-4 md:text-xl">
                        <GiDiamondRing />
                        <GiGemChain />
                        <PiCrownSimpleFill />
                        <GiCutDiamond />
                    </div>
                    <Link
                        href={link}
                        className="font-barlow uppercase hover:text-[#AA8453]"
                    >
                        Details
                        <FaArrowRight className="my-auto mx-2 inline-block" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
