import React from "react";
import {motion} from 'framer-motion';
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const SlimCard: React.FC<FeatureCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div className="p-6 rounded-tl-3xl rounded-br-3xl bg-opacity-5 hover:border-[#BF4000]  transition duration-100  border border-white/10 shadow-md space-y-3"   initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.2 }}
    viewport={{ once: true }}>
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#BF4000] text-white text-xl">
        {icon}
      </div>
      <h4 className="text-lg font-semibold text-[#BF4000]">{title}</h4>
      <p className="text-sm text-gray-200">{description}</p>
    </motion.div>
  );
};

export default SlimCard;
