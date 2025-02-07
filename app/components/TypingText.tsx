'use client'

import React, { useState, useEffect } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;  // Speed in milliseconds per character
  loop?: boolean;  // Whether to loop animation
}

const TypingText: React.FC<TypingTextProps> = ({ text, speed = 100, loop = false }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (loop) {
      setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 1000); // Pause before restarting
    }
  }, [index, text, speed, loop]);

  return <span>{displayedText}</span>;
};

export default TypingText;