import React from "react";
import HallsPage from "../HallsPage";
import Hero from "../Hero/hero";
import HallCarousel from "../HallCarousel/HallCarousel";

const src = "/halls/maurya.png";
const hall = "Maurya";
const desc =
    "Step into a world of grandeur and sophistication at Maurya, the crown jewel of Hotel Ashok's event spaces. rom intimate gatherings to grand celebrations, Maurya at Hotel Ashok is the ultimate destination for your special occasions. Allow us to exceed your expectations and create magical moments that will be cherished for a lifetime.";

const featuresArray = [
    "Flexible Space: Maurya can be adapted to suit your event, whether it's a grand wedding reception, a corporate seminar, or a birthday celebration. The hall's layout and seating can be customized to accommodate your needs.",
    "State-of-the-Art Facilities: Equipped with modern audiovisual equipment, Kohinoor ensures that your presentations, speeches, and performances are delivered seamlessly.",
    "Catering Services: Our expert culinary team offers a diverse range of menu options, from traditional Indian cuisine to international flavors, to delight your guests' taste buds.",
    "Professional Staff: Our experienced event planning team is dedicated to ensuring that every detail of your event is executed flawlessly, allowing you to relax and enjoy your special day.",
];

const occasionsArray = [
    "Wedding Ceremonies and Receptions",
    "Corporate Meetings and Conferences",
    "Birthday and Anniversary Celebrations",
    "Cultural and Social Gatherings",
    "Product Launches and Exhibitions",
];

const page = () => {
    const images = [
        "/assets/hallls/maurya 79.png",
        "/assets/hallls/maurya 80.png",
        "/assets/hallls/maurya 91.png",
        "/assets/hallls/maurya 92.png",
    ];
    return (
        <section>
            <Hero
                slides={[
                    "/assets/hallls/maurya1.png",
                    "/assets/hallls/maurya2.png",
                    "/assets/hallls/maurya3.png",
                ]}
                title="Maurya Hall"
            />
            <div className="px-8 py-20 md:px-48">
                <HallsPage
                    src={src}
                    hall={hall}
                    desc1={desc}
                    features={featuresArray}
                    occasions={occasionsArray}
                    images={images}
                />
            </div>
            <HallCarousel />
        </section>
    );
};

export default page;
