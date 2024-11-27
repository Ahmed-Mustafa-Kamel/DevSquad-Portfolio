import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import LinkSpan from "./LinkSpan";
import logo2 from "../assets/logo2.png";
import { motion } from "framer-motion";

const NavBar = () => {
  const [Nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!Nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <nav className="flex justify-between text-2xl text-gray-200 items-center max-w-[1300px] px-6 mx-auto h-24">
      {/* website logo */}
      <motion.a
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        href="https://dev-squad-portfolio.vercel.app/"
        className="font-sans font-semibold"
      >
        <img src={logo2} alt="" className="Logo" width={80} />
        {/* Dev Squad */}
      </motion.a>

      {/* navigation bar*/}
      <motion.ul
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex gap-12 z-10 cursor-pointer"
      >
        <li className="relative group">
          <Link to="about" smooth={true} offset={50} duration={500}>
            About
          </Link>
          <LinkSpan />
        </li>

        <li className="relative group">
          <Link to="portfolio" smooth={true} offset={50} duration={500}>
            Portfolio
          </Link>
          <LinkSpan />
        </li>

        <li className="relative group">
          <Link to="Members" smooth={true} offset={50} duration={500}>
            Team
          </Link>
          <LinkSpan />
        </li>
      </motion.ul>

      <div className="md:hidden z-30 cursor-pointer" onClick={toggleNav}>
        {Nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* navigation bar mobile*/}
      <div
        className={
          Nav
            ? "text-center z-10 fixed h-full w-full left-0 top-0 bg-[#030617]/80 cursor-pointer"
            : " fixed left-[-100%] cursor-pointer"
        }
      >
        <ul className="font-semibold text-4xl space-y-8 mt-24">
          <li>
            <Link
              to="about"
              onClick={closeNav}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="portfolio"
              onClick={closeNav}
              smooth={true}
              offset={50}
              duration={500}
            >
              Portfolio
            </Link>
          </li>

          <li>
            <Link
              to="Members"
              onClick={closeNav}
              smooth={true}
              offset={50}
              duration={500}
            >
              Team
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
