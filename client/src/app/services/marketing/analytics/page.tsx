import Grandchild from "@/components/layout/services/GrandChild";
  import {
    heroData,
    introductionData,
    featuresData,
    servicesData,
  } from "./data";

  export const metadata = {
    title: "Analytics & Insights Services | Cyberpeak IT Solutions",
    description:
    "Transform raw data into actionable insights with CyberPeak’s analytics solutions. Make smarter decisions, optimize performance, and drive growth through data-led strategies.",
  };
  
  export default function AnalyticsAndInsights() {
    return (
      <Grandchild
        heroData={heroData}
        introductionData={introductionData}
        featuresData={featuresData}
        servicesData={servicesData}
      />
    );
  }
  