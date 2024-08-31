import type { Metadata } from "next";
import {
    Inter,
    Gilda_Display,
    Barlow,
    Barlow_Condensed,
} from "next/font/google";
import "./globals.css";
import Provider from "./providers";
import Footer from "./_components/Footer/Footer";
import Nav from "./_components/NavBar/Nav";
import { AOSInit } from "./_components/AOS";
import Head from "next/head";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const gilda = Gilda_Display({
    subsets: ["latin"],
    variable: "--font-gilda-display",
    display: "swap",
    weight: "400",
});

const barlow = Barlow({
    subsets: ["latin"],
    variable: "--font-barlow",
    display: "swap",
    weight: "400",
});

export const metadata: Metadata = {
    metadataBase: new URL(`https://thehotelashok.vercel.app/`),
    title: "The Hotel Ashok",
    description:
        "Welcome to Hotel Ashok, where warm hospitality and exceptional service await each and every guest. Since our establishment in February 2011, we have continuously evolved and improved to ensure an unforgettable experience for our valued guests.",
    alternates: {
        canonical: "./"
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <AOSInit />
            <body
                className={`${inter.variable} ${gilda.variable} ${barlow.variable} text-normal`}
            >
                <Provider>
                    <Nav />
                    {children}
                    <Footer />
                </Provider>
            </body>
        </html>
    );
}
