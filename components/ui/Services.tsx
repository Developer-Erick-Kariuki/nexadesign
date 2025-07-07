import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section className="mt-32 w-full px-6 md:px-10">
      <div className=" m-auto w-full">
        <div className="max-w-7xl m-auto">
          <div className="bg-white dark:bg-black w-fit px-6 py-3 rounded-4xl">
            Our Services
          </div>
          <h4 className="text-5xl md:text-6xl mt-8 max-w-md">
            We offer the best services in
          </h4>
        </div>
        <div className="flex gap-8  mt-8">
          <Image
            src="/Service1.svg"
            width={420}
            height={500}
            alt="featured image"
          />
          <Image
            src="/Service1.svg"
            width={420}
            height={500}
            alt="featured image"
          />
          <Image
            src="/Service1.svg"
            width={420}
            height={500}
            alt="featured image"
          />
          <Image
            src="/Service1.svg"
            width={420}
            height={500}
            alt="featured image"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
