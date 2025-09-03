import Grandchild from "@/components/layout/services/GrandChild";
  import {
    heroData,
    introductionData,
    featuresData,
    servicesData,
  } from "./data";
  
  export const metadata = {
    title: "Lightspeed POS Integration Services | Cyberpeak IT Solutions",
    description:
      "Streamline retail operations with seamless integrations between Lightspeed POS and your eCommerce, ERP, CRM, and logistics systems. Automate workflows, sync data, and scale faster.",
  };
  
  export default function Lightspeed() {
    return (
      <Grandchild
        heroData={heroData}
        introductionData={introductionData}
        featuresData={featuresData}
        servicesData={servicesData}
      />
    );
  }
  