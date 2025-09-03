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
            icon: "👗",
            title: "Premium Quality",
            description: "Crafted from the finest materials with attention to every detail.",
        },
        {
            icon: "✨",
            title: "Timeless Design",
            description: "Classic styles that transcend trends and seasons.",
        },
        {
            icon: "🌿",
            title: "Sustainable Fashion",
            description: "Ethically sourced materials and responsible manufacturing.",
        },
        {
            icon: "🚚",
            title: "Fast Delivery",
            description: "Quick and secure shipping to your doorstep worldwide.",
        },
    ],
    title = "Overview",
    textData = {
        title: "<b>Trusted by fashion enthusiasts</b> worldwide for luxury and style",
        description: "Discover what makes our collection the perfect choice for your wardrobe.",
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
