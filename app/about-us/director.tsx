import React from "react";

import { Image } from "@nextui-org/react";

const director = () => {
    return (
        <div className=" mx-10 mb-20 mt-10 font-barlow">
            <div className="mb-5 mt-5 flex flex-col lg:flex-row">
                <div className="w-full items-start justify-center text-sm md:text-base lg:w-[40%] lg:text-lg ">
                    <Image
                        radius="none"
                        alt="director"
                        src="/about/director.png"
                        className="h-auto max-w-full px-0 md:px-5"
                    />
                </div>
                <div className="w-full text-justify text-sm md:text-base lg:w-[60%] lg:text-lg">
                    <p className="text-xl">About the Director</p>
                    <p className="text-4xl font-bold text-[#E4A853] ">
                        Mr. Sanjay Gupta
                    </p>
                    <br />
                    <br />
                    <p>
                        Mr. Sanjay Gupta is the visionary owner of The Nagpur
                        Ashok. Mr. Gupta is a renowned civil engineer with over
                        30 years of experience in the field of premium
                        construction. Apart from his expertise in construction
                        and hotel industry, he has also gained vast experience
                        in the jewellery and mining industry. Mr. Gupta&apos;s
                        passion for hospitality and tourism has led to
                        remarkable efforts in promoting the development of
                        tourism projects in Maharashtra. The Government of
                        Maharashtra has appreciated and complimented his
                        suggestions in this regard. Mr. Gupta is a firm believer
                        in inspiring others around him, and his actions speak
                        louder than words. He believes in sharing knowledge and
                        management skills, and is often invited to hospitals,
                        schools, and colleges to inspire students and staff
                        members.
                        <br />
                        <br />
                        He is an executive body member of CREDAI Nagpur and
                        former chairman of Builders Association of India, Nagpur
                        Centre, where he has promoted fair and trustworthy
                        practices in builder-ship business.
                        <br />
                        <br />
                        He is not only a successful businessman but also a
                        philanthropist at heart. He has contributed immensely
                        towards the betterment of society by donating to relief
                        funds for poor farmers, flood victims, and earthquake
                        survivors. In addition to his contributions towards
                        society, Mr. Gupta is also an active member of various
                        organizations. He is a board member of Lions Club of
                        Nagpur, trustee of Radhakrishna Hospital, patron member
                        of All India Vaishya Federation, and has participated in
                        many other social welfare activities.
                        <br />
                        <br />
                        At Hotel Ashok, we are privileged to have Mr. Gupta as
                        our owner, who leads by example with his values and
                        dedication towards social welfare. We strive to uphold
                        his ideals by providing exceptional service and
                        amenities to our guests.
                        <br />
                        <br />
                        The hospitality and Tourism Sector has always been very
                        close to his heart and has made remarkable efforts in
                        boosting development of Tourism projects in Maharashtra.
                        Government of Maharashtra has many times complimented
                        his suggestions in this regards.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default director;
