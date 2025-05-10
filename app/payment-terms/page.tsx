import React from "react";

export default function page() {
    return (
        <div>
            <div className="space-y-8 px-8 py-20 font-barlow lg:px-48">
                <h3 className="text-heading">Payment Terms</h3>
                <div className="space-y-8 py-10">
                    <div className="space-y-2">
                        <h4 className="font-bold">Order Confirmation & Payment:</h4>
                        <ol className="list-decimal">
                            <li className="mb-2 ml-4 pl-4">
                                Orders must be paid in full at the time of purchase to confirm processing.
                            </li>
                            <li className="mb-2 ml-4 pl-4">
                                We accept all major debit/credit cards, UPI, net banking, and approved EMI partners.
                            </li>
                            <li className="mb-2 ml-4 pl-4">
                                All prices are inclusive of applicable taxes unless stated otherwise.
                            </li>
                        </ol>
                    </div>

                    <div className="space-y-2">
                        <h4 className="font-bold">Custom Orders:</h4>
                        <ol className="list-decimal">
                            <li className="mb-2 ml-4 pl-4">
                                Custom jewelry designs require a 50% advance at the time of confirmation and the balance before delivery.
                            </li>
                            <li className="mb-2 ml-4 pl-4">
                                Custom orders are non-refundable once production begins.
                            </li>
                        </ol>
                    </div>

                    <div className="space-y-2">
                        <h4 className="font-bold">Cancellation & Refund Policy:</h4>
                        <ol className="list-decimal">
                            <li className="mb-2 ml-4 pl-4">
                                Cancellations must be requested within 24 hours of placing the order. After that, orders cannot be cancelled or refunded.
                            </li>
                            <li className="mb-2 ml-4 pl-4">
                                For eligible returns or refunds, the amount will be credited within 7-10 business days via the original mode of payment.
                            </li>
                        </ol>
                    </div>

                    <div className="space-y-2">
                        <h4 className="font-bold">EMI Terms (if applicable):</h4>
                        <ol className="list-decimal">
                            <li className="mb-2 ml-4 pl-4">
                                EMI is available on select banks and cards, subject to approval from the payment gateway provider.
                            </li>
                            <li className="mb-2 ml-4 pl-4">
                                Any dispute related to EMI must be raised with the respective bank.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}
