"use client"

import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { FaRegEnvelope, FaXTwitter } from "react-icons/fa6";

import { TfiYoutube, TfiInstagram } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { SiGoogle } from "react-icons/si";
import { PiLinkedinLogo } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";
import "./style.css"

export default function Footer() {
  // TODO: ADD links to: Solutions, Price lists, Terms of Sale, Privacy Statement, Legal Authoriiy, Accessibilty, Projects, Commissions

  return (
    <div className="footer bg-[#282424] text-white pt-8 pb-4 md:px-20 px-10">
      <div className="flex flex-wrap md:justify-between gap-8">
        <div className="grid grid-cols-2 grid-flow-col grid-cols-2 grid-rows-3 lg:grid-rows-1 lg:grid-cols-5 gap-8 md:text-left md:max-w-[70%]">
          <div className="leading-5">
            <h2 className="text-lg font-bold mb-2">Explore</h2>
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
            <h2 className="text-lg font-bold mb-2">Legal</h2>
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
        <div className="md:max-w-[30%] text-sm py-8 md:border-0 border-b-2 border-white md:text-left">
          <ul className="add-list pl-4">
            <li>
              Address - WHC Road, Aath Rasta Square, Laxmi Nagar, Nagpur, Maharashtra 440022
            </li>
            <li>
             +91 88888 70722
            </li>
            <li>
            booking@thenagpurashok.com
            </li>
          </ul>
          <br />
          <div className="flex mt-2 gap-8 justify-start">
            <a
              href="/"
              className="hover:text-purple-400 transition duration-75"
            >
              <FaFacebookF />
            </a>
            <a
              href="/"
              className="hover:text-purple-400 transition duration-75"
            >
              <TfiInstagram />
            </a>
            <a
              href="/"
              className="hover:text-purple-400 transition duration-75"
            >
              <SiGoogle />
            </a>
            <a
              href="/"
              className="hover:text-purple-400 transition duration-75"
            >
              <TfiYoutube />
            </a>
            <a
              href="/"
              className="hover:text-purple-400 transition duration-75"
            >
              <PiLinkedinLogo />
            </a>
            <a
              href="/"
              className="hover:text-purple-400 transition duration-75"
            >
              <RiTwitterXLine />
            </a>
          </div>
        </div>
        <div className="md:max-w-[30%] text-sm py-8 md:border-0 border-b-2 border-white md:text-left">
          <img src="/FooterAssets/image.png" alt=" " className="w-24 h-auto" />
        </div>
      </div>
      <div className="text-center pt-4">
        <p>Design and Developed by GBJ Buzz Copyright © 2024 Ashok Group</p>
      </div>
    </div>
  );
}