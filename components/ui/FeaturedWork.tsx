import Image from "next/image";
import React from "react";

const FeaturedWork = () => {
  return (
    <section id="about us" className="mt-32 px-6 md:px-10">
      <div className=" m-auto w-full ">
        <div className="max-w-7xl m-auto">
          <div className="bg-white dark:bg-black w-fit px-6 py-3 rounded-4xl">
            Our FeaturedWork
          </div>
          <h4 className="text-5xl md:text-6xl mt-8 max-w-2xl">
            Some of the solutions we are proud of
          </h4>
        </div>
        <div className="flex gap-8 w-full max-w-7xl mx-auto mt-8">
          <Image
            src="/Work1.svg"
            width={523}
            height={500}
            alt="featured image"
          />
          <Image
            src="/Work1.svg"
            width={523}
            height={500}
            alt="featured image"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
