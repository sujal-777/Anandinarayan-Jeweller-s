import React from "react";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const pgData = [
    {
        photo1: "/news/swim/img-1.png",
        alternate1: "swimming pool",

        text1: "Take a dip in Hotel Ashok's rooftop pool and experience the health benefits of swimming for yourself. Whether you're looking to improve your fitness level, relieve stress, or simply have fun, our rooftop pool is the perfect place to dive into wellness. Experience a refreshing way to enhance your health and well-being at Hotel Ashok's rooftop pool. Swimming is not just a recreational activity; it's a full-body workout that offers numerous health benefits for both your body and mind.",

        text2: "Swimming engages all the major muscle groups in your body, making it an excellent way to tone muscles and improve overall strength. Whether you're doing laps or water aerobics, you'll be giving your body a complete workout.",

        photo2: "/news/swim/img-2.png",
        alternate2: "group images",

        text3: "Perched high above the city, our pool offers a tranquil oasis where you can escape the hustle and bustle below. Immerse yourself in the crystal-clear waters and feel the stress of the day melt away. The rooftop setting provides a peaceful retreat, with panoramic views that create a sense of openness and freedom.",

        text4: " Whether you're floating gently on the water or basking in the sun on our poolside loungers, our rooftop pool offers a sanctuary for relaxation and rejuvenation. Experience the soothing benefits of our rooftop pool and indulge in a moment of pure bliss at Hotel Ashok.",
    },
];

const LeftSide = () => {
    return (
        <>
            {/* Mian div */}
            <div className="mb-10 mt-5 md:mb-20 md:mt-20 md:px-5 lg:mb-40">
                {pgData.map((data, index) => (
                    <div key={index}>
                        <Image
                            alt={data.alternate1}
                            src={data.photo1}
                            width={760}
                            height={480}
                            className="block h-auto max-w-full"
                        />

                        {/* text area1 */}
                        <div className="mb-5 mt-5">
                            <p className="text-justify text-sm">{data.text1}</p>
                            <p className="mt-7 text-justify text-sm">
                                {data.text2}
                            </p>
                        </div>

                        <Image
                            src={data.photo2}
                            alt={data.alternate2}
                            width={757}
                            height={358}
                            className="block h-auto max-w-full"
                        />
                        {/* text area 2 */}
                        <div className="mb-5 mt-5">
                            <p className="text-justify text-sm">{data.text3}</p>
                            <p className="mt-7 text-justify text-sm">
                                {data.text4}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default LeftSide;
