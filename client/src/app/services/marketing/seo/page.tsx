import Grandchild from "@/components/layout/services/GrandChild";
  import {
    heroData,
    introductionData,
    featuresData,
    servicesData,
  } from "./data";
 
  export const metadata = {
    title: "SEO Services | Cyberpeak IT Solutions",
    description:
      "Drive targeted traffic, improve search rankings, and grow your business with CyberPeak’s data-driven SEO strategies. From technical audits to content optimization, we help you dominate search results.",
  };
  
  export default function SEO() {
    return (
      <Grandchild
        heroData={heroData}
        introductionData={introductionData}
        featuresData={featuresData}
        servicesData={servicesData}
      />
    );
  }
  