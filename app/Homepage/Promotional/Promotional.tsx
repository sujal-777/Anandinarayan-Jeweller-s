import React from "react";
import { CiPlay1 } from "react-icons/ci";

export default function Promotional() {
    return (
        <div className="bg-transparent py-20">
            <div className="text-center" data-aos="fade-up">
                <p className="font-barlow uppercase tracking-widest text-[#fff]">
                    Hotel Ashok
                </p>
                <h2
                    className="font-gilda text-3xl md:text-5xl"
                    style={{ color: "#fff" }}
                >
                    Rooms & Suites
                </h2>
            </div>
            <br />
            <br />
            <div className="border-2 border-[#fffffff80] p-1 w-fit rounded-full mx-auto">
                <button className="mx-auto block rounded-full bg-white p-4">
                    <CiPlay1 className="text-center text-xl text-[#AA8453]" />
                </button>
            </div>
        </div>
    );
}
