import { PhoneCallIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMailUnread } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="w-full mt-16 bg-white dark:bg-black pt-20">
      <div className="max-w-7xl w-full m-auto flex justify-between">
        <div className="flex flex-col">
          <Image
            src="/logo.svg"
            width={120}
            height={30}
            alt="logo"
            className="dark:flex hidden"
          />
          <Image
            src="/darklogo2.svg"
            width={120}
            height={30}
            alt="logo"
            className="dark:hidden"
          />
          <h2 className="text-2xl mt-8 max-w-sm">
            Enhancing online presence simply the best.
          </h2>
          <span className="flex gap-2 items-center mt-4">
            <PhoneCallIcon /> 0797710074
          </span>
          <span className="flex gap-2 mt-2">
            <IoMailUnread /> info@nexacreatives.com
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Our services</h2>
          <Link href="">Web Design & Development</Link>
          <Link href="">Graphic Design</Link>
          <Link href="">UX/UI Design</Link>
          <Link href="">Social Media Management</Link>
          <Link href="">Digital Marketing</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Site Map</h2>
          <Link href="">Home</Link>
          <Link href="">About Us</Link>
          <Link href="">Our Services</Link>
          <Link href="">Blog</Link>
          <Link href="">Contact</Link>
        </div>
      </div>
      <hr className="mt-8" />
      <div className="flex justify-center py-4">
        &copy; {new Date().getFullYear()} NexaCreatives All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
