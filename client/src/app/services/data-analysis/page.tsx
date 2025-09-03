// pages/services/index.tsx
import CTA from "@/components/section/CTA";
import Hero from "@/components/section/services/Hero";
import Service from "@/components/section/Services";
import { FaChartBar, FaChartPie, FaChartLine, FaSearch } from "react-icons/fa"; // Icons related to data/research

export const metadata = {
  title: "Data Analysis Services | Cyberpeak IT Solutions",
  description:
    "Through customized Data Analysis solutions, CyberPeak IT Solutions helps organizations leverage their data to drive business growth and improve efficiency.",
};

export default function DataAnalysis() {
  const services = [
    {
      id: "primary-research",
      title: "Primary Market Research",
      description:
        "We help businesses gather firsthand data through surveys, interviews, and direct feedback to gain accurate and actionable insights from their target audiences.",
      icon: <FaSearch />,
      image: "/images/services/primary-market-research.jpg",
      link: "/data-analysis/primary",
    },
    {
      id: "secondary-research",
      title: "Secondary Market Research",
      description:
        "Our experts analyze existing data sources, industry reports, and competitor insights to provide a well-rounded understanding of your market landscape.",
      icon: <FaChartBar />,
      image: "/images/services/secondary-market-research.jpg",
      link: "/data-analysis/secondary",
    },
    {
      id: "quantitative-research",
      title: "Quantitative Market Research",
      description:
        "We use data-driven techniques to deliver measurable and statistically significant insights through structured surveys and numerical analysis.",
      icon: <FaChartLine />,
      image: "/images/services/quantitative-market-research.avif",
      link: "/data-analysis/quantitative",
    },
    {
      id: "qualitative-research",
      title: "Qualitative Market Research",
      description:
        "Gain deeper context and understanding of consumer behavior through focus groups, interviews, and sentiment analysis led by experienced researchers.",
      icon: <FaChartPie />,
      image: "/images/services/qualitative-market-research.jpg",
      link: "/data-analysis/qualitative",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Data Analysis Services"
        description="Cyberpeak IT Solutions offers a comprehensive suite of data analysis services, including primary and secondary research, as well as both quantitative and qualitative methodologies, to empower data-driven decision-making."
        imageSrc="/images/data-analysis.jpg"
        imageAlt="Data analysis service"
        buttonText="Explore Services"
        buttonLink="/contact"
      />
      <Service
        gradientColors="bg-gradient-to-bl from-white via-[#002440] to-white"
        title="Our Expertise"
        servicesData={services}
      />
      <CTA gradientColors="bg-gradient-to-br from-white via-[#002440] to-[#002440]" />
    </div>
  );
}
