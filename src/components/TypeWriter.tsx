"use client";

import { useEffect, useRef } from "react";

const Typewriter: React.FC<{ text: string }> = ({ text }) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const indexRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    let animationFrame: number;

    const type = () => {
      if (!textRef.current) return;

      const currentIndex = indexRef.current;
      const isDeleting = deletingRef.current;

      if (!isDeleting) {
        textRef.current.textContent = text.slice(0, currentIndex + 1);
        indexRef.current += 1;
        if (indexRef.current === text.length) {
          deletingRef.current = true;
          setTimeout(() => requestAnimationFrame(type), 3000);
          return;
        }
      } else {
        textRef.current.textContent = text.slice(0, currentIndex - 1);
        indexRef.current -= 1;
        if (indexRef.current === 0) {
          deletingRef.current = false;
        }
      }

      animationFrame = requestAnimationFrame(() => setTimeout(type, 60));
    };

    animationFrame = requestAnimationFrame(type);

    return () => cancelAnimationFrame(animationFrame);
  }, [text]);

  return <span ref={textRef}></span>;
};

export default Typewriter;
