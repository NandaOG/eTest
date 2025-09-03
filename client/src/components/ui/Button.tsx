"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaCircleNotch } from "react-icons/fa";

interface ButtonProps {
  text: string;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  target?: string;
  loading?: boolean;
}

export default function Button({ text, href, type = "button", onClick, target, loading = false }: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const showAsHovered = isHovered || loading;

  return (
    <div className="relative my-5 inline-block">
      {href ? (
        <Link href={href} target={target} className="relative inline-flex">
          <ButtonContent text={text} isHovered={showAsHovered} setIsHovered={setIsHovered} loading={loading} />
        </Link>
      ) : (
        <button 
          type={type} 
          className="relative inline-flex border-none bg-transparent p-0"
          onClick={onClick}
          disabled={loading}
        >
          <ButtonContent text={text} isHovered={showAsHovered} setIsHovered={setIsHovered} loading={loading} />
        </button>
      )}
    </div>
  );
}

// Separated button content for reuse inside <Link> and <button>
function ButtonContent({ text, isHovered, setIsHovered, loading }: { text: string; isHovered: boolean; setIsHovered: (value: boolean) => void; loading: boolean }) {
  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Foreground Text/Icon */}
      <motion.div
        className="relative z-10 flex items-center justify-center px-6 py-3 text-lg font-semibold text-[#fff] cursor-pointer rounded-full transition-colors duration-300 ease-in-out"
        style={{ color: isHovered ? "#002440" : "#fff" }}
        transition={{ duration: 0.1 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {loading ? <FaCircleNotch className="animate-spin text-2xl" /> : text}
      </motion.div>

      {/* Background Animation */}
      <motion.span
        className="absolute z-0 top-0 left-0 rounded-full"
        initial={{ width: "3.1em", height: "3.1em" }}
        animate={{
          width: isHovered ? "100%" : "3.1em",
          height: "3.1em",
          backgroundColor: isHovered ? "#fff" : "#7EA8BE",
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}