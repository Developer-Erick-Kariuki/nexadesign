import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="mt-20 max-w-7xl m-auto w-full px-6 md:px-10">
      <div className="flex flex-col md:flex-row w-full justify-between items-center">
        <div className="flex flex-col">
          <h2 className="text-5xl md:text-6xl  max-w-xl mb-8">
            Make Designs that Engage, Delight and Connect
          </h2>
          <p className="opacity-75 text-xl md:text-2xl max-w-xl mb-8">
            We craft lightning-fast websites for ambitious brands. From UX to
            launch — we don’t just build pretty sites. We build results.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-purple-600 text-white rounded-4xl px-6 py-3">
              Let's build something
            </button>
            <button className="border-2 rounded-4xl px-6 py-3">
              See Our Work
            </button>
          </div>
        </div>
        <div>
          <Image src="/hero.svg" width={654} height={719} alt="hero-iamge" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
