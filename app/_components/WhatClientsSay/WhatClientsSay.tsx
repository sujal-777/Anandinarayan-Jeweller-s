"use client";
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Textra from "react-textra"
import ReviewCarousel from './ReviewCarousel';
import SelectRooms from './SelectRooms';
import RoomSearch from '../../Homepage/roomSelect';

const imageUrl ="/WhatClientsSay/image.png"
const reviews = [
  {
    name: 'Vaishali Kumar',
    text: 'The services at Hotel Ashok were superb. The staff were extremely polite, the location convenient from the railway station and airport, and the room service excellent and quick. The complimentary airport pickup and drop were awesome.',
    image: '/WhatClientsSay/1.jpg',
    role: 'CTO at Flowbite',
    rating: 5
  },
  {
    name: 'Harshit Das',
    text: 'Hotel Ashok boasts a good location, clean rooms, and cordial staff. The breakfast was also very good, offering great value for money. Its proximity to all important business centers makes it an ideal choice. Overall, it was a very good and comfortable stay.',
    image: '/WhatClientsSay/3.jpg',
    role: 'CTO at Flowbite',
    rating: 5
  },
  {
    name: 'Shalini Gupta',
    text: 'The rooms were spacious and clean, with good services. The restaurant was nice, and both breakfast and dinner were tasty. We thoroughly enjoyed our stay and recommend it for solo travelers. The hotel`s location is just a plus point.',
    image: '/WhatClientsSay/2.jpg',
    role: 'CTO at Flowbite',
    rating: 5
  },
  // Add more reviews here
]

const WhatClientsSay = () => {
  const [currentReview, setCurrentReview] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentReview((currentReview + 1) % reviews.length)
    }, 10000)

    return () => clearInterval(intervalId)
  }, [currentReview])
  return (
  <div className="md:flex justify-between"  style={{ backgroundImage: `url(${imageUrl})`, backgroundRepeat:'no-repeat', backgroundSize:'cover' }}>
  <ReviewCarousel name={reviews[currentReview].name} text={reviews[currentReview].text} image={reviews[currentReview].image} rating={reviews[currentReview].rating} />
  <div className="right-1 bg-[#F8F5F0] md:p-10 md:m-40">
          <p className="text-xl" style={{color: '#666666'}}>Rooms & Suites</p>
          <p className="text-2xl text-black font-gilda mt-5">Hotel Booking Form</p>

          <RoomSearch></RoomSearch>

          </div>



</div>
  )
}

export default WhatClientsSay


