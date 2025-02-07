import React from "react";
import Particles from "./components/particles";
import TypingText from "./components/TypingText";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={200}
      />
      <div className="flex flex-col items-center justify-center">
        <h1 className="py-3.5 px-0.5 z-10 animate-fade-in-2 text-3xl bg-white text-white duration-1000 cursor-default text-edge-outline font-display font-bold sm:text-5xl md:text-8xl whitespace-nowrap bg-clip-text">
          <TypingText
            text="Hello, I'm Ian Keller!"
            speed={75}
            loop={false}
          />
        </h1>
        <h2 className="text-lg sm:text-2xl animate-fade-in-2 md:text-4xl duration-1000 text-white">
          Software Engineer
        </h2>
      </div>
    </div>
  );
}
