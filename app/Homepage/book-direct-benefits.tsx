import Image from "next/image";
import { title } from "process";
import React from "react";
import RoomSearch from "./roomSelect";

interface CardProps {
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => (
    <div className="">
        <div className="relative flex min-h-full flex-col items-start justify-start py-5 font-gilda text-black">
            <div className="text-start font-gilda">
                <p className="mt-2 text-xl" style={{ color: "#AA8453" }}>
                    {title}
                </p>
                <p className="mt-2 text-white">{description}</p>
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
        },
        {
            title: "Early Check-in & Late Check-out",
            description:
                "Are you arriving early or departing late? No problem! Request an early check-in or a late check-out in your direct booking, and we'll do our best to accommodate your schedule.",
        },
        {
            title: "Secure Payment",
            description:
                "Your security is important to us. We use PCI-compliant paymentgateways and strict security protocols to ensure that your credit cardtransactions are secure. We do not store your credit card details andhandle your information in accordance with industry security standards.",
        },
        {
            title: "No Booking Fees or Hidden Charges",
            description:
                "Our prices include all taxes and service charges. There are no hiddenbusiness, booking, credit card, or additional fees. The price displayed on the website is what will be charged to your card.Book your stay at Aira Hotel directly on our official website and enjoy more perks, exclusive rates and greater flexibility on your hotel booking",
        },
    ];

    return (
        <section className="bg-[#222222]">
            <p className="flex items-center justify-center px-8 py-10 md:px-20 font-gilda text-4xl text-white">
                Book DIRECT BENEFITS
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-8 py-10 md:px-20">
                {cardList.map((cardList, index) => (
                    <Card
                        key={index}
                        title={cardList.title}
                        description={cardList.description}
                    />
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="px-8 py-10 md:px-20" data-aos="fade-in">
                    <Image
                        width={600}
                        height={600}
                        src="/HomePageAssets/HotelFacility/image_hotel_room.png"
                        alt="Your Image"
                    />
                </div>
                <div className="px-8 py-10 md:px-20" data-aos="fade-in">
                    <div className="bg-[#F8F5F0] p-4">
                        <p className="text-xl" style={{ color: "#666666" }}>
                            Rooms & Suites
                        </p>
                        <p className="mt-5 font-gilda text-2xl text-black">
                            Hotel Booking Form
                        </p>

                        <RoomSearch></RoomSearch>
                    </div>
                </div>
            </div>
        </section>
    );
}
