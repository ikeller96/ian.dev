import React from "react";
import TypingText from "./components/TypingText";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
      <div className="flex flex-col items-center justify-center w-full max-w-[50%] px-4 text-center">
        <h1 className="py-3.5 z-10 animate-fade-in-2 text-2xl bg-white text-white duration-1000 cursor-default text-edge-outline font-display font-bold sm:text-4xl md:text-6xl bg-clip-text">
          <TypingText
            text="Hello, I'm Ian Keller, a full-stack software engineer!"
            speed={50}
            loop={false}
          />
        </h1>
      </div>
    </div>
  );
}
