import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <section className="mt-32 px-6 md:px-10">
      <div className=" m-auto w-full flex-col md-flex-row flex max-w-7xl   ">
        <div className=" m-auto">
          <div className="bg-white dark:bg-black w-fit px-6 py-3 rounded-4xl">
            News & Blog
          </div>
          <h4 className="text-5xl md:text-6xl mt-8 max-w-md">
            Our Latest News & Blogs
          </h4>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-4xl mt-8">
            View all
          </button>
        </div>
        <div className="flex gap-8 w-full max-w-7xl mx-auto mt-8">
          <Image
            src="/Work1.svg"
            width={380}
            height={500}
            alt="featured image"
          />
          <Image
            src="/Work1.svg"
            width={380}
            height={500}
            alt="featured image"
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
