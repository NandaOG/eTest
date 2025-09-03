// pages/services/index.tsx
import CTA from "@/components/section/CTA";
import Hero from "@/components/section/services/Hero";
import Service from "@/components/section/Services";

export const metadata = {
  title: "Our Services | Cyberpeak IT Solutions",
  description:
    "We build modern, responsive, and scalable web applications tailored to your business goals.",
};
export default function Services() {
  return (
    <>
      <div className="min-h-screen">
        <Hero
          title="Our Services"
          description="We build modern, responsive, and scalable web applications tailored to your business goals."
          imageSrc="/images/services/services.jpg"
          imageAlt="our services"
          buttonText="Get Started"
          buttonLink="/contact"
        />
        <Service gradientColors="bg-gradient-to-bl from-white via-[#002440] to-white" title="Overview" />
        <CTA gradientColors="bg-gradient-to-br from-white via-[#002440] to-[#002440]" />
      </div>
    </>
  );
}
