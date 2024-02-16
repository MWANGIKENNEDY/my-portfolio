"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row">
        {/* IMAGE CONTAINER */}

        <div className="flex-1 relative">
          <Image alt="" src="/hero.png" fill className="object-contain" />
        </div>

        {/* TEXT CONTAINER */}

        <div className="flex-1 flex flex-col gap-8 items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            Crafting Digital Experiences, Designing Tommorrow.
          </h1>

          <p className="md:text-lg">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>

          {/* BUTTONS */}

          <div className="flex justify-center lg:justify-start  gap-4 w-full ">
            <button className="bg-black text-white rounded-lg p-4 ring-1 ring-black">
              View My Work
            </button>
            <button className="  rounded-lg p-4 ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
