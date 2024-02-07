"use client";
import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Meet from "./components/Meet";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Products from "./components/Products";
import Roadmap from "./components/Roadmap";
import Topbar from "./components/Topbar";
import { auth } from "../../config/firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseProvider } from "@/contexts/firebaseContext";

export default function Home() {
  return (
    // <FirebaseProvider>
    <div>
      <Topbar />
      <Navbar />
      <div>
        <Meet />
      </div>
      <div className="h-screen">
        <About />
      </div>
      <div className="h-screen">
        <Roadmap />
      </div>
      <div className="h-screen">
        <Features />
      </div>
      <div className="h-screen">
        <Partners />
      </div>
      <div className="h-screen">
        <Products />
      </div>
      <div className="h-screen">
        <Contact />
      </div>
    </div>
    // </FirebaseProvider>
  );
}
