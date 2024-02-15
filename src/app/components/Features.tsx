import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import SingleFeature from "./SingleFeature";
import useScreenWidth from "../hooks/useScreenWidth";

const Features = () => {
  const width = useScreenWidth();
  const mobileScreen = width < 1200;
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

    mentryLeft: { opacity: 1, x: 0 },
    mexitLeft: { opacity: 0, x: 0 },
    mentryRight: { opacity: 1, x: 0 },
    mexitRight: { opacity: 0, x: 0 },
  };

  useEffect(() => {
    if (inView) {
      charControls.start("enrtyChar");
      if (mobileScreen) {
        leftControls.start("mentryLeft");
        rightControls.start("mentryRight");
      } else {
        leftControls.start("entryLeft");
        rightControls.start("entryRight");
      }
    } else {
      charControls.start("exitChar");
      if (mobileScreen) {
        leftControls.start("mexitLeft");
        rightControls.start("mexitRight");
      } else {
        leftControls.start("exitLeft");
        rightControls.start("exitRight");
      }
    }
  }, [inView, charControls, leftControls, rightControls, mobileScreen]);

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
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 flex flex-col items-center justify-evenly">
          <motion.div
            initial={mobileScreen ? "mexitLeft" : "exitLeft"}
            animate={leftControls}
            variants={variants}
            transition={{ duration: 1 }}
            className="w-72 pt-5"
          >
            <SingleFeature />
          </motion.div>
          <motion.div
            initial={mobileScreen ? "mexitLeft" : "exitLeft"}
            animate={leftControls}
            variants={variants}
            transition={{ duration: 1 }}
            className="w-72 pt-5"
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
            height={mobileScreen ? 250 : 500}
            width={mobileScreen ? 150 : 300}
            alt="char3"
          />
        </div>

        <div className="flex-1 flex flex-col items-center justify-evenly">
          <motion.div
            initial={mobileScreen ? "mexitRight" : "exitRight"}
            animate={rightControls}
            variants={variants}
            transition={{ duration: 1 }}
            className="w-72 pt-5"
          >
            <SingleFeature />
          </motion.div>
          <motion.div
            initial={mobileScreen ? "mexitRight" : "exitRight"}
            animate={rightControls}
            variants={variants}
            transition={{ duration: 1 }}
            className="w-72 pt-5"
          >
            <SingleFeature />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;
