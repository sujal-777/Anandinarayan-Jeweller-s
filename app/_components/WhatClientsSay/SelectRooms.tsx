import React from 'react'



const SelectRooms = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-white">
    <h1 className="text-3xl font-bold mb-4">ROOMS & SUITES</h1>
    <h2 className="text-xl font-semibold mb-8">Hotel Booking Form</h2>
    <form className="flex flex-col space-y-4">
        <div className="flex flex-wrap items-center">
            <label className="w-full mr-2 text-sm font-medium">Check In:</label>
            <input type="date" id="check-in" name="check-in" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
        <div className="flex flex-wrap items-center">
            <label  className="w-full mr-2 text-sm font-medium">Check Out:</label>
            <input type="date" id="check-out" name="check-out" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
        <div className="flex flex-wrap items-center">
            <label  className="w-full mr-2 text-sm font-medium">Adults:</label>
            <input type="number" id="adults" name="adults" value="1" min="1" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
        <div className="flex flex-wrap items-center">
            <label  className="w-full mr-2 text-sm font-medium">Children:</label>
            <input type="number" id="children" name="children" value="0" min="0" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
        <button type="submit" className="w-full py-2 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-700 transition duration-300">CHECK AVAILABILITY</button>
    </form>
</div>

  )
}

export default SelectRooms