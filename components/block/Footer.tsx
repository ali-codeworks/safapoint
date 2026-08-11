import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mt-auto border-t bg-gray-900 text-gray-300">
      <div className="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <Image
              src="/favicon.ico"
              alt="SafaPoint logo"
              width={28}
              height={28}
              className="h-7 w-7"
            />
            <span className="text-lg font-bold text-white">SafaPoint</span>
          </div>
          <p className="text-sm text-gray-400">
            Book trusted, verified safa & pagdi tying artists for your wedding
            or event — quick, transparent, hassle-free.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/services"
                className="cursor-pointer hover:text-amber-500"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="cursor-pointer hover:text-amber-500"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="cursor-pointer hover:text-amber-500"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/booking"
                className="cursor-pointer hover:text-amber-500"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">
            Popular Styles
          </h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Rajasthani Safa</li>
            <li>Punjabi Turban</li>
            <li>Marwari Pagdi</li>
            <li>Groom Sehra</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">
            Get in Touch
          </h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-amber-500" /> +91 9990970056
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-amber-500" />{" "}
              ansariali.developer@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-amber-500" /> Mumbai, India
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} SafaPoint. All rights reserved.
      </div>
    </footer>
  );
};
