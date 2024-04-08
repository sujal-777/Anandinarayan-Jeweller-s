import React from "react";
import Image from "next/image";

interface CardProps {
    imageSrc: string;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => (
    <div className="p-5">
        <div className="flex min-h-full flex-col items-start justify-start border border-black p-5 font-gilda text-black">
            <Image src={imageSrc} alt={title} width={70} height={70} />
            <div className="text-start font-gilda">
                <p className="mt-2 text-xl">{title}</p>
                <p className="mt-2">{description}</p>
            </div>
        </div>
    </div>
);

export default function HomeServices() {
    const services = [
        {
            imageSrc: "/HomePageAssets/HotelFacility/image1.png",
            title: "Pick Up & Drop",
            description:
                "Experience seamless travel with our dedicated pick-up and drop service, ensuring convenience from your doorstep to Hotel Ashok.",
        },
        {
            imageSrc: "/HomePageAssets/HotelFacility/image2.png",
            title: "Parking Space",
            description:
                "Secure your vehicle in our convenient parking facilities, adding an extra layer of comfort to your stay. Rest assured, your car is in safe hands while you enjoy our hospitality.",
        },
        {
            imageSrc: "/HomePageAssets/HotelFacility/image3.png",
            title: "Room Service",
            description:
                "Our room service is designed for your convenience, offering  efficient assistance whenever you need it bu our  attentive staff who  ensures your requests are met right away.",
        },
        {
            imageSrc: "/HomePageAssets/HotelFacility/image4.png",
            title: "Swimming Pool",
            description:
                " A spacious poolside fine dining restaurant which serves multi cuisine food along with beverages as per our guests choice along with live music that creates a soothing ambience ",
        },
        {
            imageSrc: "/HomePageAssets/HotelFacility/image5.png",
            title: "Fibre Internet",
            description:
                "Indulge in high-speed internet providing seamless connectivity for your work or leisure. Enjoy a smooth online experience throughout your stay with us.",
        },
        {
            imageSrc: "/HomePageAssets/HotelFacility/image6.png",
            title: "Breakfast",
            description:
                "Enjoy a delightful array of options to kickstart your day, from continental classics to local delights, savor a delicious morning spread that caters to every taste.",
        },
    ];

    return (
        <section>
            <div className="px-20 py-10">
                <p className="font-gilda text-xl" style={{ color: "#666666" }}>
                    OUR SERVICES
                </p>
                <p className="font-gilda text-2xl">Hotel Facilities</p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {services.map((service, index) => (
                    <Card
                        key={index}
                        imageSrc={service.imageSrc}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
            <br />
        </section>
    );
}
