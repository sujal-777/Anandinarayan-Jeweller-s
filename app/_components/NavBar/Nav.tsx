"use client";
import React, { useState } from "react";
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
    Dropdown,
    DropdownItem,
    DropdownTrigger,
    DropdownMenu,
} from "@nextui-org/react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Define the type for menu items
// type MenuItem = {
//   text: string;
//   href: string;
// };

// Desktop view component
// const DesktopView: React.FC<{ menuItems: MenuItem[] }> = ({ menuItems }) => (
//   <NavbarContent className="hidden sm:flex gap-4" justify="center">
//     {menuItems.map((item, index) => (
//       <NavbarItem key={index}>
//         <Link href={item.href}>{item.text}</Link>
//       </NavbarItem>
//     ))}
//   </NavbarContent>
// );

// Mobile view component
// const MobileView: React.FC<{ menuItems: MenuItem[]; isOpen: boolean; toggleMenu: () => void }> = ({
//   menuItems,
//   isOpen,
//   toggleMenu,
// }) => (
//   <NavbarMenu open={isOpen} onOpenChange={toggleMenu}>
//     {menuItems.map((item, index) => (
//       <NavbarMenuItem key={index}>
//         <Link href={item.href}>{item.text}</Link>
//       </NavbarMenuItem>
//     ))}
//   </NavbarMenu>
// );

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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

    return (
        <div className=" font-barlow">
            <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent
                    className="hidden justify-between gap-4 text-[#AA8453] sm:flex"
                    justify="end"
                >
                    <img
                        src={"/NavAssets/image.png"}
                        alt="logo"
                        className="h-14 w-14"
                    />

                    <NavbarItem>
                        <Button
                            disableRipple
                            className="bg-transparent p-0 data-[hover=true]:bg-transparent"
                            radius="sm"
                        >
                            <Link className="text-[#AA8453]" href="/">
                                Home
                            </Link>
                        </Button>
                    </NavbarItem>
                    <NavbarItem>
                        <Button
                            disableRipple
                            className="bg-transparent p-0 data-[hover=true]:bg-transparent"
                            radius="sm"
                            variant="light"
                        >
                            <Link className="text-[#AA8453]" href="/">
                                About
                            </Link>
                        </Button>
                    </NavbarItem>
                    <Dropdown>
                        <DropdownTrigger>
                            <NavbarItem>
                                <Button
                                    disableRipple
                                    className="bg-transparent p-0 data-[hover=true]:bg-transparent"
                                    radius="sm"
                                    variant="light"
                                >
                                    <Link className="text-[#AA8453]" href="/">
                                        Rooms & Suits
                                    </Link>
                                    <KeyboardArrowDownIcon className="text-[#AA8453]" />
                                </Button>
                            </NavbarItem>
                        </DropdownTrigger>
                        <DropdownMenu>
                            <DropdownItem>
                                <Link href="/">Who We Are</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link href="/">Our Team</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link href="/">Our Vision</Link>
                            </DropdownItem>
                        </DropdownMenu>
                        {/* TODO: Add Dropdown menu Items  */}
                    </Dropdown>
                    <Dropdown>
                        <DropdownTrigger>
                            <NavbarItem>
                                <Button
                                    disableRipple
                                    className="bg-transparent p-0 data-[hover=true]:bg-transparent"
                                    radius="sm"
                                    variant="light"
                                >
                                    <Link className="text-[#AA8453]" href="/">
                                        Weddings and Events
                                    </Link>
                                    <KeyboardArrowDownIcon className="text-[#AA8453]" />
                                </Button>
                            </NavbarItem>
                        </DropdownTrigger>
                        <DropdownMenu>
                            <DropdownItem>
                                <Link href="/">Who We Are</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link href="/">Our Team</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link href="/">Our Vision</Link>
                            </DropdownItem>
                        </DropdownMenu>
                        {/* TODO: Add Dropdown menu Items  */}
                    </Dropdown>
                    <Dropdown>
                        <DropdownTrigger>
                            <NavbarItem>
                                <Button
                                    disableRipple
                                    className="bg-transparent p-0 data-[hover=true]:bg-transparent"
                                    radius="sm"
                                    variant="light"
                                >
                                    <Link className="text-[#AA8453]" href="/">
                                        Dinning
                                    </Link>
                                    <KeyboardArrowDownIcon className="text-[#AA8453]" />
                                </Button>
                            </NavbarItem>
                        </DropdownTrigger>
                        <DropdownMenu>
                            <DropdownItem>
                                <Link href="/">Who We Are</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link href="/">Our Team</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link href="/">Our Vision</Link>
                            </DropdownItem>
                        </DropdownMenu>
                        {/* TODO: Add Dropdown menu Items  */}
                    </Dropdown>
                    <Dropdown>
                        <DropdownTrigger>
                            <NavbarItem>
                                <Button
                                    disableRipple
                                    className="bg-transparent p-0 data-[hover=true]:bg-transparent"
                                    radius="sm"
                                    variant="light"
                                >
                                    <Link className="text-[#AA8453]" href="/">
                                        Updates
                                    </Link>
                                    <KeyboardArrowDownIcon className="text-[#AA8453]" />
                                </Button>
                            </NavbarItem>
                        </DropdownTrigger>
                        <DropdownMenu>
                            <DropdownItem>
                                <Link href="/">Who We Are</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link href="/">Our Team</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link href="/">Our Vision</Link>
                            </DropdownItem>
                        </DropdownMenu>
                        {/* TODO: Add Dropdown menu Items  */}
                    </Dropdown>
                    <Dropdown>
                        <DropdownTrigger>
                            <NavbarItem>
                                <Button
                                    disableRipple
                                    className="bg-transparent p-0 data-[hover=true]:bg-transparent"
                                    radius="sm"
                                    variant="light"
                                >
                                    <Link className="text-[#AA8453]" href="/">
                                        Nearby Attractions
                                    </Link>
                                    <KeyboardArrowDownIcon className="text-[#AA8453]" />
                                </Button>
                            </NavbarItem>
                        </DropdownTrigger>
                        <DropdownMenu>
                            <DropdownItem>
                                <Link href="/">Who We Are</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link href="/">Our Team</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link href="/">Our Vision</Link>
                            </DropdownItem>
                        </DropdownMenu>
                        {/* TODO: Add Dropdown menu Items  */}
                    </Dropdown>
                    <Dropdown>
                        <DropdownTrigger>
                            <NavbarItem>
                                <Button
                                    disableRipple
                                    className="bg-transparent p-0 data-[hover=true]:bg-transparent"
                                    radius="sm"
                                    variant="light"
                                >
                                    <Link className="text-[#AA8453]" href="/">
                                        Contact
                                    </Link>
                                    <KeyboardArrowDownIcon className="text-[#AA8453]" />
                                </Button>
                            </NavbarItem>
                        </DropdownTrigger>
                        <DropdownMenu>
                            <DropdownItem>
                                <Link href="/">Who We Are</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link href="/">Our Team</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link href="/">Our Vision</Link>
                            </DropdownItem>
                        </DropdownMenu>
                        {/* TODO: Add Dropdown menu Items  */}
                    </Dropdown>
                    <NavbarItem>
                        <Button
                            disableRipple
                            className="rounded-none bg-[#AA8453] data-[hover=true]:bg-transparent md:p-4"
                            radius="sm"
                            variant="light"
                        >
                            <Link className="text-white" href="/">
                                Book Now
                            </Link>
                        </Button>
                    </NavbarItem>
                </NavbarContent>

                <NavbarContent className="sm:hidden" justify="start">
                    <img
                        src={"/NavAssets/image.png"}
                        alt="logo"
                        className="h-14 w-14"
                    />
                </NavbarContent>
                <NavbarContent className="sm:hidden" justify="end">
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    />
                </NavbarContent>

                {/* for mobile view */}

                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className="w-full"
                                color={
                                    index === 2
                                        ? "warning"
                                        : index === menuItems.length - 1
                                          ? "danger"
                                          : "foreground"
                                }
                                href={item.href}
                            >
                                {item.text}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </div>
    );
}
