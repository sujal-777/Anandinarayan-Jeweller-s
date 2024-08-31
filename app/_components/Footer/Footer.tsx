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
    const menuItems = [
        {
            text: "Home",
            href: "/",
        },
        {
            text: "About",
            href: "/about-us",
        },
        {
            text: "Rooms & Suits",
            href: "/rooms_and_suits",
            links: [
                {
                    name: "Family Room",
                    href: "/rooms_and_suits/family_room",
                },
                {
                    name: "Deluxe Room",
                    href: "/rooms_and_suits/deluxe_room",
                },
                {
                    name: "King Suite",
                    href: "/rooms_and_suits/king_suit",
                },
                {
                    name: "Budget Room",
                    href: "/rooms_and_suits/budget_room",
                },
            ],
        },
        {
            text: "Wedding & Events",
            href: "/weddings-and-events",
            links: [
                {
                    name: "Kohinoor Hall",
                    href: "/weddings-and-events/kohinoor",
                },
                {
                    name: "Magadh Hall",
                    href: "/weddings-and-events/magadh",
                },
                {
                    name: "Maurya Hall",
                    href: "/weddings-and-events/maurya",
                },
                {
                    name: "Samrat Hall",
                    href: "/weddings-and-events/samrat",
                },
            ],
        },
        {
            text: "Dining",
            href: "/food",
            links: [
                {
                    name: "Food",
                    href: "/food",
                },
                {
                    name: "Bar",
                    href: "/bar",
                },
                {
                    name: "Pooldeck Restrobar",
                    href: "/pooldeck-restrobar",
                },
                {
                    name: "Swimming Pool",
                    href: "/swimming-pool",
                },
            ],
        },
        {
            text: "Awards",
            href: "/awards",
        },
        {
            text: "Careers",
            href: "/careers",
        },
        { text: "Contact", href: "/contact_us" },
    ];

    return (
        <>
            <div className="footer grid grid-cols-1 gap-4 bg-[#282424] px-8 py-20 font-barlow text-white lg:grid-cols-4 lg:px-48">
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
                            <Link href="/faq">Frequently Asked Questions</Link>
                        </li>
                        <li className="mb-2 text-[#ADADAD] hover:text-white">
                            <Link href="/terms-and-conditions">
                                Terms and Conditions
                            </Link>
                        </li>
                        <li className="mb-2 text-[#ADADAD] hover:text-white">
                            <Link href="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li className="mb-2 text-[#ADADAD] hover:text-white">
                            <Link href="/payment-terms">Payment Terms</Link>
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
                            <span className="text-xl text-white">
                                +91 88888 70722
                            </span>
                        </li>
                        <li className="underline">
                            <a href="mailto:booking@thenagpurashok.com">
                                booking@thenagpurashok.com
                            </a>
                        </li>
                    </ul>
                    <br />
                    <div className="mt-2 flex justify-start gap-4">
                        <a
                            href="https://www.facebook.com/thenagpurashok/"
                            className="transition duration-75 hover:text-purple-400"
                            target="_blank"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="https://www.instagram.com/hotel_nagpur_ashok/"
                            className="transition duration-75 hover:text-purple-400"
                            target="_blank"
                        >
                            <TfiInstagram />
                        </a>
                        <a
                            href="https://www.google.com.np/travel/hotels/entity/ChgIw7SUwYLs3__hARoLL2cvMXRzeW43OGgQAQ?g2lb=4207876%2C4208993%2C4220293%2C4223281%2C4242898%2C4245928%2C4251619%2C4253230%2C4254308%2C4256748%2C4258168%2C4250437%2C4251518%2C4253015&hl=en&gl=np&un=1&rp=MhsKEgml8-FZgqw7QBHB4nDmV1tVQBC245qvrC04AUgC&ictx=1&tcfs=EhoaGAoKMjAxOS0wNS0yMRIKMjAxOS0wNS0yMlIA&utm_campaign=sharing&utm_medium=link&utm_source=htls&ts=CAEaUwo1EjEyJTB4M2EyY2Q0Y2JhYzNkMjRkZjoweDg3ZmFhZjY2NTM1ZmM5ODU6CFZpZGFyYmhhGgASGhIUCgcI6A8QBhgIEgcI6A8QBhgJGAEyAhAAKgkKBToDTlBSGgA&sa=X&ap=MAA&ei=wtUFZMe5C8i92QL19qy4Dg&ved=0CAAQ5JsGahcKEwjI3eeawsmGAxUAAAAAHQAAAAAQBA"
                            className="transition duration-75 hover:text-purple-400"
                            target="_blank"
                        >
                            <SiGoogle />
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UC08aVU9z2jR3jMPrDtnLVnQ"
                            className="transition duration-75 hover:text-purple-400"
                            target="_blank"
                        >
                            <TfiYoutube />
                        </a>
                        <a
                            href="https://in.linkedin.com/company/the-nagpur-ashok"
                            className="transition duration-75 hover:text-purple-400"
                            target="_blank"
                        >
                            <PiLinkedinLogo />
                        </a>
                        <a
                            href="https://x.com/thenagpurashok"
                            className="transition duration-75 hover:text-purple-400"
                            target="_blank"
                        >
                            <RiTwitterXLine />
                        </a>
                    </div>
                </div>
                <div className="">
                    <Link href={"https://www.tripadvisor.in/Hotel_Review-g662323-d2399400-Reviews-Hotel_Nagpur_Ashok-Nagpur_Nagpur_District_Maharashtra.html?m=19905"} target="_blank">
                        <Image
                            src="/assets/TC LOGO_2024.webp"
                            alt="footer image"
                            width={200}
                            height={200}
                            className="aspect-square h-auto max-w-full rounded-full object-cover object-center"
                        />
                    </Link>
                </div>
            </div>
            <div className="border-t-2 border-white bg-[#282424] py-4 text-center font-barlow text-[#ADADAD]">
                <p>
                    Design and Developed by{" "}
                    <a
                        href="https://gbjbuzz.com/"
                        target="_blank"
                        className="text-white"
                    >
                        GBJ Buzz Pvt Ltd
                    </a>{" "}
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
