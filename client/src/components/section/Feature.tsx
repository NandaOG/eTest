"use client";
import TextComponent from "../ui/TextComponent";
import Title from "../ui/Title";
import FeatureCard from "../ui/cards/FeatureCard";

type Feature = {
    icon: string | React.ReactElement;
    title: string;
    description: string;
};

type TextData = {
    title: string;
    description: string;
};

type FeaturesProps = {
    features?: Feature[];
    title?: string;
    textData?: TextData;
    
};

export default function Features({
    features = [
        {
            icon: "\uD83D\uDE80",
            title: "Fast & Scalable",
            description: "Built for speed, ensuring seamless performance at any scale.",
        },
        {
            icon: "\uD83D\uDEE1\uFE0F",
            title: "Secure & Reliable",
            description: "Industry-leading security to keep your data safe and protected.",
        },
        {
            icon: "\uD83D\uDCA1",
            title: "Innovative Solutions",
            description: "Cutting-edge technology tailored to your business needs.",
        },
        {
            icon: "⚙️",
            title: "Customizable",
            description: "Flexible and adaptable to match your unique requirements.",
        },
    ],
    title = "Overview",
    textData = {
        title: "<b>Trusted by businesses</b> to scale with confidence",
        description: "Explore the features that make our platform an essential part of your growth journey.",
    },
}: FeaturesProps) {
    return (
        <section className="w-full py-20 px-10 md:px-20 bg-gradient-to-bl from-white via-[#002440] to-white text-[#002440]">
            <div className="mx-auto">
                <Title title={title} />
                <TextComponent
                    title={textData.title}
                    description={textData.description}
                />
                <div className="grid grid-cols-1 mt-15 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
