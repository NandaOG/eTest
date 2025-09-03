"use client";

import { useEffect, useState } from "react";

type CounterProps = {
  targetNumber: number;
  suffix?: string;
  duration?: number; // in milliseconds
};

const Counter: React.FC<CounterProps> = ({ targetNumber, suffix = "", duration = 5000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = targetNumber / (duration / 16); // Roughly 60fps
    let animationFrame: number;

    const updateCount = () => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
      } else {
        setCount(Math.ceil(start));
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [targetNumber, duration]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

export default Counter;
