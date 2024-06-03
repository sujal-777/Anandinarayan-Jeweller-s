import React from "react";

import { Image } from "@nextui-org/react";
import Link from "next/link";
import Card from "./Card";

export default function Weddings() {
    const events = [
        {
            img: "/assets/Home/wedding.png",
            title: "Weddings",
            desc: "Welcome to Hotel Ashok, nestled in the heart of Nagpur, since our inception in February 2011, we have been consistent with warm hospitality and exceptional services, setting the standard for excellence in the hospitality industry in Nagpur.",
            link: "/halls",
        },
        {
            img: "/assets/Home/restro.png",
            title: "Pooldeck Restrobar",
            desc: "Indulge in an extraordinary dining experience at PoolDeck, Hotel Ashok's spacious poolside fine dining restaurant. Immerse yourself in the soothing ambience while enjoying daily live music, creating the perfect atmosphere for a memorable meal.",
            link: "/pooldeck-restrobar",
        },
        {
            img: "/assets/Home/food.png",
            title: "Taste That Nagpur Loves",
            desc: "Nagpur, crowned by the name 'Orange City of India', is a well-famed city in Maharashtra. It comes among the top smart cities in the country and is blessed with a spiritual legacy, historical heritage, and picturesque surroundings. So, if you are an adventure seeker, history buff or soul searcher, you will be hooked to this place",
            link: "/food",
        },
        {
            img: "/assets/Home/bar.png",
            title: "Bar",
            desc: "The bar at Hotel Ashok offers a sophisticated ambiance with an extensive selection of premium spirits and cocktails. It's the perfect place to unwind and enjoy a refined evening.",
            link: "/news/swim",
        },
        {
            img: "/assets/Home/pool.png",
            title: "Swimming Pool",
            desc: "Nagpur, crowned by the name 'Orange City of India', is a well-famed city in Maharashtra. It comes among the top smart cities in the country and is blessed with a spiritual legacy, historical heritage, and picturesque surroundings.  So, if you are an adventure seeker, history buff or soul searcher, you will be hooked to this place",
            link: "/news/swim",
        },
    ];

    return (
        <section className="bg-white py-20 lg:px-40">
            {events.map((event, pos) => {
                return (
                    <Card
                        key={pos}
                        img={event.img}
                        title={event.title}
                        desc={event.desc}
                        link={event.link}
                        pos={pos + 1}
                    />
                );
            })}
        </section>
    );
}
