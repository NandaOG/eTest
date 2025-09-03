
import Grandchild from "@/components/layout/services/GrandChild";
import {
  heroData,
  introductionData,
  featuresData,
  servicesData,
} from "./data";

export const metadata = {
  title: "Qualitative Market Research Services | Cyberpeak IT Solutions",
  description:
    "Understand customer behavior, motivation, and perception through interviews, focus groups, and observational studies. Our Qualitative Market Research reveals deep insights to guide business strategy.",
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