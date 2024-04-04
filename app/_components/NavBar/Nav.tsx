import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { Image } from "@nextui-org/react";

export default function App() {
  return (
    <Navbar>
      <Image src="/NavAssets/image.png" className="h-8" alt="Flowbite Logo" />
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/">Home</Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/about-us">About</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/rooms_and_suits">Rooms & Suits</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/halls">Wedding & Events</Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#">Dining</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">Updates</Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#">Nearby Attractions</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact_us">Contact</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <button
            type="button"
            className="text-white bg-[#AA8453] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Book Now
          </button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
