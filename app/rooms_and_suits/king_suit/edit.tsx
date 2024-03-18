import React from "react";
import { Image, Button } from "@nextui-org/react";

import Check from "../Icons/checkIcon";
import SwimmingPool from "../Icons/swimmingPool";
import BedIcon from "../Icons/bedIcon";
import BreakfastIcon from "../Icons/breakfastIcon";
import ClockIcon from "../Icons/clockIcon";
import WifiIcon from "../Icons/wifiIcon";
import PersonIcon from "../Icons/personIcon";

const edit = () => {
  return (
    <div className="font-barlow text-[#666666] text-[15px] mb-48">
      <div className="lg:hidden flex items-center justify-center">
        <Image
          radius="none"
          alt="test image"
          src="/rooms/room1.png"
          className="h-auto max-w-full flex justify-center items-center p-5"
        />
      </div>
      <div>
        <p className="text-[#222222] font-barlow ">HOTEL THE ASHOK NAGPUR</p>
        <p className="text-[#222222] text-[60px] font-gilda ">King Suit</p>
      </div>
      <div className="w-full flex">
        <div className="w-full lg:w-1/2">
          <div>
            <p className="justify-text">
              The King Suites offer a spacious and luxurious stay experience,
              ideal for guests seeking comfort and elegance. These suites are
              designed with modern amenities and stylish decor, providing a
              relaxing environment. The added space and amenities, perfect for
              both leisure and business travelers looking for a touch of luxury
              during their stay.
              <br />
              The alpha room among the ones up for grabs at Hotel Ashok, the
              wooden floored king suite is the grandest and the majestic among
              the lot for our clients. Themed with Royal Italian, Mughal and
              Peshwa styled interiors and spacious comforting dining area the
              king suite is certainly a class above all. The king suite gives
              you the actual vibe about how a room is supposed to be in a luxury
              hotel
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-stretch gap-y-5 md:gap-x-5 pt-5">
            <div>
              <p className="font-gilda text-[#222222] text-[24px] ">
                Check - in
              </p>
              <p className="flex">
                <Check />
                Check-in from 9:00 AM - anytime
              </p>
              <p className="flex">
                <Check />
                Early check-in subject to availability
              </p>
            </div>
            <div>
              <p className="font-gilda text-[#222222] text-[24px] ">
                Check - out
              </p>
              <p className="flex">
                <Check />
                Check-out before noon
              </p>
              <p className="flex">
                <Check />
                Express check-out
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 hidden lg:block">
          <div className="flex justify-center items-center p-5">
            <Image
              radius="none"
              alt="test image"
              src="/rooms/room1.png"
              className="h-auto max-w-full"
            />
          </div>
        </div>
      </div>

      <div className="mt-5 lg:mt-0">
        <p className="font-gilda text-[#222222] text-[24px]">
          Special check-in instructions
        </p>
        <p>
          Guests will receive an email 5 days before arrival with check-in
          instructions; front desk staff will greet guests on arrival For more
          details, please contact the property using the information on the
          booking confirmation.
        </p>
      </div>

      <div className="mt-5">
        <p className="font-gilda text-[#222222] text-[24px]">
          Children and extra beds
        </p>
        <p>
          Children are welcome Kids stay free! Children stay free when using
          existing bedding; children may not be eligible for complimentary
          breakfast Rollaway/extra beds are available for $ 10 per day according
          to policy.
        </p>
      </div>

      <div className="mt-5">
        <p className="font-gilda text-[#222222] text-[24px]">Pets</p>
        <p>Pets not allowed</p>
      </div>

      <div className="flex flex-col">
        <div className=" order-last md:order-first pt-3">
          <p className="font-gilda text-[#222222] text-[24px]">Amenities</p>
          <p className="flex items-center mt-2">
            <SwimmingPool className="mr-2" /> Swimming Pool
          </p>
          <p className="flex items-center mt-2">
            <BedIcon className="mr-2" /> Twin Bed
          </p>
          <p className="flex items-center mt-2">
            <BreakfastIcon className="mr-2" /> Breakfast
          </p>
          <p className="flex items-center mt-2">
            <ClockIcon className="mr-2" /> 200 sqft room
          </p>
          <p className="flex items-center mt-2">
            <WifiIcon className="mr-2" /> Free WiFi
          </p>
          <p className="flex items-center mt-2">
            <PersonIcon className="mr-2" /> 1-2 Persons
          </p>
        </div>
        <div className="order-first md:order-last py-4">
          <Button
            radius="none"
            size="lg"
            className="text-white bg-[#AA8453] tracking-tight"
          >
            CHECK NOW
          </Button>
        </div>
      </div>
    </div>
  );
};

export default edit;
