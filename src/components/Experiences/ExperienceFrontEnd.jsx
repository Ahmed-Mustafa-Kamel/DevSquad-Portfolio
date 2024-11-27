// import React from 'react'
import FrontEndImg from "../../assets/frontendimg.png";
import {
  DiHtml5,
  DiCss3,
  //   DiJavascript1,
  DiReact,
} from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";

import { motion } from "framer-motion";

const ExperienceFrontEnd = () => {
  return (
    <div className="max-w-[1300px] mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center mt-20 mb-20">
      {/* text & skills */}
      <motion.div
        initial={{ x: -100, y: -100, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className=" p-6"
      >
        <h2 className=" text-gray-200 text-3xl font-bold mb-4">
          FrontEnd Experience
        </h2>

        <p className=" text-gray-300">
          Experience in creating modern, responsive web applications using the
          latest frontend technologies.
        </p>

        {/* languages and technologies*/}
        <div className="flex flex-wrap gap-4 text-4xl">
          <DiHtml5 className="text-orange-600" />
          <DiCss3 className="text-blue-600" />
          <FaBootstrap className="text-purple-600" />
          <RiTailwindCssFill className="text-sky-600" />
          <TbBrandJavascript className="text-yellow-500" />
          <DiReact className="text-sky-500" />
        </div>
      </motion.div>

      {/* image */}
      <motion.div
        initial={{ x: 100, y: 100, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative  group"
      >
        <div className=" w-full h-full absolute -inset-1 bg-gradient-to-r from-sky-100 to-indigo-800 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>

        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
          <img
            src={FrontEndImg}
            alt="frond end"
            className="rounded-lg md:max-w-[500px]:"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceFrontEnd;
