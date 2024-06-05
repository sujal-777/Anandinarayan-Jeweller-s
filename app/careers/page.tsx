import React from "react";
import Header from "./Header/Header";
import { GoArrowUpRight } from "react-icons/go";

export default function page() {
    const careers = [
        {
            title: "Senior Executive Assistant",
            post: "Manager",
            loc: "Nagpur",
            type: "Full-time",
            link: "",
        },
        {
            title: "Receptionist",
            post: "Employee",
            loc: "Nagpur",
            type: "Full-time",
            link: "",
        },
        {
            title: "Senior Architecture",
            post: "Employee",
            loc: "Nagpur",
            type: "Full-time",
            link: "",
        },
        {
            title: "Intern",
            post: "Intern",
            loc: "Nagpur",
            type: "Part-time",
            link: "",
        },
    ];

    return (
        <div>
            <Header
                title1="Careers"
                title2="Explore"
                image="/HeaderAssets/img_header.png"
            />
            <div className="px-8  py-20 font-barlow lg:px-96">
                {careers.map((career, index) => {
                    return (
                        <div
                            key={index}
                            className="group grid grid-cols-1 gap-4 border-t-2 border-[#F1EEEB] px-4 py-8 transition-all duration-200 hover:bg-[#aa8453] hover:text-white lg:grid-cols-3"
                        >
                            <div>
                                <h2 className="font-gilda text-2xl">
                                    {career.title}
                                </h2>
                                <p>{career.post}</p>
                            </div>
                            <div>
                                <h3>Location</h3>
                                <p>{career.loc}</p>
                            </div>
                            <div className="grid grid-cols-4">
                                <div className="col-span-3">
                                    <p>Employment Type</p>
                                    <p>{career.type}</p>
                                </div>
                                <GoArrowUpRight className="my-6 block h-fit cursor-pointer text-xl text-[#AA8453] group-hover:text-white" />
                            </div>
                        </div>
                    );
                })}
                <p>
                    Please submit a resume and cover letter with compensation
                    history to{" "}
                    <a
                        href="mailto:info@thenagpurhotelashok.com"
                        className="text-[#aa8453]"
                    >
                        info@thenagpurhotelashok.com
                    </a>
                    .
                </p>
            </div>
        </div>
    );
}
