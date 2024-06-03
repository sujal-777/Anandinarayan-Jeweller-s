"use client";

import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { FaPhoneVolume, FaRegEnvelope, FaXTwitter } from "react-icons/fa6";

import { TfiYoutube, TfiInstagram } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { SiGoogle } from "react-icons/si";
import { PiLinkedinLogo } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";
import "./style.css";

import { Image, menuItem } from "@nextui-org/react";
import { menuItems } from "@/constants/menuItems";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";

{
    /* <div className="border-b-2 border-white py-8 text-sm md:max-w-[30%] md:border-0 md:text-left">
<Image
    src="/FooterAssets/image.png"
    alt="footer image"
    width={100}
    height={100}
    className="h-auto max-w-full"
/>
</div> */
}

export default function Footer() {
    // TODO: ADD links to: Solutions, Price lists, Terms of Sale, Privacy Statement, Legal Authoriiy, Accessibilty, Projects, Commissions

    return (
        <>
            <div className="footer grid grid-cols-1 gap-4 bg-[#282424] px-8 py-20 text-white lg:grid-cols-4 lg:px-40">
                <div className="leading-5">
                    <h2 className="mb-2 font-gilda text-lg">Explore</h2>
                    <ul className="">
                        {menuItems.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className="mb-2 text-[#ADADAD] hover:text-white"
                                >
                                    <Link href={item.href}>{item.text}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="leading-5">
                    <h2 className="mb-2 font-gilda text-lg">Legal</h2>
                    <ul className="text-sm">
                        <li className="mb-2 text-[#ADADAD] hover:text-white">
                            <Link href="/products&services">
                                Frequently Asked Questions
                            </Link>
                        </li>
                        <li className="mb-2 text-[#ADADAD] hover:text-white">
                            <Link href="/products&services">
                                Terms and Conditions
                            </Link>
                        </li>
                        <li className="mb-2 text-[#ADADAD] hover:text-white">
                            <Link href="/products&services">
                                Privacy Policy
                            </Link>
                        </li>
                        <li className="mb-2 text-[#ADADAD] hover:text-white">
                            <Link href="/products&services">
                                Cancellation Policy
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="text-sm leading-5">
                    <h2 className="mb-2 font-gilda text-lg">Contact</h2>
                    <ul className="space-y-2 text-[#ADADAD]">
                        <li>
                            <IoLocationOutline className="mr-2 inline text-lg" />{" "}
                            Address - WHC Road, Aath Rasta Square, Laxmi Nagar,
                            Nagpur, Maharashtra 440022
                        </li>
                        <li>
                            <FaPhoneVolume className="mr-2 inline text-lg" />{" "}
                            +91 88888 70722
                        </li>
                        <li className="underline">
                            <a href="mailto:booking@thenagpurashok.com">
                                booking@thenagpurashok.com
                            </a>
                        </li>
                    </ul>
                    <br />
                    <div className="mt-2 flex justify-start gap-8">
                        <a
                            href="/"
                            className="transition duration-75 hover:text-purple-400"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="/"
                            className="transition duration-75 hover:text-purple-400"
                        >
                            <TfiInstagram />
                        </a>
                        <a
                            href="/"
                            className="transition duration-75 hover:text-purple-400"
                        >
                            <SiGoogle />
                        </a>
                        <a
                            href="/"
                            className="transition duration-75 hover:text-purple-400"
                        >
                            <TfiYoutube />
                        </a>
                        <a
                            href="/"
                            className="transition duration-75 hover:text-purple-400"
                        >
                            <PiLinkedinLogo />
                        </a>
                        <a
                            href="/"
                            className="transition duration-75 hover:text-purple-400"
                        >
                            <RiTwitterXLine />
                        </a>
                    </div>
                </div>
                <div className="">
                    <Image
                        src="/FooterAssets/image.png"
                        alt="footer image"
                        width={200}
                        height={200}
                        className="h-auto max-w-full"
                    />
                </div>
            </div>
            <div className="border-t-2 border-white bg-[#282424] py-4 text-center font-barlow text-[#ADADAD]">
                <p>
                    Design and Developed by <a href="https://gbjbuzz.com/" target="_blank" className="text-white">GBJ Buzz Pvt Ltd</a>{" "}
                    Copyright © 2024 Ashok Group
                </p>
            </div>
        </>
    );
}

{
    /* <div className="border-b-2 border-white py-8 text-sm md:max-w-[30%] md:border-0 md:text-left">
<ul className="add-list pl-4">
    <li>
        Address - WHC Road, Aath Rasta Square, Laxmi Nagar,
        Nagpur, Maharashtra 440022
    </li>
    <li> +91 88888 70722</li>
    <li>booking@thenagpurashok.com</li>
</ul>
<br />
<div className="mt-2 flex justify-start gap-8">
    <a
        href="/"
        className="transition duration-75 hover:text-purple-400"
    >
        <FaFacebookF />
    </a>
    <a
        href="/"
        className="transition duration-75 hover:text-purple-400"
    >
        <TfiInstagram />
    </a>
    <a
        href="/"
        className="transition duration-75 hover:text-purple-400"
    >
        <SiGoogle />
    </a>
    <a
        href="/"
        className="transition duration-75 hover:text-purple-400"
    >
        <TfiYoutube />
    </a>
    <a
        href="/"
        className="transition duration-75 hover:text-purple-400"
    >
        <PiLinkedinLogo />
    </a>
    <a
        href="/"
        className="transition duration-75 hover:text-purple-400"
    >
        <RiTwitterXLine />
    </a>
</div>
</div> */
}
