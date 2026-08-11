import { MapPin, ArrowUpRight } from "lucide-react";

const cities = [
  "Mumbai",
  "Delhi",
  "Jaipur",
  "Bhopal",
  "Noida",
  "Bangalore",
  "Pune",
  "Ahmedabad",
];

export const CitiesWeServe = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold text-gray-900 md:text-3xl">
          Cities We Serve
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-sm text-gray-600">
          Verified safa artists available across these cities, with more being
          added every month.
        </p>

        <div className="mt-10 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {cities.map((city) => (
            <div
              key={city}
              className="group flex w-full cursor-pointer items-center justify-between rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-sm shadow-gray-200/60 transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-900/10"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-amber-600 transition-colors group-hover:bg-amber-600 group-hover:text-white">
                  <MapPin size={18} />
                </div>
                <span className="font-semibold text-gray-800 transition-colors group-hover:text-amber-600">
                  {city}
                </span>
              </div>
              <ArrowUpRight
                size={16}
                className="text-gray-300 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-amber-600 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
