"use client";

import React, { useState } from "react";
import { CiPlay1 } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";

export default function Promotional() {
    const [hide, setHide] = useState(true);
    return (
        <div className="bg-transparent py-20">
            <div className="text-center" data-aos="fade-up">
                <p className="font-barlow uppercase tracking-widest text-[#fff]">
                    Gold. Glamour. Grace.
                </p>
                <h2
                    className="text-heading font-gilda"
                    style={{ color: "#fff" }}
                >
                    AnadiNarayan Jeweller's
                </h2>
            </div>
            <br />
            <br />
            <div
                className="mx-auto w-fit rounded-full border-2 border-[#fffffff80] p-1"
                data-aos="fade-in"
                onClick={() => {
                    setHide(!hide);
                }}
            >
                <button className="mx-auto block rounded-full bg-white p-4">
                    <CiPlay1 className="text-center text-xl text-[#AA8453]" />
                </button>
            </div>

            {!hide && (
                <div className="fixed bottom-0 left-0 right-0 top-0 z-50 m-auto h-fit w-fit w-full bg-black bg-opacity-50 p-8 md:w-[60vw]">
                    <button
                        className="absolute right-0 top-0 m-2 text-white"
                        onClick={() => {
                            setHide(true);
                        }}
                    >
                        <IoCloseSharp className="text-2xl" />
                    </button>

                    <iframe
                        src="https://www.youtube.com/embed/Aasrid2Uhy4?si=fPaMaVn5lu3RNA-y"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        className="aspect-video w-full"
                        allowFullScreen
                    ></iframe>
                </div>
            )}
        </div>
    );
}
