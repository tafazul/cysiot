"use client";

import { motion } from "motion/react";
import Image from 'next/image';

const menuItems = ["Home", "About", "Services", "Portfolio", "Contact"];

const HeaderMenu = () => {


  return (
    <>
      <nav className="p-4">
        <div className="flex w-full">
          <div className="w-1/2 h-[200px]">
            <motion.div
              initial={{ width: 0, height: 0, opacity: 0 }}
              animate={{ width: 200, height: 100, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="rounded-full flex items-center justify-center"
            >
              <Image
                src="/assets/logo-white.png"
                width={200}
                height={100}
                className="hidden md:block"
                alt="Cysiot"
              />
            </motion.div>
          </div>
          <div className="w-1/2">

            <ul className="flex space-x-6">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.1, color: '#FFDAB9' }}
                  initial={{ opacity: 0, x: -10 }} // Initial state: hidden and up
                  animate={{ opacity: 1, x: 0 }}   // Final state: visible and in position
                  transition={{ delay: index * 0.2, duration: 0.5 }} // Staggered animation
                  className="text-lg font-semibold text-white -800 cursor-pointer"
                >
                  <span className="transform hover:scale-110 transition-transform duration-300">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

      </nav>
    </>
  );
};

export default HeaderMenu;
