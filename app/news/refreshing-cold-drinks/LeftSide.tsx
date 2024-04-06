import React from "react";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const pgData = [
  {
    photo1: "/news/cold-drink/image 139.png",
    alternate1: "swimming pool",

    text1:
      "Sit back, relax, and enjoy your cold drink in the serene ambiance of our hotel. Whether you're lounging by the pool or unwinding in our cozy lounge, our cold drinks are the perfect way to cool off and rejuvenate.",

    text2:
      "Escape the heat and treat yourself to a selection of refreshing cold drinks at Hotel Ashok. Our beverages are carefully crafted to offer a cool and revitalizing experience, perfect for a sunny day or a relaxing evening. Quench your thirst with our selection of fresh fruit juices, served cold and bursting with flavor. From orange to watermelon, our juices are made from the finest fruits, ensuring a refreshing and revitalizing experience.",

    photo2: "/news/cold-drink/Group 48096075.png",
    alternate2: "group images",

    text3:
      "Our beverage menu is thoughtfully curated to offer a delightful mix of flavors and textures, perfect for rejuvenating your senses. Indulge in our selection of iced teas, ranging from classic black tea to exotic blends, each brewed to perfection and served over ice for a refreshing sip. For a tropical twist, try our fruit-infused mocktails, bursting with the flavors of fresh fruits and herbs, or opt for a creamy and indulgent smoothie made with locally sourced fruits and dairy.",

    text4:
      "If you're in the mood for something more traditional, our fresh fruit juices are a refreshing choice, with options like tangy orange, sweet watermelon, and exotic pineapple.  Join us at Hotel Ashok and chill out in style with our refreshing cold drinks.",
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
