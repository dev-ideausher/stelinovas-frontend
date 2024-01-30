import Marquee from "./Marquee";

const Topbar = () => {
  return (
    <div
      style={{ zIndex: 2 }}
      className="fixed items-center inset-x-0 top-0 h-16 flex-shrink-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-50 clip-trapezium"
    >
      <Marquee />
    </div>
  );
};

export default Topbar;
