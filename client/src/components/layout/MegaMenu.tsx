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
      <nav className="p-6 mx-4 my-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl scrollbar-thin scrollbar-thumb-gray-300" >
        {menuItems.map((item) => (
          <div key={item.label} className="mb-6 last:mb-0">
            {item.subMenus ? (
              <>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <Link
                    href={`/${item.label.toLowerCase()}`}
                    className="text-lg font-semibold text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition-colors"
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </Link>
                  <button
                    onClick={() => toggleService(item.label)}
                    className="p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full cursor-pointer transition-colors"
                  >
                    {expandedService === item.label ? (
                      <FiMinus size={16} className="text-gray-700 dark:text-gray-300" />
                    ) : (
                      <FiPlus size={16} className="text-gray-700 dark:text-gray-300" />
                    )}
                  </button>
                </div>

                {expandedService === item.label && (
                  <div
                    className={`ml-4 overflow-hidden transition-all duration-500 ease-in-out ${expandedService === item.label ? "max-h-[1000px] mt-4 opacity-100" : "max-h-0 opacity-0"
                      }`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {item.subMenus.map((subMenu) => (
                        <div key={subMenu.label} className="bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 self-start hover:shadow-md transition-shadow">
                          <div className="flex justify-between items-center">
                            <Link
                              href={`/shop/${subMenu.label.toLowerCase().replace(/\s+/g, "-")}`}
                              className="font-medium text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition-colors"
                              onClick={handleLinkClick}
                            >
                              {subMenu.label}
                            </Link>
                            {subMenu.children && subMenu.children.length > 0 && (
                              <button
                                onClick={() => toggleCard(subMenu.label)}
                                className="p-1 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 rounded-full cursor-pointer transition-colors"
                              >
                                {expandedCards[subMenu.label] ? 
                                  <FiMinus size={14} className="text-gray-700 dark:text-gray-300" /> : 
                                  <FiPlus size={14} className="text-gray-700 dark:text-gray-300" />
                                }
                              </button>
                            )}
                          </div>

                          <div
                            className={`transition-[max-height,margin] duration-500 ease-in-out overflow-hidden ${expandedCards[subMenu.label] ? "max-h-[500px] mt-3" : "max-h-0"
                              }`}
                          >
                            <div className="space-y-2 pl-4 border-l-2 border-red-600/20">
                              {subMenu.children?.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.path}
                                  className="block py-2 px-2 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
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
                className="block py-3 text-lg font-medium text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg px-2 transition-colors"
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
