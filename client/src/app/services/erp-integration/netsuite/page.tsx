import Grandchild from "@/components/layout/services/GrandChild";
  import {
    heroData,
    introductionData,
    featuresData,
    servicesData,
  } from "./data";
  
  export const metadata = {
    title: "NetSuite ERP Integration Services | Cyberpeak IT Solutions",
    description:
      "Maximize your investment in NetSuite with powerful, tailored integrations to eCommerce, CRM, logistics, and more. Improve efficiency, reduce manual tasks, and drive growth through smart automation.",
  };
  
  export default function Netsuite() {
    return (
      <Grandchild
        heroData={heroData}
        introductionData={introductionData}
        featuresData={featuresData}
        servicesData={servicesData}
      />
    );
  }
  