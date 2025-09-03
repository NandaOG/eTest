"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaWhatsapp, FaComments } from "react-icons/fa";
import { SiPaypal } from "react-icons/si";
import { Paypal } from "../tooltip/Paypal";
import { Whatsapp } from "../tooltip/Whatsapp";
import { loadChatwoot } from "@/components/tooltip/ChatwootWidget";
const StickyButtons = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [curvePaths, setCurvePaths] = useState<Record<string, string>>({});
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const buttons = [
    {
      id: "whatsapp",
      icon: <FaWhatsapp className="text-white" />,
      text: "",
      bgColor: "bg-green-500",
      tooltip: {
        title: "WhatsApp Support",
        subtitle: "Direct chat with our team",
        button: "Continue",
        color: "bg-green-500",
      },
    },
    {
      id: "paypal",
      icon: <SiPaypal className="text-white" />,
      text: "",
      bgColor: "bg-blue-500",
      tooltip: {
        title: "PayPal Payments",
        subtitle: "Secure payment processing",
        button: "Pay Now",
        color: "bg-blue-500",
      },
    },
    {
      id: "livechat",
      icon: <FaComments className="text-white" />,
      text: "",
      bgColor: "bg-gray-800",
      tooltip: {
        title: "Live Chat",
        subtitle: "Instant support",
        button: "Start Chat",
        color: "bg-gray-800",
      },
    },
  ];
  const updateCurvePath = (id: string) => {
    const btn = buttonRefs.current[id];
    const tooltip = tooltipRef.current;
    if (!btn || !tooltip) return;
    const btnRect = btn.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    const startX = btnRect.left;
    // const startX = btnRect.right + btnRect.width/2;
    const startY = btnRect.top + btnRect.height / 2;
    const endX = tooltipRect.right;
    const endX2 = tooltipRect.left + tooltipRect.width / 2;
    const endY = tooltipRect.top;
    const midX1 = startX + (endX - startX) / 2;
    const midY1 = startY;
    const midX2 = midX1;
    const midY2 = endY - 20;
    const controlOffset = 20;
    const path = `
      M ${startX},${startY}
      Q ${midX1},${midY1} ${midX1},${midY1 - controlOffset}  
      Q ${midX2},${midY2} ${midX2},${midY2}  
      C ${midX2},${midY2} ${endX2},${midY2} ${endX2},${midY2}
      L ${endX2},${endY}
    `;
    setCurvePaths((prev) => ({ ...prev, [id]: path }));
  };

  const handleButtonClick = (id: string) => {
    if ( id === "livechat"){
        loadChatwoot();
        const newActive = activeTooltip === id ? null : id;
        setActiveTooltip(newActive);
        return ;
    }
    const newActive = activeTooltip === id ? null : id;
    setActiveTooltip(newActive);
    if (newActive) {
      requestAnimationFrame(() => updateCurvePath(newActive));
    }
  };
  useEffect(() => {
    const handleResize = () => {
      if (activeTooltip) updateCurvePath(activeTooltip);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleResize);
    };
  }, [activeTooltip]);
  const activeData = buttons.find((btn) => btn.id === activeTooltip);


  
  return (
    <>
      {/* Sticky Buttons */}
      <div className="fixed bottom-10 right-10 flex flex-col items-end gap-5 z-50">
        {buttons.map((button) => (
          <button
            key={button.id}
            ref={(el: HTMLButtonElement | null) => {
              buttonRefs.current[button.id] = el;
              return void 0; // Add this line to return void
            }}
            onClick={() => handleButtonClick(button.id)}
            className={`flex items-center text-3xl p-3 rounded-full cursor-pointer text-white shadow-lg transition-all duration-300 ${button.bgColor} ${activeTooltip === button.id ? "scale-105" : ""
              }`}
          >
            {button.icon}
            <span>{button.text}</span>
          </button>
        ))}
        {/* Main FAB */}
      </div>
      {/* Tooltip panel in fixed position */}
      {activeData && (
        <div
          ref={tooltipRef}
          id="tooltip-fixed"
          className="fixed bottom-70 left-1/2 -translate-x-1/2 md:bottom-60 md:right-30 md:left-auto md:translate-x-0 w-72  rounded-lg z-50 overflow-hidden"
        >
          {activeData.id === "whatsapp" ? (
            <Whatsapp />
          ) : activeData.id === "paypal" ? (
            <Paypal />
          ) : (
            // Default Tooltip
            <div className="p-4">
              {/* <div className="flex items-center gap-2 mb-2">
                <div className={`text-xl ${activeData.bgColor} text-white p-1 rounded`}>
                  {activeData.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">
                    {activeData.tooltip.title}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {activeData.tooltip.subtitle}
                  </p>
                </div>
              </div>
              <button
                className={`w-full py-2 text-white rounded-md ${activeData.tooltip.color}`}
              >
                {activeData.tooltip.button}
              </button> */}
            </div>
          )}
        </div>
      )}
      {/* SVG path with YOUR original curve logic */}
      <svg className="hidden md:block fixed top-0 left-0 w-full h-full pointer-events-none z-40 overflow-visible " >
        {activeTooltip && curvePaths[activeTooltip] && (
          <path
            d={curvePaths[activeTooltip]}
            stroke="white"
            strokeWidth="2"
            strokeDasharray="6,4"
            fill="none"
            className="transition-all duration-300"
          />
        )}
      </svg>
    </>
  );
};

export default StickyButtons;
