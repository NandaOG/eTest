"use client";

import Link from "next/link";
import { useState } from "react";
import { menuItems } from "./menuItems";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function MegaMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleService = (label: string) => {
    setExpandedService((prev) => (prev === label ? null : label));
  };

  const toggleCard = (label: string) => {
    setExpandedCards((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const handleLinkClick = () => {
    setExpandedService(null);
    setExpandedCards({});
    onClose(); // Close entire menu
  };

  return (
    <div
      className={`transition-all duration-300 ${isOpen ? "max-h-screen opacity-100 overflow-y-auto" : "max-h-0 opacity-0 overflow-hidden"
        } `}
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      <nav className=" p-10 my-10 bg-[url('/backgrounds/square_blue.svg')] rounded-3xl border-1 border-[#002440] scrollbar-thin scrollbar-thumb-gray-300" >
        {menuItems.map((item) => (
          <div key={item.label} className="mb-4">
            {item.subMenus ? (
              <>
                <div className="flex justify-between items-center py-2">
                  <Link
                    href={`/${item.label.toLowerCase()}`}
                    className="text-lg font-medium text-[#002440] hover:text-[#BF4000]"
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </Link>
                  <button
                    onClick={() => toggleService(item.label)}
                    className="p-1 border border-black rounded-full cursor-pointer"
                  >
                    {expandedService === item.label ? (
                      <FiMinus size={20} />
                    ) : (
                      <FiPlus size={20} />
                    )}
                  </button>
                </div>

                {expandedService === item.label && (
                  <div
                    className={`ml-4 overflow-hidden transition-all duration-500 ease-in-out ${expandedService === item.label ? "max-h-[1000px] mt-2 opacity-100" : "max-h-0 opacity-0"
                      }`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {item.subMenus.map((subMenu) => (
                        <div key={subMenu.label} className="bg-gray-50 rounded-lg border p-4 self-start">
                          <div className="flex justify-between items-center">
                            <Link
                              href={`/services/${subMenu.label.toLowerCase().replace(/\s+/g, "-")}`}
                              className="font-medium text-[#002440] hover:text-[#BF4000]"
                              onClick={handleLinkClick}
                            >
                              {subMenu.label}
                            </Link>
                            {subMenu.children && subMenu.children.length > 0 && (
                              <button
                                onClick={() => toggleCard(subMenu.label)}
                                className="p-1 border border-black rounded-full cursor-pointer"
                              >
                                {expandedCards[subMenu.label] ? <FiMinus size={20} /> : <FiPlus size={20} />}
                              </button>
                            )}
                          </div>

                          <div
                            className={`transition-[max-height,margin] duration-500 ease-in-out overflow-hidden ${expandedCards[subMenu.label] ? "max-h-[500px] mt-2" : "max-h-0"
                              }`}
                          >
                            <div className="space-y-2 pl-4">
                              {subMenu.children?.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.path}
                                  className="block py-1 text-[#002440] hover:text-[#BF4000]"
                                  onClick={handleLinkClick}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.path}
                className="block py-2 text-lg font-medium text-[#002440] hover:text-[#BF4000]"
                onClick={handleLinkClick}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
