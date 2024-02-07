"use client";

import Image from "next/image";
import Link from "next/link";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import { BsEnvelope } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Error from "../signup/components/Error";
import { useState, useEffect } from "react";
import { auth } from "../../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useFirebaseContext } from "../../contexts/firebaseContext";
import { toast } from "react-toastify";
type formData = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const { user, setUser } = useFirebaseContext();
  console.log("Login page ", user);
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [router, user]);
  const [showPassword, setShowPassword] = useState(false);

  const schema: ZodType<formData> = z.object({
    email: z.string().email(),
    password: z.string().min(5).max(20),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(schema),
  });

  const submitData = async (data: formData) => {
    try {
      const currUser = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log("Signed In ", currUser);
      toast.success(`Welcome ${currUser.user.displayName}!`, {
        position: "top-right",
      });
      setUser(currUser.user);
      router.push("/");
    } catch (error: any) {
      toast.error(error.message, {
        position: "top-right",
      });
      console.log(error.message);
    }
  };

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
        <form
          onSubmit={handleSubmit(submitData)}
          className="col-span-6 flex items-center flex-col pt-48"
        >
          <h1 className="text-4xl text-[#a88aff] font-bold pb-10">LOGIN</h1>
          <div className="coin-input-container mb-5">
            <input
              className="coin-input"
              type="email"
              placeholder="Email"
              {...register("email")}
              autoComplete="off"
            />
            <BsEnvelope className="gold-coin text-white text-4xl pl-2" />
          </div>
          <div className="coin-input-container mb-5">
            <input
              className="coin-input"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password")}
              autoComplete="off"
            />
            <CiLock className="gold-coin text-4xl text-white pl-2" />
            {showPassword ? (
              <FaRegEyeSlash
                onClick={() => setShowPassword(!showPassword)}
                className="passwd-eye text-white text-2xl"
              />
            ) : (
              <FaRegEye
                onClick={() => setShowPassword(!showPassword)}
                className="passwd-eye text-white text-2xl"
              />
            )}
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
          {errors.email && <Error msg={errors.email.message} />}
          {errors.password && <Error msg={errors.password.message} />}
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
        </form>

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
