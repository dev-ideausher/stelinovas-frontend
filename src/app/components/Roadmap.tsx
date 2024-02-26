import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ScrollAnimation from "./ScrollAnimation";

const Roadmap = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const variants = {
    entry: { opacity: 1 },
    exit: { opacity: 0 },
  };
  useEffect(() => {
    if (inView) {
      controls.start("entry");
    } else {
      controls.start("exit");
    }
  }, [inView, controls]);

  return (
    <div
      style={{
        backgroundImage: `url("/images/star-back.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        zIndex: -1,
      }}
      className="bg-[#0f053b] py-10"
    >
      <h1 className="text-center">
        <span className="text-4xl text-white">OUR</span>{" "}
        <span className="text-4xl text-[#a88aff]">ROADMAP</span>
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#0f053b]">
        <div className="col-span-1 md:col-span-1 order-2 md:order-1 h-screen flex justify-center items-center">
          <Image src="/images/char1.png" width={200} height={400} alt="Char1" />
        </div>
        <div className="col-span-2 md:col-span-2 h-screen order-1 flex flex-col justify-start items-center px-7 py-20">
          <div style={{ zIndex: 0, position: "absolute" }}>
            <ScrollAnimation />
          </div>
          <motion.div
            ref={ref}
            variants={variants}
            animate={controls}
            initial="exit"
            transition={{
              duration: 1,
            }}
            style={{ zIndex: 1, position: "absolute" }}
            className="col-span-2 md:col-span-2 h-screen order-1 w-96 flex flex-col justify-between items-center px-7"
          >
            <div className="  p-5  rounded-md  bg-[#a88aff] text-white flex justify-center items-center gap-5">
              <div className="text-3xl text-[#0f053b] font-bold">1</div>
              <div className="font-semibold">
                Install the Metamask wallet to get the coins. Here is a{" "}
                <span className="text-[#0f053b] cursor-pointer hover:underline">
                  tutorial
                </span>{" "}
                for you to check for the whole Installation and setup.
              </div>
            </div>

            <div className="p-5  rounded-md   bg-[#a88aff]  text-white flex justify-center items-center gap-5">
              <div className="text-3xl text-[#0f053b] font-bold">2</div>
              <div className="font-semibold">Login to Metamask wallet</div>
            </div>

            <div className="p-5  rounded-md bg-[#a88aff] text-white flex items-center justify-center gap-5">
              <div className="text-3xl text-[#0f053b] font-bold">3</div>
              <div className="font-semibold"> Check your network</div>
            </div>
          </motion.div>
        </div>

        <div className="col-span-1 md:col-span-1 order-3 h-screen flex justify-center items-center">
          <Image src="/images/char2.png" width={200} height={400} alt="Char2" />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
