"use client";

import React from "react";

import Header from "../_components/Header/Header";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import MapIcon from "@mui/icons-material/Map";

import ContactForm from "./_ContactUsForm";

import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";

export default function ContactUs() {

  return (
    <section>
      <Header
        aboutUsText="Contact Us"
        headerBannerSrc="/HeaderAssets/img_header.png"
      />

      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex flex-col sm:flex-row justify-center items-start">
          <div className="w-full sm:w-1/2 flex flex-col justify-center p-20 text-justify">
            <p className="font-gilda text-black text-3xl">Hotel Ashok</p>

            <p className="text-black mt-10 font-gilda">
              Welcome to Hotel Ashok, nestled in the heart of Nagpur, since our
              inception in February 2011, we have been consistent with warm
              hospitality and exceptional services, setting the standard for
              excellence in the hospitality industry in Nagpur. Experience the
              regal charm and grandeur of our suites, designed to make every
              guest feel like royalty. Whether you&apos;re seeking a family retreat
              or a romantic escape, our range of rooms, from family to honeymoon
              suites, caters to your every whim. With a host of modern amenities
              and facilities, we ensure a comfortable and memorable stay at
              Hotel Ashok.
            </p>

            <div className="flex items-center mt-20">
              <div className="mr-4">
                <CallIcon style={{ color: "#AA8453" }} />
              </div>
              <div className="flex flex-col">
                <p className="text-lg text-black font-gilda">Reservation</p>
                <p className="text-sm" style={{ color: "#AA8453" }}>
                  +91 88888 70722
                </p>
              </div>
            </div>

            <div className="flex items-center mt-10">
              <div className="mr-4">
                <EmailIcon style={{ color: "#AA8453" }} />
              </div>
              <div className="flex flex-col">
                <p className="text-lg text-black font-gilda">Email Info</p>
                <p className="text-sm" style={{ color: "#AA8453" }}>
                  booking@thenagpurashok.com
                </p>
              </div>
            </div>

            <div className="flex items-center mt-10">
              <div className="mr-4">
                <MapIcon style={{ color: "#AA8453" }} />
              </div>
              <div className="flex flex-col">
                <p className="text-lg text-black font-gilda">Address</p>
                <p className="text-sm" style={{ color: "#AA8453" }}>
                  WHC Road, Aath Rasta Square,Laxmi Nagar, Nagpur, Maharashtra
                  440022{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 flex flex-col justify-center px-10 py-7">
            <ContactForm/>
          </div>
        </div>
      </div>

      <img className="p-20" src="/contact_us_assets/image.png" alt=" " />

      <div className="bg-[#1E1E1E]">
        <p className="text-3xl text-white font-gilda flex justify-center item-center">
          How to get to the Hotel Ashok, Nagpur
        </p>

        <Card
          className="flex justify-center item-center border-none bg-[#fff] h-100"
        >
          <CardBody>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
              <div className="relative col-span-6 md:col-span-4">

                

              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
