import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { Metadata } from "next";

const contactDetails = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 8127884673",
    href: "tel:+919990970056",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+91 9990970056",
    href: "https://wa.me/919990970056",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "ansariali.developer@gmail.com",
    href: "mailto:ansariali.developer@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Mumbai, India",
    href: null,
  },
];

const faqs = [
  {
    question: "How do I book a safa artist?",
    answer:
      "Simply reach out to us via WhatsApp or call, share your event date and city, and we'll match you with a verified artist near you.",
  },
  {
    question: "Do you cover outstation events?",
    answer:
      "Yes, we serve events across multiple cities in India. Share your location with us and we'll confirm availability.",
  },
  {
    question: "How much advance notice do you need?",
    answer:
      "We recommend booking at least 3-5 days in advance to ensure the best artist availability for your event.",
  },
  {
    question: "What styles do you offer?",
    answer:
      "We offer Rajasthani Safa, Punjabi Turban, Marwari Pagdi, and Groom Sehra styling, tailored to your event.",
  },
];

const isExternalLink = (href: string) =>
  href.startsWith("http") || href.startsWith("mailto:");

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with SafaPoint for safa & pagdi artist bookings. Call, WhatsApp, or email us for your wedding or event.",
};

export default function Contact() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-stone-800 md:text-4xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-sm text-gray-600 md:text-base">
            Have questions about booking a safa artist? Here&apos;s how you can
            reach us.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map((detail) => {
            const Icon = detail.icon;
            const content = (
              <div className="group h-full rounded-2xl bg-white p-6 text-center shadow-md shadow-gray-200/70 ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-900/10 hover:ring-amber-200">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-600 transition-all duration-300 group-hover:bg-amber-600 group-hover:text-white">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">
                  {detail.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                  {detail.value}
                </p>
              </div>
            );

            return detail.href ? (
              <a
                key={detail.title}
                href={detail.href}
                target={isExternalLink(detail.href) ? "_blank" : undefined}
                rel={
                  isExternalLink(detail.href)
                    ? "noopener noreferrer"
                    : undefined
                }
                className="cursor-pointer"
              >
                {content}
              </a>
            ) : (
              <div key={detail.title}>{content}</div>
            );
          })}
        </div>

        <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-3 rounded-2xl bg-amber-50 px-6 py-4 text-center ring-1 ring-amber-100">
          <Clock size={20} className="shrink-0 text-amber-600" />
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-gray-900">
              Available All Days:
            </span>{" "}
            9:00 AM - 9:00 PM
          </p>
        </div>

        <div className="mt-20">
          <h2 className="text-center text-2xl font-bold text-gray-900 md:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-sm text-gray-600">
            Quick answers to the questions we get asked the most.
          </p>

          <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl bg-white p-6 shadow-md shadow-gray-200/70 ring-1 ring-gray-100"
              >
                <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
