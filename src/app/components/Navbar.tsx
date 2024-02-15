"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useFirebaseContext } from "../../contexts/firebaseContext";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const { user } = useFirebaseContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex fixed flex-wrap items-center justify-between py-5 px-3 rounded-2xl bg-navbar-bg-color sm:w-60 md:w-auto">
      <div className="h-10 flex justify-center items-center">
        <Image
          src="/images/3dicons.png"
          alt="ACME"
          width={50}
          height={50}
          className="mr-2"
        />
        <h1 className="text-[#c0aaff] md:text-2xl text-xl">STELINOVAS</h1>
      </div>
      <div className="hidden md:flex justify-evenly w-full md:w-auto">
        <Link href="#" className="text-white hover:text-blue-500 px-3 py-3">
          About
        </Link>
        <Link href="#" className="text-white hover:text-blue-500 px-3 py-3">
          Roadmap
        </Link>
        <Link href="#" className="text-white hover:text-blue-500 px-3 py-3">
          Product
        </Link>
        <Link href="#" className="text-white hover:text-blue-500 px-3 py-3">
          Contact
        </Link>
        <Link href="#" className="text-white hover:text-blue-500 px-3 py-3">
          Sign in
        </Link>
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
          className="block text-white hover:text-blue-500 px-3 py-3"
        >
          Product
        </Link>
        <Link
          href="#"
          className="block text-white hover:text-blue-500 px-3 py-3"
        >
          Contact
        </Link>
        <Link
          href="#"
          className="block text-white hover:text-blue-500 px-3 py-3"
        >
          Sign in
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
