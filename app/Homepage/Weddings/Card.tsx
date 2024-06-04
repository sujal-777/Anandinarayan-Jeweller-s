import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card({
    img,
    title,
    desc,
    link,
    pos,
}: {
    img: string;
    title: string;
    desc: string;
    link: string;
    pos: number;
}) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div
                className={`h-full w-full overflow-clip ${pos % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
                data-aos="fade-in" data-aos-delay="100"
            >
                <Image
                    src={img}
                    alt={title + " image"}
                    width={1000}
                    height={1000}
                    className="h-full w-full object-cover transition-all duration-200 hover:scale-110"

                />
            </div>
            <div
                className={`space-y-4 bg-[#F8F5F0] p-6 flex flex-col  justify-center ${pos % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}
            >
                <div className="" data-aos="fade-up">
                    <p className="font-barlow text-xs uppercase tracking-[0.5rem] text-[#666666]">
                        {pos % 2 === 0 ? "Experience" : "Explore"}
                    </p>
                    <h2
                        className="font-gilda text-xl"
                        style={{ color: "#000000" }}
                    >
                        {title}
                    </h2>
                </div>
                <p className="leading-relazed font-barlow text-sm" data-aos="fade-up">
                    Welcome to Hotel Ashok, nestled in the heart of Nagpur,
                    since our inception in February 2011, we have been
                    consistent with warm hospitality and exceptional services,
                    setting the standard for excellence in the hospitality
                    industry in Nagpur.
                </p>
                <Link href={link} className="block w-fit bg-[#AB8A62] p-2 font-barlow text-sm text-white uppercase" data-aos="fade-up">
                    Learn More
                </Link>
            </div>
        </div>
    );
}
