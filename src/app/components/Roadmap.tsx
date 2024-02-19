import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
      className="bg-[#0f053b]"
    >
      <h1 className="text-center">
        <span className="text-4xl text-white">OUR</span>{" "}
        <span className="text-4xl text-[#a88aff]">ROADMAP</span>
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#0f053b]">
        <div className="col-span-1 md:col-span-1 order-2 md:order-1 h-screen flex justify-center items-center">
          <Image src="/images/char1.png" width={200} height={400} alt="Char1" />
        </div>

        <motion.div
          ref={ref}
          variants={variants}
          animate={controls}
          initial="exit"
          transition={{
            duration: 3,
          }}
          className="col-span-2 md:col-span-2 h-screen order-1 flex flex-col justify-center items-start px-7"
        >
          <div className="  p-5 bg-wallet-btn rounded-md border-2 border-[#a88aff] text-white flex justify-center items-center gap-5">
            <div className="text-3xl">1</div>
            <div>
              First, Install the Metamask wallet to get the coins. Here is a
              tutorial for you to check for the whole Installation and setup.
            </div>
          </div>

          <div className="w-1 h-28 bg-gray-400 ml-8"></div>

          <div className="p-5 bg-wallet-btn rounded-md  border-2 border-[#a88aff]  text-white flex justify-center items-center gap-5">
            <div className="text-3xl">2</div>
            <div>Login to Metamask wallet</div>
          </div>

          <div className="w-1 h-28 bg-gray-400 ml-8"></div>

          <div className="p-5 bg-wallet-btn rounded-md border-2 border-[#a88aff] text-white flex items-center justify-center gap-5">
            <div className="text-3xl">3</div>
            <div> Check your network</div>
          </div>
        </motion.div>

        <div className="col-span-1 md:col-span-1 order-3 h-screen flex justify-center items-center">
          <Image src="/images/char2.png" width={200} height={400} alt="Char2" />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
