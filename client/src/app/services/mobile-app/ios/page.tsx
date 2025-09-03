import Grandchild from "@/components/layout/services/GrandChild";
  import {
    heroData,
    introductionData,
    featuresData,
    servicesData,
  } from "./data";

  export const metadata = {
    title: "iOS App Development | Cyberpeak IT Solutions",
    description:
      "Transform your vision into polished, high-performance iOS apps that drive engagement and business success. At CyberPeak, we harness Apple’s ecosystem, Swift expertise, and elegant UI design to create standout mobile experiences for iPhone, iPad, and beyond.",
  };
  
  export default function IOS() {
    return (
      <Grandchild
        heroData={heroData}
        introductionData={introductionData}
        featuresData={featuresData}
        servicesData={servicesData}
      />
    );
  }
  