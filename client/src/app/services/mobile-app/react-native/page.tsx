import Grandchild from "@/components/layout/services/GrandChild";
  import {
    heroData,
    introductionData,
    featuresData,
    servicesData,
  } from "./data";

  export const metadata = {
    title: "React Native App Development | Cyberpeak IT Solutions",
    description:
    "Build high-performance, truly native mobile apps for iOS and Android with a shared codebase. Our React Native developers craft scalable, cost-effective solutions with seamless UX and native power.",
  };
  
  export default function ReactNative() {
    return (
      <Grandchild
        heroData={heroData}
        introductionData={introductionData}
        featuresData={featuresData}
        servicesData={servicesData}
      />
    );
  }
  