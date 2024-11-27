import Logo from "../assets/logo1.jpg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className=" grid md:grid-cols-2 place-items-center max-w-[1500px] mx-auto mb-80 md:mb-32 mt-14">
      {/* hero image */}
      <motion.img
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
        src={Logo}
        alt="Web Wizards Logo"
        className="Logo w-[500px] block md:hidden"
      />

      {/* left div */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className=" max-w-[800px]"
      >
        <p className="text-gray-200 md:text-6xl text-3xl tracking-tight">
          Hey, We Are
          <br />
          <span className="font-sans font-bold text-sky-400">Dev Squad</span>
          <br />
          <TypeAnimation
            sequence={["FrontEnd", 1000, "BackEnd", 1000, "FullStack", 1000]}
            speed={50}
            repeat={Infinity}
            className="font-bold font-sans"
          />
        </p>

        <h2 className="text-gray-200">with 3+ years of experience</h2>

        {/* cv and view work */}
        <div className=" flex flex-row gap-4 mb-4 md:mb-0">
          {/* cv */}
          <a
            href={""}
            target="_blank"
            className=" cursor-pointer text-center font-bold text-gray-200 w-1/2 mt-6 p-2 bg-gradient-to-r from-[#28d9f1] via-[#20bdf3] to-[#25b0f1] rounded-xl transform transition-transform hover:scale-105"
          >
            Download CV
          </a>
          {/* view work */}
          <Link
            to="portfolio"
            className="cursor-pointer text-center font-bold text-gray-200 w-1/2 mt-6 p-2 border border-gray-400 rounded-xl transform transition-transform hover:scale-105"
          >
            view Work
          </Link>
        </div>
      </motion.div>
      {/* 


      {/* hero image */}
      <motion.img
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
        src={Logo}
        alt="Web Wizards Logo"
        className="Logo w-[500px] hidden md:block"
      />
    </div>
  );
};

export default Hero;
