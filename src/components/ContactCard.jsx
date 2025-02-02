import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight } from "react-icons/fi";
import { SiGithub} from "react-icons/si";
import profilePhoto from "../assets/profile.jpg";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaMediumM } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

export const ContactCard = () => {
  return (
    <div className="bg-transparen tpy-12 text-zinc-50">
      {/* <Logo /> */}
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4">
        <HeaderBlock />
        <SocialsBlock />
        {/* <AboutBlock /> */}
        {/* <LocationBlock /> */}
        {/* <EmailListBlock /> */}
      </motion.div>
      {/* <Footer /> */}
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <img
      src={profilePhoto}
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Let's Connect.{" "}
      <span className="text-zinc-400">
        Looking forward to connecting with you.
      </span>
    </h1>
    <a
      href="https://www.linkedin.com/in/baluchandrasekhar/"
      target="_blank"
      className="flex items-center gap-1 text-red-300 hover:underline">
      Contact me <FiArrowRight />
    </a>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-red-500 md:col-span-3">
      <a
        href="mailto:balusekhar8@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="grid h-full place-content-center text-3xl text-white">
        <MdOutlineMailOutline />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-green-600 md:col-span-3">
      <a
        href="https://github.com/Balusekhar"
        target="_blank"
        rel="noopener noreferrer"
        className="grid h-full place-content-center text-3xl text-white">
        <SiGithub />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-zinc-50 md:col-span-3">
      <a
        href="https://medium.com/@balusekhar8"
        target="_blank"
        rel="noopener noreferrer"
        className="grid h-full place-content-center text-3xl text-black">
        <FaMediumM />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-blue-500 md:col-span-3">
      <a
        href="https://www.linkedin.com/in/baluchandrasekhar/"
        target="_blank"
        rel="noopener noreferrer"
        className="grid h-full place-content-center text-3xl text-white">
        <FaLinkedinIn />
      </a>
    </Block>
  </>
);

export default SocialsBlock;