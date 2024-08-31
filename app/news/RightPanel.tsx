import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Button, Divider } from "@nextui-org/react";

const sideData = [
    {
        photo: "/news/sv-1.png",
        alternate: "swimming pool blued lighting",
        route: "/news/swim",
        content: "Benefits of Swimming for Your Health",
    },
    {
        photo: "/news/sv-2.png",
        alternate: "exotic food",
        route: "/news/best-food-items",
        content: "Tasty Foods with our choices",
    },
    {
        photo: "/news/sv-3.png",
        alternate: "amazing hotel view",
        route: "/news/restaurant-renovated",
        content: "Enjoy the View from our Beautiful Balcony",
    },
];

const categories = ["Hotel Design", "Restaurant", "Swimming Pool"];

const tags = [
    "Hotel",
    "Luxury Hotel",
    "Tasty Food",
    "Swimming Pool",
    "Restaurant",
];

function RightPanel() {
    return (
        <>
            {/* Recent blog posts */}

            {/* Recent blog posts */}

            {/* Categories section */}
            <div className=" mt-10 bg-[#F8F5F0] px-5 py-5">
                <p className="font-gilda text-2xl">Categories</p>

                <Divider className="mt-3 flex items-center justify-center bg-[#AA8453]" />

                {/* Listing categories */}
                <div className="text-[#666666]">
                    {categories.map((data, index) => (
                        <p key={index}>
                            <span className="text-2xl">&rsaquo;</span> {data}
                        </p>
                    ))}
                </div>
            </div>
            {/* Categories end */}

            {/* Tags section */}
            <div className="mt-5 bg-[#F8F5F0] px-5 py-5">
                <p className="font-gilda text-2xl">Tags</p>

                <Divider className="mt-3 flex items-center justify-center bg-[#AA8453]" />

                {/*  Listing tags */}
                <div className="items-center justify-center">
                    {tags.map((tag, index) => (
                        <Button
                            key={index}
                            radius="none"
                            disableRipple
                            disableAnimation
                            className="mx-2 my-2 bg-white text-sm text-black"
                        >
                            {tag}
                        </Button>
                    ))}
                </div>
                {/* Listing tags */}
            </div>

            {/* tags section end */}
        </>
    );
}

export default RightPanel;
