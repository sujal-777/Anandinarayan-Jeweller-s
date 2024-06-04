import React from "react";

import { Image, Button } from "@nextui-org/react";

export const Industry = () => {
    return (
        <div className="mt-10 font-barlow">
            <div className="w-full space-y-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                    <div className="pb-10" data-aos="fade-up">
                        <p className="font-barlow uppercase tracking-widest text-[#666666]">
                            Hotel Ashok
                        </p>
                        <h2
                            className="text-heading font-gilda"
                            style={{ color: "#000000" }}
                        >
                            Ashok group of Industries
                        </h2>
                    </div>
                    <div className="space-y-4 font-barlow">
                        <p>
                            Welcome to Hotel Ashok, where warm hospitality and
                            exceptional service await each and every guest.
                            Since our establishment in February 2011, we have
                            continuously evolved and improved to ensure an
                            unforgettable experience for our valued guests.
                        </p>
                        <p>
                            Conveniently located in the heart of Nagpur, our
                            prime location makes us the perfect choice for both
                            business and leisure travellers seeking convenience
                            and comfort. With a wide range of room options, we
                            have accommodations to suit every taste and need,
                            ensuring a comfortable and enjoyable stay for all.
                            At Hotel Ashok, we prioritize creating a welcoming
                            atmosphere where every guest feels at home. Our
                            dedicated team goes above and beyond to ensure your
                            stay is memorable and hassle-free.
                        </p>
                        <p>
                            Our stunning banquet halls are renowned for
                            providing the perfect setting for all your special
                            events and functions. Whether it&apos;s an intimate
                            gathering or a large-scale corporate event, our
                            versatile banquet halls can cater to your specific
                            needs, ensuring a memorable experience for you and
                            your guests. To enhance your stay, we offer modern
                            amenities and multiple facilities for your
                            convenience. Indulge in delectable cuisine and
                            refreshing drinks at our bar and drinks area, unwind
                            in our relaxation area, or enjoy a delightful dining
                            experience at our infinity poolside restaurant.
                        </p>
                        <p>
                            At Hotel Ashok, our commitment is to provide our
                            guests with the best possible experience. We strive
                            to exceed expectations and create lasting memories
                            for each and every guest who walks through our
                            doors.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-4">
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
