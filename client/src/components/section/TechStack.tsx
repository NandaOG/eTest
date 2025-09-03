"use client";

import { useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
    FaReact, FaNodeJs, FaDocker, FaAws, FaPython
} from "react-icons/fa";

import {
    SiTypescript, SiKubernetes, SiGraphql, SiFlutter, SiFirebase,
    SiTailwindcss, SiNextdotjs, SiWordpress, SiBigcommerce, SiShopify,
    SiWoocommerce, SiMagento, SiPhp, SiLaravel, SiMysql, SiLinux
} from "react-icons/si";
import { InfiniteShapePath } from "../ui/Animated/InfiniteShapePath";

import Title from "../ui/Title";

const techStack = [
    { id: "react", name: "React", icon: FaReact, color: "text-blue-400" },
    { id: "node", name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { id: "typescript", name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { id: "docker", name: "Docker", icon: FaDocker, color: "text-blue-500" },
    { id: "aws", name: "AWS", icon: FaAws, color: "text-orange-500" },
    { id: "python", name: "Python", icon: FaPython, color: "text-yellow-400" },
    { id: "kubernetes", name: "Kubernetes", icon: SiKubernetes, color: "text-blue-600" },
    { id: "graphql", name: "GraphQL", icon: SiGraphql, color: "text-pink-500" },
    { id: "flutter", name: "Flutter", icon: SiFlutter, color: "text-blue-400" },
    { id: "firebase", name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
    { id: "tailwind", name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
    { id: "nextjs", name: "Next.js", icon: SiNextdotjs, color: "text-white" },

    // Newly added technologies
    { id: "wordpress", name: "WordPress", icon: SiWordpress, color: "text-blue-500" },
    { id: "bigcommerce", name: "BigCommerce", icon: SiBigcommerce, color: "text-blue-600" },
    { id: "shopify", name: "Shopify", icon: SiShopify, color: "text-green-500" },
    { id: "woocommerce", name: "WooCommerce", icon: SiWoocommerce, color: "text-purple-500" },
    { id: "magento", name: "Magento", icon: SiMagento, color: "text-orange-600" },
    { id: "php", name: "PHP", icon: SiPhp, color: "text-purple-500" },
    { id: "laravel", name: "Laravel", icon: SiLaravel, color: "text-red-500" },
    { id: "mysql", name: "MySQL", icon: SiMysql, color: "text-blue-500" },
    { id: "linux", name: "Linux", icon: SiLinux, color: "text-yellow-500" },
];


export default function TechStack() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 1000, height: 350 });
    const [isClient, setIsClient] = useState(false);
    const progress = useMotionValue(0);
    const count = techStack.length * 1.5;

    useEffect(() => {
        setIsClient(true);

        if (containerRef.current) {
            const updateDimensions = () => {
                const containerWidth = Math.min(containerRef.current!.offsetWidth, 800);
                setDimensions({
                    width: containerWidth,
                    height: containerWidth * 0.4,
                });
            };

            updateDimensions();
            window.addEventListener("resize", updateDimensions);
            return () => window.removeEventListener("resize", updateDimensions);
        }
    }, []);

    useEffect(() => {
        if (!isClient) return;

        const controls = animate(progress, 1, {
            duration: 60,
            repeat: Infinity,
            ease: "linear",
        });

        return () => controls.stop();
    }, [isClient, progress]);

    if (!isClient) return null;

    return (
        <section className="relative w-full py-20 px-10 md:px-20 bg-gradient-to-bl from-white via-[#002440] to-[#BF4000] overflow-hidden">
            <Title title="Our Tech Stack" />
            <div className="flex bg-[url('/backgrounds/grid.svg')] flex-col items-center justify-center w-full center border-2 border-white my-10 p-10 rounded-3xl">
                <p className="text-3xl text-white">Empowering Innovation with Cutting-Edge Technologies. 🚀</p>
            </div>
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex justify-center w-full mb-10">
                    <div ref={containerRef} className="relative w-full" style={{ height: dimensions.height }}>
                        {[...techStack, ...techStack].map((tech, i) => (
                            <InfiniteShapePath
                                key={`infinity-${tech.id}-${i}`}
                                tech={tech}
                                progress={progress}
                                dimensions={dimensions}
                                position={(i % techStack.length) / count}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}