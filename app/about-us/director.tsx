import React from "react";
import { Image } from "@nextui-org/react";

const Director = () => {
    return (
        <div className="mb-20 mt-10 font-barlow">
            <div className="mb-5 mt-5 flex flex-col lg:flex-row">
                <div className="w-full items-start justify-center text-sm md:text-base lg:w-[40%] lg:text-lg">
                    <Image
                        radius="none"
                        alt="director"
                        src="/about/director.png"
                        className="h-auto max-w-full px-0 md:px-5"
                    />
                </div>
                <div className="w-full text-justify lg:w-[60%]">
                    <p className="text-xl">About the Director</p>
                    <p className="text-4xl font-bold text-[#E4A853]">
                        Mr. Anand Narayan
                    </p>
                    <br />
                    <p>
                        Mr. Anand Narayan is the esteemed founder and guiding force behind Anandinarayan Jewellers, a renowned name in Bhandara's jewellery landscape. With a profound passion for exquisite craftsmanship and a commitment to authenticity, Mr. Narayan has dedicated over two decades to curating a collection that resonates with elegance and tradition.
                        <br />
                        <br />
                        Under his visionary leadership, Anandinarayan Jewellers has become synonymous with trust and quality, offering a diverse range of hallmarked gold and silver jewellery. Mr. Narayan's emphasis on innovative designs and customer satisfaction has fostered a loyal clientele, making the showroom a preferred destination for jewellery enthusiasts.
                        <br />
                        <br />
                        Beyond his entrepreneurial pursuits, Mr. Narayan is deeply invested in community development. His philanthropic endeavors include supporting local artisans and contributing to various social welfare initiatives in Bhandara. His dedication to both his craft and community exemplifies the values that Anandinarayan Jewellers stands for.
                        <br />
                        <br />
                        At Anandinarayan Jewellers, we take pride in the legacy established by Mr. Narayan, striving to uphold the standards of excellence and integrity that he embodies.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Director;
