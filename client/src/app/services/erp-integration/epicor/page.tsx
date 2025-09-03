import Grandchild from "@/components/layout/services/GrandChild";
  import {
    heroData,
    introductionData,
    featuresData,
    servicesData,
  } from "./data";
  
  export const metadata = {
    title: "Epicor ERP Integration Services | Cyberpeak IT SOlutions",
    description:
      "Unlock the full potential of Epicor ERP with seamless integrations to eCommerce, CRM, and supply chain systems. Improve data accuracy, streamline operations, and future-proof your digital infrastructure.",
  };
  
  export default function Epicore() {
    return (
      <Grandchild
        heroData={heroData}
        introductionData={introductionData}
        featuresData={featuresData}
        servicesData={servicesData}
      />
    );
  }
  