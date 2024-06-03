"use client";

import React from "react";
import Header from "../_components/Header/Header";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Image from "next/image";

export default function PoolDeckRestroBar() {
    return (
        <section>
            <Header
                title1="Pooldeck Restrobar"
                title2=""
                image="/pool-restrobar/banner.png"
            />

            <div>
                <p
                    className="mt-20 px-20 font-gilda text-3xl"
                    style={{ color: "#AA8453" }}
                >
                    Pooldeck Restrobar
                </p>
                <p className="mt-5 px-20 font-gilda">
                    Pooldeck Restrobar at Hotel Ashok offers a captivating
                    fusion of culinary delights and leisure in a picturesque
                    setting. Nestled by the shimmering poolside, this unique
                    dining experience combines the vibrant ambiance of a trendy
                    bar with the laid-back charm of a sophisticated restaurant.
                </p>
                <p className="mt-5 px-20 font-gilda">
                    As the sun sets, the Pooldeck Restrobar transforms into a
                    chic destination, where guests can unwind and savor a
                    diverse array of delectable dishes and handcrafted
                    cocktails. The menu showcases a blend of international and
                    local flavors, featuring fresh and high-quality ingredients
                    prepared by skilled chefs.
                </p>
                <p className="mt-5 px-20 font-gilda">
                    Surrounded by lush greenery and the soothing sounds of
                    water, patrons can indulge in a relaxed atmosphere, perfect
                    for socializing with friends or enjoying a romantic evening.
                    The Pooldeck Restrobar at Hotel Ashok is not just a dining
                    destination; it&apos;s an escape into a world of culinary
                    excellence and refined hospitality.
                </p>
                <p className="mt-5 px-20 font-gilda">
                    Whether you&apos;re looking to celebrate a special occasion,
                    have a casual meal with friends, or simply unwind with a
                    refreshing drink, Pooldeck Restrobar promises a memorable
                    experience against the backdrop of the hotel&apos;s
                    luxurious amenities and impeccable service.
                </p>

                <p className="mt-20 px-20 font-gilda text-2xl">Hours</p>

                <div className="mt-5 flex justify-start px-20">
                    <AccessTimeIcon style={{ color: "#AA8453" }} />
                    <p className="px-2">
                        Breakfast: 7.00 am - 11.00 am ( daily)
                    </p>
                </div>

                <div className="mt-5 flex justify-start px-20">
                    <AccessTimeIcon style={{ color: "#AA8453" }} />
                    <p className="px-2">Lunch: 12.00 pm - 2.00 Pm ( daily)</p>
                </div>

                <div className="mt-5 flex justify-start px-20">
                    <AccessTimeIcon style={{ color: "#AA8453" }} />
                    <p className="px-2">
                        Dinner : open from 6.30 pm, last order at 10.00 pm
                        (daily)
                    </p>
                </div>

                <p className="mt-10 px-20 font-gilda text-2xl">Dress Code</p>
                <p className="mt-2 px-20 font-gilda">
                    Smart casual (no shorts, hats, or sandals permitted)
                </p>

                <p className="mt-10 px-20 font-gilda text-2xl">Terrace</p>
                <p className="mt-2 px-20 font-gilda">Open for drinks only</p>

                <Image
                    className="p-20"
                    src="/pool-restrobar/pool_grid.png"
                    alt=" "
                    width={1000}
                    height={1000}
                />
            </div>
        </section>
    );
}
