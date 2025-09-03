import React from "react";
import Hero from "@/components/section/services/Hero";
import CTA from "@/components/section/CTA";
import PrivacyContent from "@/components/section/PrivacyContent";

type PrivacyProps = {
  heroData: {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    buttonText: string;
    buttonLink: string;
  };
    privacyData: {
        title?: string;
        sections: Array<{
        id: string;
        title: string;
        content?: string;
        subsections?: Array<{
            id: string;
            title: string;
            content: string;
        }>;
        }>;
    };
};


export default function Privacy({ heroData, privacyData }: PrivacyProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero {...heroData} />

      {/* Privacy Policy Content Section */}
      <PrivacyContent
        sectionsData={privacyData}
/>


      {/* CTA Section */}
      <CTA gradientColors="bg-gradient-to-br from-white via-[#002440] to-[#002440]"/>
    </div>
  );
}
