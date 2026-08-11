import { Hero } from "@/components/block/Hero";
import { TrustBar } from "@/components/block/TrustBar";
import { Services } from "@/components/block/Services";
import { HowItWorks } from "@/components/block/HowItWorks";
import { WhyChooseUs } from "@/components/block/WhyChooseUs";
import { CitiesWeServe } from "@/components/block/CitiesWeServe";
import { FinalCTA } from "@/components/block/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <CitiesWeServe />
      <FinalCTA />
    </>
  );
}
