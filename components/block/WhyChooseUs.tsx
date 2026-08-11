import Image, { type StaticImageData } from "next/image";
import mul_style from "../../assets/style.png";
import guarantee from "../../assets/gurantee.png";
import transparent from "../../assets/tranparentprice.png";
import verified from "../../assets/verified.png";

const points: {
  image: StaticImageData;
  title: string;
  description: string;
}[] = [
  {
    image: verified,
    title: "Verified Artists",
    description: "Every artist is background-checked and experienced.",
  },
  {
    image: transparent,
    title: "Transparent Pricing",
    description: "No hidden charges — know the cost before you book.",
  },
  {
    image: guarantee,
    title: "On-Time Guarantee",
    description: "Artists arrive well before your event starts.",
  },
  {
    image: mul_style,
    title: "Multiple Styles",
    description: "Rajasthani, Punjabi, Marwari, and more — your choice.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold text-gray-900 md:text-3xl">
          Why Choose SafaPoint
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-sm text-gray-600">
          What makes booking with us simple, safe, and reliable.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point) => (
            <div
              key={point.title}
              className="group text-center transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full bg-amber-50 shadow-md shadow-gray-200/70 ring-4 ring-white transition-all duration-300 group-hover:shadow-xl group-hover:shadow-amber-900/10">
                <Image
                  src={point.image}
                  alt={point.title}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">
                {point.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
