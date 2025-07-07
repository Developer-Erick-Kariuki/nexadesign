import Image from "next/image";
import React from "react";

const features = [
  {
    image: "/feature4.svg",
    title: "Cutting Edge Tech",
    text: "We understand that every business is unique. That’s why we create customized strategies and designs that align with your brand’s vision and goals.",
  },
  {
    image: "/feature4.svg",
    title: "Expert Team",
    text: "We understand that every business is unique. That’s why we create customized strategies and designs that align with your brand’s vision and goals.",
  },
  {
    image: "/feature4.svg",
    title: "Exceptional Customer Support",
    text: "We understand that every business is unique. That’s why we create customized strategies and designs that align with your brand’s vision and goals.",
  },
  {
    image: "/feature4.svg",
    title: "Data Driven",
    text: "We understand that every business is unique. That’s why we create customized strategies and designs that align with your brand’s vision and goals.",
  },
];

const Features = () => {
  return (
    <section id="about" className="w-full mt-32">
      <div className="max-w-7xl m-auto px-2 md:px-10">
        <div className="flex justify-between gap-4 flex-col md:flex-row">
          <div className="flex-grow  group relative rounded-4xl overflow-hidden">
            <Image
              className="w-full h-full"
              src="/Feature1.svg"
              width={677}
              height={400}
              alt="featured image"
            />
            <div className="absolute  inset-0 bg-gradient-to-t from-black to-transparent "></div>
            <div className="absolute  text-white px-4 py-2 bottom-4 z-50">
              <h2 className="text-3xl md:text-5xl mb-4">Tailored Solutions</h2>
              <p className="text-sm hidden  max-w-lg group-hover:flex ">
                We understand that every business is unique. That’s why we
                create customized strategies and designs that align with your
                brand’s vision and goals.
              </p>
            </div>
          </div>

          <div className="flex-grow   group relative overflow-hidden rounded-b-4xl">
            <Image
              className="w-full h-full"
              src="/Feature3.svg"
              width={480}
              height={400}
              alt="featured image"
            />
            <div className="absolute  inset-0 bg-gradient-to-t from-black to-transparent "></div>
            <div className="absolute  text-white p-3 bottom-4 z-50">
              <h2 className="text-3xl md:text-5xl mb-4">Expert Team</h2>
              <p className="text-sm hidden  group-hover:flex ">
                We understand that every business is unique. That’s why we
                create customized strategies and designs that align with your
                brand’s vision and goals.
              </p>
            </div>
          </div>
        </div>
        <div className="grid mt-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-7xl gap-4 m-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative  group overflow-hidden rounded-4xl"
            >
              <Image
                src={feature.image}
                className="w-full h-full"
                width={280}
                height={300}
                alt="featured image"
              />
              <div className="absolute  inset-0 bg-gradient-to-t from-black to-transparent "></div>
              <div className="absolute  text-white px-4 py-6 bottom-0 z-50">
                <h2 className="text-2xl md:text-4xl mb-4">{feature.title}</h2>
                <p className="text-sm hidden max-w-md  group-hover:flex ">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
