import React from "react";

export default function page() {
    const tnc = [
        "Check In Time: 2:00 PM. Check Out Time: 12:00 Noon. Early check-in of room not assured, will be provided as per availability.",
        "Early check-in 5 to 7 hours before the check-in time will be charged half day tariff. Early check-in more than 7 hours before the check-in time will be charged full day tariff.",
        "For direct payment mode, full room tariff has to be deposited at the time of check-in. For extension in the duration of stay, full room tariff for the extended duration is payable while requesting extension.",
        "Pick up/drop will be provided via 2 way shuttle service in every 30 minutes from airport. Kindly request for pick up drop 1 day before check in date.",
        "According to government regulations, a valid Photo ID has to be carried by every person staying at the hotel. The identification proofs accepted are Drivers License, Aadhar Card, Passport. Without valid ID the guest will not be allowed to check in. PAN Card required for billing above Rs. 25,000.",
        "The hotel reserves the right of admission. Accommodation can be denied to guests posing as a couple if suitable proof of identification is not presented at check-in. Unmarried couples are not allowed.",
        "Hotel will reserve direct payment bookings upto 7 pm. The rooms may be provided to other guest without any intimation in case no prior information is provided about check-in.",
        "Visitors are not allowed in room. Restaurant, Lobby, Coffee Shop can be used for meeting visitors.",
        "The room booking are confirmed on Non Refundable basis. For company guests, in case of No Show, retention charges equivalent to room tariff will be billed to the company.",
        "Any other guest apart from the number of guests confirmed during the booking will be chargeable at Rs. 1800 + GST per person.",
    ];

    return (
        <div className="space-y-8  px-8 py-20 lg:px-48 font-barlow">
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
