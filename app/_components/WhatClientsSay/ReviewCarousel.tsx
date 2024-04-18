import React from "react";

type Props = {
    name: string;
    text: string;
    image: string;

    rating: number;
};

const ReviewCarousel = (props: Props) => {
    return (
        <figure className="max-w-screen-md p-4 md:p-20 flex flex-col justify-center">
            <div className="">
                <div className="mb-4 flex items-center text-yellow-300">
                    {Array(props.rating)
                        .fill(0)
                        .map((_, i) => (
                            <svg
                                key={i}
                                className="me-1 h-5 w-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0.387-1.575Z" />
                            </svg>
                        ))}
                </div>
                <blockquote>
                    <p className="text-sm font-semibold text-white md:text-2xl">
                        {props.text}
                    </p>
                </blockquote>
                <figcaption className="mt-6 flex items-center space-x-3 divide-gray-300 dark:divide-gray-700 rtl:space-x-reverse">
                    <img
                        className="h-12 w-12 rounded-full"
                        src={props.image}
                        alt="profile picture"
                    />
                    <div className="flex items-center divide-x-2 rtl:divide-x-reverse">
                        <cite className="pe-3 text-white md:font-medium">
                            {props.name}
                        </cite>
                        <cite className="ps-3 text-gray-400 md:text-sm">
                            Customer Review
                        </cite>
                    </div>
                </figcaption>
            </div>
        </figure>
    );
};

export default ReviewCarousel;
