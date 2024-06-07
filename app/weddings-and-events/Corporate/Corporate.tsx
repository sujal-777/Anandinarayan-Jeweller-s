import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { CiSpeaker } from "react-icons/ci";
import { PiForkKnife } from "react-icons/pi";
import { PiCalendarCheck } from "react-icons/pi";
import { LiaConciergeBellSolid } from "react-icons/lia";

export default function Corporate() {
    return (
        <div>
            <div className="space-y-4 px-8 py-20 font-barlow md:px-48" id="corporate-events">
                <div className="">
                    <p
                        className="font-barlow uppercase tracking-widest text-[#666666]"
                    >
                        Hotel the nagpur Ashok
                    </p>
                    <h2
                        className="text-heading font-gilda"
                        style={{ color: "#000000" }}
                    >
                        Corporate Events
                    </h2>
                </div>
                <div className="space-y-4">
                    <p>
                        Welcome to Hotel Ashok, where business meets luxury. Our
                        hotel is the perfect venue for your next corporate
                        event, offering a range of versatile spaces, modern
                        amenities, and impeccable service to ensure your event
                        is a success.
                    </p>
                    <div className="grid grid-cols-1 gap-4 md:p-12 lg:grid-cols-2">
                        <Image
                            src={"/assets/corporate/corporate1.png"}
                            width={500}
                            height={500}
                            alt="corporate event 1"
                        />
                        <Image
                            src={"/assets/corporate/corporate2.png"}
                            width={500}
                            height={500}
                            alt="corporate event 2"
                        />
                        <Image
                            src={"/assets/corporate/corporate3.png"}
                            width={500}
                            height={500}
                            alt="corporate event 3"
                        />
                        <Image
                            src={"/assets/corporate/corporate4.png"}
                            width={500}
                            height={500}
                            alt="corporate event 4"
                        />
                    </div>
                    <h2
                        className="text-heading font-gilda"
                        style={{ color: "#000000" }}
                    >
                        Spacious Conference hall with accommodation
                    </h2>
                    <div className="space-y-2">
                        <p>
                            Our hotel is well-suited to hosting corporate events
                            in ample space, specifically designed to accommodate
                            large gatherings, with spacious room accommodations
                            and conference rooms that can cater to hundreds of
                            attendees. This ensures that everyone can
                            comfortably network, listen to presentations, and
                            engage in other event activities.
                        </p>
                        <p>
                            In addition to the physical space, the venue offers
                            on-site hotel rooms, which are convenient for
                            attendees traveling from out of town. We also
                            provide essential amenities and services to host a
                            successful corporate event. These include
                            state-of-the-art audiovisual equipment, high-speed
                            internet access, and professional event planning and
                            coordination teams. These amenities help to create a
                            seamless and engaging experience for attendees,
                            ensuring the event runs smoothly from start to
                            finish.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                        <Image
                            src={"/assets/corporate/corporate5.png"}
                            width={500}
                            height={500}
                            alt="corporate event 5"
                        />
                        <Image
                            src={"/assets/corporate/corporate6.png"}
                            width={500}
                            height={500}
                            alt="corporate event 6"
                        />
                        <Image
                            src={"/assets/corporate/corporate7.png"}
                            width={500}
                            height={500}
                            alt="corporate event 7"
                        />
                    </div>
                    <p>
                        Choosing the right venue for your corporate event is
                        crucial to its success. Our corporate event hall
                        provides a sophisticated and versatile space that can be
                        tailored to meet your specific needs. With
                        state-of-the-art facilities, professional event planning
                        services, and exquisite catering options, we ensure that
                        your event is executed flawlessly. Contact us today to
                        book our corporate event hall and make your next
                        business gathering a resounding success!
                    </p>
                    <div className="text-center">
                        <Button
                            radius="none"
                            size="lg"
                            className="bg-[#AA8453] tracking-tight text-white "
                        >
                            Book NOW
                        </Button>
                    </div>
                    <h2
                        className="text-heading py-10 text-center font-gilda"
                        style={{ color: "#000000" }}
                    >
                        Our Event Highlights
                    </h2>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                        <Image
                            src={"/assets/corporate/corporate8.png"}
                            width={500}
                            height={500}
                            alt="corporate event 8"
                        />
                        <Image
                            src={"/assets/corporate/corporate9.png"}
                            width={500}
                            height={500}
                            alt="corporate event 9"
                        />
                        <Image
                            src={"/assets/corporate/corporate10.png"}
                            width={500}
                            height={500}
                            alt="corporate event 10"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded border-2 border-[#00000010] p-1 text-xs uppercase">
                        <CiSpeaker className="mr-2 inline text-lg text-[#AA8453]" />
                        hq AudioVisual equipments
                    </div>
                    <div className="rounded border-2 border-[#00000010] p-1 text-xs uppercase">
                        <PiForkKnife className="mr-2 inline text-lg text-[#AA8453]" />
                        customized catering services
                    </div>
                    <div className="rounded border-2 border-[#00000010] p-1 text-xs uppercase">
                        <PiCalendarCheck className="mr-2 inline text-lg text-[#AA8453]" />
                        event planning assistance
                    </div>
                    <div className="rounded border-2 border-[#00000010] p-1 text-xs uppercase">
                        <LiaConciergeBellSolid className="mr-2 inline text-lg text-[#AA8453]" />
                        range of accommodation services
                    </div>
                </div>
            </div>
        </div>
    );
}
