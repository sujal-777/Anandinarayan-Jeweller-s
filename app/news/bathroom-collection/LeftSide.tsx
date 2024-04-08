import React from "react";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const pgData = [
  {
    photo1: "/news/bathroom-collection/3-5.jpg.png",
    alternate1: "swimming pool",

    text1:
      "Indulge in luxury and comfort with Hotel Ashok's exquisite bathroom collections. Designed to elevate your stay to a new level of relaxation, our bathrooms are equipped with the finest amenities and features. From plush towels to designer toiletries, every detail has been carefully curated to ensure your comfort and satisfaction.",

    text2:
      "At Hotel Ashok, we prioritize the cleanliness and hygiene of our bathrooms. Our housekeeping team ensures that every bathroom is thoroughly cleaned and sanitized before your arrival, so you can relax and enjoy your stay with peace of mind.",

    photo2: "/news/bathroom-collection/Group 48096075.png",
    alternate2: "group images",

    text3:
      "The bathrooms are designed to offer a serene retreat, featuring contemporary fixtures and a soothing color palette. The spacious countertops provide ample space for your essentials, while the modern fittings add a touch of sophistication. Enjoy a refreshing rain shower under the stylish rainfall showerhead, or unwind in the deep soaking tub, surrounded by tasteful tile work and ambient lighting.",

    text4:
      "Every detail, from the plush towels to the designer toiletries, is carefully curated to ensure a luxurious and comfortable experience. Immerse yourself in the tranquility of our bathroom interiors and indulge in a moment of pure relaxation.",
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
