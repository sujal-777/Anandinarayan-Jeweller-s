import React from "react";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const pgData = [
  {
    photo1: "/news/best-food-items/3-5.jpg.png",
    alternate1: "swimming pool",

    text1:
      "Embark on a culinary journey like no other and savor the exquisite flavors of the best food items at Hotel Ashok. From traditional delicacies to modern culinary creations, our menu is a testament to our commitment to culinary excellence and guest satisfaction.",

    text2:
      "Dive into our signature dishes, crafted by our talented chefs using the finest ingredients and innovative techniques, each dish is a masterpiece that will tantalize your taste buds. ake your taste buds on a global adventure with our international cuisine ,our menu offers a diverse range of flavors and textures to satisfy every palate.",

    photo2: "/news/best-food-items/Group48096075.png",
    alternate2: "group images",

    text3:
      "Prepare your taste buds for a culinary journey of a lifetime as you explore the best food items at Hotel Ashok. Our menu is a testament to the rich culinary heritage of India, offering a tantalizing array of dishes that are sure to delight your palate.",

    text4:
      "Join us at Hotel Ashok and experience the best food items that our culinary team has to offer. From traditional Indian dishes to international favorites, our menu is a celebration of flavor and a true delight for the senses.",
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
