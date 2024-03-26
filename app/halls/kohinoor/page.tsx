import React from "react";

import HallsPage from "../HallsPage";

const src = "/halls/kohinoor.png";
const hall = "Kohinoor";
const desc =
  "Kohinoor is a prestigious event hall at Hotel Ashok, designed to host a variety of occasions with grace and style. For a truly unforgettable event, choose Kohinoor at Hotel Ashok. Our team is committed to making your event a success, and we look forward to welcoming you and your guests.";

const featuresArray = [
  "Flexible Space: Kohinoor can be adapted to suit your event, whether it's a grand wedding reception, a corporate seminar, or a birthday celebration. The hall's layout and seating can be customized to accommodate your needs.",
  "State-of-the-Art Facilities: Equipped with modern audiovisual equipment, Kohinoor ensures that your presentations, speeches, and performances are delivered seamlessly.",
  "Catering Services: Our expert culinary team offers a diverse range of menu options, from traditional Indian cuisine to international flavors, to delight your guests' taste buds.",
  "Professional Staff: Our experienced event planning team is dedicated to ensuring that every detail of your event is executed flawlessly, allowing you to relax and enjoy your special day.",
];

const occasionsArray = [
  "Wedding Receptions",
  "Corporate Events",
  "Birthday Celebrations",
  "Anniversary Parties",
  "Cultural Functions",
  "Seminars and Conferences",
];

const page = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row items-stretch justify-center min-h-screen px-4">
        <div className="hidden flex-grow lg:block md:w-1/12 lg:w-1/6 bg-[url('../public/short_border.svg')] bg-repeat bg-contain bg-center"></div>
        <HallsPage
          src={src}
          hall={hall}
          desc1={desc}
          features={featuresArray}
          occasions={occasionsArray}
        />
        <div className="hidden flex-grow lg:block md:w-1/12 lg:w-1/6 bg-[url('../public/short_border.svg')] bg-repeat bg-contain bg-center"></div>
      </div>
    </section>
  );
};

export default page;
