
import Grandchild from "@/components/layout/services/GrandChild";
import {
  heroData,
  introductionData,
  featuresData,
  servicesData,
} from "./data";
export const metadata = {
  title: "Secondary Market Research Services | Cyberpeak IT Solutions",
  description:
    "Leverage existing data sources for smarter business decisions. Our Secondary Market Research services provide reliable insights to drive growth and innovation.",
};

export default function SecondaryMarketResearchServices() {
  return (
    <Grandchild
      heroData={heroData}
      introductionData={introductionData}
      featuresData={featuresData}
      servicesData={servicesData}
    />
  );
}