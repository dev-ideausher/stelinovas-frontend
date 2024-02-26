"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { useFirebaseContext } from "../../contexts/firebaseContext";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const { user } = useFirebaseContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const roadmap = useRef(null);

  const scrollToSection = (sectionRef: any) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      style={{ zIndex: 5 }}
      className="flex fixed flex-wrap items-center justify-between py-5 px-7 rounded-md bg-navbar-bg-color sm:w-80 md:w-auto mt-10"
    >
      <Link href="/" className="h-10 flex justify-center items-center">
        <Image
          src="/images/3dicons.png"
          alt="ACME"
          width={50}
          height={50}
          className=" mr-2 "
        />
        <h1 className="text-[#c0aaff] mr-20 sm:text-xl md:text-2xl ">
          STELINOVAS
        </h1>
      </Link>
      <div className="hidden md:flex justify-evenly w-full md:w-auto">
        <Link href="#" className="text-white hover:text-blue-500 px-3 py-3">
          About
        </Link>
        <div
          onClick={() => scrollToSection(roadmap)}
          className="text-white hover:text-blue-500 px-3 py-3"
        >
          Roadmap
        </div>
        <Link href="#" className="text-white hover:text-blue-500 px-3 py-3">
          Contact
        </Link>
        <Link
          href="#"
          className="text-white hover:text-blue-500 px-3 py-3 flex items-center gap-1"
        >
          Whitepaper
          <FaExternalLinkAlt className="text-xs" />
        </Link>
        {user ? (
          <Dropdown />
        ) : (
          <Link
            href="/login"
            className="text-white hover:text-blue-500 px-3 py-3"
          >
            Sign in
          </Link>
        )}
      </div>
      <div className="flex md:hidden">
        <button id="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? (
            <IoCloseOutline className="text-white text-2xl" />
          ) : (
            <FiMenu className="text-white text-2xl" />
          )}
        </button>
      </div>
      <div
        className={`toggle ${
          isMenuOpen ? "block" : "hidden"
        } w-full md:hidden text-right text-bold mt-5 border-t-2 border-blue-900 bg-[#0f053b]`}
      >
        <Link
          href="#"
          className="block text-white hover:text-blue-500 px-3 py-3"
        >
          About
        </Link>
        <Link
          href="#"
          className="block text-white hover:text-blue-500 px-3 py-3"
        >
          Roadmap
        </Link>
        <Link
          href="#"
          className="block text-white hover:text-blue-500 px-3 py-3  items-center gap-1"
        >
          Whitepaper
        </Link>

        <Link
          href="#"
          className="block text-white hover:text-blue-500 px-3 py-3"
        >
          Contact
        </Link>
        {user ? (
          <Dropdown />
        ) : (
          <Link
            href="/login"
            className="block text-white hover:text-blue-500 px-3 py-3"
          >
            Sign in
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
