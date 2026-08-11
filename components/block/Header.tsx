"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Scissors, Images, Phone, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/services", label: "Services", icon: Scissors },
  { href: "/gallery", label: "Gallery", icon: Images },
  { href: "/contact", label: "Contact", icon: Phone },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/favicon.ico"
            alt="SafaPoint logo"
            width={34}
            height={34}
            className="h-8.5 w-8.5"
          />
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Safa<span className="text-amber-600">Point</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-8 md:flex">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex cursor-pointer items-center gap-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-amber-600"
                    : "text-gray-600 hover:text-amber-600"
                }`}
              >
                <Icon size={16} />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/booking"
            className="cursor-pointer rounded-full bg-gray-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-amber-600 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Book Now
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <nav
        className={`overflow-hidden border-t bg-white transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex cursor-pointer items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium ${
                  isActive
                    ? "bg-amber-50 text-amber-600"
                    : "text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                }`}
              >
                <Icon size={18} />
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};
