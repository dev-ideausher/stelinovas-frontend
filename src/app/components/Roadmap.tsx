import Image from "next/image";

const Roadmap = () => {
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
          <p className="text-white">Animation to be added here</p>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <Image src="/images/char2.png" width={250} height={500} alt="Char2" />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
