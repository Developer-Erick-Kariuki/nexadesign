"use client";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaPinterest } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaBars, FaXTwitter } from "react-icons/fa6";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoCloseSharp } from "react-icons/io5";
import { useMenu } from "./ContextProvider";

const sitemap = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useMenu();
  return (
    <header className="w-full m-auto bg-[#acb8df] fixed top-0 z-50 dark:bg-black">
      <nav className="flex relative  m-auto justify-between overflow-x-hidden max-w-7xl p-5 items-center w-full">
        <div className="md:hidden flex">
          {!isOpen && (
            <span className="flex gap-2 items-center">
              <FaBars size={24} onClick={() => setIsOpen(true)} />
            </span>
          )}
        </div>
        <Link href="/">
          <Image
            src="/logo.svg"
            width={150}
            height={30}
            alt="logo"
            className="dark:flex hidden"
          />
          <Image
            src="/darklogo2.svg"
            width={150}
            height={30}
            alt="logo"
            className="dark:hidden"
          />
        </Link>
        <div className="hidden md:flex gap-4">
          {sitemap.map((link, i) => (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
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

        {/* mobile div */}

        <>
          <div
            className={`${
              isOpen ? "translate-x-0" : "-translate-x-100"
            } transition-transform duration-300 ease-in-out flex flex-col justify-between md:hidden top-0 h-full py-10  bg-white dark:bg-black px-6 w-3/4 left-0 z-50 fixed gap-4`}
          >
            <div className="absolute top-6">
              <Image
                src="/logo.svg"
                width={100}
                height={30}
                alt="logo"
                className="dark:flex hidden"
              />
              <Image
                src="/darklogo2.svg"
                width={100}
                height={30}
                alt="logo"
                className="dark:hidden"
              />
            </div>

            <span className="absolute right-12 top-6 flex items-center gap-2">
              Close
              <IoCloseSharp
                size={32}
                onClick={() => setIsOpen(false)}
                className=""
              />
            </span>
            <div className="flex flex-col gap-4 mt-8">
              {sitemap.map((link) => (
                <a
                  onClick={() => setIsOpen(false)}
                  key={link.name}
                  href={link.href}
                  className="hover:bg-purple-400 hover:px-6 transition-all duration-300 ease-in-out p-3 rounded-2xl"
                >
                  <span className="flex group justify-between items-center">
                    {link.name}{" "}
                    <FaLongArrowAltRight className="hidden group-hover:flex" />
                  </span>
                </a>
              ))}
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
        {isOpen && (
          <div
            className="h-full w-full bg-black/70 fixed inset-0"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </nav>
    </header>
  );
};

export default Header;
