import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import SingleFeature from "./SingleFeature";

const Features = () => {
  const charControls = useAnimation();
  const leftControls = useAnimation();
  const rightControls = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    enrtyChar: { opacity: 1, rotate: 360 },
    exitChar: { opacity: 0, rotate: 0 },
    entryLeft: { opacity: 1, x: 0 },
    exitLeft: { opacity: 0, x: 200 },
    entryRight: { opacity: 1, x: 0 },
    exitRight: { opacity: 0, x: -200 },
  };

  useEffect(() => {
    if (inView) {
      charControls.start("enrtyChar");
      leftControls.start("entryLeft");
      rightControls.start("entryRight");
    } else {
      charControls.start("exitChar");
      leftControls.start("exitLeft");
      rightControls.start("exitRight");
    }
  }, [inView, charControls, leftControls, rightControls]);

  return (
    <div
      style={{
        backgroundImage: `url("/images/star-back.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        zIndex: -1,
      }}
      className="features-container py-20"
    >
      <h1 className="text-center mb-10">
        <span className="text-4xl text-white">OUR</span>{" "}
        <span className="text-4xl text-[#a88aff]">FEATURES</span>
      </h1>
      <div className="flex">
        <div className="flex-1 flex flex-col items-center justify-evenly">
          <motion.div
            initial="exitLeft"
            animate={leftControls}
            variants={variants}
            transition={{ duration: 1 }}
            className="w-72"
          >
            <SingleFeature />
          </motion.div>
          <motion.div
            initial="exitLeft"
            animate={leftControls}
            variants={variants}
            transition={{ duration: 1 }}
            className="w-72"
          >
            <SingleFeature />
          </motion.div>
        </div>
        <div className=" flex flex-1 justify-center items-start">
          <motion.img
            ref={ref}
            initial="exitChar"
            transition={{
              duration: 1,
            }}
            variants={variants}
            animate={charControls}
            src="/images/char3.png"
            height={500}
            width={300}
            alt="char3"
          />
        </div>
        <div className="flex-1 flex flex-col items-center justify-evenly">
          <motion.div
            initial="exitRight"
            animate={rightControls}
            variants={variants}
            transition={{ duration: 1 }}
            className="w-72"
          >
            <SingleFeature />
          </motion.div>
          <motion.div
            initial="exitRight"
            animate={rightControls}
            variants={variants}
            transition={{ duration: 1 }}
            className="w-72"
          >
            <SingleFeature />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;
