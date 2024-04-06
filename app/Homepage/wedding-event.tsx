import React from "react";

import { Image } from "@nextui-org/react";

export default function WeddingEvent() {
  return (
    <section className="bg-[#222222]">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex flex-col sm:flex-row justify-center items-start">
          <div className="w-full sm:w-1/2 flex flex-col justify-center md:p-20 p-5 text-justify">
            <p className="font-gilda" style={{ color: "#AA8453" }}>
              Hotel Ashok
            </p>

            <br />
            <br />

            <p className="text-3xl text-white font-gilda">
              Wedding & Event Halls{" "}
            </p>

            <br />
            <br />

            <p className="text-white font-gilda">
              At Hotel Ashok, we understand that your special occasions deserve
              an equally exceptional setting.
            </p>

            <p className="text-white font-gilda">
              Our luxurious and versatile event halls provide the perfect
              backdrop for weddings, receptions, and a variety of special
              events.
            </p>

            <br />
            <br />

            <div className="flex items-center">
              <div className="mr-4"></div>
              <div className="flex flex-col">
                <p className="text-lg text-white">For information</p>
                <p className="text-sm" style={{ color: "#AA8453" }}>
                  +91 88888 70722
                </p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 flex flex-col justify-center px-10 py-7">
            <Image
              radius="none"
              alt=""
              src="/HomePageAssets/wedding_event.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
