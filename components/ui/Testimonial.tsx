import Image from "next/image";
import React from "react";

const Testmonial = () => {
  return (
    <section className="mt-32 w-full px-6 md:px-10">
      <div className="m-auto w-full">
        <div className="max-w-7xl flex flex-col items-center  w-full m-auto">
          <div className="bg-white dark:bg-black w-fit px-6 py-3 rounded-4xl">
            How we work
          </div>
          <h4 className="text-6xl text-center max-w-2xl mt-8 ">
            Join 1000+ clients enjoying our services
          </h4>
        </div>
        <div className="flex gap-4 mt-8">
          <div className="w-[403px] h-[529] bg-white rounded-4xl"></div>
          <div className="w-[403px] h-[529] bg-white rounded-4xl"></div>
          <div className="w-[403px] h-[529] bg-white rounded-4xl"></div>
          <div className="w-[403px] h-[529] bg-white rounded-4xl"></div>
          <div className="w-[403px] h-[529] bg-white rounded-4xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Testmonial;
