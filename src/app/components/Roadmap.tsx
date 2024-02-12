import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Roadmap = () => {
  // const [scrollPosition, setScrollPosition] = useState(0); // Track scroll position

  // useEffect(() => {
  //   const handleScroll = () => setScrollPosition(window.scrollY);
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // // Calculate progress based on scroll position and content height
  // const progress = Math.min(scrollPosition / document.body.scrollHeight, 1);
  return (
    <div
      style={{
        backgroundImage: `url("/images/star-back.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        zIndex: -1,
      }}
      className="roadmap-container"
    >
      <h1 className="text-center">
        <span className="text-4xl text-white">OUR</span>{" "}
        <span className="text-4xl text-[#a88aff]">ROADMAP</span>
      </h1>
      <div className="flex">
        <div className="flex flex-1 justify-center items-center">
          <Image src="/images/char1.png" width={250} height={500} alt="Char1" />
        </div>
        <div className="flex-1 flex justify-center pt-32">
           <p className="text-white">Animation to be added here</p> */}
          {/* <motion.div
            animate={{ height: `${progress * 100}vh` }} // Animation: height based on progress
            style={{ width: "5px", backgroundColor: "blue" }} // Set bar width and color
          /> */}
        </div>
        <div className="flex flex-1 justify-center items-center">
          <Image src="/images/char2.png" width={250} height={500} alt="Char2" />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
