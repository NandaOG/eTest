"use client";

import Link from "next/link";

const simpleMenuItems = [
  { label: "Shop", path: "/shop" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Lookbook", path: "/lookbook" },
];

export default function MegaMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const handleLinkClick = () => {
    onClose(); // Close entire menu
  };

  return (
    <div
      className={`fixed inset-x-0 z-40 transition-all duration-300 ${
        isOpen ? "max-h-screen opacity-100 overflow-y-auto" : "max-h-0 opacity-0 overflow-hidden"
      } `}
      style={{ 
        WebkitOverflowScrolling: "touch",
        top: "70px" 
      }}
    >
      <nav className="p-4 md:p-6 mx-2 md:mx-4 my-4 md:my-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-xl md:rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl">
        {simpleMenuItems.map((item) => (
          <div key={item.label} className="mb-2 last:mb-0">
            <Link
              href={item.path}
              className="block py-3 md:py-4 text-lg md:text-xl font-medium text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg px-4 transition-colors"
              onClick={handleLinkClick}
            >
              {item.label}
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
}
