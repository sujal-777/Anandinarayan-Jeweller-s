"use client";

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { PlusIcon, Cross2Icon } from "@radix-ui/react-icons";

const contentfaq = [
    {
        question: "What types of jewelry do you offer at your store?",
        answer: "We offer a wide range of jewelry including gold, diamond, platinum, silver, gemstone-studded pieces, and custom-designed ornaments for all occasions.",
    },
    {
        question: "Do you provide jewelry customization services?",
        answer: "Yes, we specialize in custom jewelry design. You can share your ideas or inspirations with us, and our expert craftsmen will bring your vision to life.",
    },
    {
        question: "How do I know if your jewelry is authentic?",
        answer: "All our pieces come with proper hallmark certifications, including BIS Hallmark for gold, IGI/GIA certification for diamonds, and authenticity guarantees for other gemstones.",
    },
    {
        question: "Do you offer jewelry repair and polishing services?",
        answer: "Yes, we provide professional cleaning, polishing, resizing, and repair services for all types of jewelry, including those not purchased from our store.",
    },
    {
        question: "Is there an exchange or buyback policy?",
        answer: "We offer a transparent exchange and buyback policy based on the current market value and condition of the jewelry. Terms may vary by item type and condition.",
    },
    {
        question: "Can I book an appointment for a personalized shopping experience?",
        answer: "Absolutely! You can book an appointment through our website or call us directly to schedule a personalized session with our jewelry consultants.",
    },
];


export default function Mandolin() {
    return (
        <div className="px-8  py-20 font-gilda lg:px-48">
            <Accordion variant="light" className="group">
                {contentfaq.map((item, index) => {
                    return (
                        <AccordionItem
                            key={index}
                            title={item.question}
                            indicator={({ isOpen }) =>
                                isOpen ? (
                                    <Cross2Icon
                                        width="18"
                                        height="18"
                                        className=" text-[#AA8453]"
                                    />
                                ) : (
                                    <PlusIcon
                                        width="18"
                                        height="18"
                                        className="text-[#AA8453]"
                                    />
                                )
                            }
                        >
                            <p className="font-barlow">{item.answer}</p>
                        </AccordionItem>
                    );
                })}
            </Accordion>
        </div>
    );
}
