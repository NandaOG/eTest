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

// Fashion items for the floating animation
const fashionItems = [
    { id: "dress", name: "Dresses", image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg" },
    { id: "suit", name: "Suits", image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg" },
    { id: "handbag", name: "Handbags", image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg" },
    { id: "shoes", name: "Shoes", image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg" },
    { id: "jacket", name: "Jackets", image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg" },
    { id: "accessories", name: "Accessories", image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg" },
    { id: "blouse", name: "Blouses", image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg" },
    { id: "pants", name: "Pants", image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg" },
    { id: "skirt", name: "Skirts", image: "https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg" },
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
            duration: 40,
            repeat: Infinity,
            ease: "linear",
        });

        return () => controls.stop();
    }, [isClient, progress]);

    if (!isClient) return null;

    return (
        <section className="relative w-full py-20 px-10 md:px-20 bg-gradient-to-bl from-white via-[#002440] to-[#BF4000] overflow-hidden">
            <Title title="Featured Items" />
            <div className="flex bg-[url('/backgrounds/grid.svg')] flex-col items-center justify-center w-full center border-2 border-white my-10 p-10 rounded-3xl">
                <p className="text-3xl text-white">Discover Our Curated Collection of Luxury Fashion. ✨</p>
            </div>
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex justify-center w-full mb-10">
                    <div ref={containerRef} className="relative w-full" style={{ height: dimensions.height }}>
                        {[...fashionItems, ...fashionItems].map((item, i) => (
                            <InfiniteShapePath
                                key={`infinity-${item.id}-${i}`}
                                item={item}
                                progress={progress}
                                dimensions={dimensions}
                                position={(i % fashionItems.length) / count}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}