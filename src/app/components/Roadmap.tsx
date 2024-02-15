import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Roadmap = () => {
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
        <div className="col-span-2 md:col-span-2 h-screen order-1 flex flex-col justify-center items-center">
          <p className="text-white">Animation to be added here</p>
        </div>
        <div className="col-span-1 md:col-span-1 order-3 h-screen flex justify-center items-center">
          <Image src="/images/char2.png" width={200} height={400} alt="Char2" />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
