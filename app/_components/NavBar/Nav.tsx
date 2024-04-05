'use client'
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Image,
} from "@nextui-org/react";

// Define the type for menu items
type MenuItem = {
  text: string;
  href: string;
};

// Desktop view component
const DesktopView: React.FC<{ menuItems: MenuItem[] }> = ({ menuItems }) => (
  <NavbarContent className="hidden sm:flex gap-4" justify="center">
    {menuItems.map((item, index) => (
      <NavbarItem key={index}>
        <Link href={item.href}>{item.text}</Link>
      </NavbarItem>
    ))}
  </NavbarContent>
);

// Mobile view component
const MobileView: React.FC<{ menuItems: MenuItem[]; isOpen: boolean; toggleMenu: () => void }> = ({
  menuItems,
  isOpen,
  toggleMenu,
}) => (
  <NavbarMenu open={isOpen} onOpenChange={toggleMenu}>
    {menuItems.map((item, index) => (
      <NavbarMenuItem key={index}>
        <Link href={item.href}>{item.text}</Link>
      </NavbarMenuItem>
    ))}
  </NavbarMenu>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about-us" },
    { text: "Rooms & Suits", href: "/rooms_and_suits" },
    { text: "Wedding & Events", href: "/halls" },
    { text: "Dining", href: "#" },
    { text: "Updates", href: "#" },
    { text: "Nearby Attractions", href: "#" },
    { text: "Contact", href: "/contact_us" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
          onClick={toggleMenu}
        />
        <img src="/NavAssets/image.png" className="h-8" alt=" " />
      </NavbarContent>

      <DesktopView menuItems={menuItems} />
      <MobileView menuItems={menuItems} isOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <NavbarContent justify="end">
        <NavbarItem>
          <button
            type="button"
            className="text-white bg-[#AA8453] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Book Now
          </button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
