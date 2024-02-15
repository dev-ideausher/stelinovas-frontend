"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useFirebaseContext } from "../../contexts/firebaseContext";
import { FiMenu } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import clsx from "clsx";

const Navbar = () => {
  const { user } = useFirebaseContext();
  const [isSideMenuOpen, setMenu] = useState(false);

  const navlinks = [
    {
      labe: "About",
      link: "#",
    },
    {
      labe: "Roadmap",
      link: "#",
    },
    {
      labe: "Product",
      link: "#",
    },
    {
      labe: "Contact",
      link: "#",
    },
    {
      labe: "Sign In",
      link: "/login",
    },
  ];

  return (
    <main className="navbar bg-navbar-bg-color fixed rounded-2xl">
      <nav className="flex justify-between px-8 items-center py-6">
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-4">
            {/* menu */}
            <FiMenu
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:hidden"
            />
            {/* logo */}
            <Link href={"/"} className="font-mono flex">
              <Image
                src="/images/3dicons.png"
                width={60}
                height={60}
                alt="3dicons"
              />
              <p className="stelinovas-logo-text pl-3">STELINOVAS</p>
            </Link>
          </section>
          {navlinks.map((d, i) => (
            <Link
              key={i}
              className="hidden lg:block  text-gray-400 hover:text-black"
              href={d.link}
            >
              {d.labe}
            </Link>
          ))}
        </div>

        {/* sidebar mobile menu */}
        <div
          style={{ zIndex: 5 }}
          className={clsx(
            " fixed h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all ",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex  ">
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer"
            />

            {navlinks.map((d, i) => (
              <Link key={i} className="font-bold" href={d.link}>
                {d.labe}
              </Link>
            ))}
          </section>
        </div>

        {/* last section */}
        {/* <section className="flex items-center gap-4">
          <AiOutlineShoppingCart className="text-3xl" />
          <Image
            width={40}
            height={40}
            className="h-8 w-8 rounded-full "
            src="https://i.pravatar.cc/150?img=52"
            alt="avatar-img"
          />
        </section> */}
      </nav>
    </main>
  );
};

export default Navbar;
