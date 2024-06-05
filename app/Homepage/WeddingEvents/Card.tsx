import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { TbUsersGroup } from "react-icons/tb";
import { LiaCouchSolid } from "react-icons/lia";
import { BiArea } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";

export default function Card({
    name,
    desc,
    img,
    guests,
    seats,
    area,
    link1,
    link2,
}: {
    name: string;
    desc: string;
    img: string;
    guests: number;
    seats: number;
    area: string;
    link1: string;
    link2: string;
}) {
    return (
        <div className="embla__slide group relative ml-4 mr-6 aspect-[4/3] w-full">
            <div className="h-full w-full overflow-clip">
                <Image
                    src={img}
                    alt={name}
                    width={1000}
                    height={1000}
                    className="h-full w-full object-cover transition-all duration-200"
                />
            </div>
            <div className="absolute -bottom-[1rem] left-0 right-0 mx-auto w-[90%] bg-white px-4 py-2 text-center group-hover:space-y-4 md:py-4">
                <h3 className="text-xl md:text-2xl">{name}</h3>
                <div className=" duration-[2s] max-h-0 space-y-4 overflow-clip  font-barlow text-sm transition-all delay-200 group-hover:max-h-[20rem] md:text-lg">
                    <p className="text-sm">{desc}</p>
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
                    <div className="flex items-center justify-between">
                        <Link
                            href={link1}
                            className="text-normal font-barlow uppercase hover:text-[#AA8453]"
                        >
                            Details
                            <FaArrowRight className="mx-2 my-auto inline-block" />
                        </Link>
                        <Link
                            href={""}
                            className="text-normal bg-[#AA8453] p-2 uppercase text-white"
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
