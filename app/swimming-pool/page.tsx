"use client";

import React from "react";
import Header from "./Header/Header";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Image from "next/image";
import WhatClientsSay from "./WhatClientsSay/WhatClientsSay";

export default function PoolDeckRestroBar() {
    return (
        <section>
            <Header
                title1="Pooldeck Restrobar"
                title2="explore our"
                image="/assets/pool/pool.png"
            />

            <div className=" px-8 py-20 lg:px-96">
                <p className="text-heading mt-20 font-gilda text-[#AA8453]">
                    Swimming Pool
                </p>
                <p className="mt-5 font-barlow">
                    Indulge in an extraordinary dining experience at PoolDeck,
                    Hotel Ashok's spacious poolside fine dining restaurant.
                    Immerse yourself in the soothing ambience while enjoying
                    daily live music, creating the perfect atmosphere for a
                    memorable meal.
                </p>
                <p className="mt-5 font-barlow">
                    Our restaurant prides itself on offering a diverse and
                    delectable range of multi-cuisine options, tailored to suit
                    the preferences of our esteemed guests. With a comprehensive
                    selection of international and local dishes, accompanied by
                    a wide array of handcrafted beverages, we ensure that every
                    culinary desire is met with exceptional taste and
                    quality.Our renowned chefs understand that food cooked with
                    warmth and love holds the power to truly satisfy the senses.
                    They are masters in their craft, with expertise in both
                    Indian delicacies and continental dishes. For a truly
                    authentic experience, we highly recommend trying our Dum
                    Biryani—an exquisite blend of fragrant rice and tender meat
                    cooked to perfection. Another must-try is the Nargasi Kofta,
                    a culinary delight that combines succulent meatballs with a
                    rich, creamy sauce.
                </p>
                <p className="mt-5 font-barlow">
                    To conclude your dining experience on a sweet note, our chef
                    recommends indulging in Ghewar, a delightful dessert that is
                    a specialty of the region. This sweet delicacy is sure to
                    tantalise your taste buds and leave you craving for more.At
                    PoolDeck, dining is a pleasure that is open to both in-house
                    guests and locals alike. With its scenic poolside setting,
                    live music, and an exquisite menu showcasing the finest of
                    cuisines, PoolDeck promises an unforgettable dining
                    experience that will leave you craving for more. Come and
                    savour the remarkable flavours and exceptional service that
                    have made our restaurant a cherished destination for food
                    lovers.
                </p>

                <br />
                <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <Image
                            src="/assets/pool/pool3.png"
                            alt="Pool"
                            width={1000}
                            height={1000}
                            className="w-full"
                        />
                        <Image
                            src="/assets/pool/pool4.png"
                            alt="Pool"
                            width={1000}
                            height={1000}
                            className="w-full"
                        />
                        <Image
                            src="/assets/pool/pool1.png"
                            alt="Pool"
                            width={1000}
                            height={1000}
                            className="w-full"
                        />
                        <Image
                            src="/assets/pool/pool2.png"
                            alt="Pool"
                            width={1000}
                            height={1000}
                            className="w-full"
                        />

                        <Image
                            src="/assets/pool/pool5.png"
                            alt="Pool"
                            width={1000}
                            height={1000}
                            className="w-full"
                        />
                        <Image
                            src="/assets/pool/pool6.png"
                            alt="Pool"
                            width={1000}
                            height={1000}
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
            <WhatClientsSay />
        </section>
    );
}
