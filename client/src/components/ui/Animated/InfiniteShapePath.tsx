"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import { TechItem } from "../../../types/types";

interface AnimatedTechItemProps {
    tech: TechItem;
    progress:  MotionValue<number>; 
    dimensions: { width: number; height: number };
    position: number;
}

export const InfiniteShapePath = ({
    tech,
    progress,
    dimensions,
    position
}: AnimatedTechItemProps) => {
    const x = useTransform(progress, (v: unknown) => {
        if (typeof v !== 'number') {
            throw new Error('v is not a number');
        }
        return Math.sin((v + position) * Math.PI * 2) * (dimensions.width / 2.8)
    });

    const y = useTransform(progress, (v: unknown) => {
        if (typeof v !== 'number') {
            throw new Error('v is not a number');
        }
        return Math.sin((v + position) * Math.PI * 4) * (dimensions.height / 2.8)
    });

    const IconComponent = tech.icon;

    return (
        <motion.div
            className="cursor-pointer absolute origin-center group"
            style={{
                x,
                y,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
        >
            <div className="relative flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-lg bg-white/10 md:backdrop-blur-sm shadow-md transition-all duration-300">
                <IconComponent className={`text-3xl md:text-4xl ${tech.color}`} />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="px-3 py-1 rounded-full text-xs text-white md:text-sm shadow-lg">
                        {tech.name}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};