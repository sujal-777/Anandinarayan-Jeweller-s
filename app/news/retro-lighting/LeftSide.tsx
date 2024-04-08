import React from "react";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const pgData = [
  {
    photo1: "/news/retro-lighting/image140.png",
    alternate1: "swimming pool",

    text1:
      "The allure of retro lighting lies in its ability to evoke a sense of nostalgia, transporting guests to a bygone era while offering modern functionality and charm.Retro lighting fixtures, inspired by designs from the mid-20th century, add a touch of vintage elegance to hotel interiors. From sleek and minimalistic designs to bold and artistic pieces, retro lighting fixtures come in a variety of styles to suit every aesthetic.",

    text2:
      "While retro lighting may harken back to a simpler time, its design is anything but outdated. Retro fixtures are often equipped with modern technology, such as energy-efficient LED bulbs and smart lighting controls, offering both style and functionality.",

    photo2: "/news/retro-lighting/Group48096075.png",
    alternate2: "group images",

    text3:
      "One of the key features of retro lighting is its ability to create a warm and inviting ambiance. Soft, ambient lighting from retro fixtures can transform a hotel room or lobby into a cozy retreat, enhancing the overall guest experience.",

    text4:
      " Whether you're floating gently on the water or basking in the sun on our poolside loungers, our rooftop pool offers a sanctuary for relaxation and rejuvenation. Experience the soothing benefits of our rooftop pool and indulge in a moment of pure bliss at Hotel Ashok.",
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
