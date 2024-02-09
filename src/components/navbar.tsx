"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./navLink";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    setOpen(!open);
  };
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LOGO */}
      <div className="md:hidden lg:flex lg:flex-1 ">
        <Link
          href="/"
          className="logo text-sm bg-black rounded-md p-1 font-semibold flex items-center"
        >
          <span className="text-white mr-1">Ken</span>
          <span className="bg-white text-black w-12 h-8 rounded flex items-center justify-center">
            nedy
          </span>
        </Link>
      </div>
      {/* Mobile Menu */}
      <div className="menus md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between relative z-50"
          onClick={handleClick}
        >
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>
        {/* MENU LIST */}
        {open && (
          <div className="absolute z-30 top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-3xl">
            {links.map((link) => (
              <Link key={link.title} href={link.url}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* DESKTOP MENU */}

      <div className="hidden md:flex gap-4 flex-1  justify-center">
        {links.map((link) => (
        <NavLink link={link} key={link.title}/>
        ))}
      </div>

{/* SOCIAL ICONS */}
      <div className="hidden md:flex gap-2 flex-1  justify-end">
        <Link href="#">
          <i className="uil uil-instagram-alt"></i>
        </Link>

        <Link href="#">
          <i className="uil uil-facebook"></i>
        </Link>

        <Link href="#">
          <i className="uil uil-twitter"></i>
        </Link>

        <Link href="#">
          <i className="uil uil-linkedin"></i>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
