import React from "react";
import Carousel from "./Carousel";
import { FaPhoneVolume } from "react-icons/fa6";

export default function Reviews() {
    const reviews = [
        {
            name: "Sunny Gurnani",
            text: "The location is perfect to travel any part of city because I was all over the city. the team also helps to arrange full day cabs without any extra charges. the overall experience has already been fascinating but then my health decided to taken a troll on me and had to extend my stay for few days but to my surprise the management team did not just avoid taking benefit of situation by charging me anything extra but truly made me at home by providing every small help. ",
            image: "/WhatClientsSay/1.jpg",
            role: "CTO at Flowbite",
            rating: 5,
        },
        {
            name: "Arti",
            text: "During our stay the rooms were sterilized with UV light and from the entrance the shoe sanitizer was there then luggage was sanitized then contact less hand sanitizer and so on and so forth. The complete sanitization was observed. It was a nice experience that food served was also sanitized properly. Took care of hygiene. Rooms were good in conditions. Keep it up.",
            image: "/WhatClientsSay/3.jpg",
            role: "CTO at Flowbite",
            rating: 4,
        },
        {
            name: "Bhushan",
            text: "This is a awesome place, nice pool side restaurant at 7th floor, great ambiance and interior, tasty food, Valet parking, humble staff, multiple elevators, value for money Hotel. If you are on short trip to Nagpur, you can enjoy peacefull stay here, well located in city centre at very affordable price with high quality standards. Also a very good venue for mid size events from 50 to 150 people in nicely decorated halls. All in all, great place for stay, food and events.",
            image: "/WhatClientsSay/2.jpg",
            role: "CTO at Flowbite",
            rating: 5,
        },
        {
            name: "Payal L",
            text: "Our stay in Hotel Ashok was of 2 days and 50 guests. All the rooms were properly cleaned and customised according to the special needs of our guests. The food was amazing, we had full day meal plan with the hotel, starting with Breakfast there were 10-12 options, lunch was as per our decided buffet, hi-tea with snacks at 4/5 evening and then dinner. The rooms were equipped with all that a person may need, were clean, bathrooms had enough toiletries for 2-3 days stay. The guests were happy with the whole hospitality provided. Indeed it was a pleasant stay with no hassle. Big Thanks to the Hotel Ashok Team.",
            image: "/WhatClientsSay/2.jpg",
            role: "CTO at Flowbite",
            rating: 5,
        },
        // Add more reviews here
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
                <a href="tel:+918888870722" className="flex flex-col">
                    <p style={{ color: "#fff" }}>Reservation</p>
                    <p className="text-xl" style={{ color: "#fff" }}>
                        +91 88888 70722
                    </p>
                </a>
            </div>
        </div>
    );
}
