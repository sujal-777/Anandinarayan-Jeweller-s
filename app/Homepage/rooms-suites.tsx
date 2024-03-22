import React from 'react';
import Image from 'next/image';

const images = [
    { id: 1, src: '/HomePageAssets/image_king_suite.png', alt: 'Image 1' },
    { id: 2, src: '/HomePageAssets/image_family_room.png', alt: 'Image 2' },
    { id: 3, src: '/HomePageAssets/image_budget_room.png', alt: 'Image 3' },
    { id: 4, src: '/HomePageAssets/image_deluxe_room.png', alt: 'Image 4' },
];


export default function RoomsAndSuites() {
    return (
        <section className='bg-[#F8F5F0]'>
            <div className='p-20'>
                <p className='text-4xl font-gilda' style={{ color: '#AA8453' }}>Hotel Ashok</p>
                <p className='text-4xl font-gilda' style={{ color: '#000000' }}>Rooms & Suites</p>
            </div>

            <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-4">
                    {images.map((image) => (
                        <div key={image.id}>
                            <Image src={image.src} alt={image.alt} width={500} height={300} />
                        </div>
                    ))}
                </div>
            </div>
            <br />
        </section>
    );
}
