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
    metadataBase: new URL(`https://anandinarayan-jeweller-s.vercel.app/`),
    title: "AnadiNarayan Jeweller's",
    description:
        "Welcome to Anadinarayan Jewellers, a distinguished name in the heart of Bhandara known for its exceptional quality, timeless designs, and deep-rooted values. Since our inception, we have remained committed to creating jewellery that celebrates tradition, elegance, and trust.",
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
