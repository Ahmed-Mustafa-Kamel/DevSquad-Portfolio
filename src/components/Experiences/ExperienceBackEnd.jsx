import BackEndImg from "../../assets/backendimg.png";
import {
  //   DiJavascript1,
  //   DiNodejs,
  DiPhp,
  DiLaravel,
  DiPython,
  DiDjango,
} from "react-icons/di";

// import { SiMysql } from "react-icons/si";
// import { BiLogoMongodb } from "react-icons/bi";
import { TbBrandJavascript } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

const ExperienceBackEnd = () => {
  return (
    <div className="max-w-[1300px] mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center mb-40">
      {/* image */}
      <motion.div
        initial={{ x: -100, y: 100, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative  group hidden md:block"
      >
        <div className=" w-full h-full absolute -inset-1 bg-gradient-to-r from-sky-100 to-blue-800 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>

        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
          <img
            src={BackEndImg}
            alt="frond end"
            className="rounded-lg md:max-w-[500px]:"
          />
        </div>
      </motion.div>

      {/* text & skills */}
      <motion.div
        initial={{ x: 100, y: -100, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className=" p-6"
      >
        <h2 className=" text-gray-200 text-3xl font-bold mb-4">
          BackEnd Experience
        </h2>

        <p className=" text-gray-300">
          Skilled in building robust, scalable backend systems using the latest
          server-side technologies.
        </p>

        {/* languages and technologies*/}
        <div className="flex flex-wrap gap-4 text-4xl">
          <DiPhp className="text-blue-900" />
          <DiLaravel className="text-red-600" />
          <TbBrandJavascript className="text-yellow-500" />
          <SiExpress className="text-gray-200" />
          <DiPython className="text-yellow-600" />
          <DiDjango className="text-green-800" />
        </div>
      </motion.div>

      {/* image */}
      <motion.div
        initial={{ x: -100, y: 100, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative  group block md:hidden "
      >
        <div className=" w-full h-full absolute -inset-1 bg-gradient-to-r from-sky-100 to-blue-800 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>

        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
          <img
            src={BackEndImg}
            alt="frond end"
            className="rounded-lg md:max-w-[500px]:"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceBackEnd;
