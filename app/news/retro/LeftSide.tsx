import React from "react";

import Image from "next/image";

const pgData = [
  {
    photo1: "/news/retro/image.png",
    alternate1: "Hall With Retro Lighting",

    text1:
      "The allure of retro lighting lies in its ability to evoke a sense of nostalgia, transporting guests to a bygone era while offering modern functionality and charm.Retro lighting fixtures, inspired by designs from the mid-20th century, add a touch of vintage elegance to hotel interiors. From sleek and minimalistic designs to bold and artistic pieces, retro lighting fixtures come in a variety of styles to suit every aesthetic.",

    text2:
      "While retro lighting may harken back to a simpler time, its design is anything but outdated. Retro fixtures are often equipped with modern technology, such as energy-efficient LED bulbs and smart lighting controls, offering both style and functionality.",

    photo2: "/news/retro/img-2.png",
    alternate2: "Hall designs",

    text3:
      "One of the key features of retro lighting is its ability to create a warm and inviting ambiance. Soft, ambient lighting from retro fixtures can transform a hotel room or lobby into a cozy retreat, enhancing the overall guest experience.",

    text4:
      "Explore the timeless appeal of retro lighting design at Hotel Ashok. Our thoughtfully curated lighting fixtures combine vintage aesthetics with modern functionality, creating a unique ambiance that's sure to leave a lasting impression. Book your stay with us and immerse yourself in the allure of retro lighting design. ",
  },
];

const LeftSide = () => {
  return (
    <>
      {/* Mian div */}
      <div className="md:px-5 mt-5 md:mt-20 mb-10 md:mb-20 lg:mb-40">
        {pgData.map((data, index) => (
          <div key={index}>
            <Image
              alt={data.alternate1}
              src={data.photo1}
              width={760}
              height={480}
              className="block h-auto max-w-full"
            />

            {/* text area1 */}
            <div className="mt-5 mb-5">
              <p className="text-sm text-justify">{data.text1}</p>
              <p className="text-sm text-justify mt-7">{data.text2}</p>
            </div>

            <Image
              src={data.photo2}
              alt={data.alternate2}
              width={757}
              height={358}
              className="block h-auto max-w-full"
            />
            {/* text area 2 */}
            <div className="mt-5 mb-5">
              <p className="text-sm text-justify">{data.text3}</p>
              <p className="text-sm text-justify mt-7">{data.text4}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LeftSide;
