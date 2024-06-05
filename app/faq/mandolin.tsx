"use client";

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { PlusIcon, Cross2Icon } from "@radix-ui/react-icons";

const contentfaq = [
    {
        question:
            "How do i request early check-in or late check-out with the hotel?",
        answer: "Since hotel policies regarding early check-in (generally before 2:00 pm) or late checkout (generally after 12:00 pm) vary by location and by hotel, please call the hotel directly prior to your arrival to make any necessary arrangements. Direct hotel phone numbers can be found on your confirmation email or on the hotel information page.",
    },
    {
        question: "What is your policy regarding cancellations?",
        answer: "If your travel plans change or delay, you can cancel or modify your reservation in accordance with the hotel's cancellation policy as stated during the reservation process.",
    },
    {
        question: "Will I be charged for extra guests occupying my room?",
        answer: "Hotel room rates vary by date and by the number of adults occupying a single room. To accommodate more guests, you need to change your reservation. You will be notified of any additional charges prior to confirming your updated reservation.",
    },
    {
        question: "Is there a minimun age requirement to reserve a hotel room?",
        answer: "Although individual hotel policies may vary, most hotels have a minimum age requirement of 21 years old. Please call the hotel directly prior to your arrival to make any necessary arrangements. Direct hotel phone numbers can be found in your confirmation email or on the respective hotel information page.",
    },
    {
        question:
            "Who can I call if I want to speak to someone when visiting Hotel Ashok website?",
        answer: "For any queries regarding brand content, please get in touch with the appropriate regional office.",
    },
    {
        question: "Do you have any discount code?",
        answer: "For discount codes on Hotel Ashok's website, you can check their official website, we often have special offers or codes available for booking directly through our website.",
    },
];

export default function Mandolin() {
    return (
        <div className="px-8  py-20 font-gilda lg:px-96">
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
