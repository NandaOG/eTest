import Grandchild from "@/components/layout/services/GrandChild";
import {
  heroData,
  introductionData,
  featuresData,
  servicesData,
} from "./data";

export const metadata = {
    title: "Shopify Development Services | Cyberpeak IT Solutions",
    description:
      "Build, scale, and optimize your Shopify store with our end-to-end Shopify development services tailored for performance and growth.",
};

export default function ShopifyDevelopmentServices() {
  return (
    <Grandchild
      heroData={heroData}
      introductionData={introductionData}
      featuresData={featuresData}
      servicesData={servicesData}
    />
  );
}
