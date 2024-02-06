"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";

const About = () => {
  const controls = useAnimation();
  const divcontrols = useAnimation();
  const [ref, inView] = useInView();
  const imgVariants = {
    entry: { scale: 1.2, opacity: 1, x: 300, rotate: 360 },
    exit: { scale: 1.8, opacity: 1, x: 0, rotate: 0 },
  };
  const divVariants = {
    entry: { opacity: 1, scale: 1, x: -300 },
    exit: { opacity: 0, scale: 0, x: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("entry");
      divcontrols.start("entry");
    } else {
      controls.start("exit");
      divcontrols.start("exit");
    }
  }, [inView, controls, divcontrols]);

  return (
    <div className="about-container">
      <motion.img
        className="about-coin"
        src="/images/big-coin.png"
        ref={ref}
        initial="exit"
        variants={imgVariants}
        animate={controls}
        transition={{
          duration: 2,
        }}
      />
      <motion.div
        ref={ref}
        initial="exit"
        animate={divcontrols}
        variants={divVariants}
        transition={{
          duration: 2,
        }}
        className="about-text"
      >
        <h1 className="text-4xl text-white mb-2">
          WHAT IS <br /> ICO OSCAR COIN?
        </h1>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde,
          corrupti! Itaque distinctio placeat sed optio necessitatibus voluptate
          sequi alias reiciendis totam, voluptas officia. Molestiae quasi cumque
          vitae corrupti fugiat in.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
