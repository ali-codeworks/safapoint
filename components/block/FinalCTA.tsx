import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 py-14 text-center shadow-xl shadow-gray-900/20 sm:px-12 md:py-20">
          {/* Decorative glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-amber-600/20 blur-3xl" />

          <div className="relative">
            <h2 className="text-2xl font-bold text-white md:text-4xl">
              Ready to Book Your Safa Artist?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-gray-400 md:text-base">
              Get in touch now and let us handle the rest for your event.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/booking"
                className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-amber-600 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-amber-500"
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
                className="flex cursor-pointer items-center justify-center gap-2 rounded-full border border-gray-600 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-green-500 hover:text-green-500"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
