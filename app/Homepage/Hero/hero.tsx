"use client";
import { useState } from "react";
import RoomSearch from "../roomSelect";
import EmblaCarousel from "./Carousel";
import { EmblaOptionsType } from "embla-carousel";
import { FaPhoneVolume } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { menuItems } from "@/constants/menuItems";
import Script from "next/script";
import Form from "@/app/_components/Form";
import HorizontalForm from "@/app/_components/HorizontalForm";
import { usePathname } from "next/navigation";

export default function Hero() {
    const slides = [
        {
            img: "/assets/Home/Carousel1.png",
            title1: "Enjoy a luxury experience",
            title2: "Luxury Hotel & Best Resort",
            btnTitle: "",
            links: "",
        },
        {
            img: "/assets/Home/Carousel2.png",
            title1: "Experience unparalleled luxury and sophistication",
            title2: "Luxury Hotel & Best Resort",
            btnTitle: "Rooms and Suite",
            links: "/rooms_and_suits",
        },
        {
            img: "/assets/Home/Carousel3.png",
            title1: "Discover a sanctuary of luxury and tranquility",
            title2: "Luxury Hotel & Best Resort",
            btnTitle: "Weddings",
            links: "/weddings-and-events",
        },
    ];

    const options: EmblaOptionsType = { loop: true, duration: 60 };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [hidden, setHidden] = useState(true);

    const pathname = usePathname();
    return (
        <section data-aos="fade-in" className="hero relative">
            {/* NAVBAR */}
            <div className=" barlow-condensed fixed left-0 top-0 z-40 flex w-full items-center justify-between gap-36 px-4 py-4 lg:justify-center lg:px-12">
                <Link href={"/"}>
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        width={500}
                        height={500}
                        className="max-w-[120px] md:max-w-[150px]"
                    />
                </Link>

                <button
                    className="group relative block overflow-clip rounded-lg lg:hidden"
                    onClick={() => {
                        setHidden((x) => !x);
                    }}
                >
                    <div
                        className={`nav-btn flex flex-col justify-center gap-1 p-4 transition-all delay-200 duration-200  `}
                    >
                        <div
                            className={`w-6 origin-center border-2 border-white transition-all duration-200 md:w-8 ${
                                !hidden &&
                                "translate-y-[220%] rotate-45 border-[#D5AF80]"
                            }`}
                        ></div>
                        <div
                            className={`w-6 border-2 border-white md:w-8 ${
                                !hidden && "opacity-0"
                            }`}
                        ></div>
                        <div
                            className={`w-6 origin-center border-2 border-white transition-all duration-200 md:w-8 ${
                                !hidden &&
                                "-translate-y-[220%] -rotate-45 border-[#D5AF80]"
                            }`}
                        ></div>
                    </div>
                </button>

                <div
                    className={`absolute left-0 top-full w-full items-center gap-8 space-y-4 overflow-clip bg-white px-4 transition-all duration-300 lg:static block md:grid md:grid-cols-2 lg:flex lg:w-fit lg:space-y-0 lg:overflow-visible lg:bg-transparent lg:p-0 ${hidden ? "max-h-[0dvh] p-0 lg:max-h-fit" : "max-h-[80dvh] py-4 lg:max-h-fit"}`}
                >
                    {menuItems.map((item, index) => {
                        return (
                            <div key={index} className="group relative">
                                <Link
                                    href={item.href}
                                    className="uppercase text-black hover:text-[#AA8453] lg:text-white"
                                    onClick={() => {
                                        setHidden(true);
                                    }}
                                >
                                    {item.text}
                                    {item.links && (
                                        <KeyboardArrowDownIcon className=" text-black hover:text-[#AA8453] lg:text-white" />
                                    )}
                                </Link>
                                {item.links && (
                                    <div className="hover-trans top-[-2000%] z-[-1] w-full max-w-[20rem] space-y-2 divide-y-2 bg-white p-4 group-hover:top-full group-hover:opacity-100 lg:absolute lg:left-0 lg:right-0 lg:min-w-[10rem] lg:opacity-0">
                                        {item.links.map((link, index) => {
                                            return (
                                                <Link
                                                    key={index}
                                                    href={link.href}
                                                    className="block pt-2 text-black hover:text-[#AA8453]"
                                                    onClick={() => {
                                                        setHidden(true);
                                                    }}
                                                >
                                                    {link.name}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* CAROUSEL */}
            <EmblaCarousel slides={slides} options={options} />

            {/* SIDE */}
            <a
                href="tel:+918888870722"
                className="absolute bottom-0 left-[-5%] top-0 z-20 my-auto hidden h-fit -rotate-90 p-4 text-white lg:block"
            >
                <div className="float-left rounded-full border-2 border-white p-4 hover:scale-110">
                    <FaPhoneVolume className="text-xl" />
                </div>
                <div className="float-left mx-4">
                    <p className="barlow-condensed text-xs uppercase tracking-[0.3rem]">
                        reservation
                    </p>
                    <p className="font-gilda text-2xl text-[#aa8453]">
                        +91 88888 70722
                    </p>
                </div>
            </a>

            <div className="bottom-0 left-0 right-0 z-30 hidden px-8 pb-20 lg:absolute lg:block lg:px-40">
                <HorizontalForm />
            </div>

            <div className="block lg:hidden">
                <Form />
            </div>
        </section>
    );
}
