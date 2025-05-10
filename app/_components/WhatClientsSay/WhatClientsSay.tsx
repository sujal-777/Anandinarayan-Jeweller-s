"use client";
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const reviews = [
    {
        name: "Meera Shah",
        text: "Absolutely loved the diamond necklace I purchased! The craftsmanship is exquisite and the customer service made me feel truly special. Will definitely shop here again.",
        image: "/WhatClientsSay/1.jpg",
        role: "Fashion Blogger",
        rating: 5,
    },
    {
        name: "Rahul Mehta",
        text: "Bought an engagement ring from here and it was perfect. The staff was knowledgeable and helped me find the ideal piece. Highly recommended for life’s special moments.",
        image: "/WhatClientsSay/2.jpg",
        role: "Software Engineer",
        rating: 5,
    },
    {
        name: "Naina Kapoor",
        text: "This place is a gem! The collection is unique and elegant. I received so many compliments on the gold bangles I purchased. A wonderful jewelry shopping experience!",
        image: "/WhatClientsSay/3.jpg",
        role: "Interior Designer",
        rating: 5,
    },
];

const WhatClientsSay = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        }, 5000); // Change testimonial every 5 seconds

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, []);

    const review = reviews[currentIndex];

    return (
        <div
            className={`flex items-center justify-center bg-cover bg-no-repeat px-8 py-20 lg:px-48`}
        >
            <div className="flex flex-col items-center justify-center space-y-10 w-full max-w-2xl">
                <div className="text-center w-full p-8" data-aos="fade-up">
                    <div className="flex justify-center mb-4">
                        <Image
                            src={review.image}
                            alt={review.name}
                            width={100}
                            height={100}
                            className="rounded-full border-4 border-white"
                        />
                    </div>
                    <p className="text-xl font-semibold text-white">{review.name}</p>
                    <p className="text-sm text-gray-300">{review.role}</p>
                    <div className="flex justify-center space-x-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                            <FaStar
                                key={i}
                                className={`text-yellow-500 ${i < review.rating ? "text-yellow-500" : "text-gray-300"}`}
                            />
                        ))}
                    </div>
                    <p className="text-lg text-white mt-4">{review.text}</p>
                </div>
            </div>
        </div>
    );
};

export default WhatClientsSay;
