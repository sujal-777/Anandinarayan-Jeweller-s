import React from "react";

export default function page() {
    return (
        <div>
            <div className="space-y-8  px-8 py-20 font-barlow lg:px-48">
                <h3 className="text-heading">Payment Terms</h3>
                <div className="space-y-8 py-10">
                    <div className="space-y-2">
                        <h4 className="font-bold">Reservation Policy: </h4>
                        <ol className="list-decimal">
                            <li className="mb-2 ml-4 pl-4">
                                The entire amount of booking for the total
                                period of stay has to be paid in order to
                                confirm the booking.
                            </li>
                            <li className="mb-2 ml-4 pl-4">
                                The package rate is subject to change without
                                prior notice.
                            </li>
                        </ol>
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-bold">Cancellation Policy: </h4>
                        <ol className="list-decimal">
                            <li className="mb-2 ml-4 pl-4">
                                If room cancelled/modified upto 3 days before
                                date of arrival, 50% fee will be charged. No
                                cancellations/modifications will be processed
                                after it.
                            </li>
                            <li className="mb-2 ml-4 pl-4">
                                If room left unoccupied the total amount of the
                                bill will be charged.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}
