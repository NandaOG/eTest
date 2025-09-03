import Grandchild from "@/components/layout/services/GrandChild";
import {
  heroData,
  introductionData,
  featuresData,
  servicesData,
} from "./data";

export const metadata = {
  title: "Primary Market Research Services | Cyberpeak IT Solutions",
  description:
    "Our Primary Market Research services help you gather actionable insights directly from your target audience, empowering data-driven business strategies.",
};

export default function PrimaryMarketResearchServices() {
  return (
    <Grandchild
      heroData={heroData}
      introductionData={introductionData}
      featuresData={featuresData}
      servicesData={servicesData}
    />
  );
}
