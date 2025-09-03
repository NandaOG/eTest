import Grandchild from "@/components/layout/services/GrandChild";
  import {
    heroData,
    introductionData,
    featuresData,
    servicesData,
  } from "./data";
  
  export const metadata = {
    title: "DDI ERP Integration Services | Cyberpeak IT SOlutions",
    description:
      "Seamlessly integrate DDI Inform ERP with your eCommerce, CRM, and operational platforms. Optimize workflows, sync data in real-time, and elevate your distribution business with powerful, secure ERP connectivity.",
  };
  
  export default function DDI() {
    return (
      <Grandchild
        heroData={heroData}
        introductionData={introductionData}
        featuresData={featuresData}
        servicesData={servicesData}
      />
    );
  }
  