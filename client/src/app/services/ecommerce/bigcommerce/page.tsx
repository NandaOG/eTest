import Grandchild from "@/components/layout/services/GrandChild";
  import {
    heroData,
    introductionData,
    featuresData,
    servicesData,
  } from "./data";
  
  export const metadata = {
    title: "BigCommerce Development Services",
    description:
      "Custom BigCommerce development to build powerful, scalable, and SEO-optimized online stores for fast-growing brands and enterprises.",
  };
  
  export default function BigCommerceDevelopmentServices() {
    return (
      <Grandchild
        heroData={heroData}
        introductionData={introductionData}
        featuresData={featuresData}
        servicesData={servicesData}
      />
    );
  }
  