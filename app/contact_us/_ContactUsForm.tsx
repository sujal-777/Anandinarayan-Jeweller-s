// components/ContactForm.js
"use client";
import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        Name: "",
        Email: "",
        Phone_Number: "",
        subject: "",
        query: "",
    });
    const [sending, setSending] = useState(false);

    const handleSubmit = async () => {
        setSending(true);

        await fetch(
            "https://script.google.com/macros/s/AKfycbxpeHD4GiMvpCXkYRnCV-8mapk2NDI35_4DMFq5qL2Gj8JXW8E59LAPE4bguOBL2WANhQ/exec",
            {
                method: "POST",
                body: JSON.stringify(formData),
            }
        )
            .then(() => {
                alert("Message sent successfully");
                setFormData({
                    Name: "",
                    Email: "",
                    Phone_Number: "",
                    subject: "",
                    query: "",
                });
                setSending(false);
            })
            .catch(() => {
                alert("Error Submitting Form. Please try again later.");
                setSending(false);
            });
    };

    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl bg-white px-4 py-20 sm:px-6 lg:px-8">
                <div className="mb-8 font-gilda text-2xl text-black">
                    Get In Touch
                </div>
                <form
                    action=""
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}
                >
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
                                value={formData.Name}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        Name: e.target.value,
                                    })
                                }
                                required
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
                                value={formData.Email}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        Email: e.target.value,
                                    })
                                }
                                required
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
                                type="tel"
                                className="w-full rounded-lg border border-gray-300 bg-gray-200 px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
                                value={formData.Phone_Number}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        Phone_Number: e.target.value,
                                    })
                                }
                                required
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
                                value={formData.subject}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        subject: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>
                    </div>

                    <div className=" mb-8 flex flex-wrap">
                        <label
                            htmlFor="query"
                            className="mb-2 block text-sm font-bold text-gray-700"
                        >
                            Specify your query here...
                        </label>
                        <textarea
                            id="query"
                            className="w-full rounded-lg border border-gray-300 bg-gray-200 px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
                            value={formData.query}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    query: e.target.value,
                                })
                            }
                            required
                        ></textarea>
                    </div>
                    <div className="mt-4 text-start">
                        <button
                            type="submit"
                            className="bg-[#AA8453] px-6 py-3 font-barlow uppercase text-white hover:bg-black"
                        >
                            {sending ? "Sending..." : "Send a message"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
