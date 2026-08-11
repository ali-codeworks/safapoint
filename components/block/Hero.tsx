import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Sparkles, ArrowRight } from "lucide-react";
import hero_img from "../../assets/hero.png";

export const Hero = () => {
  return (
    <section className="relative py-8">
      <div className="container mx-auto grid items-center gap-10 px-4 md:grid-cols-2">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-100/60 px-3 py-1 text-xs font-semibold text-amber-700">
            <Sparkles size={14} />
            Trusted by 500+ Events Across India
          </span>

          <h1 className="mt-5 max-w-xl text-4xl font-extrabold leading-[1.1] tracking-tight text-stone-800 md:text-6xl">
            Book Verified{" "}
            <span className="bg-linear-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Pagdi &amp; Safa
            </span>{" "}
            Tying Artists for Your Event
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
            Weddings, festivals, or functions — get skilled safa artists
            delivered to your doorstep with transparent pricing and on-time
            service.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/booking"
              className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-gray-900 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gray-900/10 transition-all hover:bg-amber-600 hover:shadow-amber-600/20"
            >
              Book Now
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <a
              href="https://wa.me/919990970056"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-8 py-3.5 text-sm font-semibold text-gray-800 transition-all hover:border-green-500 hover:text-green-600"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl shadow-amber-900/10 ring-1 ring-black/5">
          <Image
            src={hero_img}
            alt="Safa artist tying a traditional turban"
            className="h-64 w-full object-cover sm:h-80 md:h-105"
            priority
          />
        </div>
      </div>
    </section>
  );
};
