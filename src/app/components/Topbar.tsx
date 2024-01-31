import Marquee from "./Marquee";

const Topbar = () => {
  const text =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus recusandae illum veniam repudiandae voluptatem dolorem officiis illo in Commodi doloribus deserunt velit recusandae, cumque earumvoluptatem ipsam eligendi maiores odit.";
  return (
    <div
      style={{ zIndex: 2 }}
      className="fixed items-center inset-x-0 top-0 h-16 flex-shrink-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-50 clip-trapezium"
    >
      <Marquee text={text} size="text-base" />
    </div>
  );
};

export default Topbar;
