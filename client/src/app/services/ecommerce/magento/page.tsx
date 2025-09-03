import Grandchild from "@/components/layout/services/GrandChild";
import {
  heroData,
  introductionData,
  featuresData,
  servicesData,
} from "./data";

export const metadata = {
    title: "Magento Development Services | Cyberpeak IT Solutions",
    description:
      "Custom Magento development solutions to scale your online store with performance, flexibility, and growth in mind.",
};

export default function MagentoDevelopmentServices() {
  return (
    <Grandchild
      heroData={heroData}
      introductionData={introductionData}
      featuresData={featuresData}
      servicesData={servicesData}
    />
  );
}
