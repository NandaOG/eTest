import Grandchild from "@/components/layout/services/GrandChild";
  import {
    heroData,
    introductionData,
    featuresData,
    servicesData,
  } from "./data";

  export const metadata = {
    title: "Flutter App Development | Cyberpeak IT Solutions",
    description:
      "Build beautiful, high-performance mobile apps with a single codebase. Our Flutter experts at CyberPeak create scalable cross-platform applications that deliver native-like experiences on both Android and iOS.",
  };
  
  export default function Flutter() {
    return (
      <Grandchild
        heroData={heroData}
        introductionData={introductionData}
        featuresData={featuresData}
        servicesData={servicesData}
      />
    );
  }
  