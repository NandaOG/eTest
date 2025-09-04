"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { FaCircleNotch } from "react-icons/fa";

interface ButtonProps {
  children?: ReactNode;
  text?: string;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  target?: string;
  loading?: boolean;
  className?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  text,
  href,
  type = "button",
  onClick,
  target,
  loading = false,
  className = "",
  variant = "primary",
  size = "md",
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }[size];

  const variantClasses = {
    primary: "bg-red-600 hover:bg-red-700 text-white border-2 border-red-600 hover:border-red-700",
    outline: "bg-transparent hover:bg-red-600 text-red-600 hover:text-white border-2 border-red-600",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-700 hover:text-gray-900 border-2 border-transparent",
  }[variant];

  const buttonContent = (
    <button
      type={type}
      className={`
        relative inline-flex items-center justify-center
        font-semibold rounded-lg transition-all duration-200 ease-in-out
        disabled:opacity-50 disabled:cursor-not-allowed
        ${sizeClasses} ${variantClasses} ${className}
      `}
      onClick={onClick}
      disabled={loading}
    >
      {loading ? (
        <FaCircleNotch className="animate-spin mr-2" />
      ) : null}
      {children ?? text}
    </button>
  );

  if (href) {
    return (
      <Link href={href} target={target} className="inline-block">
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
}


