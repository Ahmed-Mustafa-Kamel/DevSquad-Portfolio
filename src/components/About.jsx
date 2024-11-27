import AboutImg from "../assets/about.png";
import {
  DiHtml5,
  DiCss3,
  DiNodejs,
  DiReact,
  DiPhp,
  DiLaravel,
  DiPython,
  DiDjango,
} from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { TbBrandJavascript } from "react-icons/tb";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      className=" max-w-[1300px] mx-auto mb-40 p-6 grid md:grid-cols-2 gap-8 place-items-center md:mt-80"
      id="about"
    >
      {/* image */}
      <div
        // initial={{ x: -100, opacity: 0 }}
        // whileInView={{ x: 0, opacity: 1 }}
        // viewport={{ once: true }}
        // transition={{ duration: 0.8 }}
        className="relative  group hidden md:block"
      >
        <div className=" w-full h-full absolute -inset-1 bg-gradient-to-r from-sky-100 to-sky-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>

        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
          <img src={AboutImg} alt="" className="rounded-lg md:max-w-[500px]:" />
        </div>
      </div>

      {/* text & (skills in webView) */}
      <div className=" p-6">
        <h2 className=" text-gray-200 text-lg md:text-3xl font-bold mb-4">
          About Us
        </h2>

        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className=" text-gray-300 text-sm md:text-lg"
        >
          We are a skilled web development team with expertise in front-end and
          back-end technologies, including HTML, CSS, JavaScript, React,
          Node.js, PHP, Python, Django, and database systems like MySQL and
          MongoDB. With two years of experience delivering high-quality,
          scalable, and user-friendly web solutions, we specialize in creating
          responsive designs, interactive applications, and robust server-side
          functionality to meet diverse client needs
        </motion.p>

        {/* languages and technologies mobileView */}
        <h2 className=" text-gray-200 text-lg md:text-3xl font-bold my-4 ">
          Our Skills
        </h2>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:flex bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 flex flex-wrap justify-center gap-8 text-4xl"
        >
          <DiHtml5 className="text-orange-600" />
          <DiCss3 className="text-blue-600" />
          <FaBootstrap className="text-purple-600" />
          <RiTailwindCssFill className="text-sky-600" />
          <TbBrandJavascript className="text-yellow-500" />
          <DiNodejs className="text-green-600" />
          <DiReact className="text-sky-500" />
          <DiPhp className="text-blue-900" />
          <DiLaravel className="text-red-600" />
          <DiPython className="text-yellow-600" />
          <DiDjango className="text-green-800" />
          <SiMysql className="text-gray-200" />
          <BiLogoMongodb className="text-green-600" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
