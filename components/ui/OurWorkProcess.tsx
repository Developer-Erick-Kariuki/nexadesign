import Image from "next/image";
import React from "react";

const OurWorkProcess = () => {
  return (
    <section className="mt-32 w-full px-6 md:px-10">
      <div className="max-w-7xl m-auto w-full">
        <div className="bg-white dark:bg-black w-fit px-6 py-3 rounded-4xl">
          How we work
        </div>
        <h4 className="text-6xl mt-8">4 Simple Steps</h4>
        <div className="flex gap-8  mt-8">
          <Image
            src="/Feature4.svg"
            width={280}
            height={300}
            alt="featured image"
          />
          <Image
            src="/Feature4.svg"
            width={280}
            height={300}
            alt="featured image"
          />
          <Image
            src="/Feature4.svg"
            width={280}
            height={300}
            alt="featured image"
          />
          <Image
            src="/Feature4.svg"
            width={280}
            height={300}
            alt="featured image"
          />
        </div>
      </div>
    </section>
  );
};

export default OurWorkProcess;
