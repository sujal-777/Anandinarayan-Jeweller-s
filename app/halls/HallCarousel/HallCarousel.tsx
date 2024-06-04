"use client";

import React, { useState } from "react";
import Image from "next/image";
import Card from "./Card";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function HallCarousel() {
    const rooms = [
        {
            title: "Kohinoor",
            img: "/assets/hallls/samrat1.png",
            link: "/halls/kohinoor",
        },
        {
            title: "Maurya",
            img: "/assets/hallls/maurya1.png",
            link: "/halls/maurya",
        },
        {
            title: "Magadh",
            img: "/assets/hallls/magad1.png",
            link: "/halls/magadh",
        },
        {
            title: "Samrat",
            img: "/assets/hallls/kohinor1.png",
            link: "/halls/samrat",
        },
    ];

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
            breakpoints: {
                "(min-width: 1025px)": {
                    slides: {
                        perView: 2,
                        spacing: 10,
                    },
                },
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
        <section className="min-h-screen bg-[#F8F5F0] px-8 py-20 lg:px-96">
            <div className="py-10" data-aos="fade-up">
                <p
                    className="font-barlow uppercase tracking-widest text-[#666666]"
                    data-aos="fade-up"
                >
                    Hotel Ashok
                </p>
                <h2
                    className="text-heading font-gilda"
                    style={{ color: "#000000" }}
                >
                    Wedding and Event Halls
                </h2>
            </div>

            <div ref={sliderRef} className="keen-slider">
                {rooms.map((room, index) => (
                    <div className="keen-slider__slide" key={index}>
                        <Card
                            title={room.title}
                            img={room.img}
                            link={room.link}
                        />
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
                                            : "")
                                    }
                                ></button>
                            );
                        }
                    )}
                </div>
            )}
            <br />
        </section>
    );
}
