"use client";

import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { FaPhoneVolume, FaRegEnvelope } from "react-icons/fa6";
import { TfiYoutube, TfiInstagram } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { SiGoogle } from "react-icons/si";
import { PiLinkedinLogo } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";

import "./style.css";
import { Image } from "@nextui-org/react";
import Link from "next/link";

export default function Footer() {
    const menuItems = [
        { text: "Home", href: "/" },
        { text: "About", href: "/about-us" },
        { text: "Products", href: "/products" },
        { text: "Custom Design", href: "/custom-design" },
        { text: "Gallery", href: "/gallery" },
        { text: "Contact", href: "/contact" },
    ];

    return (
        <>
            <footer className="bg-[#282424] text-white font-barlow px-6 py-12 md:px-12 lg:px-32">
                <div className="max-w-7xl mx-auto">
                    {/* Desktop View */}
                    <div className="hidden md:flex items-start justify-between gap-12">
                        {/* Logo (25%) */}
                        <div className="w-1/4">
                            <Image
                                src="/logo-default-2.png"
                                alt="Anandinarayan Logo"
                                width={250}
                                height={150}
                                className="w-full max-w-[400px] h-auto object-contain"
                            />
                        </div>

                        {/* Footer Menus */}
                        <div className="flex flex-1 justify-between gap-12 text-sm">
                            {/* Explore */}
                            <div>
                                <h2 className="mb-3 font-gilda text-lg">Explore</h2>
                                <ul className="space-y-2 text-[#ADADAD]">
                                    {menuItems.map((item, index) => (
                                        <li key={index} className="hover:text-white">
                                            <Link href={item.href}>{item.text}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Legal */}
                            <div>
                                <h2 className="mb-3 font-gilda text-lg">Legal</h2>
                                <ul className="space-y-2 text-[#ADADAD]">
                                    <li><Link href="/faq">Frequently Asked Questions</Link></li>
                                    <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
                                    <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                </ul>
                            </div>

                            {/* Contact */}
                            <div>
                                <h2 className="mb-3 font-gilda text-lg">Contact</h2>
                                <ul className="space-y-3 text-[#ADADAD]">
                                    <li>
                                        <IoLocationOutline className="inline mr-2 text-lg" />
                                        Anadinarayan Jewellers, Main Bazaar, Nagpur, Maharashtra
                                    </li>
                                    <li>
                                        <FaPhoneVolume className="inline mr-2 text-lg" />
                                        <span className="text-white font-medium">+91 88888 70722</span>
                                    </li>
                                    <li>
                                        <FaRegEnvelope className="inline mr-2 text-lg" />
                                        <a href="mailto:info@anandinarayan.com" className="underline">
                                            info@anadinarayan.com
                                        </a>
                                    </li>
                                </ul>
                                <div className="mt-4 flex gap-4 text-lg">
                                    <a href="#" className="hover:text-purple-400" target="_blank"><FaFacebookF /></a>
                                    <a href="#" className="hover:text-purple-400" target="_blank"><TfiInstagram /></a>
                                    <a href="#" className="hover:text-purple-400" target="_blank"><SiGoogle /></a>
                                    <a href="#" className="hover:text-purple-400" target="_blank"><TfiYoutube /></a>
                                    <a href="#" className="hover:text-purple-400" target="_blank"><PiLinkedinLogo /></a>
                                    <a href="#" className="hover:text-purple-400" target="_blank"><RiTwitterXLine /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile View */}
                    <div className="md:hidden flex flex-col items-center gap-10 text-center text-sm">
                        {/* Centered Logo */}
                        <div>
                            <Image
                                src="/logo-default-2.png"
                                alt="Anandinarayan Logo"
                                width={160}
                                height={80}
                                className="mx-auto w-1/2 object-contain"
                            />
                        </div>

                        {/* Explore + Legal */}
                        <div className="flex justify-between w-full px-4 gap-4">
                            {/* Explore */}
                            <div className="text-left w-1/2">
                                <h2 className="mb-3 font-gilda text-base">Explore</h2>
                                <ul className="space-y-2 text-[#ADADAD]">
                                    {menuItems.map((item, index) => (
                                        <li key={index} className="hover:text-white">
                                            <Link href={item.href}>{item.text}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Legal */}
                            <div className="text-left w-1/2">
                                <h2 className="mb-3 font-gilda text-base">Legal</h2>
                                <ul className="space-y-2 text-[#ADADAD]">
                                    <li><Link href="/faq">FAQ</Link></li>
                                    <li><Link href="/terms-and-conditions">Terms</Link></li>
                                    <li><Link href="/privacy-policy">Privacy</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact Full Width */}
                        <div className="text-left px-4 w-full">
                            <h2 className="mb-3 font-gilda text-base">Contact</h2>
                            <ul className="space-y-3 text-[#ADADAD]">
                                <li>
                                    <IoLocationOutline className="inline mr-2 text-lg" />
                                    Anadinarayan Jewellers, Main Bazaar, Nagpur, Maharashtra
                                </li>
                                <li>
                                    <FaPhoneVolume className="inline mr-2 text-lg" />
                                    <span className="text-white font-medium">+91 88888 70722</span>
                                </li>
                                <li>
                                    <FaRegEnvelope className="inline mr-2 text-lg" />
                                    <a href="mailto:info@anandinarayan.com" className="underline">
                                        info@anadinarayan.com
                                    </a>
                                </li>
                            </ul>

                            {/* Social Icons */}
                            <div className="mt-4 flex justify-center gap-4 text-lg">
                                <a href="#" className="hover:text-purple-400" target="_blank"><FaFacebookF /></a>
                                <a href="#" className="hover:text-purple-400" target="_blank"><TfiInstagram /></a>
                                <a href="#" className="hover:text-purple-400" target="_blank"><SiGoogle /></a>
                                <a href="#" className="hover:text-purple-400" target="_blank"><TfiYoutube /></a>
                                <a href="#" className="hover:text-purple-400" target="_blank"><PiLinkedinLogo /></a>
                                <a href="#" className="hover:text-purple-400" target="_blank"><RiTwitterXLine /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Bottom Strip */}
            <div className="bg-[#282424] border-t border-white py-4 text-center text-[#ADADAD] text-sm">
                <p>
                    Design and Developed by{" "}
                    <a href="https://gbjbuzz.com/" target="_blank" className="text-white">
                        GBJ Buzz Private Limited
                    </a>{" "}
                    | © 2025 Anadinarayan Jewellers
                </p>
            </div>
        </>
    );
}
