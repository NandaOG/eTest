import { useEffect, useRef } from "react";

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useRef(false);
  const position = useRef(0);
  const direction = useRef(1); // 1 = forward, -1 = backward
  const animationRef = useRef<number | null>(null);
  const lineWidth = useRef(0);

  // Get Line Width (Handles Resizing)
  useEffect(() => {
    const updateWidth = () => {
      if (lineRef.current) {
        lineWidth.current = lineRef.current.offsetWidth - 16; // Ensure dot stays inside
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Detect Visibility (Restart Animation)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting;
        if (isVisible.current) {
          position.current = 0; // Restart animation when visible
          direction.current = 1; // Always start moving forward
          startAnimation();
        } else {
          if (animationRef.current) cancelAnimationFrame(animationRef.current);
        }
      },
      { threshold: 1.0 } // Fully visible before animation starts
    );

    if (titleRef.current) observer.observe(titleRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  // Animate Dot
  const moveDot = () => {
    if (!isVisible.current) return;

    position.current += direction.current * 2; // Move 2px per frame

    if (position.current >= lineWidth.current) {
      position.current = lineWidth.current;
      direction.current = -1; // Reverse at end
    }
    if (position.current <= 0) {
      position.current = 0;
      direction.current = 1; // Reverse at start
    }

    if (lineRef.current) {
      lineRef.current.style.setProperty("--dot-position", `${position.current}px`);
    }

    animationRef.current = requestAnimationFrame(moveDot);
  };

  const startAnimation = () => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(moveDot);
  };

  return (
    <div ref={titleRef} className="relative flex flex-col items-end py-6 w-full">
      {/* Section Title */}
      <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-white">
        {title}
      </h2>

      {/* Animated Line */}
      <div ref={lineRef} className="relative w-full h-[2px] bg-white mt-2">
        {/* Moving Dot */}
        <div
          className="absolute top-[-12px] w-6 h-6 rounded-full bg-[#BF4000] 
             shadow-[0_0_15px_#BF4000,0_0_30px_#BF4000,0_0_45px_#BF4000]"
          style={{
            transform: `translateX(var(--dot-position, 0px))`,
          }}
        ></div>
      </div>
    </div>
  );
}
