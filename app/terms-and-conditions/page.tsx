import React from "react";

export default function page() {
    const tnc = [
        "All jewelry sold is certified and hallmarked as per industry standards. Customers are advised to collect the certificate of authenticity during purchase.",
        "Customized or made-to-order jewelry items are non-refundable and non-exchangeable once the order is confirmed.",
        "Returns or exchanges are allowed within 7 days of purchase for unused, undamaged items with original invoice and packaging. Custom pieces and items purchased on discount are not eligible.",
        "Jewelry cleaning and inspection services are provided free of charge once every 6 months for items purchased from Anandinarayan Jewelry Shoppe.",
        "Jewelry repairs, resizing, or alterations are chargeable and subject to assessment. Timelines and charges may vary based on the design and material.",
        "All payments above ₹2,00,000 must be made via bank transfer or card as per government guidelines. PAN card is mandatory for billing above ₹2,00,000.",
        "In-store pickup of online or phone orders requires valid ID proof and matching name on the order. Authorized collection by others must be pre-informed.",
        "Product pricing is subject to change without prior notice due to fluctuations in market rates for gold, silver, and gemstones.",
        "The buyback and exchange value of jewelry will depend on the current market rate and condition of the item. Original invoice must be presented.",
        "Anandinarayan Jewelry Shoppe reserves the right to deny service or cancel an order if fraudulent activity or policy violation is suspected.",
    ];

    return (
        <div className="space-y-8 px-8 py-20 lg:px-48 font-barlow">
            <h3 className="text-heading">Terms And Conditions</h3>
            <div className="py-10">
                <ol className="list-decimal">
                    {tnc.map((item, index) => {
                        return (
                            <li key={index} className="mb-2 ml-4 pl-4">
                                {item}
                            </li>
                        );
                    })}
                </ol>
            </div>
        </div>
    );
}
