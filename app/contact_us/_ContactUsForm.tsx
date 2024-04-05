// components/ContactForm.js
import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="text-2xl font-gilda text-black mb-8">Get In Touch</div>
        <div className="flex flex-wrap -mx-4 mb-8">
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
            <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">Your name</label>
            <input id="firstName" type="text" className="w-full bg-gray-200 border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:border-blue-300" />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Your Email</label>
            <input id="lastName" type="text" className="w-full bg-gray-200 border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:border-blue-300" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 mb-8">
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
            <label htmlFor="phonenumber" className="block text-gray-700 text-sm font-bold mb-2">Your Number</label>
            <input id="phonenumber" type="phonenumber" className="w-full bg-gray-200 border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:border-blue-300" />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <label htmlFor="text" className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
            <input id="text" type="text" className="w-full bg-gray-200 border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:border-blue-300" />
          </div>
        </div>
        
        <div className="flex flex-wrap -mx-4 mb-8">
          <div className="w-full px-4">
            <label htmlFor="query" className="block text-gray-700 text-sm font-bold mb-2">Specify your query here...</label>
            <textarea id="query" className="w-full bg-gray-200 border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"></textarea>
          </div>
        </div>
        
        <div className="text-start">
          <button className="py-3 px-6 bg-[#AA8453] text-white font-gilda">Send a message</button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;