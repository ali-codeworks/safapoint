import Image, { type StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";
import tell from "../../assets/tell-us.png";
import we_match from "../../assets/we-match.png";
import done from "../../assets/done.png";

const steps: {
  image: StaticImageData;
  title: string;
  description: string;
}[] = [
  {
    image: tell,
    title: "Tell Us Your Event",
    description: "Share your event date, city, and how many safas you need.",
  },
  {
    image: we_match,
    title: "We Match an Artist",
    description: "We connect you with a verified safa artist near you.",
  },
  {
    image: done,
    title: "Get It Done",
    description: "Artist arrives on time and ties your safa perfectly.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold text-gray-900 md:text-3xl">
          How It Works
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-sm text-gray-600">
          Three simple steps between you and a perfectly tied safa.
        </p>

        <div className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
          <div className="pointer-events-none absolute left-0 right-0 top-14 hidden h-px bg-linear-to-r from-transparent via-amber-200 to-transparent md:block" />

          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group relative flex flex-col items-center text-center"
            >
              <div className="relative h-28 w-28 overflow-hidden rounded-full bg-white shadow-md shadow-gray-200/70 ring-4 ring-white transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-amber-900/10">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
                <span className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-amber-600 text-sm font-bold text-white shadow-sm ring-2 ring-white">
                  {index + 1}
                </span>
              </div>

              <h3 className="mt-5 font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-2 max-w-55 text-sm leading-relaxed text-gray-600">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <ArrowRight
                  size={18}
                  className="mt-4 text-amber-300 md:absolute md:-right-3 md:top-10 md:mt-0"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
