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
    slides: string[];
    title: string;
    options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options, title } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Fade(),
        Autoplay({ playOnInit: true, delay: 5000, stopOnMouseEnter: true }),
    ]);

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);

    return (
        <div className="embla relative h-[60dvh] w-full">
            <div className="embla__viewport relative z-20" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((item, index) => (
                        <div
                            className="embla__slide h-[60dvh] w-full bg-black"
                            key={index}
                        >
                            <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 px-8 py-20 text-center text-white lg:px-20">
                                <Image
                                    src={item}
                                    alt="Picture of the author"
                                    layout="fill"
                                    className="z-10 h-full w-full object-cover"
                                />
                                <div className="absolute left-0 left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-transparent  px-8 py-20 text-center font-gilda text-white md:items-start lg:px-48 z-40">
                                    <h3 className="text-heading">{title}</h3>
                                </div>
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
