"use client";

import TextComponent from "@/components/ui/TextComponent";
import Title from "@/components/ui/Title";
import Button from "@/components/ui/Button";
import {
    FaRocket,
    FaCogs,
    FaChartLine,
    FaLightbulb,
    FaCheckCircle,
} from "react-icons/fa";
import SlimCard from "@/components/ui/cards/SlimCard";
import { motion } from "framer-motion";

interface FeatureItem {
    id: number;
    icon: React.ReactElement;
    title: string;
    desc: string;
}

interface ServiceIntroProps {
    title?: string;
    title2?: string;
    subtitle?: string;
    buttonText?: string;
    buttonLink?: string;
    gradientColors?: string;
    bullets?: string[];
    features?: FeatureItem[];
    highlightTitle?: string;
}

const Introduction: React.FC<ServiceIntroProps> = ({
    title = "Why Choose Us",
    title2 = "<b>Why Cyberpeak</b> is the partner you need?",
    subtitle = "CyberPeak IT Solutions creates Headless PWAs that provide a smooth, app-like experience across all devices.",
    buttonText = "Let's Talk",
    buttonLink = "/contact",
    gradientColors = "bg-gradient-to-br from-white via-[#002440] to-[#002440]",
    bullets = [
        "Built with a flexible, headless CMS architecture for maximum control.",
        "Deliver app-like experiences on mobile and desktop via PWA.",
        "Easily scale and upgrade as your business grows.",
        "Front-end and back-end are decoupled for faster innovation.",
        "Future-proof tech stack tailored to your organization’s goals.",
    ],
    features = [
        {
            id: 1,
            icon: <FaRocket />,
            title: "Fast Deployment",
            desc: "Get your Headless PWA to market quickly without compromising quality.",
        },
        {
            id: 2,
            icon: <FaCogs />,
            title: "Custom Integrations",
            desc: "Built to seamlessly integrate with your CMS or backend systems.",
        },
        {
            id: 3,
            icon: <FaChartLine />,
            title: "Scalability",
            desc: "Our solutions grow as your business grows – future-ready tech.",
        },
        {
            id: 4,
            icon: <FaLightbulb />,
            title: "Innovation",
            desc: "Always evolving with the latest web technologies to keep you ahead.",
        },
    ],
    highlightTitle = "The CyberPeak Difference in Headless PWA Development",
}) => {
    return (
        <section
            className={`w-full py-20 px-10 md:px-20 ${gradientColors} text-white`}
        >
            <Title title={title} />
            <TextComponent title={title2} description={subtitle} />

            <div className="flex flex-col md:flex-row gap-14 mx-auto items-stretch justify-between mt-15">
                {/* Left Side - Bullet Points */}
                <div className="md:w-1/2  flex flex-col justify-between min-h-full">
                    <div className="">
                        <h3 className="text-3xl font-bold text-white leading-snug">
                            {highlightTitle}
                        </h3>

                        <ul className="space-y-4 mt-4">
                            {bullets.map((point, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-start space-x-3"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <FaCheckCircle className="text-green-400 mt-1" />
                                    <span className="text-gray-200 text-md">{point}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-5">
                        <Button
                            text={buttonText}
                            href={buttonLink}
                            aria-label={buttonText}
                        />
                    </div>
                </div>

                {/* Right Side - Feature Cards */}
                <div className="md:w-1/2 grid sm:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <SlimCard
                            key={feature.id}
                            index={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.desc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Introduction;
