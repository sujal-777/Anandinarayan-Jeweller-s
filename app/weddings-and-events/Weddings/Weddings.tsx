import React from "react";
import Image from "next/image";

export default function Weddings() {
    const awards = [
        {
            img: "/assets/weddings/wedding6.png",
            title: "Exquisite Decor and Themes",
            para1: "Transform your wedding venue into a magical setting with our royal decor and themes. Whether you prefer a classic and elegant ambiance or a modern and vibrant setting, our team of decorators will create a breathtaking backdrop for your special day. From floral arrangements to lighting effects, every detail will be meticulously planned to create a stunning atmosphere.",
            para2: "Let us take care of the visual spectacle, allowing you to focus on the joyous moments of your celebration. With Hotel Ashok's dedication to creating a stunning atmosphere, your wedding day will be marked by a sense of wonder and enchantment that lingers in the memories of both you and your guests.",
        },
        {
            img: "/assets/weddings/wedding7.png",
            title: "Wedding Celebrations by the Pool",
            para1: " Take a dip in Hotel Ashok's rooftop pool and experience the health benefits of swimming for yourself. Whether you're looking to improve your fitness level, relieve stress, or simply have fun, our rooftop pool is the perfect place to dive into wellness. Experience a refreshing way to enhance your health and well-being at Hotel Ashok's rooftop pool. Swimming is not just a recreational activity; it's a full-body workout that offers numerous health benefits for both your body and mind.",
            para2: "Swimming engages all the major muscle groups in your body, making it an excellent way to tone muscles and improve overall strength. Whether you're doing laps or water aerobics, you'll be giving your body a complete workout.",
        },
        {
            img: "/assets/weddings/wedding8.png",
            title: "Tripadvisor®️ 2023",
            para1: "Hotel Nagpur Ashok has been recognized as a Tripadvisor®️ 2023 Travelers' Choice®️ Award Winner. This prestigious accolade, is the Eighth Award that Hotel has received from Tripadvisor, the world's most renowned travel site. With a guest satisfaction rating of over 95% for the past 13 years, this recognition holds significant importance as it solely reflects the experiences and feedback of guests who stayed or celebrated there event in the hotel.",
            para2: "Hotel Nagpur Ashok has been recognized as a Tripadvisor®️ 2023 Travelers' Choice®️ Award Winner. This prestigious accolade, is the Eighth Award that Hotel has received from Tripadvisor, the world's most renowned travel site. With a guest satisfaction rating of over 95% for the past 13 years, this recognition holds significant importance as it solely reflects the experiences and feedback of guests who stayed or celebrated there event in the hotel.",
        },
        {
            img: "/assets/weddings/wedding9.png",
            title: "Hotel Ashok - Where Quality Meets Affordability",
            para1: "The owners of Hotel Ashok are dedicated to offering high-quality service at reasonable prices. Such an extraordinary spot is nowhere else in central India at reasonable prices. \n They have a strong love for trees and nature. The Ashok family, along with their staff, take delight in planting trees along Nagpur's roads and regularly ensure that they are well-maintained, contributing to the city's greenery and overall well-being.",
            para2: "Hotel Ashok is not just a hotel; it's a destination where guests can create memories, celebrate special moments, and experience high quality hospitality at reasonable prices. Hotel Ashok delivers unforgettable experiences that guests will cherish for years to come.",
        },
    ];

    return (
        <div>
            <div
                className="space-y-8 px-8 py-10 font-barlow font-barlow leading-8 text-[##7D7D7D] md:px-48"
                id="#weddings"
            >
                <div>
                    <h2 className="text-4xl font-[500] text-[#AA8453]">
                        A place to make your wedding an unforgettable event
                    </h2>
                    <br />
                    <Image
                        src={"/assets/weddings/wedding1.png"}
                        width={1920}
                        height={1080}
                        alt="wedding hero image"
                        className="h-full w-full"
                    />
                    <br />
                    <div className="space-y-2">
                        <p>
                            Welcome to Hotel Ashok, nestled in the heart of
                            Nagpur, since our inception in February 2011, we
                            have been consistent with warm hospitality and
                            exceptional services, setting the standard for
                            excellence in the hospitality industry in Nagpur.
                        </p>
                        <p>
                            Experience the regal charm and grandeur of our
                            suites, designed to make every guest feel like
                            royalty. Whether you&apos;re seeking a family
                            retreat or a romantic escape, our range of rooms,
                            from family to honeymoon suites, caters to your
                            every whim. With a host of modern amenities and
                            facilities, we ensure a comfortable and memorable
                            stay at Hotel Ashok.
                        </p>
                        <br />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 ">
                    <div className="aspect-square w-full">
                        <Image
                            src={"/assets/weddings/wedding2.png"}
                            width={1000}
                            height={1000}
                            alt="wedding hero image"
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="space-y-2 lg:col-span-2">
                        <p>
                            When it comes to food, Hotel Ashok is known for its
                            taste and food quality. With a team of specialty
                            chefs crafting unique dishes that tantalize taste
                            buds, guests are treated to a flavorful journey like
                            no other. The hotel is committed to delivering fresh
                            food, avoiding the use of cold storage to ensure
                            quality and freshness.
                        </p>
                        <p>
                            The culinary journey at Hotel Ashok extends beyond
                            traditional boundaries, with a menu that showcases a
                            fusion of flavors and innovative combinations.
                            Guests can savor the richness of carefully selected
                            ingredients, expertly prepared to create a symphony
                            of tastes that cater to diverse palates.
                        </p>
                        <p>
                            The hotel&apos;s emphasis on freshness extends to
                            sourcing ingredients locally whenever possible,
                            supporting the community and contributing to
                            sustainability efforts. This commitment to quality
                            and community engagement sets Hotel Ashok apart,
                            making it a preferred destination for those seeking
                            not only exquisite dining but also a conscientious
                            and memorable culinary experience.
                        </p>
                    </div>
                </div>
                <div className="space-y-4">
                    <h2 className="text-4xl font-[500] text-[#AA8453]">
                        Family-Friendly Accommodations and Pampering Perks
                    </h2>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                        <Image
                            src={"/assets/weddings/wedding3.png"}
                            width={1000}
                            height={1000}
                            alt="wedding hero image"
                            className="h-full w-full"
                        />
                        <Image
                            src={"/assets/weddings/wedding4.png"}
                            width={1000}
                            height={1000}
                            alt="wedding hero image"
                            className="h-full w-full"
                        />
                        <Image
                            src={"/assets/weddings/wedding5.png"}
                            width={1000}
                            height={1000}
                            alt="wedding hero image"
                            className="h-full w-full"
                        />
                    </div>
                    <div className="space-y-2">
                        <p>
                            For families, Hotel Ashok offers specially designed
                            family rooms where up to four guests can be
                            accommodated comfortably, making it an ideal choice
                            for people to book with their celebrations.
                        </p>
                        <p>
                            For families seeking a perfect blend of comfort and
                            celebration, Hotel Ashok offers specially designed
                            family rooms. These spacious accommodations can
                            comfortably host up to four guests, ensuring a
                            delightful stay for all members. The thoughtfully
                            curated family rooms provide an ideal setting for
                            special occasions, creating cherished memories in
                            the heart of the hotel&apos;s warm and welcoming
                            ambiance.
                        </p>
                        <p>
                            As a special gesture to enhance the overall guest
                            experience, those staying at Hotel Ashok can revel
                            in a 25% discount on salon services. This exclusive
                            offering adds an extra layer of pampering to the
                            stay, ensuring that guests leave not only with
                            wonderful memories of their celebrations but also
                            feeling refreshed and revitalized.
                        </p>
                    </div>
                </div>
                <div className="space-y-8">
                    {awards.map((award, index) => {
                        return (
                            <div
                                className="grid grid-cols-1 gap-4 lg:grid-cols-3 "
                                key={index}
                            >
                                <div className=" aspect-square w-full">
                                    <Image
                                        src={award.img}
                                        width={1000}
                                        height={1000}
                                        alt="wedding hero image"
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="space-y-2 lg:col-span-2">
                                    <h2 className="text-4xl font-[500] text-[#AA8453]">
                                        {award.title}
                                    </h2>
                                    <p>{award.para1}</p>
                                    <p>{award.para2}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
