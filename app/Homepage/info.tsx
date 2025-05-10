import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import Image from "next/image";

const info = () => {
    return (
        <section className="min-h-screen bg-white px-8 py-20 lg:px-48">
            <div className="flex w-full flex-col items-center justify-center">
                <div className="grid w-full grid-cols-1 place-items-center gap-12 md:grid-cols-2">
                    <div
                        className="flex w-full flex-col justify-center py-7"
                        data-aos="fade-up"
                    >
                        <p className="font-barlow uppercase tracking-widest text-[#666666]">
                            Anandinarayan Jeweller's
                        </p>
                        <h2 className="text-heading font-gilda">
                            Grace. Glamour. Gold.
                        </h2>

                        <br />
                        <br />

                        <div className="space-y-4 font-barlow" data-aos="fade-up">
                            <p>
                                Welcome to Anandinarayan Jeweller's, where timeless tradition meets modern elegance. Discover intricately crafted jewelry that celebrates the spirit of grace and sophistication.
                            </p>
                            <p>
                                From bridal sets to everyday sparkle, each piece in our collection is a testament to fine craftsmanship and exquisite design. Whether you're shopping for a celebration or creating a legacy, we help you make every moment shine.
                            </p>

                            <a
                                href="tel:+919673998267"
                                className="flex items-center text-xl"
                                data-aos="fade-up"
                            >
                                <div className="mr-4">
                                    <FaPhoneVolume style={{ color: "#AA8453" }} />
                                </div>
                                <div className="flex flex-col">
                                    <p className="barlow-condensed">Contact Us</p>
                                    <p className="text-xl" style={{ color: "#AA8453" }}>
                                        +91 96739 98267
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div
                        className="flex w-full flex-col justify-center py-7"
                        data-aos="fade-in"
                    >
                        <Image
                            src="/assets/Home/luxury.png"
                            alt="Jewelry Showcase"
                            width={1000}
                            height={1000}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default info;
