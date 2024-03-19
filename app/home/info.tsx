import React from 'react';
import CallIcon from '@mui/icons-material/Call';


export default function Info() {
    return (
        <section>
            <div className="w-full flex flex-col justify-center items-center">
                <div className="flex flex-col sm:flex-row justify-center items-start">
                    <div className="w-full sm:w-1/2 flex flex-col justify-center px-10 py-7 text-justify">

                        <p className='text-3xl bg-[#AA8453] text-white p-2 inline-block'>Hotel Ashok</p>

                        <br /><br />

                        <p className='text-3xl'>Enjoy a Luxury Experience</p>

                        <br /><br />

                        <p>Welcome to Hotel Ashok, nestled in the heart of Nagpur, since our inception in February 2011, we have been consistent with warm hospitality and exceptional services, setting the standard for excellence in the hospitality industry in Nagpur.
                            Experience the regal charm and grandeur of our suites, designed to make every guest feel like royalty. Whether you're seeking a family retreat or a romantic escape, our range of rooms, from family to honeymoon suites, caters to your every whim.
                            With a host of modern amenities and facilities, we ensure a comfortable and memorable stay at Hotel Ashok.
                        </p>

                        <br /><br />

                        <div className="flex items-center">
                            <div className="mr-4">
                                <CallIcon style={{ color: '#AA8453' }} />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-lg" style={{ color: '#AA8453' }}>Reservation</p>
                                <p className="text-sm" style={{ color: '#AA8453' }}>+91 88888 70722</p>

                            </div>
                        </div>


                    </div>

                    <div className="w-full sm:w-1/2 flex flex-col justify-center px-10 py-7">
                        <img
                            alt="man with generator"
                            src="/HomePageAssets/home_info.png"

                        />

                    </div>


                </div>
            </div>
        </section>
    );
}