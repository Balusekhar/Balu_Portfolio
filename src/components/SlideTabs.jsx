import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const SlideTabsExample = () => {
  return (
    <div className="bg-transparent py-2">
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
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1">
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Projects</Tab>
      <Tab setPosition={setPosition}>Experience</Tab>
      <Tab setPosition={setPosition}>contact</Tab>
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
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
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase hover:text-white text-black md:px-5 md:py-3 md:text-base">
      {children}
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
