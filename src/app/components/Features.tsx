import { motion } from "framer-motion";

const Features = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/images/star-back.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        zIndex: -1,
      }}
      className="features-container"
    >
      <h1 className="text-center">
        <span className="text-4xl text-white">OUR</span>{" "}
        <span className="text-4xl text-[#a88aff]">FEATURES</span>
      </h1>
      <div className="flex">
        <div className="flex-1"></div>
        <div className="flex-1"></div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default Features;
