import React from "react";
import HallsPage from "../HallsPage";
import Hero from "../Hero/hero";
import HallCarousel from "../HallCarousel/HallCarousel";

const src = "/halls/magadh.png";
const hall = "Magadh";
const desc =
    "Whether you're planning an intimate gathering or a grand celebration, Samrat at Hotel Ashok is the ultimate destination for your special occasions. Allow us to exceed your expectations and create magical moments that will be cherished for a lifetime.";

const featuresArray = [
    "Flexible Space: Samrat can be adapted to suit your event, whether it's a grand wedding reception, a corporate seminar, or a birthday celebration. The hall's layout and seating can be customized to accommodate your needs.",
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
    return (
        <section>
            <Hero
                slides={[
                    "/assets/hallls/magad1.png",
                    "/assets/hallls/magad2.png",
                    "/assets/hallls/magad3.png",
                ]}
                title="Magadh Hall"
            />
            <div className="px-8 py-20 md:px-48">
                <HallsPage
                    src={src}
                    hall={hall}
                    desc1={desc}
                    features={featuresArray}
                    occasions={occasionsArray}
                />
            </div>
            <HallCarousel />
        </section>
    );
};

export default page;
