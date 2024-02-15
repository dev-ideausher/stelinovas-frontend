"use client";
import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Meet from "./components/Meet";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Products from "./components/Products";
import Roadmap from "./components/Roadmap";
import { auth } from "../../config/firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseProvider } from "@/contexts/firebaseContext";

export default function Home() {
  const screenWidth = typeof window !== "undefined" && window.innerWidth;
  console.log(typeof screenWidth);
  return (
    // <FirebaseProvider>
    <div>
      <div className="w-screen flex justify-center">
        <Navbar />
      </div>
      <div>
        <Meet />
      </div>
      {/* <div className="h-screen">
        <About />
      </div> */}
      <div>
        <Roadmap />
      </div>
      {/* <div className="h-screen">
        <Features />
      </div> */}
      <div>
        <Partners />
      </div>
      <div>
        <Products />
      </div>
      {/* <div className="h-screen">
        <Contact />
      </div> */}
    </div>
    // </FirebaseProvider>
  );
}
