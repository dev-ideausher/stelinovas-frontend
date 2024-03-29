"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { BsEnvelope } from "react-icons/bs";
import { CiLock, CiUser } from "react-icons/ci";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import Error from "./components/Error";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../config/firebase";
import { useRouter } from "next/navigation";
import { useFirebaseContext } from "../../contexts/firebaseContext";
import { toast } from "react-toastify";

type formData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignupPage() {
  const { user, setUser } = useFirebaseContext();
  console.log("Signup page ", user);
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [router, user]);
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

  const submitData = async (data: formData) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const currUser = userCredential.user;
      await updateProfile(currUser, {
        displayName: data.name,
      });
      setUser(currUser);
      toast.success(`Welcome ${currUser.displayName}!`, {
        position: "top-right",
      });
      console.log("User created successfully with display name:", data.name);
      router.push("/");
    } catch (error: any) {
      toast.error(error.message, {
        position: "top-right",
      });
      console.error("Error creating user:", error.message);
    }
  };

  return (
    <div>
      <div className="w-screen flex justify-center ">
        <Navbar />
      </div>
      <div
        className="signup-container py-10 grid grid-cols-12"
        style={{
          backgroundImage: `url("/images/star-back.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        }}
      >
        <div className="hidden sm:block sm:col-span-3 flex items-center justify-center">
          <Image src="/images/char4.png" height={220} width={220} alt="char4" />
        </div>
        <form
          onSubmit={handleSubmit(submitData)}
          className="col-span-12 sm:col-span-6 flex items-center flex-col pt-24 md:pt-48"
        >
          <h1 className="text-4xl text-[#a88aff] font-bold pb-10">SIGNUP</h1>
          <div className="coin-input-container mb-5">
            <input
              className="coin-input"
              type="text"
              placeholder="Name"
              {...register("name")}
              autoComplete="off"
            />
            <CiUser className="gold-coin text-white text-4xl pl-2" />
          </div>
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
          <div className="coin-input-container mb-5">
            <input
              className="coin-input"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm password"
              {...register("confirmPassword")}
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

        <div className="hidden sm:block sm:col-span-3 flex items-center justify-center">
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
