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
import { FaStar } from "react-icons/fa";

type PropType = {
    slides: {
        name: string;
        text: string;
        image: string;
        role: string;
        rating: number;
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
                <div className="embla__container w-full py-4 md:p-4">
                    {slides.map((item, index) => (
                        <div
                            key={index}
                            className="embla__slide w-full space-y-4 px-4 font-barlow text-white"
                        >
                            <div>
                                {[...Array(item.rating)].map((_, index) => {
                                    return (
                                        <FaStar key={index+100} className="mr-2 inline text-[#E4A853]" />
                                    );
                                })}
                            </div>
                            <p>{item.text}</p>
                            <div className="relative flex items-center gap-2">
                                <div className="float-left aspect-square w-20 overflow-clip rounded-full">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={500}
                                        height={500}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className="uppercase tracking-widest">
                                        {item.name}
                                    </p>
                                    <p className="text-xs">{item.role}</p>
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
