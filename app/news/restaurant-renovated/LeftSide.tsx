import React from "react";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const pgData = [
  {
    photo1: "/news/restaurant-renovated/Rectangle40304.png",
    alternate1: "swimming pool",

    text1:
      "Hotel Ashok's restaurant is a culinary haven, providing a delightful dining experience that captivates the senses. Nestled within the luxurious ambiance of the hotel, the restaurant offers a diverse menu curated with precision and passion. From exquisite local delicacies to international flavors, every dish is crafted to perfection, ensuring a gastronomic journey that leaves a lasting impression.",

    text2:
      "The warm and inviting atmosphere, combined with attentive service, enhances the overall dining pleasure, making Hotel Ashok's restaurant a destination for both hotel guests and discerning diners seeking a memorable and delectable culinary experience.",

    photo2: "/news/restaurant-renovated/Group 48096075.png",
    alternate2: "group images",

    text3:
      "Step into our restaurant and immerse yourself in a dining experience unlike any other. Our meticulously designed chairs offer both comfort and style, inviting you to relax and savor every moment of your meal. As you settle in, you'll find yourself surrounded by a beautifully curated environment, carefully crafted to enhance your dining experience.",

    text4:
      "From elegant decor to soothing ambiance, every detail has been thoughtfully considered to create a space that delights the senses. Whether you're enjoying a romantic dinner for two or a lively gathering with friends, our restaurant's inviting atmosphere sets the perfect stage for memorable moments and culinary delights.",
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
