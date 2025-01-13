import { Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Logo and Social Links */}
          <div className="w-full md:w-[35%]">
            <Link href="/" className="text-yellow-400 text-2xl font-bold">
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="mb-4"
              />
            </Link>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-white hover:text-yellow-400">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.instagram.com/_finelin_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="text-white hover:text-yellow-400"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-white hover:text-yellow-400">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-white hover:text-yellow-400">
                <Youtube className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-white hover:text-yellow-400">
                <Image
                  src="/twitter.png"
                  alt="Twitter"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>

          {/* About Section */}
          <div className="w-full md:w-[45%]">
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">
              ABOUT
            </h3>
            <p className="text-white text-sm leading-6 font-[200]">
              Finelin brings a fresh and dynamic approach to the art of Visual
              Effects (VFX) and Animation for film, episodic and multiplatform
              content. As part of the DNEG Group, Finelin leverages an
              incredible legacy of creative and technical innovation to cater to
              projects that benefit from our agile, boutique approach. We design
              solutions that are tailored to the requirements of each show and
              always deliver to the highest levels of quality.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-[20%]">
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">
              QUICK LINKS
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white hover:text-yellow-400">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white hover:text-yellow-400"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-white hover:text-yellow-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-white hover:text-yellow-400"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white hover:text-yellow-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white">© 2024 FineLin. All Rights Reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-white hover:text-yellow-400 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white hover:text-yellow-400 text-sm"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
