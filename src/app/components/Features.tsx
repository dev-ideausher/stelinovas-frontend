import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Features = () => {
  const charControls = useAnimation();
  const leftUp = useAnimation();
  const leftDown = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    enrty: { opacity: 1, rotate: 360 },
    exit: { opacity: 0, rotate: 0 },
  };

  useEffect(() => {
    if (inView) {
      charControls.start("enrty");

      // leftUp.start({
      //   opacity: 1,
      //   x: -100,
      //   scale: 1.2,
      // });
      // leftDown.start({
      //   opacity: 1,
      //   x: 100,
      //   scale: 1.2,
      // });
    } else {
      charControls.start("exit");
    }
  }, [inView, charControls]);

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
        <div className="flex-1 flex flex-col items-end justify-evenly">
          <motion.h1
          // ref={ref}
          // initial={{ opacity: 0, scale: 0.2 }}
          // animate={leftUp}
          // transition={{}}
          >
            A
          </motion.h1>
          <motion.h1
          // ref={ref}
          // initial={{ opacity: 0, scale: 0.2 }}
          // animate={leftDown}
          >
            B
          </motion.h1>
        </div>
        <div className=" flex flex-1 justify-center items-start">
          <motion.img
            ref={ref}
            initial="exit"
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
        <div className="flex-1 flex flex-col items-start justify-evenly">
          <h1>A</h1>
          <h1>B</h1>
        </div>
      </div>
    </div>
  );
};

export default Features;
