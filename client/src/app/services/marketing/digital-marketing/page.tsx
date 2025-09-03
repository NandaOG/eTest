import Grandchild from "@/components/layout/services/GrandChild";
  import {
    heroData,
    introductionData,
    featuresData,
    servicesData,
  } from "./data";
 
  export const metadata = {
    title: "Digital Marketing Services | Cyberpeak IT Solutions",
    description:
      "Fuel your brand’s growth with data-driven digital marketing strategies — from SEO and paid ads to social media, content, and analytics. Let’s turn your online presence into measurable ROI.",
  };
  
  export default function DigitalMarketing() {
    return (
      <Grandchild
        heroData={heroData}
        introductionData={introductionData}
        featuresData={featuresData}
        servicesData={servicesData}
      />
    );
  }
  