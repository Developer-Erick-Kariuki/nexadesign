"use client";

import React from "react";
import Overlay from "./ui/Overlay";
import Hero from "./ui/Hero";
import Features from "./ui/Features";
import OurWorkProcess from "./ui/OurWorkProcess";
import Services from "./ui/Services";
import FeaturedWork from "./ui/FeaturedWork";
import Testmonial from "./ui/Testimonial";
import Blog from "./ui/Blog";
import CTA from "./ui/CTA";
import FAQ from "./ui/FAQ";
import { useMenu } from "./ui/ContextProvider";

const Components = () => {
  const [isOpen] = useMenu();
  return (
    <div className={`${isOpen ? "fixed h-full w-full inset-0" : ""} `}>
      <Overlay />
      <Hero />
      <Features />
      <OurWorkProcess />
      <Services />
      <FeaturedWork />
      <Testmonial />
      <Blog />
      <CTA />
      <FAQ />
    </div>
  );
};

export default Components;
