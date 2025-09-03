
import Grandchild from "@/components/layout/services/GrandChild";
import {
  heroData,
  introductionData,
  featuresData,
  servicesData,
} from "./data";

export const metadata = {
  title: "Quantitative Market Research Services | Cyberpeak IT Solutions",
  description:
    "Drive decisions with numbers that matter. Our Quantitative Market Research services deliver statistical clarity and data-backed insights for strategic advantage.",
};

export default function QuantitativeMarketResearchServices() {
  return (
    <Grandchild
      heroData={heroData}
      introductionData={introductionData}
      featuresData={featuresData}
      servicesData={servicesData}
    />
  );
}