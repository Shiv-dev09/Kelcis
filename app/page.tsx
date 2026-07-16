import { Hero } from "@/components/marketing/Hero";
import { WhoWeAre } from "@/components/marketing/WhoWeAre";
import { Philosophy } from "@/components/marketing/Philosophy";
import { ServicesMosaic } from "@/components/marketing/ServicesMosaic";
import { WhyKelcis } from "@/components/marketing/WhyKelcis";
import { HowWeWork } from "@/components/marketing/HowWeWork";
import { Capabilities } from "@/components/marketing/Capabilities";
import { Industries } from "@/components/marketing/Industries";
import { FoundingCohort } from "@/components/marketing/FoundingCohort";
import { CtaBand } from "@/components/marketing/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Philosophy />
      <ServicesMosaic />
      <WhyKelcis />
      <HowWeWork />
      <Capabilities />
      <Industries />
      <FoundingCohort />
      <CtaBand />
    </>
  );
}
