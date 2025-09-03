// pages/services/index.tsx
import CTA from "@/components/section/CTA";
import Hero from "@/components/section/services/Hero";
import Service from "@/components/section/Services";
import { FaBullhorn, FaSearch, FaChartBar } from "react-icons/fa";

export const metadata = {
  title: "Marketing Services | Cyberpeak IT Solutions",
  description:
    "CyberPeak IT Solutions provides comprehensive marketing services designed to help businesses enhance their online presence and achieve sustainable growth.",
};

export default function MarketingServices() {
  const services = [
    {
      id: "seo",
      title: "SEO Services",
      description:
        "Boost your online visibility and search engine rankings with our expert SEO services. We use white-hat techniques and thorough keyword strategies to drive organic traffic to your site.",
      icon: <FaSearch />,
      image: "/images/services/seo.jpg",
      link: "/marketing/seo",
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description:
        "Our comprehensive digital marketing solutions cover everything from social media to paid ads, tailored to reach your ideal audience and generate high-quality leads.",
      icon: <FaBullhorn />,
      image: "/images/services/digital-marketing.jpg",
      link: "/marketing/digital-marketing",
    },
    {
      id: "analytics",
      title: "Analytics & Insights",
      description:
        "Turn data into decisions with our analytics and reporting services. We provide actionable insights that help refine marketing strategies and maximize ROI.",
      icon: <FaChartBar />,
      image: "/images/services/analytics-and-insights.jpg",
      link: "/marketing/analytics",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Marketing Services"
        description="CyberPeak IT Solutions provides comprehensive marketing services designed to help businesses enhance their online presence and achieve sustainable growth."
        imageSrc="/images/marketing2.jpg"
        imageAlt="Marketing services"
        buttonText="Get Started"
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
