import Image from "next/image";
import { title } from "process";
import React from "react";
import RoomSearch from "./roomSelect";

interface CardProps {
    title: string;
    description: string;
    icon: string;
}

const Card: React.FC<CardProps> = ({ title, description, icon }) => (
    <div className="">
        <div className="relative flex min-h-full flex-col items-start justify-start py-5 font-gilda text-black">
            <div className="text-start font-gilda">
                <div className="grid grid-cols-6 gap-4">
                    <p
                        className="col-span-5 mt-2 text-2xl"
                        style={{ color: "#AA8453" }}
                    >
                        {title}
                    </p>
                    <div className="aspect-square w-8 md:w-12">
                        <Image
                            src={icon}
                            alt="arrow"
                            width={100}
                            height={100}
                            className="h-full w-full object-contain"
                        />
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
            title: "Best Rate Guaranteed",
            description:
                "Book directly with us to avail of the best rates for your stay and receive your real-time booking confirmation. We guarantee that you won't find a better rate for the same room type on the same date in any otherSukhumvit hotel. Should you find a lower price elsewhere, we offer an additional 5% discount on the lowest publicly available price foundonline.",
            icon: "/assets/Home/bed.svg",
        },
        {
            title: "Early Check-in & Late Check-out",
            description:
                "Are you arriving early or departing late? No problem! Request an early check-in or a late check-out in your direct booking, and we'll do our best to accommodate your schedule.",
            icon: "/assets/Home/bell.svg",
        },
        {
            title: "Secure Payment",
            description:
                "Your security is important to us. We use PCI-compliant paymentgateways and strict security protocols to ensure that your credit cardtransactions are secure. We do not store your credit card details andhandle your information in accordance with industry security standards.",
            icon: "/assets/Home/shield.svg",
        },
        {
            title: "No Booking Fees or Hidden Charges",
            description:
                "Our prices include all taxes and service charges. There are no hiddenbusiness, booking, credit card, or additional fees. The price displayed on the website is what will be charged to your card.Book your stay at Aira Hotel directly on our official website and enjoy more perks, exclusive rates and greater flexibility on your hotel booking",
            icon: "/assets/Home/bed.svg",
        },
    ];

    return (
        <section className="bg-[#222222] px-8 py-20 lg:px-40">
            <p className="flex items-center justify-center py-10 font-gilda text-4xl text-white">
                Book DIRECT BENEFITS
            </p>

            <div className="grid grid-cols-1 gap-4 py-10 md:grid-cols-2 md:gap-8">
                {cardList.map((cardList, index) => (
                    <Card
                        key={index}
                        title={cardList.title}
                        description={cardList.description}
                        icon={cardList.icon}
                    />
                ))}
            </div>
        </section>
    );
}
