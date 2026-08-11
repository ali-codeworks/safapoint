"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 500, suffix: "+", label: "Events Covered" },
  { target: 50, suffix: "+", label: "Verified Artists" },
  { target: 10, suffix: "+", label: "Cities Served" },
  { target: 4.8, suffix: "★", label: "Average Rating", decimal: true },
];

const Counter = ({
  target,
  suffix,
  decimal,
  start,
}: {
  target: number;
  suffix: string;
  decimal?: boolean;
  start: boolean;
}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    const duration = 1500;
    const startTime = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;

      setValue(decimal ? Math.round(current * 10) / 10 : Math.round(current));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [start, target, decimal]);

  return (
    <p className="text-2xl font-bold text-gray-900 md:text-3xl">
      {decimal ? value.toFixed(1) : value}
      {suffix}
    </p>
  );
};

export const TrustBar = () => {
  const [start, setStart] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="border-y bg-white py-8">
      <div className="container mx-auto grid grid-cols-2 gap-6 px-4 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <Counter
              target={stat.target}
              suffix={stat.suffix}
              decimal={stat.decimal}
              start={start}
            />
            <p className="text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
