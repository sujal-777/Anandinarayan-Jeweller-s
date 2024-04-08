import React from 'react'

type Props = {
    name: string;
    text: string;
    image: string;

    rating: number;
}

const ReviewCarousel = (props: Props) => {
  return (
    <figure className="max-w-screen-md md:p-20 p-4">
    <div className="flex items-center mb-4 text-yellow-300">
        {Array(props.rating).fill(0).map((_, i) => (
            <svg key={i} className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0.387-1.575Z"/>
            </svg>
        ))}
    </div>
    <blockquote>
        <p className="md:text-2xl text-sm font-semibold text-white">{props.text}</p>
    </blockquote>
    <figcaption className="flex items-center mt-6 space-x-3 rtl:space-x-reverse divide-gray-300 dark:divide-gray-700">
        <img className="w-12 h-12 rounded-full" src={props.image} alt="profile picture" />
        <div className="flex items-center divide-x-2 rtl:divide-x-reverse">
            <cite className="pe-3 md:font-medium text-white">{props.name}</cite>
            <cite className="ps-3 md:text-sm text-gray-400">Customer Review</cite>
        </div>
    </figcaption>
</figure>
  )
}

export default ReviewCarousel