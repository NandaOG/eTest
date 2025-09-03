import React from "react";
import Hero from "@/components/section/services/Hero";
import Features from "@/components/section/Feature";
import Introduction from "@/components/section/services/Introduction";
// import Services from "@/components/section/Services";
import Statistics from "@/components/section/services/Statistics";
import Testimonial from "@/components/section/Testimonial";
import CTA from "@/components/section/CTA";
import Team from "../section/Team";

type GrandchildProps = {
    heroData: {
        title: string;
        description: string;
        imageSrc: string;
        imageAlt: string;
        buttonText: string;
        buttonLink: string;
    };
    featuresData: {
        title: string;
        features: Array<{
            icon: React.ReactElement;
            title: string;
            description: string;
        }>;
        textData: {
            title: string;
            description: string;
        };
    };
    showIntro?: boolean;
    introductionData?: {
        title?: string;
        title2?: string;
        subtitle?: string;
        buttonText?: string;
        buttonLink?: string;
        gradientColors?: string;
        bullets?: string[];
        features?: Array<{
            id: number;
            icon: React.ReactElement;
            title: string;
            desc: string;
        }>;
    };
    // servicesData: {
    //     title: string;
    //     servicesData: Array<{
    //         id: string;
    //         title: string;
    //         description: string;
    //         icon: React.ReactElement;
    //         image: string;
    //         link?: string;
    //     }>;
    // };
};

export default function About({
    heroData,
    featuresData,
    showIntro = true,
    introductionData,
    // servicesData,
}: GrandchildProps) {
    // console.log(introductionData);

    return (
        <div className="min-h-screen">
            <Hero {...heroData} />
            <Features
                title={featuresData.title}
                features={featuresData.features.map((feature) => ({
                    ...feature,
                    icon: feature.icon, // you may need to adjust this if icons don't render correctly
                }))}
                textData={featuresData.textData}
            />
            {/* Our Team  */}
            {showIntro && introductionData && <Introduction {...introductionData} />}
            <Team/>

            {/* <Services
                title={servicesData.title}
                servicesData={servicesData.servicesData}
                showButtons={false}
                gradientColors="bg-gradient-to-br from-[#002440] via-[#002440] to-white"
            /> */}
            <Statistics />
            <Testimonial />
            <CTA />
        </div>
    );
}
