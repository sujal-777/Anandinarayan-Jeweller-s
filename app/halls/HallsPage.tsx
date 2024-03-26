import React from "react";

import { Image, Button } from "@nextui-org/react";

interface RoomPageProps {
  src: string;
  hall: string;
  desc1: string;
  features: string[];
  occasions: string[];
}

const HallsPage: React.FC<RoomPageProps> = ({
  src,
  hall,
  desc1,
  features,
  occasions,
}) => {
  return (
    <div className="flex-grow font-barlow text-[#666666] text-[15px] mb-48 mt-20 px-5">
      <div className="lg:hidden flex items-center justify-center">
        <Image
          radius="none"
          alt={src}
          src={src}
          className="h-auto max-w-full flex justify-center items-center p-5"
        />
      </div>
      <div>
        <p className="text-[#222222] font-barlow hidden md:block">
          HOTEL THE NAGPUR ASHOK
        </p>
        <p className="text-[#222222] font-barlow md:hidden">
          HOTEL ASHOK LUXURY HOTEL
        </p>
        <p className="text-[#222222] text-[60px] font-gilda ">{hall}</p>
      </div>
      <div className="w-full flex">
        <div className="w-full lg:w-[40%]">
          <div>
            <p className="justify-text">{desc1}</p>
          </div>
          <div className="mt-5">
            <h1>Features:</h1>
            {features.map((feature, index) => (
              <li key={index} className=" pl-5 ">
                {feature}
              </li>
            ))}
          </div>
        </div>
        <div className="w-[60%] hidden lg:block">
          <div className="flex justify-center items-center p-5">
            <Image
              radius="none"
              alt={src}
              src={src}
              className="h-auto max-w-full"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <p>Occasions Held at {hall}:</p>
        {occasions.map((occasion, index) => (
          <li key={index} className=" pl-5 ">
            {occasion}
          </li>
        ))}
      </div>

      <div className="mt-5">
        <Button
          radius="none"
          size="lg"
          className="text-white bg-[#AA8453] tracking-tight"
        >
          CHECK NOW
        </Button>
      </div>
    </div>
  );
};

export default HallsPage;
