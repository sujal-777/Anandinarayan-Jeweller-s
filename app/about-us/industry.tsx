import React from "react";

import { Image, Button } from "@nextui-org/react";

const industry = () => {
  return (
    <div className=" font-barlow mt-10 mx-10">
      <Button
        radius="none"
        size="lg"
        className="bg-[#AA8453] text-2xl lg:text-3xl font-gilda text-white"
      >
        HOTEL ASHOK
      </Button>
      <div className="flex flex-col lg:flex-row mt-5 mb-5">
        <div className="w-full lg:w-[60%] text-sm md:text-base lg:text-lg">
          <h1 className="text-3xl lg:text-4xl font-gilda">
            Ashok group of Industries
          </h1>
          <p className="mt-5 text-justify">
            Welcome to Hotel Ashok, where warm hospitality and exceptional
            service await each and every guest. Since our establishment in
            February 2011, we have continuously evolved and improved to ensure
            an unforgettable experience for our valued guests.
            <br />
            <br />
            Conveniently located in the heart of Nagpur, our prime location
            makes us the perfect choice for both business and leisure travellers
            seeking convenience and comfort. With a wide range of room options,
            we have accommodations to suit every taste and need, ensuring a
            comfortable and enjoyable stay for all.At Hotel Ashok, we prioritize
            creating a welcoming atmosphere where every guest feels at home. Our
            dedicated team goes above and beyond to ensure your stay is
            memorable and hassle-free.
            <br />
            <br />
            Our stunning banquet halls are renowned for providing the perfect
            setting for all your special events and functions. Whether it&apos;s
            an intimate gathering or a large-scale corporate event, our
            versatile banquet halls can cater to your specific needs, ensuring a
            memorable experience for you and your guests.
            <br />
            <br />
            To enhance your stay, we offer modern amenities and multiple
            facilities for your convenience. Indulge in delectable cuisine and
            refreshing drinks at our bar and drinks area, unwind in our
            relaxation area, or enjoy a delightful dining experience at our
            infinity poolside restaurant.
            <br />
            <br />
            At Hotel Ashok, our commitment is to provide our guests with the
            best possible experience. We strive to exceed expectations and
            create lasting memories for each and every guest who walks through
            our doors.
            <br />
            <br />
          </p>
        </div>
        <div className=" w-full lg:w-[40%] flex justify-center items-center px-5">
          <div>
            <br />
            <Image
              radius="none"
              alt="img1"
              src="/about/img1.png"
              className="h-auto max-w-full"
            />
            <br />
            <Image
              radius="none"
              alt="img2"
              src="/about/img2.png"
              className="h-auto max-w-full"
            />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default industry;
