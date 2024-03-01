import Link from "next/link";
import { BsTwitterX, BsDiscord } from "react-icons/bs";

const Community = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/images/bg.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        zIndex: -1,
      }}
      className=" flex flex-col bg-[#0f053b] h-auto"
    >
      <h1 className="text-center mb-10 pt-10">
        <span className="text-4xl text-white">JOIN OUR</span>{" "}
        <span className="text-4xl text-[#a88aff]">COMMUNITY</span>
      </h1>
      <div className="flex flex-col md:flex-row w-full justify-evenly items-center">
        <Link href="https://twitter.com/?lang=en" target="_blank">
          <div className="flex items-center justify-center flex-col p-10 h-40 w-40 rounded-full cursor-pointer hover:bg-black bg-navbar-bg-color my-10 md:my-20">
            <BsTwitterX className="text-white text-6xl" />
            <p className="text-white">Twitter</p>
          </div>
        </Link>
        <Link href="https://discord.gg/k9n4Zgqw" target="_blank">
          <div className="flex items-center justify-center flex-col p-10 h-40 w-40 rounded-full cursor-pointer hover:bg-[#a88aff] bg-navbar-bg-color my-10 md:my-20">
            <BsDiscord className="text-white text-6xl" />
            <p className="text-white">Discord</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Community;
