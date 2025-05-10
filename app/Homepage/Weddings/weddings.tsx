import React from "react";
// import Link from "next/link";
import Card from "./Card";

export default function JewelryShowcase() {
    const events = [
        {
            img: "/assets/Home/bridal.jpg",
            title: "Bridal Jewelry",
            desc: "Step into timeless elegance with our handcrafted bridal jewelry collection. From traditional gold sets to contemporary diamond designs, we offer pieces that make your special day shine even brighter.",
            // link: "/bridal-jewelry",
        },
        {
            img: "/assets/Home/watches.webp",
            title: "Luxury Watches",
            desc: "Explore our curated range of luxury watches that blend classic craftsmanship with modern style. Whether for gifting or personal elegance, our watches represent precision and prestige.",
            // link: "/luxury-watches",
        },
        {
            img: "/assets/Home/custom.jpg",
            title: "Custom-Made Pieces",
            desc: "Bring your vision to life with our custom-made jewelry service. Work with our artisans to design exclusive rings, necklaces, or earrings tailored to your personal story and style.",
            // link: "/custom-jewelry",
        },
        {
            img: "/assets/Home/elegance.jpg",
            title: "Everyday Elegance",
            desc: "Discover our daily wear collection, crafted for style and comfort. These minimal yet striking designs are perfect for office looks, casual outings, or adding a touch of grace to your everyday.",
            // link: "/everyday-elegance",
        },
        {
            img: "/assets/Home/gifts.jpeg",
            title: "Gifts & Occasions",
            desc: "Celebrate life’s special moments with our thoughtful gifting range. From anniversaries to birthdays, our jewelry gifts carry meaning, beauty, and timeless value for every occasion.",
            // link: "/gifting",
        },
    ];

    return (
        <section className="bg-white py-20 lg:px-48">
            {events.map((event, pos) => {
                return (
                    <Card
                        key={pos}
                        img={event.img}
                        title={event.title}
                        desc={event.desc}
                        link={""} // temporarily empty since links are commented out
                        pos={pos + 1}
                    />
                );
            })}
        </section>
    );
}
