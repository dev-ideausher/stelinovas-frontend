"use client";

import Image from "next/image";
import Link from "next/link";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import { BsEnvelope } from "react-icons/bs";
import { CiLock, CiUser } from "react-icons/ci";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Error from "./components/Error";

type formData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const schema: ZodType<formData> = z
    .object({
      name: z.string().min(2).max(30),
      email: z.string().email(),
      password: z.string().min(5).max(20),
      confirmPassword: z.string().min(5).max(20),
    })
    .refine((data: formData) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(schema),
  });

  const submitData = (data: formData) => {
    console.log(data);
  };

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
        <form
          onSubmit={handleSubmit(submitData)}
          className="col-span-6 flex items-center flex-col pt-48"
        >
          <h1 className="text-4xl text-[#a88aff] font-bold pb-10">SIGNUP</h1>
          <div className="coin-input-container mb-5">
            <input
              className="coin-input"
              type="text"
              placeholder="Name"
              {...register("name")}
              autocomplete="off"
            />
            <CiUser className="gold-coin text-white text-4xl pl-2" />
          </div>
          <div className="coin-input-container mb-5">
            <input
              className="coin-input"
              type="email"
              placeholder="Email"
              {...register("email")}
              autocomplete="off"
            />
            <BsEnvelope className="gold-coin text-white text-4xl pl-2" />
          </div>
          <div className="coin-input-container mb-5">
            <input
              className="coin-input"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password")}
              autocomplete="off"
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
          <div className="coin-input-container mb-5">
            <input
              className="coin-input"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm password"
              {...register("confirmPassword")}
              autocomplete="off"
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

          {errors.name && <Error msg={errors.name.message} />}
          {errors.email && <Error msg={errors.email.message} />}
          {errors.password && <Error msg={errors.password.message} />}
          {errors.confirmPassword && (
            <Error msg={errors.confirmPassword.message} />
          )}
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
