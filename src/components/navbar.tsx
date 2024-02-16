"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const topVariants = {
    closed: {
      rotate: 0,
    },

    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },

    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },

    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        //run parent first then animate the children
        //when:"beforeChilren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

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
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded "
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute z-30 top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-3xl"
          >
            {links.map((link) => (
              <motion.div variants={listItemVariants} key={link.title}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* DESKTOP MENU */}

      <div className="hidden md:flex gap-4 flex-1  justify-center">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
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
