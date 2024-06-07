"use client";

import { Icon } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Image from "next/image";
import WhatClientsSay from "./WhatClientsSay/WhatClientsSay";
import Header from "../_components/Header/Header";

export default function Foods() {
    return (
        <section>
            <Header
                title1="Taste that nagpur loves"
                title2="luxury hotel"
                image="/food/banner.png"
            />
            <div className="px-8 pb-10 font-barlow lg:px-48">
                <p
                    className="text-heading mt-20 font-gilda"
                    style={{ color: "#AA8453" }}
                >
                    Taste That Nagpur Loves
                </p>
                <p className="mt-5">
                    When it comes to food, Hotel Ashok is known for its taste
                    and food quality. With a team of specialty chefs crafting
                    unique dishes that tantalize taste buds, guests are treated
                    to a flavorful journey like no other. The hotel is committed
                    to delivering fresh food, avoiding the use of cold storage
                    to ensure quality and freshness. provide more lines
                </p>
                <p className="mt-5 ">
                    The culinary journey at Hotel Ashok extends beyond
                    traditional boundaries, with a menu that showcases a fusion
                    of flavors and innovative combinations. Guests can savor the
                    richness of carefully selected ingredients, expertly
                    prepared to create a symphony of tastes that cater to
                    diverse palates.
                </p>
                <p className="mt-5 ">
                    The hotel&apos;s emphasis on freshness extends to sourcing
                    ingredients locally whenever possible, supporting the
                    community and contributing to sustainability efforts. This
                    commitment to quality and community engagement sets Hotel
                    Ashok apart, making it a preferred destination for those
                    seeking not only exquisite dining but also a conscientious
                    and memorable culinary experience.
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
                <p className="mt-2">
                    Smart casual (no shorts, hats, or sandals permitted)
                </p>

                <p className="mt-10 font-gilda text-2xl">Terrace</p>
                <p className="mt-2">Open for drinks only</p>
                <br />
                <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <Image
                            src="/assets/food/image1.png"
                            alt="food"
                            width={1000}
                            height={1000}
                            className="w-full"
                        />
                        <Image
                            src="/assets/food/image2.png"
                            alt="food"
                            width={1000}
                            height={1000}
                            className="w-full"
                        />
                        <Image
                            src="/assets/food/image3.png"
                            alt="food"
                            width={1000}
                            height={1000}
                            className="w-full"
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <Image
                            src="/assets/food/image4.png"
                            alt="food"
                            width={1000}
                            height={1000}
                            className="w-full"
                        />
                        <Image
                            src="/assets/food/image5.png"
                            alt="food"
                            width={1000}
                            height={1000}
                            className="w-full h-full"
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <Image
                            src="/assets/food/image6.png"
                            alt="food"
                            width={1000}
                            height={1000}
                            className="w-full h-full"
                        />
                        <Image
                            src="/assets/food/image7.png"
                            alt="food"
                            width={1000}
                            height={1000}
                            className="w-full"
                        />
                        <Image
                            src="/assets/food/image8.png"
                            alt="food"
                            width={1000}
                            height={1000}
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </div>
            <WhatClientsSay />
        </section>
    );
}
