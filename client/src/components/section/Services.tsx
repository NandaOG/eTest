"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, PanInfo } from "framer-motion";
import { 
  FaShoppingCart, FaBoxOpen, FaExchangeAlt, 
  FaChartLine, FaBullhorn, FaMobile,
  FaArrowLeft, FaArrowRight 
} from "react-icons/fa";
import Title from "../ui/Title";
import ServiceCard from "../ui/cards/ServiceCard";

const defaultServices = [
  { id: "women", title: "Women's Collection", description: "Discover our exquisite range of women's luxury clothing, from elegant dresses to sophisticated business wear, crafted with premium materials and timeless designs.", icon: <FaShoppingCart />, image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg", link: "/women" },
  { id: "men", title: "Men's Collection", description: "Explore our refined men's collection featuring tailored suits, premium casual wear, and accessories that embody modern sophistication and classic style.", icon: <FaBoxOpen />, image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg", link: "/men" },
  { id: "accessories", title: "Luxury Accessories", description: "Complete your look with our curated selection of premium accessories including handbags, jewelry, watches, and scarves from renowned designers.", icon: <FaExchangeAlt />, image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg", link: "/accessories" },
  { id: "seasonal", title: "Seasonal Collections", description: "Stay ahead of fashion trends with our seasonal collections, featuring the latest styles and must-have pieces for every season and occasion.", icon: <FaChartLine />, image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg", link: "/seasonal" },
  { id: "designer", title: "Designer Brands", description: "Shop exclusive pieces from world-renowned designers and emerging talents, offering unique styles that make a statement and reflect your personal taste.", icon: <FaBullhorn />, image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg", link: "/designer" },
  { id: "custom", title: "Custom Tailoring", description: "Experience the ultimate in personalized fashion with our bespoke tailoring services, creating one-of-a-kind pieces that fit perfectly and reflect your individual style.", icon: <FaMobile />, image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg", link: "/custom" }
];
type Service = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactElement;
  image: string;
  link?: string; // <-- make it optional here
};
type props = {
  gradientColors?: string;
  title?: string;
  servicesData ?: Service[];
  showButtons?: boolean; 
};

export default function Services({ gradientColors, title, servicesData,  }: props) {
  const services = servicesData || defaultServices ;
  const defaultGradient = "from-[#BF4000] via-[#002440] to-white";
  const appliedGradient = gradientColors || defaultGradient;
  const appliedTitle = title || "Our Collections";
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [tabsWidth, setTabsWidth] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Initialize widths and handle resize
  useEffect(() => {
    const updateWidths = () => {
      if (sliderRef.current) setSliderWidth(sliderRef.current.offsetWidth);
      if (tabsContainerRef.current) setTabsWidth(tabsContainerRef.current.scrollWidth);
    };

    updateWidths();
    window.addEventListener('resize', updateWidths);
    return () => window.removeEventListener('resize', updateWidths);
  }, []);

  // Scroll active tab into view
  const scrollTabIntoView = useCallback((index: number) => {
    if (tabsRef.current) {
      const container = tabsRef.current;
      const activeTab = container.querySelector(`[data-index="${index}"]`);
      if (activeTab) {
        activeTab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, []);

  const handleNext = useCallback(() => {
    const newIndex = Math.min(activeIndex + 1, services.length - 1);
    setActiveIndex(newIndex);
    scrollTabIntoView(newIndex);
  }, [activeIndex, scrollTabIntoView]);

  const handlePrev = useCallback(() => {
    const newIndex = Math.max(activeIndex - 1, 0);
    setActiveIndex(newIndex);
    scrollTabIntoView(newIndex);
  }, [activeIndex, scrollTabIntoView]);

  const handleTabClick = useCallback((index: number) => {
    if (!isDragging) {
      setActiveIndex(index);
      scrollTabIntoView(index);
    }
  }, [isDragging, scrollTabIntoView]);

  const handleDragEnd = useCallback((_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    const swipeThreshold = 100;
    
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  }, [handleNext, handlePrev]);

  const handleTabsDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <section id="services" className={`w-full py-20 px-10 md:px-20 bg-gradient-to-bl ${appliedGradient} text-white`}>
      <Title title={appliedTitle} />

      {/* Tab Navigation */}
      <div ref={tabsContainerRef} className="relative w-full overflow-x-hidden scrollbar-hide">
        <motion.div 
          ref={tabsRef}
          className="flex gap-4 py-10"
          drag="x"
          dragConstraints={{
            left: -(tabsWidth - (tabsContainerRef.current?.clientWidth || 0)),
            right: 0,
          }}
          dragElastic={0.1}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleTabsDragEnd}
        >
          {services.map((service, index) => (
            <button
              key={service.id}
              data-index={index}
              onClick={() => handleTabClick(index)}
              className={`cursor-pointer flex flex-col justify-center items-center w-40 h-40 rounded-lg border-2 transition-all flex-shrink-0 ${
                activeIndex === index 
                  ? "bg-white text-[#002440] border-white" 
                  : "border-gray-300 text-white hover:bg-gray-100 hover:text-[#002440]"
              }`}
              aria-label={`View ${service.title} service`}
              aria-current={activeIndex === index ? "true" : "false"}
            >
              <div className="text-5xl" aria-hidden="true">{service.icon}</div>
              <span className="text-base font-medium">{service.title}</span>
            </button>
          ))}
        </motion.div>
      </div>

      {/* Service Cards */}
      <div ref={sliderRef} className="relative w-full overflow-hidden">
        <motion.div
          className="flex"
          animate={{
            x: -activeIndex * (sliderWidth || 0),
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          drag="x"
          dragConstraints={{
            left: -(services.length - 1) * (sliderWidth || 0),
            right: 0,
          }}
          dragElastic={0.1}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
        >
          {services.map((service) => (
            <div 
              key={service.id} 
              className="w-full flex-shrink-0 px-2"
              style={{ width: `${sliderWidth}px` }}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center mt-10">
        <button 
          onClick={handlePrev}
          className="bg-gray-200 p-3 rounded-full shadow-md transition hover:bg-gray-300 disabled:opacity-50"
          aria-label="Previous service"
          disabled={activeIndex === 0}
        >
          <FaArrowLeft className="text-gray-800 text-lg" />
        </button>
        
        <div className="flex gap-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`w-3 h-3 rounded-full transition ${
            Our <span className="text-red-600">Services</span>
              }`}
              aria-label={`Go to service ${index + 1}`}
              aria-current={activeIndex === index ? "true" : "false"}
            />
          ))}
        </div>
        
        <button
                className="w-full border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-950 group-hover:bg-red-600 group-hover:text-white"
          className="bg-gray-200 p-3 rounded-full shadow-md transition hover:bg-gray-300 disabled:opacity-50"
          aria-label="Next service"
          disabled={activeIndex === services.length - 1}
        >
          <FaArrowRight className="text-gray-800 text-lg" />
        </button>
      </div>
    </section>
  );
}