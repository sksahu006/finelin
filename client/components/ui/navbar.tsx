"use client";

import Link from "next/link";
import { Menu, X, Film, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const router = useRouter(); // Initialize useRouter

  const handleMouseEnter = (itemName: string) => {
    if (timeoutId) clearTimeout(timeoutId);
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
    setTimeoutId(id);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "HOME",
      href: "/",
      dropdownItems: null,
    },
    {
      name: "SERVICES",
      href: "/services",
      dropdownItems: [
        { name: "Graphic", href: "/services#graphic" },
        { name: "Video", href: "/services#video" },
        { name: "3D", href: "/services#3d" },
        { name: "VFX", href: "/services#vfx" },
      ],
    },
    {
      name: "PORTFOLIO",
      href: "/portfolio",
      dropdownItems: [
        { name: "Video Editing", href: "/portfolio#video-editing" },
        { name: "Graphic Design", href: "/portfolio#graphic-design" },
        { name: "VFX", href: "/portfolio#vfx" },
      ],
    },
    {
      name: "ABOUT US",
      href: "/about-us",
      dropdownItems: [
        { name: "Our Story", href: "/about-us#our-story" },
        { name: "Vision & Values", href: "/about-us#vision" },
        { name: "Team", href: "/about-us#team" },
      ],
    },
    {
      name: "CONTACT",
      href: "/contact",
      dropdownItems: null,
    },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/10 h-16" : "bg-black/10 h-28"
      }`}
    >
      <div
        className={`md:max-w-5xl lg:max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 h-full transition-all duration-500 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <div
          className={`flex ${
            isScrolled ? "flex-row items-center" : "flex-col gap-2"
          } justify-between h-full`}
        >
          <Link href="/" className="flex items-center">
            <Film className="h-8 w-8 text-yellow-400" />
            <span className="ml-2 text-lg md:text-xl lg:text-2xl font-bold text-yellow-400">
              <Image
                src="/logo.png"
                alt="Finelin Logo"
                width={100}
                height={100}
              />
            </span>
          </Link>

          <div
            className={`hidden ${
              !isScrolled && "md:block"
            } h-[0.5px] w-full bg-gray-700`}
          ></div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className={`flex justify-center items-center transition-all duration-500 space-x-4 ${!isScrolled ? "gap-6": "gap-4"}`}>
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center hover:text-yellow-400 text-white text-sm md:text-md font-normal transition-all duration-500  tracking-wider`}
                  >
                    {item.name}
                    {item.dropdownItems && (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                    {item.name !== "CONTACT" && (
                      <span className="ml-4 text-gray-400">|</span>
                    )}
                  </Link>

                  {/* Desktop Dropdown */}
                  {item.dropdownItems && (
                    <div
                      className={`absolute left-0 mt-2 w-48 bg-black/95 rounded-md shadow-lg transition-all duration-200 ${
                        activeDropdown === item.name
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="py-2">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href} // Use the dropdown item's href
                            className="block px-4 py-2 text-sm text-white hover:text-yellow-400 hover:bg-gray-900"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-400 transition-colors duration-200"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                <button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === item?.name ? null : item?.name
                    )
                  }
                  className="w-full text-left px-3 py-2 text-white hover:text-yellow-400 transition-colors duration-200 flex items-center justify-between"
                >
                  {item?.name}
                  {item?.dropdownItems && (
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === item?.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Mobile Dropdown */}
                {item?.dropdownItems && activeDropdown === item?.name && (
                  <div className="bg-gray-900/50 pl-6">
                    {item?.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem?.name}
                        href={dropdownItem?.href}
                        className="block px-3 py-2 text-sm text-white hover:text-yellow-400"
                        onClick={() => setIsOpen(false)}
                      >
                        {dropdownItem?.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
