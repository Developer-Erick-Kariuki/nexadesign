import Image from "next/image";
import React from "react";

const CTA = () => {
  return (
    <section className="mt-16 px-3 md:px-10 ">
      <div className="bg-white dark:bg-black justify-center flex p-4  w-full items-center gap-16 max-w-7xl m-auto rounded-4xl">
        <div className="hidden md:flex">
          <Image src="/CTA.svg" width={401} height={200} alt="cta-image" />
        </div>
        <div>
          <h2 className="text-5xl md:text-6xl max-w-lg mb-4">
            Join our news letter
          </h2>
          <p className="opacity-60 text-lg font-normal max-w-lg mb-8">
            Subscribe to our newsletter and stay ahead of the curve with cutting
            edge designs ideas and tips
          </p>
          <div className="flex flex-col justify-end gap-4">
            <input
              type="text"
              placeholder="Your Email Address"
              className="outline-none ring-2 rounded-4xl px-2 py-3 text-center"
            />
            <button className="bg-purple-600 text-white px-6 py-3 rounded-4xl">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
