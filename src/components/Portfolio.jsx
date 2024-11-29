// import React from 'react'
import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { Projects } from "../assets/projects";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);
  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex justify-self-center font-bold text-3xl text-gray-200 "
      >
        <h2 className="mx-auto">Portfolio</h2>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-[1200px] mx-auto p-6 md:my-20 flex flex-col md:flex-row"
        id="portfolio"
      >
        {/* list of projects */}
        <div className="glass p-6 w-full border-2 ">
          {/* projects images */}
          <div className=" w-full h-auto">
            <img
              src={Projects[currentProject].img}
              alt="project"
              className=" w-full h-full object-cover rounded-lg mb-4"
            />
          </div>

          <p className=" text-gray-200 my-4 text-sm md:text-lg">
            {Projects[currentProject].description}
          </p>

          <div className="flex space-x-4">
            {/* site button */}
            <a
              href={Projects[currentProject].links.site}
              target="_blank"
              className="py-2 px-4 bg-sky-600 text-gray-200 rounded-lg hover:bg-sky-700 transition duration-300 font-bold "
            >
              view site
            </a>
            {/* github button */}
            <a
              href={Projects[currentProject].links.github}
              target="_blank"
              className=" py-2 px-4 text-3xl hover:scale-125 transition duration-300 text-gray-200"
            >
              <AiFillGithub />
            </a>
          </div>
        </div>

        {/*  list of buttons */}
        <motion.ul
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="sm:mx-auto md:ml-6 flex flex-wrap flex-row md:flex-col gap-6 justify-center mt-4 md:gap-1"
        >
          {/* mapping projects buttons */}
          {Projects.map((project, index) => (
            <li
              key={index}
              onClick={() => setCurrentProject(index)}
              className={` cursor-pointer text-gray-300 bg-sky-700 rounded-lg p-2 max-w-[100px] hover:bg-sky-800 transition duration-300 font-bold ${
                currentProject === index ? "bg-sky-900" : ""
              }`}
            >
              {project.title}
            </li>
          ))}
          <li></li>
        </motion.ul>
      </motion.div>
    </>
  );
};

export default Portfolio;
