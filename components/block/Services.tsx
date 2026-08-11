import Image, { type StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";
import groom from "../../assets/grrom.png";
import marwari from "../../assets/marwari.png";
import panjab from "../../assets/panjab.png";
import rajasthan from "../../assets/rajasthan.png";

const services: {
  image: StaticImageData;
  title: string;
  description: string;
}[] = [
  {
    image: rajasthan,
    title: "Rajasthani Safa",
    description: "Traditional royal safa styling for grooms and baratis.",
  },
  {
    image: panjab,
    title: "Punjabi Turban",
    description: "Classic Punjabi-style turban tying with modern flair.",
  },
  {
    image: marwari,
    title: "Marwari Pagdi",
    description: "Authentic Marwari pagdi for weddings and ceremonies.",
  },
  {
    image: groom,
    title: "Groom Sehra",
    description: "Elegant sehra draping to complete the groom's look.",
  },
];

export const Services = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold text-gray-900 md:text-3xl">
          Our Services
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-sm text-gray-600">
          Choose from a variety of traditional styles tailored to your event.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-md shadow-gray-200/70 ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-900/15 hover:ring-amber-200"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-[#e9dfd2]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute right-3 top-3 flex h-9 w-9 -translate-y-2 items-center justify-center rounded-full bg-white/95 text-gray-900 opacity-0 shadow-md backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
