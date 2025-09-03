// pages/services/index.tsx
import CTA from "@/components/section/CTA";
import Hero from "@/components/section/services/Hero";
import Service from "@/components/section/Services";
import { FaProjectDiagram, FaCogs, FaNetworkWired, FaServer } from "react-icons/fa";

export const metadata = {
  title: "ERP Integration Services | Cyberpeak IT Solutions",
  description:
    "Through customised ERP integrations, CyberPeak IT Solutions helps organisations optimise processes and boost productivity.",
};

export default function ERPIntegration() {
  const services = [
    {
      id: "epicor",
      title: "Epicor",
      description:
        "We offer tailored Epicor integration solutions that help businesses connect workflows, manage supply chains, and increase productivity with streamlined enterprise resource planning.",
      icon: <FaProjectDiagram />,
      image: "/images/services/epicor.jpg",
      link: "/erp-integration/epicor",
    },
    {
      id: "netsuite",
      title: "Netsuite",
      description:
        "Our Netsuite integration services simplify operations by connecting your financials, CRM, and e-commerce under one powerful cloud-based ERP platform.",
      icon: <FaCogs />,
      image: "/images/services/netsuite.avif",
      link: "/erp-integration/netsuite",
    },
    {
      id: "ddi",
      title: "DDI",
      description:
        "We integrate DDI ERP systems to enhance wholesale distribution operations with better inventory control, order processing, and business intelligence.",
      icon: <FaNetworkWired />,
      image: "/images/services/ddi.avif",
      link: "/erp-integration/ddi",
    },
    {
      id: "lightspeed",
      title: "Lightspeed",
      description:
        "Our Lightspeed POS integration enables retail and hospitality businesses to unify point-of-sale, inventory, and reporting for enhanced efficiency and customer experiences.",
      icon: <FaServer />,
      image: "/images/services/lightspeed.avif",
      link: "/erp-integration/lightspeed",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="ERP Integration Services"
        description="Through customised ERP integrations, CyberPeak IT Solutions helps organisations optimise processes and boost productivity."
        imageSrc="/images/erp.jpg"
        imageAlt="ERP integration service"
        buttonText="Get Started"
        buttonLink="/contact"
      />
      <Service
        gradientColors="bg-gradient-to-bl from-white via-[#002440] to-white"
        title="ERP Systems"
        servicesData={services}
      />
      <CTA gradientColors="bg-gradient-to-br from-white via-[#002440] to-[#002440]" />
    </div>
  );
}
