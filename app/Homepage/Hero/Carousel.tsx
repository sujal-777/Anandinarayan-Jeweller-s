"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

type PropType = {
    slides: {
        img: string;
        title1: string;
        title2: string;
        btnTitle: string;
        links: string;
    }[];
    options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Fade(),
        Autoplay({ playOnInit: true, delay: 5000, stopOnMouseEnter: true }),
    ]);

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);

    return (
        <div className="embla relative h-[100dvh] w-full">
            <div className="embla__viewport relative z-20" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((item, index) => (
                        <div
                            className="embla__slide h-[100dvh] w-full bg-gray-200"
                            key={index}
                        >
                            <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 px-8 py-20 text-center text-white lg:px-96">
                                <div
                                    className={`z-30 space-y-8 tracking-[0.5rem] transition-all delay-200 duration-700 ${index === selectedIndex ? "translate-y-0 opacity-100" : "translate-y-[50%] opacity-0"}`}
                                >
                                    <h3 className="font-barlow">
                                        {item.title2}
                                    </h3>
                                    <h1 className="  text-heading font-[500] uppercase tracking-wider">
                                        {item.title1}
                                    </h1>
                                </div>
                                {item.btnTitle !== "" && (
                                    <Link
                                        href={item.links}
                                        className={`z-30 border-2 border-white px-4 py-2 font-barlow uppercase tracking-wider transition-all delay-200 duration-700 hover:bg-white hover:text-black  ${index === selectedIndex ? "translate-y-0 opacity-100" : "translate-y-[50%] opacity-0"}`}
                                    >
                                        {item.btnTitle}
                                    </Link>
                                )}
                                <Image
                                    src={item.img}
                                    alt="Picture of the author"
                                    width={1920}
                                    height={1080}
                                    className="absolute left-0 top-0 z-10 h-full w-full object-cover"
                                />
                                <div className="absolute left-0 top-0 z-20 h-full w-full bg-black bg-opacity-40"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls absolute bottom-0 right-0 top-0 z-30 my-auto">
                <div className="embla__dots my-auto h-fit rotate-90 gap-2">
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
