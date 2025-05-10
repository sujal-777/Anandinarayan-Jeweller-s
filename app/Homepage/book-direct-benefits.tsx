import React from "react";
import {
    GiCutDiamond,
    GiReceiveMoney,
    GiCheckMark,
} from "react-icons/gi";
import {
    FaShieldAlt,
    FaGift,
} from "react-icons/fa";

interface CardProps {
    title: string;
    description: string;
    Icon: React.ElementType;
}

const Card: React.FC<CardProps> = ({ title, description, Icon }) => (
    <div className="" data-aos="fade-in">
        <div className="relative flex min-h-full flex-col items-start justify-start py-5 font-gilda text-white">
            <div className="text-start font-gilda">
                <div className="grid grid-cols-6 gap-4">
                    <p
                        className="col-span-5 mt-2 text-2xl"
                        style={{ color: "#AA8453" }}
                    >
                        {title}
                    </p>
                    <div className="aspect-square w-8 md:w-12">
                        <Icon size="100%" color="#AA8453" className="h-full w-full" />
                    </div>
                </div>
                <p className="mt-2 font-barlow text-white">{description}</p>
            </div>
        </div>
    </div>
);

export default function BookDirectBenefits() {
    const cardList = [
        {
            title: "Authenticity Guaranteed",
            description:
                "Shop directly from us to ensure every piece is 100% authentic and certified. Our gemstones and gold are ethically sourced, and each item comes with verified certification for your peace of mind and investment value.",
            Icon: GiCutDiamond,
        },
        {
            title: "Exclusive Offers & Gifts",
            description:
                "Enjoy seasonal discounts, loyalty perks, and complimentary gifts that are available **only** on our official platform. From surprise jewelry pieces to personalized packaging — your experience is always elevated.",
            Icon: FaGift,
        },
        {
            title: "Secure Payment & Easy Returns",
            description:
                "We use top-tier encrypted gateways to secure your transactions. If you’re not satisfied, our no-hassle return and exchange policy ensures your convenience and confidence while shopping with us.",
            Icon: FaShieldAlt,
        },
        {
            title: "Best Value & Transparent Pricing",
            description:
                "When you buy directly, you get transparent pricing with **no hidden fees or markups**. Our prices include making charges, taxes, and insurance — no surprises at checkout, just honest craftsmanship at its value.",
            Icon: GiReceiveMoney,
        },
    ];

    return (
        <section className="bg-[#222222] px-8 py-20 lg:px-48">
            <p
                className="flex items-center justify-center py-10 font-gilda text-heading text-white"
                data-aos="fade-up"
            >
                Shop DIRECT BENEFITS
            </p>

            <div className="grid grid-cols-1 gap-4 py-10 md:grid-cols-2 md:gap-8">
                {cardList.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        description={card.description}
                        Icon={card.Icon}
                    />
                ))}
            </div>
        </section>
    );
}
