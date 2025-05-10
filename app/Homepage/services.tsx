import React from "react";
import {
    GiCutDiamond,
    GiGemPendant,
} from "react-icons/gi";
import {
    FaTools,
    FaExchangeAlt,
    FaPenFancy,
    FaStar,
} from "react-icons/fa";

interface CardProps {
    Icon: React.ElementType;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ Icon, title, description }) => (
    <div className="flex min-h-full flex-col items-start justify-start border border-[#F1EEEB] p-5 font-gilda text-black">
        <Icon size={70} color="#AA8453" />
        <div className="text-start font-gilda">
            <p className="mt-2 text-xl">{title}</p>
            <p className="mt-2 font-barlow text-sm">{description}</p>
        </div>
    </div>
);

export default function HomeServices() {
    const services = [
        {
            Icon: GiCutDiamond,
            title: "Custom Jewelry Design",
            description:
                "Tailor-made jewelry pieces crafted to match your imagination and style, designed by our expert artisans using fine materials and intricate techniques that reflect elegance.",
        },
        {
            Icon: FaTools,
            title: "Jewelry Repair & Polishing",
            description:
                "Restore the brilliance of your jewelry with our professional repair and polishing services handled by skilled technicians to retain the original charm of your precious items.",
        },
        {
            Icon: FaExchangeAlt,
            title: "Gold & Diamond Exchange",
            description:
                "Exchange your old gold or diamond jewelry with ease and transparency at the best market rates under expert guidance and secure valuation methods.",
        },
        {
            Icon: FaPenFancy,
            title: "Engraving Services",
            description:
                "Personalize your jewelry with names, initials, or memorable dates using our precise engraving tools for a thoughtful and lasting impression.",
        },
        {
            Icon: GiGemPendant,
            title: "Certified Gemstone Guidance",
            description:
                "Consult our gem experts to choose the right certified gemstone that suits your needs, style, or astrological beliefs, with assurance of quality and authenticity.",
        },
        {
            Icon: FaStar,
            title: "Jewelry Cleaning Services",
            description:
                "Bring back the original shine of your ornaments with our ultrasonic cleaning and care solutions handled by professionals using non-damaging techniques.",
        },
    ];

    return (
        <section className="bg-white px-8 py-20 lg:px-48">
            <div className="py-10" data-aos="fade-up">
                <p className="font-barlow uppercase tracking-widest text-[#AA8453]">
                    our services
                </p>
                <h2 className="text-heading font-gilda capitalize" style={{ color: "#000000" }}>
                    jewelry shoppe services
                </h2>
            </div>

            <div
                className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8"
                data-aos="fade-in"
            >
                {services.map((service, index) => (
                    <Card
                        key={index}
                        Icon={service.Icon}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
            <br />
        </section>
    );
}
