"use client";

import React, { useState } from "react";
import Image from "next/image";
import Card from "./Card";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Carousel({ reviews }: { reviews: any[] }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
        {
            initial: 0,
            loop: true,
            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel);
            },
            created() {
                setLoaded(true);
            },
            slides: {
                perView: 1,
                spacing: 10,
            },
        },
        [
            (slider) => {
                let timeout: ReturnType<typeof setTimeout>;
                let mouseOver = false;
                function clearNextTimeout() {
                    clearTimeout(timeout);
                }
                function nextTimeout() {
                    clearTimeout(timeout);
                    if (mouseOver) return;
                    timeout = setTimeout(() => {
                        slider.next();
                    }, 5000);
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true;
                        clearNextTimeout();
                    });
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false;
                        nextTimeout();
                    });
                    nextTimeout();
                });
                slider.on("dragStarted", clearNextTimeout);
                slider.on("animationEnded", nextTimeout);
                slider.on("updated", nextTimeout);
            },
        ]
    );
    return (
        <div>
            {" "}
            <div ref={sliderRef} className="keen-slider">
                {reviews.map((review, index) => (
                    <div className="keen-slider__slide" key={index}>
                        <Card {...review} />
                    </div>
                ))}
            </div>
            {loaded && instanceRef.current && (
                <div
                    className="dots my-8 text-center"
                    data-aos="fade-up"
                    data-aos-delay="150"
                >
                    {[...Array(instanceRef.current.slides.length)].map(
                        (x, y) => {
                            return (
                                <button
                                    key={y}
                                    onClick={() => {
                                        instanceRef.current?.moveToIdx(y);
                                    }}
                                    className={
                                        "dot mx-1 rounded-full border-2 border-[#C49A62] p-2" +
                                        (currentSlide === y
                                            ? " bg-[#AA8453]"
                                            : " border-white")
                                    }
                                ></button>
                            );
                        }
                    )}
                </div>
            )}
        </div>
    );
}
