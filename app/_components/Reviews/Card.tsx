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
import { FaStar } from "react-icons/fa";

export default function Card({
    name,
    text,
    image,
    role,
    rating,
}: {
    name: string;
    text: string;
    image: string;
    role: string;
    rating: number;
}) {
    return (
        <div className=" w-full space-y-4 px-4 font-barlow text-white">
            <div>
                {[...Array(rating)].map((_, index) => {
                    return (
                        <FaStar
                            key={index + 100}
                            className="mr-2 inline text-[#E4A853]"
                        />
                    );
                })}
            </div>
            <p>{text}</p>
            <div className="relative flex items-center gap-2">
                <div className="flex flex-col justify-center">
                    <p className="uppercase tracking-widest font-bold">By {name}</p>
                </div>
            </div>
        </div>
    );
}
