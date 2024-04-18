import React from "react";
import Image from "next/image";

const images = [
    { id: 1, src: "/HomePageAssets/image_king_suite.png", alt: "Image 1" },
    { id: 2, src: "/HomePageAssets/image_family_room.png", alt: "Image 2" },
    { id: 3, src: "/HomePageAssets/image_budget_room.png", alt: "Image 3" },
    { id: 4, src: "/HomePageAssets/image_deluxe_room.png", alt: "Image 4" },
];

export default function RoomsAndSuites() {
    return (
        <section className="bg-[#F8F5F0]">
            <div className="p-20" data-aos="fade-up">
                <p className="font-gilda text-4xl" style={{ color: "#AA8453" }}>
                    Hotel Ashok
                </p>
                <p className="font-gilda text-4xl" style={{ color: "#000000" }}>
                    Rooms & Suites
                </p>
            </div>

            <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-4">
                    {images.map((image, index) => (
                        <div key={image.id} data-aos="fade-in" data-aos-delay={`${index+1}00`}>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={500}
                                height={300}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <br />
        </section>
    );
}
