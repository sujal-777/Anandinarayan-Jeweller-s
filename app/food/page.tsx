"use client";

import { Icon } from "@mui/material";
import Header from "../_components/Header/Header";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Image from "next/image";

export default function Foods() {
    return (
        <section>
            <Header
                title1="Taste that nagpur loves"
                title2="luxury hotel"
                image="/food/banner.png"
            />
            <div className="px-8 pb-10 lg:px-40">
                <p
                    className="mt-20 font-gilda text-3xl"
                    style={{ color: "#AA8453" }}
                >
                    Taste That Nagpur Loves
                </p>
                <p className="mt-5 font-gilda">
                    When it comes to food, Hotel Ashok is known for its taste
                    and food quality. With a team of specialty chefs crafting
                    unique dishes that tantalize taste buds, guests are treated
                    to a flavorful journey like no other. The hotel is committed
                    to delivering fresh food, avoiding the use of cold storage
                    to ensure quality and freshness. provide more lines
                </p>
                <p className="mt-5 font-gilda">
                    The culinary journey at Hotel Ashok extends beyond
                    traditional boundaries, with a menu that showcases a fusion
                    of flavors and innovative combinations. Guests can savor the
                    richness of carefully selected ingredients, expertly
                    prepared to create a symphony of tastes that cater to
                    diverse palates.
                </p>
                <p className="mt-5 font-gilda">
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
                <p className="mt-2 font-gilda">
                    Smart casual (no shorts, hats, or sandals permitted)
                </p>

                <p className="mt-10 font-gilda text-2xl">Terrace</p>
                <p className="mt-2 font-gilda">Open for drinks only</p>
                <br />
                <Image
                    width="1000"
                    height="1000"
                    className="h-full w-full"
                    src="/food/food_grid.png"
                    alt=" "
                />
            </div>
        </section>
    );
}
