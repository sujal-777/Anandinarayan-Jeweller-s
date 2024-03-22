import React from "react";

export default function CorporateTie() {
    return (
        <section className='bg-[#F8F5F0]'>
            <p className="text-4xl text-black flex justify-center items-center p-20">Corporate Tie-ups</p>

            <div className="w-full flex flex-col justify-center items-center">
                <div className="flex flex-col sm:flex-row justify-center items-start">
                    <div className="w-full sm:w-1/2 flex flex-col justify-center p-20 text-justify">
                        <p className='text-2xl font-gilda' style={{color: '#AA8453'}}>
                            Best Services
                        </p>

                        <br />
                        <br />

                        <p className="text-3xl text-black font-gilda">Corporate Tie-ups </p>

                        <br />
                        <br />

                        <p className='text-black font-gilda'>
                        Hotel Ashok offers premium corporate tie-up services, providing bespoke accommodation solutions tailored to the unique needs of businesses.                        </p>

                        <p className='text-black font-gilda'>
                        With state-of-the-art facilities and personalized service, our corporate partnerships ensure a seamless and productive stay for your team. Elevate your business trips with the unmatched hospitality of Hotel Ashok.                        </p>

                        <br />
                        <br />

                        <div className="flex items-center">
                            <div className="mr-4">
                            </div>
                            <div className="flex flex-col">
                                <p className="text-lg text-black">
                                    For information
                                </p>
                                <p className="text-sm" style={{ color: "#AA8453" }}>
                                    +91 88888 70722
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 flex flex-col justify-center px-10 py-7">
                        <img
                            
                            alt=""
                            src="/image_cop_ties.png"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}