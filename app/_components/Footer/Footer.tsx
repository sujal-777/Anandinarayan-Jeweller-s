"use client";

import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { FaRegEnvelope, FaXTwitter } from "react-icons/fa6";

import { TfiYoutube, TfiInstagram } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { SiGoogle } from "react-icons/si";
import { PiLinkedinLogo } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";
import "./style.css";

import { Image } from "@nextui-org/react";

export default function Footer() {
    // TODO: ADD links to: Solutions, Price lists, Terms of Sale, Privacy Statement, Legal Authoriiy, Accessibilty, Projects, Commissions

    return (
        <div className="footer bg-[#282424] px-10 pb-4 pt-8 text-white md:px-20">
            <div className="flex flex-wrap gap-8 md:justify-between">
                <div className="grid grid-flow-col grid-cols-2 grid-rows-3 gap-8 md:max-w-[70%] md:text-left lg:grid-cols-5 lg:grid-rows-1">
                    <div className="leading-5">
                        <h2 className="mb-2 text-lg font-bold">Explore</h2>
                        <ul className="text-sm">
                            <li className="mb-2">
                                <a href="/">Home</a>
                            </li>
                            <li className="mb-2">
                                <a href="/">Rooms & Suites</a>
                            </li>
                            <li className="mb-2">
                                <a href="/">Restaurant</a>
                            </li>
                            <li className="mb-2">
                                <a href="/">About Hotel</a>
                            </li>
                            <li className="mb-2">
                                <a href="/">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="leading-5">
                        <h2 className="mb-2 text-lg font-bold">Legal</h2>
                        <ul className="text-sm">
                            <li className="mb-2">
                                <a href="/products&services">Browse Products</a>
                            </li>
                            <li className="mb-2">
                                <a href="/products&services">Services</a>
                            </li>
                            <li className="mb-2">
                                <a href="/">Solutions</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-b-2 border-white py-8 text-sm md:max-w-[30%] md:border-0 md:text-left">
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
                </div>
                <div className="border-b-2 border-white py-8 text-sm md:max-w-[30%] md:border-0 md:text-left">
                    <Image
                        src="/FooterAssets/image.png"
                        alt="footer image"
                        width={100}
                        height={100}
                        className="h-auto max-w-full"
                    />
                </div>
            </div>
            <div className="pt-4 text-center">
                <p>
                    Design and Developed by GBJ Buzz Copyright © 2024 Ashok
                    Group
                </p>
            </div>
        </div>
    );
}
