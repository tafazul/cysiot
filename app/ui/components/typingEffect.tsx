import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function TypingEffect({ text, speed = 100 }: any) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + (text[i] || ''));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <motion.span 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="text-white text-[60px] font-bold inline-block min-w-[600px]"
    >
      {displayedText}
    </motion.span>
  );
}
