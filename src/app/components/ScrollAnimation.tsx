"use client";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { useState } from "react";
import useScreenWidth from "../hooks/useScreenWidth";
export default function ScrollAnimation() {
  const width = useScreenWidth();
  const [progress, setProgress] = useState(0);
  const { scrollYProgress } = useScroll();
  console.log(progress);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (width < 1200) {
      if (latest > 0.1) {
        setProgress(latest - 0.1);
      }
    } else {
      if (latest > 0.2) {
        setProgress(latest - 0.2);
      }
    }
  });
  return (
    <motion.div
      style={{
        height: `${progress * (progress < 0.37 ? 1600 : 200)}px`,
        backgroundColor: "white",
        width: "1rem",
      }}
    />
  );
}
