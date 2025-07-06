import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="w-full mt-32">
      <div className="flex flex-col gap-8">
        <div className="max-w-7xl gap-8 flex m-auto">
          <Image
            src="/Feature1.svg"
            width={677}
            height={400}
            alt="featured image"
          />

          <Image
            src="/Feature3.svg"
            width={480}
            height={400}
            alt="featured image"
          />
        </div>
        <div className="flex max-w-7xl gap-8 m-auto">
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

export default Features;
