import Grandchild from "@/components/layout/services/GrandChild";
  import {
    heroData,
    introductionData,
    featuresData,
    servicesData,
  } from "./data";

  export const metadata = {
    title: "Android App Development | Cyberpeak IT Solutions",
    description:
    "Launch scalable, high-performance Android apps that drive user engagement and business growth. At CyberPeak, we blend intuitive UI, powerful backends, and native Android expertise to deliver top-tier mobile solutions.",
  };
  
  export default function Android() {
    return (
      <Grandchild
        heroData={heroData}
        introductionData={introductionData}
        featuresData={featuresData}
        servicesData={servicesData}
      />
    );
  }
  