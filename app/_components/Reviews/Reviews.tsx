import React from "react";
import Carousel from "./Carousel";
import { FaPhoneVolume } from "react-icons/fa6";

export default function Reviews() {
    const reviews = [
        {
            name: "Sunny Gurnani",
            text: "Anadinarayan Jewellers in Bhandara is perfectly located and offers excellent service. Their team helped me find the right jewellery without any hassle. I had to return later due to an adjustment, and they welcomed me warmly, without extra charges, making me feel truly valued as a customer.",
            image: "/WhatClientsSay/1.jpg",
            role: "Customer",
            rating: 5,
        },
        {
            name: "Arti",
            text: "At Anadinarayan Jewellers, hygiene and safety are clearly a priority. From the moment I entered, everything was clean, organized, and contactless. Even their packaging felt premium and secure. A pleasant and safe shopping experience with a great collection of designs.",
            image: "/WhatClientsSay/3.jpg",
            role: "Customer",
            rating: 4,
        },
        {
            name: "Bhushan",
            text: "This is a wonderful jewellery showroom. The interiors are elegant, the designs are trendy, and pricing is fair. The staff was polite and helpful. For anyone visiting Bhandara, it’s a must-visit if you’re looking for quality jewellery and a great overall shopping vibe.",
            image: "/WhatClientsSay/2.jpg",
            role: "Customer",
            rating: 5,
        },
        {
            name: "Payal L",
            text: "Our visit to Anadinarayan Jewellers was for a family wedding. The staff handled all our requirements with care. They customized designs, kept delivery on time, and ensured everything was beautifully packed. Everyone was impressed with the service and the final jewellery pieces.",
            image: "/WhatClientsSay/2.jpg",
            role: "Customer",
            rating: 5,
        },
    ];
    return (
        <div className="space-y-4">
            <h2 className="font-gilda text-3xl text-white md:text-4xl">
                What Client&apos;s Say?
            </h2>
            <Carousel reviews={reviews} />
            <div className="flex items-center text-xl">
                <div className="mr-4">
                    <FaPhoneVolume style={{ color: "#fff" }} />
                </div>
                <a href="tel:+919673998267" className="flex flex-col">
                    <p style={{ color: "#fff" }}>Contact Us</p>
                    <p className="text-xl" style={{ color: "#fff" }}>
                        +91 96739 98267
                    </p>
                </a>
            </div>
        </div>
    );
}
