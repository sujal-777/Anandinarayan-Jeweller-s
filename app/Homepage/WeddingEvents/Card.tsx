import Image from "next/image";
import React from "react";
// import { BiArea } from "react-icons/bi";
// import { LiaCouchSolid } from "react-icons/lia";
// import { TbUsersGroup } from "react-icons/tb";
// import { FaArrowRight } from "react-icons/fa6";

export default function Card({
    img,
    name,
    desc,
    guests,
    seats,
    area,
    link1,
    link2,
}: {
    img: string;
    name: string;
    desc: string;
    guests: number;
    seats: number;
    area: string;
    link1: string;
    link2: string;
}) {
    return (
        <div className="group relative aspect-[4/3] w-full py-4">
            <div className="h-full w-full overflow-clip">
                <Image
                    src={img}
                    alt={name}
                    width={1000}
                    height={1000}
                    className="trans-duration-500 h-full w-full object-cover"
                />
            </div>
            <div className="absolute -bottom-[1rem] left-0 right-0 mx-auto w-[90%] bg-white px-4 py-2 text-center group-hover:space-y-4 md:pt-6 md:pb-8 pb-4">
                <h3 className="text-xl md:text-2xl font-gilda">{name}</h3>
                <div className="trans-duration-500 max-h-0 space-y-4 overflow-clip font-barlow text-sm delay-200 group-hover:max-h-[20rem] md:text-lg">
                    <p className="text-sm">{desc}</p>

                    {/* 
                    <div className="grid grid-cols-3 text-left text-xs md:text-sm">
                        <p>
                            <TbUsersGroup className="mx-2 inline text-[#AA8453]" />
                            {guests}+ Guests
                        </p>
                        <p>
                            <LiaCouchSolid className="mx-2 inline text-[#AA8453]" />
                            {seats}+ Seats
                        </p>
                        <p>
                            <BiArea className="mx-2 inline text-[#AA8453]" />
                            {area} sq. ft
                        </p>
                    </div>
                    */}

                    <div className="flex items-center justify-center">
                        <p className="font-barlow uppercase text-[#AA8453]">Contact Us</p>
                        {/* <FaArrowRight className="mx-2 my-auto inline-block" /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
