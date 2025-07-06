"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaInstagram, FaPinterest } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full max-w-7xl  px-6 md:px-10  m-auto">
      <nav className="flex relative justify-between rounded-4xl bg-white dark:bg-black h-16 mt-4 px-8 items-center w-full  shadow-2xl">
        <Link href="/">
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
        </Link>
        <div className="hidden md:flex gap-4">
          <a href="#feature">About Us</a>
          <a href="#feature">Services</a>
          <a href="#feature">Blog</a>
          <a href="#feature">Contact</a>
        </div>
        <div className="hidden md:flex gap-2">
          <Link href="/">
            <FaFacebook size={20} />
          </Link>
          <Link href="/">
            <FaPinterest size={20} />
          </Link>
          <Link href="/">
            <FaInstagram size={20} />
          </Link>
          <Link href="/">
            <FaXTwitter size={20} />
          </Link>
        </div>
        <div className="md:hidden flex">
          {!isOpen && (
            <HiBars3BottomRight size={32} onClick={() => setIsOpen(true)} />
          )}
        </div>
        {/* mobile div */}
        {isOpen && (
          <>
            <div className="flex flex-col md:hidden top-0 h-dvh py-10  z-50 bg-white dark:bg-black w-full px-6 left-0 right-0 fixed gap-4">
              <Link href="/">
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
              </Link>

              <IoCloseSharp
                size={32}
                onClick={() => setIsOpen(false)}
                className="absolute right-12 top-6"
              />
              <div className="flex flex-col gap-4 mt-8">
                <a href="#feature">Home</a>
                <a href="#feature">About Us</a>
                <a href="#feature">Services</a>
                <a href="#feature">Blog</a>
                <a href="#feature">Contact</a>
              </div>
              <div className="md:hidden flex mt-8 gap-3">
                <Link href="/">
                  <FaFacebook size={20} />
                </Link>
                <Link href="/">
                  <FaPinterest size={20} />
                </Link>
                <Link href="/">
                  <FaInstagram size={20} />
                </Link>
                <Link href="/">
                  <FaXTwitter size={20} />
                </Link>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
