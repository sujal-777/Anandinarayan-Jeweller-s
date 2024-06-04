"use client";

import React from "react";
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

type PropType = {
    slides: {
        name: string;
        desc: string;
        img: string;
        guests: number;
        seats: number;
        area: string;
        link1: string;
        link2: string;
    }[];
    options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Autoplay({ playOnInit: true, delay: 5000, stopOnMouseEnter: true }),
    ]);

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);

    return (
        <div className="embla w-full">
            <div className="embla__viewport w-full" ref={emblaRef}>
                <div className="embla__container w-full py-4">
                    {slides.map((item, index) => (
                        <div
                            className="embla__slide group relative aspect-[4/3] w-full"
                            key={index}
                        >
                            <div className="h-full w-full overflow-clip">
                                <Image
                                    src={item.img}
                                    alt={item.name}
                                    width={1000}
                                    height={1000}
                                    className="h-full w-full object-cover transition-all duration-200"
                                />
                            </div>
                            <div className="absolute -bottom-[1rem] left-0 right-0 mx-auto w-[90%] bg-white px-4 py-2 text-center group-hover:space-y-4 md:py-6">
                                <h3 className="text-xl md:text-2xl md:text-3xl">
                                    {item.name}
                                </h3>
                                <div className=" max-h-0 space-y-4 overflow-clip font-barlow  text-sm transition-all delay-200 duration-[2s] group-hover:max-h-[20rem] md:text-lg">
                                    <p className="text-sm">{item.desc}</p>
                                    <div className="grid grid-cols-3 text-left text-xs md:text-sm">
                                        <p>
                                            <TbUsersGroup className="mx-2 inline text-[#AA8453]" />
                                            {item.guests}+ Guests
                                        </p>
                                        <p>
                                            <LiaCouchSolid className="mx-2 inline text-[#AA8453]" />
                                            {item.seats}+ Seats
                                        </p>
                                        <p>
                                            <BiArea className="mx-2 inline text-[#AA8453]" />
                                            {item.area} sq. ft
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <Link
                                            href={item.link1}
                                            className="font-barlow uppercase hover:text-[#AA8453]"
                                        >
                                            Details
                                            <FaArrowRight className="mx-2 my-auto inline-block" />
                                        </Link>
                                        <Link
                                            href={""}
                                            className="bg-[#AA8453] p-2 uppercase text-white"
                                        >
                                            Book Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls w-full">
                <div className="embla__dots mx-auto my-auto w-full gap-2">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={" aspect-square h-4 rounded-full border-2 ".concat(
                                index === selectedIndex
                                    ? " border-[#AA8453] bg-[#AA8453]"
                                    : "border-white"
                            )}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EmblaCarousel;
