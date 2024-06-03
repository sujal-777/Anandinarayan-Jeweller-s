import Image from "next/image";
import React from "react";
import { IoBedOutline } from "react-icons/io5";
import { FaSwimmingPool } from "react-icons/fa";
import { LiaGiftsSolid } from "react-icons/lia";
import { FaWifi } from "react-icons/fa";
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
        <div className="group relative aspect-video w-full overflow-clip" data-aos="fade-in">
            <Image
                src={img}
                alt={title + " image"}
                width={1000}
                height={1000}
                className="h-full w-full object-cover transition-all duration-200 group-hover:scale-110"
            />
            <div
                className={`absolute right-0 top-[10%] z-30 -rotate-90 border-2 border-white p-2 font-barlow text-[0.5rem] uppercase tracking-wider text-white md:top-[10%] md:p-4 md:text-lg`}
            >
                Booking
            </div>

            <div className="absolute bottom-0 left-0 z-20 w-full translate-y-[50%] group-hover:translate-y-0 transition-all duration-300 space-y-4 bg-gradient-to-t from-[#00000080] to-transparent p-4 md:px-8 text-white">
                <div className="">
                    <h3 className="text-2xl md:text-3xl py-2">{title}</h3>
                    <div className="duration-1000 h-[2px] w-[6rem] md:w-[15rem] bg-[#ffffff80] transition-all group-hover:w-full"></div>
                </div>

                <div className="flex items-center justify-between md:py-4 pb-6">
                    <div className="grid grid-cols-4 gap-4 md:text-xl">
                        <IoBedOutline />
                        <FaSwimmingPool />
                        <LiaGiftsSolid />
                        <FaWifi />
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
