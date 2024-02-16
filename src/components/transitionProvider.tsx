"use client";

import { AnimatePresence } from "framer-motion";
import React from "react";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const TransitionProvider = ({ children }: Props) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100"
      >
        <motion.div
          className="h-screen w-screen fixed bg-black top-0 rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "100vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        ></motion.div>

        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathName.substring(1)}
        </motion.div>

        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-40"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        ></motion.div>

        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
          {children}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;