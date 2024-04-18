import React from "react";

const SelectRooms = () => {
    return (
        <div className="container mx-auto bg-white px-4 py-8">
            <h1 className="mb-4 text-3xl font-bold">ROOMS & SUITES</h1>
            <h2 className="mb-8 text-xl font-semibold">Hotel Booking Form</h2>
            <form className="flex flex-col space-y-4">
                <div className="flex flex-wrap items-center">
                    <label className="mr-2 w-full text-sm font-medium">
                        Check In:
                    </label>
                    <input
                        type="date"
                        id="check-in"
                        name="check-in"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-wrap items-center">
                    <label className="mr-2 w-full text-sm font-medium">
                        Check Out:
                    </label>
                    <input
                        type="date"
                        id="check-out"
                        name="check-out"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-wrap items-center">
                    <label className="mr-2 w-full text-sm font-medium">
                        Adults:
                    </label>
                    <input
                        type="number"
                        id="adults"
                        name="adults"
                        value="1"
                        min="1"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-wrap items-center">
                    <label className="mr-2 w-full text-sm font-medium">
                        Children:
                    </label>
                    <input
                        type="number"
                        id="children"
                        name="children"
                        value="0"
                        min="0"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full rounded-md bg-blue-500 py-2 font-medium text-white transition duration-300 hover:bg-blue-700"
                >
                    CHECK AVAILABILITY
                </button>
            </form>
        </div>
    );
};

export default SelectRooms;
