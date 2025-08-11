import HeroLanding from "@/components/sections/hero-landing";
import Features from "@/components/sections/features";
import InfoLanding from "@/components/sections/info-landing";
import PreviewLanding from "@/components/sections/preview-landing";
import Testimonials from "@/components/sections/testimonials";
import { MarketIntelligence } from "@/components/gold/MarketIntelligence";
import { infos } from "@/config/landing";

export default function IndexPage() {
  return (
    <>
      <HeroLanding />
      <PreviewLanding />
      <MarketIntelligence />
      <Features />
      {infos.map((info, index) => (
        <InfoLanding 
          key={index}
          data={info} 
          reverse={index % 2 !== 0} 
        />
      ))}
      <Testimonials />
    </>
  );
}
