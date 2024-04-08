// components/ContactForm.js
import React from "react";

const ContactForm = () => {
    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl bg-white px-4 py-20 sm:px-6 lg:px-8">
                <div className="mb-8 font-gilda text-2xl text-black">
                    Get In Touch
                </div>
                <div className="-mx-4 mb-8 flex flex-wrap">
                    <div className="mb-4 w-full px-4 md:mb-0 md:w-1/2">
                        <label
                            htmlFor="firstName"
                            className="mb-2 block text-sm font-bold text-gray-700"
                        >
                            Your name
                        </label>
                        <input
                            id="firstName"
                            type="text"
                            className="w-full rounded-lg border border-gray-300 bg-gray-200 px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                        <label
                            htmlFor="lastName"
                            className="mb-2 block text-sm font-bold text-gray-700"
                        >
                            Your Email
                        </label>
                        <input
                            id="lastName"
                            type="text"
                            className="w-full rounded-lg border border-gray-300 bg-gray-200 px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>
                </div>
                <div className="-mx-4 mb-8 flex flex-wrap">
                    <div className="mb-4 w-full px-4 md:mb-0 md:w-1/2">
                        <label
                            htmlFor="phonenumber"
                            className="mb-2 block text-sm font-bold text-gray-700"
                        >
                            Your Number
                        </label>
                        <input
                            id="phonenumber"
                            type="phonenumber"
                            className="w-full rounded-lg border border-gray-300 bg-gray-200 px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                        <label
                            htmlFor="text"
                            className="mb-2 block text-sm font-bold text-gray-700"
                        >
                            Subject
                        </label>
                        <input
                            id="text"
                            type="text"
                            className="w-full rounded-lg border border-gray-300 bg-gray-200 px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>
                </div>

                <div className="-mx-4 mb-8 flex flex-wrap">
                    <div className="w-full px-4">
                        <label
                            htmlFor="query"
                            className="mb-2 block text-sm font-bold text-gray-700"
                        >
                            Specify your query here...
                        </label>
                        <textarea
                            id="query"
                            className="w-full rounded-lg border border-gray-300 bg-gray-200 px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
                        ></textarea>
                    </div>
                </div>

                <div className="text-start">
                    <button className="bg-[#AA8453] px-6 py-3 font-gilda text-white">
                        Send a message
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
