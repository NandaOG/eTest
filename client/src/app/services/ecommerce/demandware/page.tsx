import Grandchild from "@/components/layout/services/GrandChild";
  import {
    heroData,
    introductionData,
    featuresData,
    servicesData,
  } from "./data";
  
  export const metadata = {
      title: "Demandware (Salesforce Commerce Cloud) Development Services | Cyberpeak IT Solutions",
      description:
      "Enterprise-grade Salesforce Commerce Cloud (Demandware) solutions to power high-performance, omnichannel eCommerce experiences with scalability and innovation.",
  };
  
  export default function DemandwareDevelopmentServices() {
    return (
      <Grandchild
        heroData={heroData}
        introductionData={introductionData}
        featuresData={featuresData}
        servicesData={servicesData}
      />
    );
  }
  