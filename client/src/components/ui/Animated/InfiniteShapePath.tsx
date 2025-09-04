"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

interface AnimatedTechItemProps {
    item: {
        id: string;
        name: string;
        image: string;
    };
    progress:  MotionValue<number>; 
    dimensions: { width: number; height: number };
    position: number;
}

export const InfiniteShapePath = ({
    item,
    progress,
    dimensions,
    position
}: AnimatedTechItemProps) => {
    const x = useTransform(progress, (v: unknown) => {
        if (typeof v !== 'number') {
            throw new Error('v is not a number');
        }
        // Reduce movement range on smaller screens
        const rangeFactor = dimensions.width < 400 ? 2.2 : 2.8;
        return Math.sin((v + position) * Math.PI * 2) * (dimensions.width / rangeFactor)
    });

    const y = useTransform(progress, (v: unknown) => {
        if (typeof v !== 'number') {
            throw new Error('v is not a number');
        }
        // Reduce vertical movement on smaller screens
        const rangeFactor = dimensions.width < 400 ? 2.2 : 2.8;
        return Math.sin((v + position) * Math.PI * 4) * (dimensions.height / rangeFactor)
    });


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
            <div className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 rounded-full bg-white/90 backdrop-blur-sm shadow-lg transition-all duration-300 overflow-hidden">
                <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover rounded-full"
                />
                <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="px-2 sm:px-3 py-1 bg-black/80 rounded-full text-xs text-white whitespace-nowrap shadow-lg">
                        {item.name}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};