"use client";

import { motion } from "framer-motion";
import {
    FaUsers,
    FaLaptopCode,
    FaClock,
    FaGlobe,
    FaRedo,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Title from "../../ui/Title";
import TextComponent from "../../ui/TextComponent";
import Counter from "./Counter";

export type StatItem = {
    id: string;
    title: string;
    number: number;
    suffix?: string;
    icon: React.ReactNode;
};

type StatisticsProps = {
    title?: string;
    description?: string;
    stats?: StatItem[];
    gradientColor?: string;
};

const defaultStats: StatItem[] = [
    {
        id: "clients",
        title: "Happy Clients",
        number: 50,
        suffix: "+",
        icon: <FaUsers className="text-4xl text-[#BF4000]" />,
    },
    {
        id: "projects",
        title: "Projects Delivered",
        number: 100,
        suffix: "+",
        icon: <FaLaptopCode className="text-4xl text-[#BF4000]" />,
    },
    {
        id: "experience",
        title: "Years of Experience",
        number: 10,
        suffix: "+",
        icon: <FaClock className="text-4xl text-[#BF4000]" />,
    },
    {
        id: "countries",
        title: "Countries Served",
        number: 12,
        suffix: "+",
        icon: <FaGlobe className="text-4xl text-[#BF4000]" />,
    },
    {
        id: "retention",
        title: "Client Retention Rate",
        number: 95,
        suffix: "%",
        icon: <FaRedo className="text-4xl text-[#BF4000]" />,
    },
];

const Statistics: React.FC<StatisticsProps> = ({
    title = "Empowering <b>Digital Growth</b> with Proven Results",
    description = "From startups to global enterprises, we’ve delivered value, built trust, and scaled innovation across industries.",
    stats = defaultStats,
    gradientColor = "bg-gradient-to-bl from-white via-[#002440] to-[#BF4000]",
}) => {
    const [ref, inView] = useInView({ triggerOnce: true });

    return (
        <section
            className={`w-full py-20 px-10 md:px-20 ${gradientColor} text-white`}
        >
            <Title title="Stats" />
            <TextComponent title={title} description={description} />
            <div ref={ref} className="mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mt-15">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            className="flex flex-col items-center justify-between text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="mb-3">{stat.icon}</div>
                            <motion.h3
                                className="text-4xl font-extrabold"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                {inView && <Counter targetNumber={stat.number} suffix={stat.suffix} />}
                            </motion.h3>
                            <p className="mt-2 text-md font-medium text-white">
                                {stat.title}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics;
