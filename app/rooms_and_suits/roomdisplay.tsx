import React from "react";

import {
  Image,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
} from "@nextui-org/react";

import { RxArrowRight } from "react-icons/rx";

import BreakfastIcon from "./Icons/breakfastIcon";
import ClockIcon from "./Icons/clockIcon";
import PersonIcon from "./Icons/personIcon";
import WifiIcon from "./Icons/wifiIcon";
import SwimmingPool from "./Icons/swimmingPool";
import BedIcon from "./Icons/bedIcon";

const roomArray = [
  {
    price: "500/Night",
    room: "King Suit",
    desription:
      "The King Suites offer a spacious and luxurious stay experience, ideal for guests seeking comfort and more.",
    image: "/rooms/king_suit.png",
  },
  {
    price: "800/Night",
    room: "Family Room",
    desription:
      "We present the best in line family rooms which will go soft on the pocket when you see the array of...read more",
    image: "/rooms/family_room.png",
  },
  {
    price: "1000/Night",
    room: "Deluxe Room",
    desription:
      "The Deluxe Rooms at our hotel are designed to provide a comfortable space and relaxing stay for...read more",
    image: "/rooms/deluxe_room.png",
  },
  {
    price: "500",
    room: "Budget Room",
    desription:
      "Our Budget rooms  are second to none in this range with the vast options of services and...read more",
    image: "/rooms/budget_room.png",
  },
];

const roomdisplay = () => {
  return (
    <section>
      {roomArray.map((item, index) => (
        <div key={index} className="relative w-full flex">
          <div className="w-1/2 flex justify-center items-center ">
            <Card radius="none" className="border-2 border-blue-400 w-3/4 px-5">
              <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                  <p className="text-small text-default-500">{item.price}</p>
                  <p className="text-md">{item.room}</p>
                </div>
              </CardHeader>
              <CardBody>
                <p>{item.desription}</p>
                <div className=" flex justify-center items-center">
                  <div className="grid grid-cols-3 gap-4">
                    <p className="flex items-center mt-2">
                      <PersonIcon className="mr-2" /> 1-2 Persons
                    </p>
                    <p className="flex items-center mt-2">
                      <WifiIcon className="mr-2" /> Free WiFi
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
                      <SwimmingPool className="mr-2" /> Swimming Pool
                    </p>
                  </div>
                </div>
              </CardBody>
              <div className="flex justify-center items-center">
                <Divider className="w-11/12" />
              </div>
              <CardFooter className="flex justify-between">
                <Button radius="none">
                  Details
                  <RxArrowRight />
                </Button>
                <Button radius="none">Book Now</Button>
              </CardFooter>
            </Card>
          </div>
          <div className="w-1/2">
            <Image
              radius="none"
              alt={`${index} - ${item.room}`}
              src={item.image}
              className="h-auto max-w-full"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default roomdisplay;
