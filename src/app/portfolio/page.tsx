"use client";

import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";

import React, { useRef } from "react";

const PortfolioPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillsRef = useRef();
  const experienceRef = useRef();

  const isSkillsRefInView = useInView(skillsRef,{margin:"-100px"});
  //if you want to see the animation only once
  //const isSkillsRefInView = useInView(skillsRef,{once:true});
  // const isSkillsRefInView = useInView(skillsRef,{margin:"-100px"});
  const isExperienceRefInView = useInView(experienceRef,{margin:"-100px"});

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll  lg:flex  " ref={containerRef}>
        {/* TEXT CONTAINER */}

        <div className=" flex flex-col  gap-24 md:gap-32 px-4 sm:px-8 md:px-12 lg:px-20 lg:pr-0 xl:px-48 xl:pr-0 lg:p-0 lg:gap-48 xl:gap-64  lg:w-2/3  xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOG TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>

            {/* BIO DESC */}

            <p className="text-lg ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
              repellendus explicabo quaerat ipsa aliquid? Iste eius molestiae
              nobis architecto laborum!
            </p>

            <span className="italic">Lorem ipsum dolor sit amet.</span>
            {/* BIO SIGNATURE */}

            <div></div>

            {/* BIO SCROLL SVG */}

            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity,duration:3 }}
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M12 6V14"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillsRef}>
            {/* SKILL TITLE */}
            <motion.h1
              className="font-bold text-2xl"
              initial={{ x: "-300px" }}
              animate={isSkillsRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              SKILLS
            </motion.h1>

            {/* SKILLS LIST */}

            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillsRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="bg-black  rounded text-sm cursor-pointer p-2 text-white   hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="bg-black rounded text-sm cursor-pointer p-2  text-white   hover:bg-white hover:text-black">
                CSS
              </div>
              <div className="bg-black rounded text-sm cursor-pointer p-2  text-white   hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="bg-black rounded text-sm cursor-pointer p-2  text-white   hover:bg-white hover:text-black">
                ReactJS
              </div>
              <div className="bg-black rounded text-sm cursor-pointer p-2  text-white   hover:bg-white hover:text-black">
                NextJS
              </div>
              <div className="bg-black  rounded text-sm cursor-pointer p-2 text-white   hover:bg-white hover:text-black">
                Spring-Boot
              </div>
            </motion.div>

            {/* SKILL SCROLL SVG */}

            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity,duration:3 }}
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M12 6V14"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </motion.svg>
          </div>

          {/* EXPERIENCE CONTAINER */}
          <motion.div
            className="flex flex-col gap-12 justify-center"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              className="font-bold text-2xl"
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              EXPERIENCE
            </motion.h1>

            {/* EXPERIENCE LIST  */}

            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
            >
              {/* EXPERIENCE LIST ITEM */}

              <div className="flex justify-between">
                {/* LEFT  */}

                <div className="w-1/3">
                  {/* JOB TITLE  */}
                  <div className="bg-white  p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior Javascript Engineer
                  </div>

                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic ">
                    My current employment. Way better than the position before!
                  </div>

                  {/* JOB DATE  */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>

                  {/* JOB COMPANY  */}
                  <div className="bg-white p-1 text-sm rounded font-semibold w-fit ">
                    Apple
                  </div>
                </div>

                {/* CENTER  */}
                <div className="w-1/6   flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* CIRCLE */}

                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                {/* RIGHT  */}

                <div className="w-1/3"></div>
              </div>

              {/* EXPERIENCE LIST ITEM 2*/}

              <div className="flex justify-between">
                {/* LEFT  */}

                {/* RIGHT  */}

                <div className="w-1/3"></div>

                {/* CENTER  */}
                <div className="w-1/6   flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* CIRCLE */}

                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                <div className="w-1/3">
                  {/* JOB TITLE  */}
                  <div className="bg-white  p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior Javascript Engineer
                  </div>

                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic ">
                    My current employment. Way better than the position before!
                  </div>

                  {/* JOB DATE  */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>

                  {/* JOB COMPANY  */}
                  <div className="bg-white p-1 text-sm rounded font-semibold w-fit ">
                    Apple
                  </div>
                </div>
              </div>

              {/* EXPERIENCE LIST ITEM 3 */}

              <div className="flex justify-between">
                {/* LEFT  */}

                <div className="w-1/3">
                  {/* JOB TITLE  */}
                  <div className="bg-white  p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior Javascript Engineer
                  </div>

                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic ">
                    My current employment. Way better than the position before!
                  </div>

                  {/* JOB DATE  */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>

                  {/* JOB COMPANY  */}
                  <div className="bg-white p-1 text-sm rounded font-semibold w-fit ">
                    Apple
                  </div>
                </div>

                {/* CENTER  */}
                <div className="w-1/6   flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* CIRCLE */}

                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                {/* RIGHT  */}

                <div className="w-1/3"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* SVG CONTAINER */}

        <div className="hidden lg:block sticky top-0 z-30 lg:w-1/3 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
