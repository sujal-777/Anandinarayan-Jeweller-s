"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { it } from "node:test";
import Link from "next/link";
import { menuItems } from "@/constants/menuItems";
import { usePathname } from "next/navigation";

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [hidden, setHidden] = useState(true);
    const [scrolled, setScrolled] = useState(false);

    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            if (currentScrollPos > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`barlow-condensed text-normal fixed left-0 top-0 z-50 flex w-full items-center justify-between gap-36 bg-white px-4 py-4 shadow-xl backdrop-blur-sm transition-all duration-200 lg:justify-center lg:px-12 ${scrolled ? " -translate-y-0" : " -translate-y-full"}`}
        >
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
                        className={`w-6 origin-center border-2 border-black transition-all duration-200 md:w-8 ${
                            !hidden &&
                            "translate-y-[220%] rotate-45 border-[#D5AF80]"
                        }`}
                    ></div>
                    <div
                        className={`w-6 border-2 border-black md:w-8 ${
                            !hidden && "opacity-0"
                        }`}
                    ></div>
                    <div
                        className={`w-6 origin-center border-2 border-black transition-all duration-200 md:w-8 ${
                            !hidden &&
                            "-translate-y-[220%] -rotate-45 border-[#D5AF80]"
                        }`}
                    ></div>
                </div>
            </button>

            <div
                className={`absolute left-0 top-full block w-full items-center gap-8 space-y-4 overflow-clip overflow-y-scroll bg-white px-4 transition-all duration-300 lg:static lg:flex lg:w-fit lg:space-y-0 lg:overflow-visible lg:bg-transparent lg:p-0 ${hidden ? "max-h-[0dvh] p-0 lg:max-h-fit" : "max-h-[80dvh] py-4 lg:max-h-fit"}`}
            >
                {menuItems.map((item, index) => {
                    return (
                        <div key={index} className="group relative">
                            <Link
                                href={item.href}
                                className={`bg-white uppercase hover:text-[#AA8453] ${pathname === item.href ? "text-[#AA8453]" : "text-black"}`}
                                onClick={() => {
                                    setHidden(true);
                                }}
                            >
                                {item.text}
                                {item.links && (
                                    <KeyboardArrowDownIcon
                                        className={` hover:text-[#AA8453] ${pathname === item.href ? "text-[#AA8453]" : "text-black"}`}
                                    />
                                )}
                            </Link>
                            {item.links && (
                                <div className="hover-trans top-[-2000%] z-[-1] w-full max-w-[20rem] space-y-2 divide-y-2 bg-white p-4 group-hover:top-full group-hover:opacity-100 lg:absolute lg:left-0 lg:right-0 lg:min-w-[10rem] lg:opacity-0">
                                    {item.links.map((link, index) => {
                                        return (
                                            <Link
                                                key={index}
                                                href={link.href}
                                                className={`block pt-2 hover:text-[#AA8453] ${pathname === item.href && "text-[#AA8453]"}`}
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
    );
}
