import Image from "next/image";
import Link from "next/link";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import { BsEnvelope } from "react-icons/bs";
import { CiLock, CiUser } from "react-icons/ci";

import { FaRegEye } from "react-icons/fa6";

export default function SignupPage() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <div
        className="signup-container py-10 grid grid-cols-12"
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
          <h1 className="text-4xl text-[#a88aff] font-bold pb-10">SIGNUP</h1>
          <div className="coin-input-container mb-5">
            <input className="coin-input" type="text" placeholder="Name" />
            <CiUser className="gold-coin text-white text-4xl pl-2" />
          </div>
          <div className="coin-input-container mb-5">
            <input className="coin-input" type="email" placeholder="Email" />
            <BsEnvelope className="gold-coin text-white text-4xl pl-2" />
          </div>
          <div className="coin-input-container mb-5">
            <input className="coin-input" type="text" placeholder="Password" />
            <CiLock className="gold-coin text-4xl text-white pl-2" />
            <FaRegEye className="passwd-eye text-white text-2xl" />
          </div>
          <div className="coin-input-container mb-5">
            <input
              className="coin-input"
              type="text"
              placeholder="Confirm password"
            />
            <CiLock className="gold-coin text-4xl text-white pl-2" />
            <FaRegEye className="passwd-eye text-white text-2xl" />
          </div>

          <button className="wallet-btn mb-5">
            <div className="btn-content font-bold">Signup</div>
          </button>
          <div className="text-white">
            Already have an account?{" "}
            <Link href="/login" className="text-[#a88aff]">
              Login
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
