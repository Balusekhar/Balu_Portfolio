import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const SlideTabsExample = () => {
  return (
    <div className="bg-transparent py-2 w-full text-center">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-gray-200 p-1">
      <Tab setPosition={setPosition} href="#home">
        Home
      </Tab>
      <Tab setPosition={setPosition} href="#projects">
        Projects
      </Tab>
      <Tab setPosition={setPosition} href="#education">
        Experience
      </Tab>
      <Tab setPosition={setPosition} href="#contact">
        Contact
      </Tab>
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, href }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase hover:text-black text-black md:px-5 md:py-3 md:text-base">
      <a href={href} className="w-full h-full block">
        {children}
      </a>
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-[#fd406a] text-white md:h-12"
    />
  );
};
