import Image from "next/image";
import React from "react";

const OurWorkProcess = () => {
  return (
    <section className="mt-32 w-full px-6 md:px-10">
      <div className="max-w-7xl m-auto w-full">
        <div className="bg-white dark:bg-black w-fit px-6 py-3 rounded-4xl">
          How we work
        </div>
        <h4 className="text-5xl md:text-6xl mt-8">4 Simple Steps</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-8"></div>
      </div>
    </section>
  );
};

export default OurWorkProcess;
