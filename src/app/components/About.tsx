"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useState } from "react";
import useScreenWidth from "../hooks/useScreenWidth";

const About = () => {
  const width = useScreenWidth();
  const smallScreen = width < 1200;
  const controls = useAnimation();
  const divcontrols = useAnimation();
  const [ref, inView] = useInView();
  const imgVariants = {
    entry: { scale: 1.2, opacity: 1, x: 300, rotate: 360 },
    exit: { scale: 1.6, opacity: 1, x: 0, rotate: 0 },
    mobileEntry: { scale: 1, opacity: 1, y: 150, rotate: 360 },
    mobileExit: { scale: 0.8, opacity: 1, y: 0, rotate: 0 },
  };
  const divVariants = {
    entry: { opacity: 1, scale: 1, x: -300 },
    exit: { opacity: 0, scale: 0, x: 0 },
    mobileEntry: { opacity: 1, scale: 1, y: -200 },
    mobileExit: { opacity: 0, scale: 0, y: 0 },
  };

  useEffect(() => {
    if (inView) {
      if (smallScreen) {
        controls.start("mobileEntry");
        divcontrols.start("mobileEntry");
      } else {
        controls.start("entry");
        divcontrols.start("entry");
      }
    } else {
      if (smallScreen) {
        controls.start("mobileExit");
        divcontrols.start("mobileExit");
      } else {
        controls.start("exit");
        divcontrols.start("exit");
      }
    }
  }, [inView, controls, divcontrols, smallScreen]);

  return (
    <div className="bg-[#0f053b] h-screen flex sm:flex-col md:flex-row relative items-center justify-center">
      <motion.img
        className="about-coin"
        src="/images/big-coin.png"
        ref={ref}
        initial={smallScreen ? `mobileExit` : `exit`}
        variants={imgVariants}
        animate={controls}
        transition={{
          duration: 2,
        }}
      />
      <motion.div
        ref={ref}
        initial={smallScreen ? `mobileExit` : `exit`}
        animate={divcontrols}
        variants={divVariants}
        transition={{
          duration: 2,
        }}
        className="about-text w-64  md:w-96"
      >
        <h1 className="text-2xl md:text-4xl text-white mb-2 font-bold">
          INTERSTELLAR SUPREMACY
        </h1>
        <p className="text-white text-sm md:text-base">
          Jump into <span className="text-[#a88aff]">Stellar Coliseum</span> –
          it&apos;s you vs. the galaxy in real-time PvP duels! Command a cast of
          cosmic characters and customize your game for glory. In our blockchain
          universe, what you earn and conquer, you truly own. Rise from battle
          to hero, as you master this cosmic universe. Ready to make your move?
        </p>
      </motion.div>
    </div>
  );
};

export default About;
