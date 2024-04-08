import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Button, Divider } from "@nextui-org/react";

const sideData = [
    {
        photo: "/news/sv-1.png",
        alternate: "swimming pool blued lighting",
        route: "news/swim",
        content: "Benefits of Swimming for Your Health",
    },
    {
        photo: "/news/sv-2.png",
        alternate: "exotic food",
        route: "news/food",
        content: "Tasty Foods with our choices",
    },
    {
        photo: "/news/sv-3.png",
        alternate: "amazing hotel view",
        route: "news/retro",
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
            <div className="bg-[#F8F5F0] px-5 py-2 md:py-5">
                <p className="font-gilda text-2xl">Recent Posts</p>

                <Divider className="mt-3 flex items-center justify-center bg-[#AA8453]" />

                <div className="Posters mt-3">
                    {sideData.map((blog, index) => {
                        return (
                            <Link key={index} href={blog.route}>
                                {/* Entire div is link to be pressed */}

                                <div className="grid grid-cols-3 space-x-4">
                                    {/* Blog image settings */}

                                    <div className="p-2">
                                        <Image
                                            alt={blog.alternate}
                                            src={blog.photo}
                                            width={90}
                                            height={60}
                                            className="block h-auto max-w-full items-center justify-center"
                                        />
                                    </div>
                                    {/* Small Heading */}

                                    <div className="col-span-2 flex items-center justify-center">
                                        <p className=" text-[#666666]">
                                            {blog.content}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
            {/* Recent blog posts */}

            {/* Categories section */}
            <div className="mt-5 bg-[#F8F5F0] px-5 py-5">
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
