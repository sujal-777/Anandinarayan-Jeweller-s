"use client";

import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Image from "next/image";
import WhatClientsSay from "./WhatClientsSay/WhatClientsSay";
import Header from "../_components/Header/Header";

export default function PoolDeckRestroBar() {
    return (
        <section>
            <Header
                title1="Pooldeck Restrobar"
                title2="explore our"
                image="/assets/bar/bar.png"
            />

            <div className=" px-8 py-20 font-barlow lg:px-48">
                <p className="text-heading mt-20 font-gilda text-[#AA8453]">
                    Spirited Elegance at Ashok&apos;s Lounge Bar
                </p>
                <p className="mt-5 font-barlow">
                    Indulge in an exquisite blend of sophistication and
                    conviviality at Ashok&apos;s Lounge Bar, nestled within the heart
                    of Hotel Ashok. This distinguished bar stands as a testament
                    to the hotel&apos;s commitment to delivering an unparalleled
                    experience for discerning guests.
                </p>
                <p className="mt-5 font-barlow">
                    As you step into Ashok&apos;s Lounge Bar, you are greeted by an
                    ambiance that seamlessly fuses modern chic with timeless
                    elegance. The well-appointed bar offers a curated selection
                    of premium spirits, fine wines, and signature cocktails,
                    expertly crafted by our skilled mixologists. Whether you&apos;re
                    seeking a classic favorite or an innovative concoction, our
                    extensive drink menu caters to all palates.
                </p>
                <p className="mt-5 font-barlow">
                    Surrounded by a refined atmosphere, guests can enjoy
                    intimate conversations or revel in the lively energy of the
                    bar. With plush seating, subtle lighting, and attentive
                    service, Ashok&apos;s Lounge Bar provides the perfect backdrop
                    for both casual gatherings and formal celebrations.
                </p>

                <p className="mt-20 font-gilda text-2xl">Hours</p>

                <div className="mt-5 flex justify-start">
                    <AccessTimeIcon style={{ color: "#AA8453" }} />
                    <p className="px-2">
                        Breakfast: 7.00 am - 11.00 am ( daily)
                    </p>
                </div>

                <div className="mt-5 flex justify-start">
                    <AccessTimeIcon style={{ color: "#AA8453" }} />
                    <p className="px-2">Lunch: 12.00 pm - 2.00 Pm ( daily)</p>
                </div>

                <div className="mt-5 flex justify-start">
                    <AccessTimeIcon style={{ color: "#AA8453" }} />
                    <p className="px-2">
                        Dinner : open from 6.30 pm, last order at 10.00 pm
                        (daily)
                    </p>
                </div>

                <p className="mt-10 font-gilda text-2xl">Dress Code</p>
                <p className="mt-2 font-barlow">
                    Smart casual (no shorts, hats, or sandals permitted)
                </p>

                <p className="mt-10 font-gilda text-2xl">Terrace</p>
                <p className="mt-2 font-barlow">Open for drinks only</p>
                <br />
                <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <Image
                            src="/assets/bar/b1.png"
                            alt="food"
                            width={1000}
                            height={1000}
                            className="h-full w-full"
                        />
                        <Image
                            src="/assets/bar/b2.png"
                            alt="food"
                            width={1000}
                            height={1000}
                            className="h-full w-full"
                        />
                        <Image
                            src="/assets/bar/b3.png"
                            alt="food"
                            width={1000}
                            height={1000}
                            className="h-full w-full"
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <Image
                            src="/assets/bar/b7.png"
                            alt="food"
                            width={1000}
                            height={1000}
                            className="h-full w-full"
                        />
                        <Image
                            src="/assets/bar/b8.png"
                            alt="food"
                            width={1000}
                            height={1000}
                            className="h-full w-full"
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <Image
                            src="/assets/bar/b6.png"
                            alt="food"
                            width={1000}
                            height={1000}
                            className="h-full w-full"
                        />
                        <Image
                            src="/assets/bar/b4.png"
                            alt="food"
                            width={1000}
                            height={1000}
                            className="h-full w-full"
                        />
                        <Image
                            src="/assets/bar/b5.png"
                            alt="food"
                            width={1000}
                            height={1000}
                            className="h-full w-full"
                        />
                    </div>
                </div>
            </div>

            <WhatClientsSay />
        </section>
    );
}
