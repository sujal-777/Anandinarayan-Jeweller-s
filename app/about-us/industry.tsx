import React from "react";
import { Image, Button } from "@nextui-org/react";

export const Industry = () => {
    return (
        <div className="mt-10 font-barlow">
            <div className="pb-10">
                <p className="font-barlow uppercase tracking-widest text-[#666666]">
                    Anadinarayan Jewellers
                </p>
                <h2
                    className="text-heading font-gilda"
                    style={{ color: "#000000" }}
                >
                    A Legacy of Trust and Craftsmanship
                </h2>
            </div>
            <div className="grid w-full grid-cols-1 gap-4 space-y-8 lg:grid-cols-2">
                <div>
                    <div className="space-y-4 font-barlow">
                        <p>
                            Welcome to Anadinarayan Jewellers, a distinguished name in the heart of Bhandara known for its exceptional quality, timeless designs, and deep-rooted values. Since our inception, we have remained committed to creating jewellery that celebrates tradition, elegance, and trust.
                        </p>
                        <p>
                            Nestled in the vibrant town of Bhandara, our showroom offers a curated collection of BIS-hallmarked gold and silver ornaments that appeal to every generation. From intricate bridal sets to everyday essentials, each piece is crafted with precision and passion to mark life’s special moments.
                        </p>
                        <p>
                            At Anadinarayan Jewellers, our dedication goes beyond fine jewellery. We take pride in fostering long-term relationships with our customers, ensuring transparent pricing, ethical sourcing, and personalized service. Our clientele spans families who have trusted us for generations, and we continue to serve with the same commitment and warmth.
                        </p>
                        <p>
                            As we grow, our mission remains unchanged — to uphold the legacy of trust and bring joy to every customer who walks through our doors. Discover the unmatched artistry and integrity that make Anadinarayan Jewellers a true jewel of Bhandara.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <Image
                        radius="none"
                        alt="img1"
                        src="/about/img1.png"
                        className="h-[330px] w-[452px]"
                    />
                    <Image
                        radius="none"
                        alt="img2"
                        src="/about/img2.png"
                        className="h-[330px] w-[452px]"
                    />
                </div>
            </div>
        </div>
    );
};
