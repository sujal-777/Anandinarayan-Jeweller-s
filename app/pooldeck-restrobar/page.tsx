"use client";

import React from "react";
import Header from "../_components/Header/Header";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function PoolDeckRestroBar() {
  return (
    <section>
      <Header
        aboutUsText="Pooldeck Restrobar"
        headerBannerSrc="/pool-restrobar/banner.png"
      />

      <div>
        <p
          className="text-3xl font-gilda px-20 mt-20"
          style={{ color: "#AA8453" }}
        >
          Pooldeck Restrobar
        </p>
        <p className="px-20 mt-5 font-gilda">
          Pooldeck Restrobar at Hotel Ashok offers a captivating fusion of
          culinary delights and leisure in a picturesque setting. Nestled by the
          shimmering poolside, this unique dining experience combines the
          vibrant ambiance of a trendy bar with the laid-back charm of a
          sophisticated restaurant.
        </p>
        <p className="px-20 mt-5 font-gilda">
          As the sun sets, the Pooldeck Restrobar transforms into a chic
          destination, where guests can unwind and savor a diverse array of
          delectable dishes and handcrafted cocktails. The menu showcases a
          blend of international and local flavors, featuring fresh and
          high-quality ingredients prepared by skilled chefs.
        </p>
        <p className="px-20 mt-5 font-gilda">
          Surrounded by lush greenery and the soothing sounds of water, patrons
          can indulge in a relaxed atmosphere, perfect for socializing with
          friends or enjoying a romantic evening. The Pooldeck Restrobar at
          Hotel Ashok is not just a dining destination; it's an escape into a
          world of culinary excellence and refined hospitality.
        </p>
        <p className="px-20 mt-5 font-gilda">
          Whether you're looking to celebrate a special occasion, have a casual
          meal with friends, or simply unwind with a refreshing drink, Pooldeck
          Restrobar promises a memorable experience against the backdrop of the
          hotel's luxurious amenities and impeccable service.
        </p>

        <p className="mt-20 px-20 font-gilda text-2xl">Hours</p>

        <div className="flex justify-start px-20 mt-5">
          <AccessTimeIcon style={{ color: "#AA8453" }} />
          <p className="px-2">Breakfast: 7.00 am - 11.00 am ( daily)</p>
        </div>

        <div className="flex justify-start px-20 mt-5">
          <AccessTimeIcon style={{ color: "#AA8453" }} />
          <p className="px-2">Lunch: 12.00 pm - 2.00 Pm ( daily)</p>
        </div>

        <div className="flex justify-start px-20 mt-5">
          <AccessTimeIcon style={{ color: "#AA8453" }} />
          <p className="px-2">
            Dinner : open from 6.30 pm, last order at 10.00 pm (daily)
          </p>
        </div>

        <p className="text-2xl font-gilda px-20 mt-10">Dress Code</p>
        <p className="font-gilda px-20 mt-2">
          Smart casual (no shorts, hats, or sandals permitted)
        </p>

        <p className="text-2xl font-gilda px-20 mt-10">Terrace</p>
        <p className="font-gilda px-20 mt-2">Open for drinks only</p>

        <img className="p-20" src="/pool-restrobar/pool_grid.png" alt=" " />
      </div>
    </section>
  );
}
