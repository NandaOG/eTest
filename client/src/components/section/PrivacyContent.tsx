"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Title from "../ui/Title";

type SubSection = {
  id: string;
  title: string;
  content: string;
};

type Section = {
    
  id: string;
  title: string;
  content?: string;
  subsections?: SubSection[];
};

type PrivacyContentProps = {
    sectionsData: {
        title?: string;
        sections: Section[];
    };
};

const PrivacyContent: React.FC<PrivacyContentProps> = ({ sectionsData }) => {
  const [activeSection, setActiveSection] = useState<string>(sectionsData.sections[0]?.id || "");
  const isScrolling = useRef(false);

  // scroll to section on click
  const handleScroll = (id: string) => {
    isScrolling.current = true;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    // Estimate scroll duration (600ms), then allow observer again
    setTimeout(() => {
      isScrolling.current = false;
      setActiveSection(id); // Ensure highlight after scroll
    }, 600);
  };

  // collect all ids (including subsections)
  const allIds: string[] = sectionsData.sections.flatMap((sec: Section) => [
    sec.id,
    ...(sec.subsections?.map((sub: SubSection) => sub.id) || []),
  ]);

  // observe sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      }
    );

    allIds.forEach((id: string) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionsData, allIds]);

  return (
    <section
      className="-mt-1 -mb-1
        w-full py-20 px-10 md:px-20
        bg-gradient-to-bl from-white via-[#002440] to-white
        text-[#002440]
      "
    >
      <Title title={sectionsData.title ? sectionsData.title : "Privacy Policy"} />

      <div className="relative w-full mx-auto flex flex-col lg:flex-row gap-8 mt-10">
        {/* Sidebar */}
        <aside className="hidden lg:block lg:w-1/4 sticky top-24 h-fit p-4 bg-white/20 backdrop-blur-xl shadow-xl bg-[url('/backgrounds/square.svg')] rounded-xl">
          <h3 className="text-2xl font-bold mb-4 text-gray-300">On this page</h3>
          <ul className="space-y-3">
            {sectionsData.sections.map((sec: Section) => (
              <li key={sec.id} className="space-y-2">
                <div
                  onClick={() => handleScroll(sec.id)}
                  className={`
                    cursor-pointer text-lg transition-colors
                    ${
                      activeSection === sec.id
                        ? "text-[#002440cc] font-semibold"
                        : "text-white hover:text-[#002440cc] hover:font-semibold"
                    }
                  `}
                >
                  {sec.title}
                </div>
                {sec.subsections && (
                  <ul className="ml-4 space-y-1">
                    {sec.subsections.map((sub: SubSection) => (
                      <li
                        key={sub.id}
                        onClick={() => handleScroll(sub.id)}
                        className={`
                          cursor-pointer text-base transition-colors
                          ${
                            activeSection === sub.id
                              ? "text-[#002440cc]"
                              : "text-white hover:text-[#002440cc]"
                          }
                        `}
                      >
                        {sub.title}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </aside>

        {/* Content */}
        <div className="lg:w-3/4 space-y-0 -mt-16 ">
          {sectionsData.sections.map((sec: Section, index: number) => (
            <motion.div
              key={sec.id}
              id={sec.id}
              className=" p-6 border-b border-gray-200 py-16 scroll-mt-40"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-1 text-gray-300">{sec.title}</h3>
              {sec.content && <p className="leading-relaxed text-white">{sec.content}</p>}

              {sec.subsections && sec.subsections.length > 0 && (
                <div className="mt-6 space-y-6">
                  {sec.subsections.map((sub: SubSection, subIndex: number) => (
                    <motion.div
                      key={sub.id}
                      id={sub.id}
                      className="scroll-mt-40"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: subIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-lg font-semibold mb-2 text-gray-200">
                        {sub.title}
                      </h4>
                      <p className="leading-relaxed text-white">{sub.content}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyContent;
