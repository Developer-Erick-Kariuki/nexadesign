import Blog from "@/components/ui/Blog";
import CTA from "@/components/ui/CTA";
import FAQ from "@/components/ui/FAQ";
import FeaturedWork from "@/components/ui/FeaturedWork";
import Features from "@/components/ui/Features";
import Hero from "@/components/ui/Hero";
import OurWorkProcess from "@/components/ui/OurWorkProcess";
import Services from "@/components/ui/Services";
import Testmonial from "@/components/ui/Testimonial";

export default function Home() {
  return (
    <main className="w-full m-auto font-normal">
      <Hero />
      <Features />
      <OurWorkProcess />
      <Services />
      <FeaturedWork />
      <Testmonial />
      <Blog />
      <CTA />
      <FAQ />
    </main>
  );
}
