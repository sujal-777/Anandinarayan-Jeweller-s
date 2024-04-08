import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@nextui-org/react";

const newData = [
    {
        photo: "/news/img-1.png",
        alternate: "Hall Design",
        subheading: "design",
        heading: "Retro Lighting Design in the Hotel",
        content:
            "The allure of retro lighting lies in its ability to evoke a sense of nostalgia, transporting guests to a bygone era while offering modern functionality and charm.Retro lighting fixtures, inspired by designs from the mid-20th century, add a touch of vintage elegance to hotel interiors. From sleek and minimalist designs to bold and artistic pieces, retro lighting fixtures come in a variety of styles to suit every aesthetic.",
        route: "news/retro",
    },
    {
        photo: "/news/img-2.png",
        alternate: "Amazing food",
        subheading: "food",
        heading: "Best Food Items",
        content:
            "Embark on a culinary journey like no other and savor the exquisite flavors of the best food items at Hotel Ashok. From traditional delicacies to modern culinary creations, our menu is a testament to our commitment to culinary excellence and guest satisfaction.",
        route: "news/foods",
    },
    {
        photo: "/news/img-3.png",
        alternate: "Cool Swimming Pool",
        subheading: "health",
        heading: "Improve Your Health by Swimming",
        content:
            "Take a dip in Hotel Ashok's rooftop pool and experience the health benefits of swimming for yourself. Whether you're looking to improve your fitness level, relieve stress, or simply have fun, our rooftop pool is the perfect place to dive into wellness. Experience a refreshing way to enhance your health and well-being at Hotel Ashok's rooftop pool. Swimming is not just a recreational activity; it's a full-body workout that offers numerous health benefits for both your body and mind.",
        route: "news/swim",
    },
];

function LeftPanel() {
    return (
        <>
            {/* Mian blog div */}
            <div className="mb-5 mt-5 md:mt-20 md:px-5">
                {newData.map((item, index) => {
                    return (
                        <div key={index} className="mt-10">
                            <Image
                                alt={item.alternate}
                                src={item.photo}
                                width={760}
                                height={480}
                                className="block h-auto max-w-full"
                            />
                            <p className="mt-5 uppercase text-[#AA8453]">
                                {item.subheading}
                            </p>
                            <p className="mt-2 font-gilda text-2xl md:text-4xl">
                                {item.heading}
                            </p>
                            <p className="mt-4 text-justify text-sm">
                                {item.content}
                            </p>
                            <div className="mt-5">
                                <Link href={item.route} className="">
                                    <Button
                                        radius="none"
                                        className="bg-[#AA8453] text-white"
                                    >
                                        Read More
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    );
                })}

                {/* Main blog div end */}
            </div>
        </>
    );
}

export default LeftPanel;
