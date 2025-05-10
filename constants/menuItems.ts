export const menuItems = [
    {
        text: "Home",
        href: "/",
    },
    {
        text: "About",
        href: "/about-us",
    },
    {
        text: "Collections",
        href: "/collections",
        links: [
            {
                name: "Family Room",
                href: "/rooms_and_suits/family_room",
            },
            {
                name: "Deluxe Room",
                href: "/rooms_and_suits/deluxe_room",
            },
            {
                name: "King Suite",
                href: "/rooms_and_suits/king_suit",
            },
            {
                name: "Budget Room",
                href: "/rooms_and_suits/budget_room",
            },
        ],
    },
    {
        text: "Gallery",
        href: "/gallery",
        
    },
    {
        text: "Blogs",
        href: "/blog",
    },
    {
        text: "More",
        href: "",
        links: [
            // {
            //     name: "Testimonials",
            //     href: "/testimonial",
            // },
            {
                name: "FAQs",
                href: "/faq",
            },
            {
                name: "Feedback",
                href: "/feedback",
            },
            {
                name: "Careers",
                href: "/careers",
            },
        ],
    },
    { text: "Contact", href: "/contact_us" },
];
