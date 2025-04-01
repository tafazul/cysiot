"use client";

import HeaderMenu from "./header-menu";
import Image from 'next/image';
import TypingEffect from "./components/typingEffect";
import { motion } from "motion/react";

const LandingSection = () => {
  return (
    // <>
    // <HeaderMenu />
    // <video autoPlay loop muted className='w-full h-screen z-10'>
    //         <source src='/assets/landinganime.mp4' type='video/mp4' />
    //       </video>
    // </>
    <div className="relative w-full h-screen">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/assets/landinganime.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content over the video */}
      <div className="relative">
        <HeaderMenu />
        <div className="flex w-full">
          <span className="w-1/2">
            <div className="px-8">
              <TypingEffect text="FOORTIFYING THE FUTURE : SECURITY BEYOND LIMITS" speed={100} />
            </div>

          </span>
          <div className="w-1/2">
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: [100, -50, 0] }} // Moves left, then right, then settles
              transition={{ duration: 5, ease: "easeInOut" }}
              className="relative"
            >
              <Image
                src="/assets/lock.png"
                width={800}
                height={400}
                className="hidden md:block"
                alt="Cysiot"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default LandingSection;
