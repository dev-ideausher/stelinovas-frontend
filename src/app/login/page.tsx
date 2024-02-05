import Image from "next/image";
import Link from "next/link";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import { BsEnvelope } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa6";

export default function LoginPage() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <div
        className="login-container py-10 grid grid-cols-12"
        style={{
          backgroundImage: `url("/images/star-back.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        }}
      >
        <div className="col-span-3 flex items-center justify-center">
          <Image src="/images/char4.png" height={220} width={220} alt="char4" />
        </div>
        <div className="col-span-6 flex items-center flex-col pt-48">
          <h1 className="text-4xl text-[#a88aff] font-bold pb-10">LOGIN</h1>
          <div className="coin-input-container mb-5">
            <input className="coin-input" type="email" placeholder="Email" />
            <BsEnvelope className="gold-coin text-white text-4xl pl-2" />
          </div>
          <div className="coin-input-container mb-5">
            <input className="coin-input" type="text" placeholder="Password" />
            <CiLock className="gold-coin text-4xl text-white pl-2" />
            <FaRegEye className="passwd-eye text-white text-2xl" />
          </div>
          <div className="ml-auto mr-12 mb-5">
            <p className="text-white">Forgot password?</p>
          </div>
          <div className="mr-auto ml-12 mb-5">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="link-checkbox"
              className="ms-2 text-lg text-gray-900 dark:text-gray-300"
            >
              Click on this if you agree to our{" "}
              <span className="font-bold underline">privacy and policy</span>
            </label>
          </div>
          <button className="wallet-btn mb-5">
            <div className="btn-content font-bold">Login</div>
          </button>
          <div className="text-white">
            Didn{"'"}t have an account?{" "}
            <Link href="/signup" className="text-[#a88aff]">
              Signup
            </Link>{" "}
            here
          </div>
        </div>

        <div className="col-span-3 flex items-center justify-center">
          <Image
            src="/images/running.gif"
            width={500}
            height={500}
            alt="3dicons"
          />
        </div>
      </div>
    </div>
  );
}
