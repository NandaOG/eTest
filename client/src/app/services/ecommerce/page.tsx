// pages/services/index.tsx
import CTA from "@/components/section/CTA";
import Hero from "@/components/section/services/Hero";
import Service from "@/components/section/Services";
import { FaMagento, FaShopify, FaStore, FaShoppingBag } from "react-icons/fa"; // use closest fitting icons


export const metadata = {
  title: "Ecommerce Development Services | Cyberpeak IT Solutions",
  description:
    "Cyberpeak IT Solutions offers diverse e-commerce solutions and tailored support to enhance your digital operations by equipping services such as Magento, Bigcommerce, Shopify and Demandware.",
};
export default function Ecommerce() {
    const services = [
        {
          id: "magento",
          title: "Magento",
          description: "Our Magento development services are tailored to create scalable and feature-rich e-commerce platforms. From custom theme design to module development, we help businesses unlock Magento's full potential.",
          icon: <FaMagento />,
          image: "/images/services/magento.jpg",
          link: "/ecommerce/magento"
        },
        {
          id: "demandware",
          title: "Demandware",
          description: "We deliver powerful Demandware solutions that streamline your digital commerce journey. Our certified developers ensure seamless integration, high performance, and scalable enterprise-grade solutions.",
          icon: <FaStore />,
          image: "/images/services/demandware.jpg",
          link: "/ecommerce/demandware"
        },
        {
          id: "shopify",
          title: "Shopify",
          description: "Our Shopify experts design and build high-converting online stores. We offer custom themes, app integration, and optimization to ensure a seamless shopping experience that drives sales.",
          icon: <FaShopify />,
          image: "/images/services/shopify.avif",
          link: "/ecommerce/shopify"
        },
        {
          id: "bigcommerce",
          title: "BigCommerce",
          description: "We build robust and scalable BigCommerce solutions tailored to your business needs. Our services include custom storefront design, API integration, and performance optimization.",
          icon: <FaShoppingBag />,
          image: "/images/services/bigcommerce.jpg",
          link: "/ecommerce/bigcommerce"
        }
      ];
  return (
    <>
      <div className="min-h-screen">
        <Hero
          title="Ecommerce Development Services"
          description="Cyberpeak IT Solutions offers diverse e-commerce solutions and tailored support to enhance your digital operations by equipping services such as Magento, Bigcommerce, Shopify and Demandware."
          imageSrc="/images/ecommerce3.jpg"
          imageAlt="our services"
          buttonText="Get Started"
          buttonLink="/contact"
        />
        <Service gradientColors="bg-gradient-to-bl from-white via-[#002440] to-white" title="Our Expertise" servicesData={services}/>
        <CTA gradientColors="bg-gradient-to-br from-white via-[#002440] to-[#002440]" />
      </div>
    </>
  );
}
